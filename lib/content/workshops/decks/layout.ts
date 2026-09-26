import type { Slide, SlideKind } from "./types";

/**
 * Shared slide geometry and text-fit estimation.
 * Used by BOTH the in-browser viewer and the PowerPoint generator so the two
 * renderings stay visually consistent, and so `npm run decks` can flag any slide
 * whose text would overflow before it ever ships.
 *
 * All measurements are in inches on a 13.333 x 7.5 (16:9) canvas.
 */
export const CANVAS = { w: 13.333, h: 7.5 };
export const BODY = { x: 0.65, y: 1.6, w: 12.03, h: 5.2 };
export const CALLOUT = { h: 0.78, gap: 0.16 };
export const BULLET_INDENT = 0.32;

export interface KindMeta {
  label: string;
  color: string; // hex without '#'
  tint: string;
}

export const KIND_META: Record<SlideKind, KindMeta> = {
  title: { label: "WORKSHOP DECK", color: "4F46E5", tint: "EEF2FF" },
  objectives: { label: "OBJECTIVES", color: "4F46E5", tint: "EEF2FF" },
  icebreaker: { label: "ICE BREAKER", color: "BE123C", tint: "FFF1F2" },
  concept: { label: "CONCEPT", color: "4F46E5", tint: "EEF2FF" },
  example: { label: "LIVE EXAMPLE", color: "047857", tint: "ECFDF5" },
  usage: { label: "REAL-LIFE USE", color: "B45309", tint: "FFFBEB" },
  pitfalls: { label: "WATCH OUT", color: "B91C1C", tint: "FEF2F2" },
  activity: { label: "TRY IT", color: "0369A1", tint: "F0F9FF" },
  takeaways: { label: "TAKEAWAYS", color: "4F46E5", tint: "EEF2FF" },
  sources: { label: "GO DEEPER", color: "475569", tint: "F1F5F9" },
};

// Conservative average glyph width (em) incl. spaces, plus a word-wrap penalty.
const CHAR_EM = 0.54;
const WRAP_PENALTY = 1.07;
const LINE_HEIGHT = 1.22;

const charWidthIn = (pt: number) => (CHAR_EM * pt * WRAP_PENALTY) / 72;
export const lineHeightIn = (pt: number) => (LINE_HEIGHT * pt) / 72;

/** Column cards have inner padding; text is laid out inside these insets. */
export const COLUMN_PAD_X = 0.2;
export const COLUMN_PAD_Y = 0.15;
export const COLUMN_HEADING_GAP = 0.14;

export function countLines(text: string, widthIn: number, pt: number): number {
  const perLine = Math.max(1, Math.floor(widthIn / charWidthIn(pt)));
  return Math.max(1, Math.ceil(text.length / perLine));
}

function paragraphsHeight(paras: string[], widthIn: number, pt: number, gapIn: number): number {
  return paras.reduce((h, p) => h + countLines(p, widthIn, pt) * lineHeightIn(pt) + gapIn, 0);
}

/** Keep ~6% of every box free so real-world text wrapping never touches the edge. */
const FIT_SLACK = 0.94;

/** Largest font size (pt) in [min, max] for which `heightAt(pt)` fits in `availableIn`, or null. */
function fit(heightAt: (pt: number) => number, availableIn: number, max: number, min: number): number | null {
  for (let pt = max; pt >= min; pt--) {
    if (heightAt(pt) <= availableIn * FIT_SLACK) return pt;
  }
  return null;
}

export function titleFontPt(title: string): number {
  return title.length <= 50 ? 30 : 24;
}

export function titleFits(title: string): boolean {
  const pt = titleFontPt(title);
  return countLines(title, BODY.w, pt) <= (pt === 30 ? 1 : 2);
}

export interface BodyPlan {
  ok: boolean;
  pt: number;
  bodyH: number; // height available to the primary body (after callout)
  calloutOk: boolean;
  problems: string[];
}

export function bodyHeightFor(slide: Slide): number {
  return slide.callout ? BODY.h - CALLOUT.h - CALLOUT.gap : BODY.h;
}

