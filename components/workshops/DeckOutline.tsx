import type { Deck, Slide } from "@/lib/content/workshops/decks/types";
import { KIND_META } from "@/lib/content/workshops/decks/layout";

function SlideBody({ slide }: { slide: Slide }) {
  if (slide.sources) {
    return (
      <ul className="mt-2 space-y-2 text-sm text-slate-700">
        {slide.sources.map((r) => (
          <li key={r.title}>
            <span className="font-semibold text-slate-900">{r.title}</span>
            {r.by ? <span className="text-slate-500"> — {r.by}</span> : null}{" "}
            <span className="text-xs font-semibold uppercase text-slate-500">({r.type})</span>
            <br />
            <span className="text-slate-600">{r.why}</span>
            {r.url ? (
              <>
                {" "}
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-brand-600 underline">
                  {r.url}
                </a>
              </>
            ) : null}
          </li>
        ))}
      </ul>
    );
  }
  if (slide.table) {
    return (
      <div className="mt-2 overflow-x-auto">
        <table className="min-w-full border border-slate-200 text-left text-sm">
          <thead className="bg-slate-50">
            <tr>
              {slide.table.headers.map((h, i) => (
                <th key={i} className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {slide.table.rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => (
                  <td key={ci} className={`border border-slate-200 px-3 py-2 text-slate-700 ${ci === 0 ? "font-medium" : ""}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (slide.steps) {
    return (
      <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm text-slate-700">
        {slide.steps.map((st) => (
          <li key={st.label}>
            <span className="font-semibold text-slate-900">{st.label.replace(/^\d+\.\s*/, "")}.</span> {st.detail}
          </li>
        ))}
      </ol>
    );
  }
  if (slide.columns) {
    return (
      <div className="mt-2 grid gap-4 sm:grid-cols-2">
        {slide.columns.map((c) => (
          <div key={c.heading}>
            <p className="text-sm font-semibold text-slate-900">{c.heading}</p>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {c.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  if (slide.bullets) {
    return (
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
        {slide.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    );
  }
  return null;
}

/** Plain, semantic text version of the whole deck — quick to skim, search and screen-read. */
export function DeckOutline({ deck }: { deck: Deck }) {
  return (
    <ol className="mt-4 space-y-6">
      {deck.slides.map((slide, i) => (
        <li key={i} className="rounded-xl border border-slate-200 p-4">
          <h3 className="font-semibold text-slate-900">
            <span className="text-brand-600">{i + 1}. </span>
            {slide.title}{" "}
            <span className="ml-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
              {slide.kind === "title" ? "Title" : KIND_META[slide.kind].label}
            </span>
          </h3>
          {slide.subtitle ? <p className="mt-1 text-sm text-slate-600">{slide.subtitle}</p> : null}
          <SlideBody slide={slide} />
          {slide.callout ? <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm font-medium text-brand-700">{slide.callout}</p> : null}
          {slide.notes ? (
            <p className="mt-3 text-sm text-slate-600">
              <span className="font-semibold">Speaker notes: </span>
              {slide.notes}
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
