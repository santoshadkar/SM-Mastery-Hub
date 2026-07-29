import type { DimensionScore } from "@/lib/assessment/scoring";

function pointFor(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.sin(rad), y: cy - r * Math.cos(rad) };
}

export function RadarChart({ scores }: { scores: DimensionScore[] }) {
  const size = 400;
  const cx = size / 2;
  const cy = size / 2 - 6;
  const maxR = 130;
  const n = scores.length;
  const step = 360 / n;

  const rings = [20, 40, 60, 80, 100];

  const dataPoints = scores.map((s, i) => pointFor(cx, cy, (s.percentage / 100) * maxR, i * step));
  const dataPath = dataPoints.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="mx-auto w-full max-w-md"
      role="img"
      aria-label={`Radar chart of scores by dimension: ${scores
        .map((s) => `${s.name} ${s.percentage} percent`)
        .join(", ")}`}
    >
      {rings.map((ring) => {
        const ringPoints = Array.from({ length: n }, (_, i) =>
          pointFor(cx, cy, (ring / 100) * maxR, i * step),
        )
          .map((p) => `${p.x},${p.y}`)
          .join(" ");
        return (
          <polygon
            key={ring}
            points={ringPoints}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="1"
          />
        );
      })}

      {scores.map((_, i) => {
        const edge = pointFor(cx, cy, maxR, i * step);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={edge.x}
            y2={edge.y}
            stroke="#e2e8f0"
            strokeWidth="1"
          />
        );
      })}

      <polygon points={dataPath} fill="#6366f1" fillOpacity="0.25" stroke="#4f46e5" strokeWidth="2" />
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4" fill="#4338ca" />
      ))}

      {scores.map((s, i) => {
        const labelPoint = pointFor(cx, cy, maxR + 34, i * step);
        const anchor =
          Math.abs(labelPoint.x - cx) < 12 ? "middle" : labelPoint.x > cx ? "start" : "end";
        const words = s.name.split(" ");
        return (
          <text
            key={s.dimensionId}
            x={labelPoint.x}
            y={labelPoint.y}
            textAnchor={anchor}
            fontSize="12"
            fontWeight="600"
            fill="#334155"
          >
            {words.map((w, wi) => (
              <tspan key={wi} x={labelPoint.x} dy={wi === 0 ? 0 : 13}>
                {w}
              </tspan>
            ))}
          </text>
        );
      })}
    </svg>
  );
}
