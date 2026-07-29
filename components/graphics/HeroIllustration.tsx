export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 480 380"
      className="w-full max-w-md"
      role="img"
      aria-label="Illustration of a Kanban-style board with cards moving through To Do, Doing, and Done columns, orbited by a sprint cycle arrow"
    >
      <rect x="16" y="16" width="448" height="348" rx="20" fill="#eef2ff" />

      {[
        { x: 44, label: "To do", cards: 3 },
        { x: 190, label: "Doing", cards: 2 },
        { x: 336, label: "Done", cards: 4 },
      ].map((col) => (
        <g key={col.label}>
          <rect x={col.x} y={48} width={104} height={276} rx="12" fill="#ffffff" stroke="#c7d2fe" strokeWidth="1.5" />
          <text x={col.x + 52} y={72} textAnchor="middle" fontSize="13" fontWeight="700" fill="#4338ca">
            {col.label}
          </text>
          {Array.from({ length: col.cards }).map((_, i) => (
            <rect
              key={i}
              x={col.x + 12}
              y={92 + i * 46}
              width={80}
              height={32}
              rx="7"
              fill={i % 2 === 0 ? "#e0e7ff" : "#c7d2fe"}
            />
          ))}
        </g>
      ))}

      <g transform="translate(240,20)">
        <circle r="9" fill="#4f46e5" />
        <path d="M0 -9 A9 9 0 1 1 -9 0" stroke="#4f46e5" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <circle cx="440" cy="60" r="10" fill="#a5b4fc" />
      <circle cx="30" cy="340" r="14" fill="#6366f1" opacity="0.35" />
    </svg>
  );
}
