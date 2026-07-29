"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useChat } from "./ChatContext";

const SUGGESTIONS = [
  "What's a good retro format for a team that's felt stale lately?",
  "How do I explain velocity to a stakeholder who wants a fixed date?",
  "What's the difference between SAFe and LeSS?",
];

export function ChatWindow({ variant = "panel" }: { variant?: "panel" | "page" }) {
  const { messages, isStreaming, error, sendMessage, clearChat } = useChat();
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    void sendMessage(input);
    setInput("");
  };

  const heightClass = variant === "page" ? "h-[70vh]" : "h-[60vh]";

  return (
    <div className="flex flex-col">
      <div ref={scrollRef} className={`flex-1 overflow-y-auto px-4 py-4 ${heightClass}`}>
        {messages.length === 0 ? (
          <div className="space-y-3">
            <p className="text-sm text-slate-600">
              Ask about Scrum, Kanban, SAFe, facilitation, Jira/Confluence/Azure DevOps, or
              coaching conversations. Try one of these:
            </p>
            <div className="flex flex-col gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => void sendMessage(s)}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-left text-sm text-slate-700 hover:border-brand-300 hover:bg-brand-50"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <ul className="space-y-4">
            {messages.map((m, i) => (
              <li key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-6 ${
                    m.role === "user"
                      ? "bg-brand-600 text-white"
                      : "border border-slate-200 bg-white text-slate-800"
                  }`}
                >
                  {m.role === "assistant" ? (
                    m.content ? (
                      <div className="prose-content [&>*:first-child]:mt-0 [&>p]:mb-2 [&>p]:leading-6 [&>p]:text-slate-800">
                        <ReactMarkdown>{m.content}</ReactMarkdown>
                      </div>
                    ) : (
                      <span className="inline-flex gap-1" aria-label="Assistant is typing">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
                      </span>
                    )
                  ) : (
                    m.content
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}

        {error ? (
          <div role="alert" className="mt-4 rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800">
            {error}
          </div>
        ) : null}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-slate-200 p-3">
        <label htmlFor="chat-input" className="sr-only">
          Message the Scrum Master Assistant
        </label>
        <input
          id="chat-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Scrum, facilitation, Jira, SAFe..."
          className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
        />
        <button
          type="submit"
          disabled={isStreaming || !input.trim()}
          className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Send
        </button>
        {messages.length > 0 ? (
          <button
            type="button"
            onClick={clearChat}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-600 hover:bg-slate-100"
          >
            Clear
          </button>
        ) : null}
      </form>
    </div>
  );
}
