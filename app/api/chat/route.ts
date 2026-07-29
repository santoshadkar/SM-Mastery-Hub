import { GoogleGenAI, ApiError, type Content } from "@google/genai";
import { SYSTEM_PROMPT } from "@/lib/chat/systemPrompt";
import type { ChatMessage } from "@/lib/chat/types";

export const runtime = "nodejs";

interface ChatRequestBody {
  messages: ChatMessage[];
}

// Self-updating alias — always resolves to Google's current Flash-tier model.
const MODEL = "gemini-flash-latest";

function jsonError(message: string, status: number) {
  return Response.json({ error: message }, { status });
}

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    const message =
      process.env.NODE_ENV === "production"
        ? "The server is missing a GEMINI_API_KEY. Add it as an environment variable in your hosting platform's project settings and redeploy."
        : "The server is missing a GEMINI_API_KEY. Add your key to .env.local (see .env.example) and restart the dev server.";
    return jsonError(message, 500);
  }

  let body: ChatRequestBody;
  try {
    body = await request.json();
  } catch {
    return jsonError("Invalid JSON in request body.", 400);
  }

  const { messages } = body;

  if (!Array.isArray(messages) || messages.length === 0) {
    return jsonError("Request must include a non-empty `messages` array.", 400);
  }

  for (const m of messages) {
    if (
      !m ||
      (m.role !== "user" && m.role !== "assistant") ||
      typeof m.content !== "string"
    ) {
      return jsonError(
        "Each message must have role 'user' or 'assistant' and a string `content`.",
        400,
      );
    }
  }

  // Gemini uses role "model" for assistant turns instead of "assistant".
  const contents: Content[] = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  const ai = new GoogleGenAI({ apiKey });

  let stream: AsyncGenerator<{ text?: string }>;
  try {
    stream = await ai.models.generateContentStream({
      model: MODEL,
      contents,
      config: { systemInstruction: SYSTEM_PROMPT },
    });
  } catch (err) {
    const message =
      err instanceof ApiError
        ? `Gemini API error: ${err.message}`
        : "Failed to start a request to Gemini. Please try again.";
    return jsonError(message, err instanceof ApiError ? err.status : 502);
  }

  const encoder = new TextEncoder();
  let cancelled = false;

  const readable = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          if (cancelled) break;
          if (chunk.text) {
            controller.enqueue(encoder.encode(chunk.text));
          }
        }
      } catch (err) {
        const message =
          err instanceof ApiError
            ? `Gemini API error: ${err.message}`
            : "Something went wrong while streaming the response.";
        controller.enqueue(encoder.encode(`\n\n[error] ${message}`));
      } finally {
        controller.close();
      }
    },
    cancel() {
      cancelled = true;
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
