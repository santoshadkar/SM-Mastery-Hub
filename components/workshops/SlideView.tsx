import type { CSSProperties } from "react";
import type { Deck, Slide } from "@/lib/content/workshops/decks/types";
import {
  BODY,
  CALLOUT,
  CANVAS,
  COLUMN_GAP_IN,
  COLUMN_HEADING_GAP,
  COLUMN_PAD_X,
  COLUMN_PAD_Y,
  BULLET_INDENT,
  KIND_META,
  STEP_GAP_IN,
  STEP_NUM_W_IN,
  planSlide,
  titleFontPt,
} from "@/lib/content/workshops/decks/layout";

/** One slide, drawn on a fixed 1280 x 720 canvas (13.333in x 7.5in at 96px/in). The viewer scales it. */
export const SLIDE_W = Math.round(CANVAS.w * 96);
export const SLIDE_H = Math.round(CANVAS.h * 96);

const px = (inches: number) => inches * 96;
const fontPx = (pt: number) => (pt * 4) / 3;

const INK = "#1E293B";
const MUTED = "#475569";
const LINE = "#E2E8F0";
const FONT = 'Calibri, Carlito, "Segoe UI", system-ui, -apple-system, Arial, sans-serif';

function Bullets({ items, pt, color = INK }: { items: string[]; pt: number; color?: string }) {
  return (
    <ul style={{ margin: 0, paddingLeft: px(BULLET_INDENT), listStyle: "disc", fontSize: fontPx(pt), lineHeight: 1.22, color }}>
      {items.map((b) => (
        <li key={b} style={{ marginBottom: px(0.13) }}>
          {b}
        </li>
      ))}
    </ul>
  );
}

