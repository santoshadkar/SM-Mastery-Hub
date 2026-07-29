export interface ScriptLine {
  speaker: string;
  text: string;
  tone?: "bad" | "good" | "neutral";
}

const toneClasses: Record<NonNullable<ScriptLine["tone"]>, string> = {
  bad: "border-l-rose-400 bg-rose-50/60",
  good: "border-l-emerald-400 bg-emerald-50/60",
  neutral: "border-l-slate-300 bg-slate-50",
};

export function ScriptBlock({ label, lines }: { label?: string; lines: ScriptLine[] }) {
  return (
    <div className="not-prose my-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="border-b border-slate-200 bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200">
        {label ?? "Sample script"}
      </div>
      <div className="space-y-3 p-4">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`rounded-md border-l-4 px-3 py-2 ${toneClasses[line.tone ?? "neutral"]}`}
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {line.speaker}
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-800">&ldquo;{line.text}&rdquo;</p>
          </div>
        ))}
      </div>
    </div>
  );
}
