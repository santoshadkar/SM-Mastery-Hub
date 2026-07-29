"use client";

import { useChat } from "./ChatContext";
import { ChatWindow } from "./ChatWindow";

export function ChatLauncher() {
  const { isOpen, setOpen } = useChat();

  return (
    <div className="no-print">
      {isOpen ? (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Scrum Master Assistant chat"
          className="fixed bottom-24 right-4 z-50 flex w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:right-6"
        >
          <div className="flex items-center justify-between border-b border-slate-200 bg-brand-600 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-white">Scrum Master Assistant</p>
              <p className="text-xs text-brand-100">Agile &amp; Scrum questions, answered</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-md p-1 text-brand-100 hover:bg-brand-700 hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ChatWindow variant="panel" />
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close Scrum Master Assistant chat" : "Open Scrum Master Assistant chat"}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 sm:right-6"
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8-1.06 0-2.077-.163-3.02-.463L3 21l1.395-3.72C3.512 16.11 3 14.61 3 13c0-4.418 4.03-8 9-8s9 3.582 9 7Z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