const COLUMN_GAP = 0.4;
export const columnWidth = (n: number) => (BODY.w - COLUMN_GAP * (n - 1)) / n;
export const COLUMN_GAP_IN = COLUMN_GAP;

const STEP_NUM_W = 0.75;
export const STEP_NUM_W_IN = STEP_NUM_W;
const STEP_GAP = 0.16;
export const STEP_GAP_IN = STEP_GAP;

/** Decide font size for a slide's primary body and report anything that will not fit. */
export function planSlide(slide: Slide): BodyPlan {
  const problems: string[] = [];
  const bodyH = bodyHeightFor(slide);

  if (slide.kind !== "title" && !titleFits(slide.title)) {
    problems.push(`title too long (${slide.title.length} chars): "${slide.title}"`);
  }

  let pt = 18;
  let ok = true;

  if (slide.kind === "title") {
    return { ok: true, pt: 44, bodyH, calloutOk: true, problems };
  }

  if (slide.sources) {
    const f = fit(
      (p) =>
        slide.sources!.reduce((h, r) => {
          const head = `${r.title}${r.by ? " — " + r.by : ""}  (${r.type})`;
          const lines = countLines(head, BODY.w, p) + countLines(r.why, BODY.w, p - 2) + (r.url ? 1 : 0);
          return h + lines * lineHeightIn(p - 1) + 0.16;
        }, 0),
      bodyH,
      15,
      11,
    );
    ok = f !== null;
    pt = f ?? 11;
  } else if (slide.table) {
    const t = slide.table;
    const total = (t.colWidths ?? t.headers.map(() => 1)).reduce((a, b) => a + b, 0);
    const widths = (t.colWidths ?? t.headers.map(() => 1)).map((w) => (w / total) * BODY.w - 0.24);
    const f = fit(
      (p) =>
        [t.headers, ...t.rows].reduce((h, row) => {
          const lines = Math.max(...row.map((cell, i) => countLines(cell, widths[i], p)));
          return h + lines * lineHeightIn(p) + 0.2;
        }, 0),
      bodyH,
      16,
      11,
    );
    ok = f !== null;
    pt = f ?? 11;
  } else if (slide.steps) {
    const w = BODY.w - STEP_NUM_W;
    const f = fit(
      (p) =>
        slide.steps!.reduce(
          (h, st) => h + (countLines(st.label, w, p) + countLines(st.detail, w, p - 1)) * lineHeightIn(p) + STEP_GAP,
          0,
        ),
      bodyH,
      18,
      12,
    );
    ok = f !== null;
    pt = f ?? 12;
  } else if (slide.columns) {
    const n = slide.columns.length;
    const w = columnWidth(n) - COLUMN_PAD_X * 2;
    const f = fit(
      (p) =>
        Math.max(
          ...slide.columns!.map(
            (c) =>
              countLines(c.heading, w, p + 1) * lineHeightIn(p + 1) +
              COLUMN_HEADING_GAP +
              paragraphsHeight(c.bullets, w - BULLET_INDENT, p, 0.09),
          ),
        ),
      bodyH - COLUMN_PAD_Y * 2,
      18,
      12,
    );
    ok = f !== null;
    pt = f ?? 12;
  } else if (slide.bullets) {
    const f = fit((p) => paragraphsHeight(slide.bullets!, BODY.w - BULLET_INDENT, p, 0.13), bodyH, 22, 13);
    ok = f !== null;
    pt = f ?? 13;
  } else {
    problems.push("slide has no body content");
    ok = false;
  }

  if (!ok) problems.push(`body text does not fit at minimum size (slide "${slide.title}")`);

  let calloutOk = true;
  if (slide.callout) {
    calloutOk = countLines(slide.callout, BODY.w - 0.6, 16) <= 2;
    if (!calloutOk) problems.push(`callout longer than 2 lines: "${slide.callout.slice(0, 50)}…"`);
  }

  return { ok: ok && calloutOk && problems.length === 0, pt, bodyH, calloutOk, problems };
}
