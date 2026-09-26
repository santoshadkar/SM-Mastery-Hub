export type SlideKind =
  | "title"
  | "objectives"
  | "icebreaker"
  | "concept"
  | "example"
  | "usage"
  | "pitfalls"
  | "activity"
  | "takeaways"
  | "sources";

export interface SlideColumn {
  heading: string;
  bullets: string[];
}

export interface SlideStep {
  label: string;
  detail: string;
}

export interface SlideTable {
  headers: string[];
  rows: string[][];
  /** Relative column widths, e.g. [2, 1, 1]. Defaults to equal widths. */
  colWidths?: number[];
}

export interface DeckSource {
  type: "Book" | "Article" | "Research" | "Website" | "Guide" | "Tool";
  title: string;
  by?: string;
  why: string;
  url?: string;
}

/**
 * One slide. Exactly one "primary body" is used, in this order of precedence:
 * sources > table > steps > columns > bullets. `callout` is an optional
 * highlighted line at the bottom. `notes` are speaker notes (not shown on the slide).
 */
export interface Slide {
  kind: SlideKind;
  title: string;
  subtitle?: string;
  bullets?: string[];
  columns?: SlideColumn[];
  steps?: SlideStep[];
  table?: SlideTable;
  callout?: string;
  sources?: DeckSource[];
  notes?: string;
}

export interface Deck {
  workshopSlug: string;
  title: string;
  subtitle: string;
  slides: Slide[];
}
