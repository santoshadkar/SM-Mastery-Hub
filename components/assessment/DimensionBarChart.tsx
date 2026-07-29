import type { DimensionScore } from "@/lib/assessment/scoring";

function barColor(percentage: number): string {
  if (percentage < 41) return "bg-rose-500";
  if (percentage < 61) return "bg-amber-500";
  return "bg-emerald-500";
}

export function DimensionBarChart({ scores }: { scores: DimensionScore[] }) {
  return (
    <ul className="space-y-4" aria-label="Score by dimension">
      {scores.map((s) => (
        <li key={s.dimensionId}>
          <div className="mb-1 flex items-baseline justify-between text-sm">
            <span className="font-medium text-slate-800">{s.name}</span>
            <span className="text-slate-500">{s.percentage}%</span>
          </div>
          <div
            className="h-3 w-full overflow-hidden rounded-full bg-slate-100"
            role="img"
            aria-label={`${s.name}: ${s.percentage} percent`}
          >
            <div
              className={`h-full rounded-full ${barColor(s.percentage)}`}
              style={{ width: `${s.percentage}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
