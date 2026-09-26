/**
 * Generates one PowerPoint deck per workshop from the same slide data the website
 * viewer uses, and lints every deck (structure + text-fit) before writing.
 *
 *   npm run decks            # lint + generate into public/decks
 *   STRICT=1 npm run decks   # also fail if any workshop is missing a deck
 */
import pptxgen from "pptxgenjs";
import { mkdirSync } from "node:fs";
import path from "node:path";
import { allDecks } from "../lib/content/workshops/decks";
import type { Deck, Slide } from "../lib/content/workshops/decks/types";
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
  columnWidth,
  countLines,
  lineHeightIn,
  planSlide,
  titleFontPt,
} from "../lib/content/workshops/decks/layout";
import { allWorkshops } from "../lib/content/workshops";

const FONT = "Calibri";
const INK = "1E293B";
const MUTED = "475569";
const LINE = "E2E8F0";
const BRAND_DARK = "312E81";
const OUT_DIR = path.join(process.cwd(), "public", "decks");
const SITE = "scrummaster-hub.vercel.app";

// ───────────────────────── lint ─────────────────────────
function lintDeck(deck: Deck): string[] {
  const problems: string[] = [];
  const count = (k: string) => deck.slides.filter((s) => s.kind === k).length;
  if (deck.slides.length < 12) problems.push(`only ${deck.slides.length} slides (minimum 12)`);
  if (count("title") !== 1) problems.push("needs exactly one title slide");
  if (count("icebreaker") < 1) problems.push("no ice breaker slide");
  if (count("concept") < 3) problems.push(`only ${count("concept")} concept slides (minimum 3)`);
  if (count("example") < 1) problems.push("no live example slide");
  if (count("usage") < 1) problems.push("no real-life usage slide");
  if (count("activity") < 1) problems.push("no activity slide");
  if (count("sources") < 1) problems.push("no sources slide");
  if (deck.slides[deck.slides.length - 1]?.kind !== "sources") problems.push("sources should be the last slide");
  deck.slides.forEach((slide, i) => {
    if (slide.kind === "title" && slide.title.length > 64) problems.push(`title slide title too long (${slide.title.length})`);
    const plan = planSlide(slide);
    plan.problems.forEach((p) => problems.push(`slide ${i + 1}: ${p}`));
    if (slide.bullets && slide.bullets.length > 7) problems.push(`slide ${i + 1}: more than 7 bullets`);
    if (slide.sources) {
      slide.sources.forEach((src) => {
        if (src.url && !/^https:\/\//.test(src.url)) problems.push(`slide ${i + 1}: non-https url ${src.url}`);
      });
    }
  });
  return problems;
}

// ───────────────────────── render ─────────────────────────
function chrome(pptx: pptxgen, deck: Deck, slide: Slide, index: number, total: number) {
  const meta = KIND_META[slide.kind];
  const sl = pptx.addSlide();
  sl.background = { color: "FFFFFF" };
  sl.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: CANVAS.w, h: 0.12, fill: { color: meta.color }, line: { color: meta.color, width: 0 } });
  sl.addText(meta.label, {
    x: BODY.x, y: 0.3, w: 0.5 + meta.label.length * 0.105, h: 0.3,
    fontFace: FONT, fontSize: 11, bold: true, color: meta.color, fill: { color: meta.tint },
    align: "center", valign: "middle", shape: pptx.ShapeType.roundRect, rectRadius: 0.08, charSpacing: 2, margin: 0,
  });
  sl.addText(slide.title, {
    x: BODY.x, y: 0.68, w: BODY.w, h: 0.85,
    fontFace: FONT, fontSize: titleFontPt(slide.title), bold: true, color: INK, valign: "top", margin: 0,
  });
  sl.addShape(pptx.ShapeType.line, { x: BODY.x, y: 7.0, w: BODY.w, h: 0, line: { color: LINE, width: 0.75 } });
  sl.addText(`ScrumMaster Hub  ·  ${deck.title}`, { x: BODY.x, y: 7.06, w: 9, h: 0.3, fontFace: FONT, fontSize: 10, color: "64748B", margin: 0 });
  sl.addText(`${index + 1} / ${total}`, { x: BODY.x + BODY.w - 1.5, y: 7.06, w: 1.5, h: 0.3, fontFace: FONT, fontSize: 10, color: "64748B", align: "right", margin: 0 });
  if (slide.notes) sl.addNotes(slide.notes);
  return sl;
}

