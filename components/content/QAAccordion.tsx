import type { InterviewQuestion } from "@/lib/content/interview";

export function QAAccordion({ questions }: { questions: InterviewQuestion[] }) {
  return (
    <div className="space-y-3">
      {questions.map((q, i) => (
        <details
          key={q.id}
          className="group rounded-xl border border-slate-200 bg-white open:border-brand-300 open:shadow-sm"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 font-medium text-slate-900 marker:content-none">
            <span>
              <span className="mr-2 text-brand-600">Q{i + 1}.</span>
              {q.question}
            </span>
            <span className="mt-0.5 shrink-0 text-slate-400 transition-transform group-open:rotate-45">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </summary>
          <div className="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-slate-600">
            {q.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
