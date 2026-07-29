const events = [
  { label: "Sprint Planning", angle: -90 },
  { label: "Daily Scrum", angle: -18 },
  { label: "Sprint Review", angle: 54 },
  { label: "Retrospective", angle: 126 },
  { label: "Development work", angle: 198 },
];

function pointOnCircle(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export function SprintCycleDiagram() {
  const cx = 200;
  const cy = 170;
  const r = 108;

  return (
    <svg viewBox="0 0 400 340" className="mx-auto w-full max-w-sm" role="img" aria-label="Diagram of the Sprint as a repeating cycle through Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective, and development work">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#c7d2fe" strokeWidth="2" strokeDasharray="6 8" />
      <circle cx={cx} cy={cy} r={44} fill="#eef2ff" />
      <text x={cx} y={cy - 4} textAnchor="middle" fontSize="15" fontWeight="700" fill="#4338ca">
        The Sprint
      </text>
      <text x={cx} y={cy + 16} textAnchor="middle" fontSize="11" fill="#4f46e5">
        1–4 weeks
      </text>

      {events.map((e) => {
        const dot = pointOnCircle(cx, cy, r, e.angle);
        const label = pointOnCircle(cx, cy, r + 46, e.angle);
        return (
          <g key={e.label}>
            <circle cx={dot.x} cy={dot.y} r={7} fill="#6366f1" />
            <text
              x={label.x}
              y={label.y}
              textAnchor="middle"
              fontSize="12"
              fontWeight="600"
              fill="#1e293b"
            >
              {e.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
