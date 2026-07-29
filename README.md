# ScrumMaster Hub

A content and tools portal for practicing Scrum Masters and Agile Coaches: a Knowledge Hub,
a Tools Hub (Jira, Confluence, Azure DevOps, AI), a maturity self-assessment, a free resources
library, and an AI chat assistant.

No login, no database — everything runs client-side in the browser for a single session.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS
- [`@google/genai`](https://github.com/googleapis/js-genai) for the AI chat assistant, called
  only from a server-side route handler (`app/api/chat/route.ts`) — the API key never reaches
  the browser
- Streaming chat responses via a `ReadableStream` response
- `react-markdown` for rendering assistant replies

## Project structure

- `app/` — pages (Home, Knowledge Hub, Tools Hub, Assessment, Resources, Chat) and the
  `/api/chat` route
- `components/` — layout (nav/footer), chat widget, assessment UI, and shared UI primitives
- `lib/` — static content data (Knowledge Hub / Tools Hub entries), the assessment question
  bank and scoring logic, and the chat system prompt

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Add your Gemini API key (optional for browsing, required for the chat assistant)

Copy the example env file and fill in a real key:

```bash
cp .env.example .env.local
```

Then edit `.env.local`:

```
GEMINI_API_KEY=your-gemini-key-here
```

Get a **free** key from [Google AI Studio](https://aistudio.google.com/apikey) — no credit card
required for the free tier (subject to Google's rate limits). `.env.local` is gitignored and will
never be committed.

Without a key set, the rest of the site works normally — only the chat assistant is affected,
and it will show a clear in-app error ("The server is missing a GEMINI_API_KEY...") instead of
failing silently.

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build for production

```bash
npm run build
npm run start
```

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import it into [Vercel](https://vercel.com/new).
3. Add `GEMINI_API_KEY` as an environment variable in the Vercel project settings (Project →
   Settings → Environment Variables) before the chat assistant will work in production.
4. Deploy.

## Content notes

The Knowledge Hub and Tools Hub content is written from general, well-established public
knowledge of Agile/Scrum/SAFe practices (the Scrum Guide, the Agile Manifesto, and widely
documented tool usage patterns). It's intended as a solid working reference, not a substitute
for the official Scrum Guide or a certified trainer — see the Resources page for links to the
official sources.