function Body({ slide, pt, color }: { slide: Slide; pt: number; color: string }) {
  if (slide.sources) {
    return (
      <div style={{ fontSize: fontPx(pt), lineHeight: 1.22 }}>
        {slide.sources.map((r) => (
          <div key={r.title} style={{ marginBottom: px(0.16) }}>
            <div>
              <strong style={{ color: INK }}>{r.title}</strong>
              {r.by ? <span style={{ color: MUTED, fontSize: fontPx(pt - 1) }}>{`  —  ${r.by}`}</span> : null}
              <span style={{ color, fontWeight: 700, fontSize: fontPx(pt - 3), marginLeft: 12 }}>{r.type.toUpperCase()}</span>
            </div>
            <div style={{ color: MUTED, fontSize: fontPx(pt - 2) }}>
              {r.why}
              {r.url ? (
                <>
                  {" "}
                  <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: "#4F46E5", textDecoration: "underline" }}>
                    {r.url}
                  </a>
                </>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (slide.table) {
    const t = slide.table;
    const widths = t.colWidths ?? t.headers.map(() => 1);
    const total = widths.reduce((a, b) => a + b, 0);
    return (
      <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed", fontSize: fontPx(pt), lineHeight: 1.22 }}>
        <colgroup>
          {widths.map((w, i) => (
            <col key={i} style={{ width: `${(w / total) * 100}%` }} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {t.headers.map((h, i) => (
              <th key={i} style={{ background: color, color: "#fff", textAlign: "left", padding: px(0.09), border: `1px solid ${LINE}`, verticalAlign: "middle" }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {t.rows.map((row, ri) => (
            <tr key={ri} style={{ background: ri % 2 === 0 ? "#fff" : "#F8FAFC" }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{ padding: px(0.09), border: `1px solid ${LINE}`, verticalAlign: "middle", fontWeight: ci === 0 ? 700 : 400, color: INK }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  if (slide.steps) {
    return (
      <div>
        {slide.steps.map((st, i) => (
          <div key={st.label} style={{ display: "flex", marginBottom: px(STEP_GAP_IN) }}>
            <div style={{ width: px(STEP_NUM_W_IN), flexShrink: 0 }}>
              <div
                style={{
                  width: px(0.46), height: px(0.46), borderRadius: "50%", background: color, color: "#fff",
                  fontWeight: 700, fontSize: fontPx(14), display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2,
                }}
              >
                {i + 1}
              </div>
            </div>
            <div style={{ lineHeight: 1.22 }}>
              <div style={{ fontWeight: 700, fontSize: fontPx(pt), color: INK }}>{st.label.replace(/^\d+\.\s*/, "")}</div>
              <div style={{ fontSize: fontPx(pt - 1), color: MUTED }}>{st.detail}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (slide.columns) {
    const n = slide.columns.length;
    return (
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`, gap: px(COLUMN_GAP_IN), height: "100%" }}>
        {slide.columns.map((col) => (
          <div
            key={col.heading}
            style={{ background: "#F8FAFC", border: `1px solid ${LINE}`, borderRadius: 8, padding: `${px(COLUMN_PAD_Y)}px ${px(COLUMN_PAD_X)}px`, overflow: "hidden" }}
          >
            <div style={{ fontWeight: 700, color, fontSize: fontPx(pt + 1), lineHeight: 1.22, marginBottom: px(COLUMN_HEADING_GAP) }}>{col.heading}</div>
            <ul style={{ margin: 0, paddingLeft: px(BULLET_INDENT), listStyle: "disc", fontSize: fontPx(pt), lineHeight: 1.22, color: INK }}>
              {col.bullets.map((b) => (
                <li key={b} style={{ marginBottom: px(0.09) }}>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  if (slide.bullets) return <Bullets items={slide.bullets} pt={pt} />;
  return null;
}

export function SlideView({ deck, slide, index, total }: { deck: Deck; slide: Slide; index: number; total: number }) {
  const canvas: CSSProperties = {
    position: "relative", width: SLIDE_W, height: SLIDE_H, overflow: "hidden", fontFamily: FONT, background: "#fff", color: INK,
  };

  if (slide.kind === "title") {
    return (
      <div style={{ ...canvas, background: "#312E81" }}>
        <div style={{ position: "absolute", left: 0, top: 0, width: px(0.28), height: SLIDE_H, background: "#818CF8" }} />
        <div style={{ position: "absolute", left: px(0.9), top: px(1.4), fontSize: fontPx(14), fontWeight: 700, letterSpacing: "0.3em", color: "#A5B4FC" }}>
          WORKSHOP PRESENTATION
        </div>
        <div style={{ position: "absolute", left: px(0.9), top: px(1.95), width: px(11.4), fontSize: fontPx(44), fontWeight: 700, lineHeight: 1.15, color: "#fff" }}>
          {slide.title}
        </div>
        <div style={{ position: "absolute", left: px(0.9), top: px(4.5), width: px(11.4), fontSize: fontPx(22), color: "#C7D2FE", lineHeight: 1.3 }}>
          {slide.subtitle}
        </div>
        <div style={{ position: "absolute", left: px(0.9), top: px(6.6), fontSize: fontPx(12), color: "#A5B4FC" }}>
          ScrumMaster Hub · scrummaster-hub.vercel.app/workshops
        </div>
      </div>
    );
  }

  const meta = KIND_META[slide.kind];
  const color = `#${meta.color}`;
  const plan = planSlide(slide);

  return (
    <div style={canvas}>
      <div style={{ position: "absolute", left: 0, top: 0, width: SLIDE_W, height: px(0.12), background: color }} />
      <div
        style={{
          position: "absolute", left: px(BODY.x), top: px(0.3), height: px(0.3), padding: `0 ${px(0.25)}px`, display: "flex", alignItems: "center",
          background: `#${meta.tint}`, color, borderRadius: 8, fontSize: fontPx(11), fontWeight: 700, letterSpacing: "0.18em",
        }}
      >
        {meta.label}
      </div>
      <h2
        style={{
          position: "absolute", left: px(BODY.x), top: px(0.68), width: px(BODY.w), height: px(0.85), margin: 0,
          fontSize: fontPx(titleFontPt(slide.title)), fontWeight: 700, lineHeight: 1.2, color: INK,
        }}
      >
        {slide.title}
      </h2>
      <div style={{ position: "absolute", left: px(BODY.x), top: px(BODY.y), width: px(BODY.w), height: px(plan.bodyH) }}>
        <Body slide={slide} pt={plan.pt} color={color} />
      </div>
      {slide.callout ? (
        <div
          style={{
            position: "absolute", left: px(BODY.x), top: px(BODY.y + BODY.h - CALLOUT.h), width: px(BODY.w), height: px(CALLOUT.h),
            background: `#${meta.tint}`, border: `1px solid ${color}`, borderRadius: 8, display: "flex", alignItems: "center",
            padding: `0 16px`, fontSize: fontPx(16), fontWeight: 700, color, lineHeight: 1.25,
          }}
        >
          {slide.callout}
        </div>
      ) : null}
      <div style={{ position: "absolute", left: px(BODY.x), top: px(7.0), width: px(BODY.w), borderTop: `1px solid ${LINE}` }} />
      <div style={{ position: "absolute", left: px(BODY.x), top: px(7.06), fontSize: fontPx(10), color: "#64748B" }}>
        ScrumMaster Hub · {deck.title}
      </div>
      <div style={{ position: "absolute", right: px(CANVAS.w - BODY.x - BODY.w), top: px(7.06), fontSize: fontPx(10), color: "#64748B" }}>
        {index + 1} / {total}
      </div>
    </div>
  );
}