function bulletRuns(bullets: string[], pt: number, color = INK): pptxgen.TextProps[] {
  return bullets.map((b) => ({
    text: b,
    options: { bullet: { indent: 20 }, breakLine: true, paraSpaceAfter: Math.round(0.13 * 72 * 0.72), fontSize: pt, color },
  }));
}

function renderTitle(pptx: pptxgen, deck: Deck, slide: Slide, notes?: string) {
  const sl = pptx.addSlide();
  sl.background = { color: BRAND_DARK };
  sl.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 0.28, h: CANVAS.h, fill: { color: "818CF8" }, line: { color: "818CF8", width: 0 } });
  sl.addText("WORKSHOP PRESENTATION", { x: 0.9, y: 1.4, w: 8, h: 0.4, fontFace: FONT, fontSize: 14, bold: true, color: "A5B4FC", charSpacing: 4, margin: 0 });
  sl.addText(slide.title, { x: 0.9, y: 1.95, w: 11.4, h: 2.3, fontFace: FONT, fontSize: 44, bold: true, color: "FFFFFF", valign: "top", margin: 0 });
  sl.addText(slide.subtitle ?? "", { x: 0.9, y: 4.5, w: 11.4, h: 1.0, fontFace: FONT, fontSize: 22, color: "C7D2FE", valign: "top", margin: 0 });
  sl.addText(`ScrumMaster Hub  ·  ${SITE}/workshops`, { x: 0.9, y: 6.6, w: 10, h: 0.35, fontFace: FONT, fontSize: 12, color: "A5B4FC", margin: 0 });
  if (notes) sl.addNotes(notes);
  void deck;
}

function renderBody(pptx: pptxgen, sl: pptxgen.Slide, slide: Slide) {
  const meta = KIND_META[slide.kind];
  const plan = planSlide(slide);
  const pt = plan.pt;

  if (slide.sources) {
    const runs: pptxgen.TextProps[] = [];
    slide.sources.forEach((r) => {
      runs.push({ text: r.title, options: { bold: true, fontSize: pt, color: INK } });
      if (r.by) runs.push({ text: `  —  ${r.by}`, options: { fontSize: pt - 1, color: MUTED } });
      runs.push({ text: `   ${r.type.toUpperCase()}`, options: { fontSize: pt - 3, bold: true, color: meta.color, breakLine: true } });
      runs.push({ text: r.why, options: { fontSize: pt - 2, color: MUTED, paraSpaceAfter: 8, breakLine: !r.url } });
      if (r.url) runs.push({ text: `  ${r.url}`, options: { fontSize: pt - 3, color: "4F46E5", hyperlink: { url: r.url }, breakLine: true } });
    });
    sl.addText(runs, { x: BODY.x, y: BODY.y, w: BODY.w, h: plan.bodyH, fontFace: FONT, valign: "top", margin: 0 });
  } else if (slide.table) {
    const t = slide.table;
    const total = (t.colWidths ?? t.headers.map(() => 1)).reduce((a, b) => a + b, 0);
    const colW = (t.colWidths ?? t.headers.map(() => 1)).map((w) => (w / total) * BODY.w);
    const header = t.headers.map((h) => ({
      text: h,
      options: { bold: true, color: "FFFFFF", fill: { color: meta.color }, fontSize: pt, fontFace: FONT, valign: "middle" as const },
    }));
    const rows = t.rows.map((row, ri) =>
      row.map((cell, ci) => ({
        text: cell,
        options: {
          bold: ci === 0, color: INK, fontSize: pt, fontFace: FONT, valign: "middle" as const,
          fill: { color: ri % 2 === 0 ? "FFFFFF" : "F8FAFC" },
        },
      })),
    );
    sl.addTable([header, ...rows], {
      x: BODY.x, y: BODY.y, w: BODY.w, colW,
      border: { type: "solid", pt: 0.75, color: LINE },
      margin: 0.09,
    });
  } else if (slide.steps) {
    const textW = BODY.w - STEP_NUM_W_IN;
    let y = BODY.y;
    slide.steps.forEach((st, i) => {
      const label = st.label.replace(/^\d+\.\s*/, "");
      const h = (countLines(label, textW, pt) + countLines(st.detail, textW, pt - 1)) * lineHeightIn(pt);
      sl.addText(String(i + 1), {
        x: BODY.x, y: y + 0.02, w: 0.46, h: 0.46, shape: pptx.ShapeType.ellipse,
        fill: { color: meta.color }, color: "FFFFFF", bold: true, fontFace: FONT, fontSize: 14, align: "center", valign: "middle", margin: 0,
      });
      sl.addText(
        [
          { text: label, options: { bold: true, fontSize: pt, color: INK, breakLine: true } },
          { text: st.detail, options: { fontSize: pt - 1, color: MUTED } },
        ],
        { x: BODY.x + STEP_NUM_W_IN, y, w: textW, h: h + 0.05, fontFace: FONT, valign: "top", margin: 0 },
      );
      y += h + STEP_GAP_IN;
    });
  } else if (slide.columns) {
    const n = slide.columns.length;
    const cw = columnWidth(n);
    slide.columns.forEach((col, i) => {
      const x = BODY.x + i * (cw + COLUMN_GAP_IN);
      sl.addShape(pptx.ShapeType.roundRect, {
        x, y: BODY.y, w: cw, h: plan.bodyH, fill: { color: "F8FAFC" }, line: { color: LINE, width: 1 }, rectRadius: 0.08,
      });
      const innerW = cw - COLUMN_PAD_X * 2;
      const hh = countLines(col.heading, innerW, pt + 1) * lineHeightIn(pt + 1);
      sl.addText(col.heading, {
        x: x + COLUMN_PAD_X, y: BODY.y + COLUMN_PAD_Y, w: innerW, h: hh + 0.02,
        fontFace: FONT, fontSize: pt + 1, bold: true, color: meta.color, valign: "top", margin: 0,
      });
      const by = BODY.y + COLUMN_PAD_Y + hh + COLUMN_HEADING_GAP;
      sl.addText(bulletRuns(col.bullets, pt), {
        x: x + COLUMN_PAD_X, y: by, w: innerW, h: BODY.y + plan.bodyH - COLUMN_PAD_Y - by,
        fontFace: FONT, valign: "top", margin: 0,
      });
    });
  } else if (slide.bullets) {
    sl.addText(bulletRuns(slide.bullets, pt), {
      x: BODY.x, y: BODY.y, w: BODY.w, h: plan.bodyH, fontFace: FONT, valign: "top", margin: 0,
    });
  }

  if (slide.callout) {
    sl.addText(slide.callout, {
      x: BODY.x, y: BODY.y + BODY.h - CALLOUT.h, w: BODY.w, h: CALLOUT.h,
      shape: pptx.ShapeType.roundRect, rectRadius: 0.08, fill: { color: meta.tint }, line: { color: meta.color, width: 1 },
      fontFace: FONT, fontSize: 16, bold: true, color: meta.color, valign: "middle", margin: [0, 16, 0, 16],
    });
  }
  void BULLET_INDENT;
}

async function writeDeck(deck: Deck): Promise<string> {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_WIDE";
  pptx.title = deck.title;
  pptx.subject = deck.subtitle;
  pptx.author = "ScrumMaster Hub";
  pptx.company = "ScrumMaster Hub";
  const total = deck.slides.length;
  deck.slides.forEach((slide, i) => {
    if (slide.kind === "title") {
      renderTitle(pptx, deck, slide, slide.notes);
    } else {
      const sl = chrome(pptx, deck, slide, i, total);
      renderBody(pptx, sl, slide);
    }
  });
  const file = path.join(OUT_DIR, `${deck.workshopSlug}.pptx`);
  await pptx.writeFile({ fileName: file });
  return file;
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  let failed = 0;
  const workshopSlugs = new Set(allWorkshops.map((w) => w.slug));
  const deckSlugs = new Set(allDecks.map((d) => d.workshopSlug));

  for (const slug of deckSlugs) if (!workshopSlugs.has(slug)) { console.error(`✗ deck "${slug}" has no matching workshop`); failed++; }
  const missing = [...workshopSlugs].filter((s) => !deckSlugs.has(s));
  if (missing.length) {
    const msg = `workshops without a deck (${missing.length}): ${missing.join(", ")}`;
    if (process.env.STRICT) { console.error(`✗ ${msg}`); failed++; } else console.warn(`! ${msg}`);
  }

  for (const deck of allDecks) {
    const problems = lintDeck(deck);
    if (problems.length) {
      failed++;
      console.error(`✗ ${deck.workshopSlug}`);
      problems.forEach((p) => console.error(`    - ${p}`));
      continue;
    }
    const file = await writeDeck(deck);
    const notes = deck.slides.filter((s) => s.notes).length;
    console.log(`✓ ${deck.workshopSlug.padEnd(42)} ${String(deck.slides.length).padStart(2)} slides, ${notes} with notes → ${path.relative(process.cwd(), file)}`);
  }
  if (failed) {
    console.error(`\n${failed} problem(s) — fix the above and re-run.`);
    process.exit(1);
  }
  console.log(`\nDone: ${allDecks.length} decks.`);
}

main();
