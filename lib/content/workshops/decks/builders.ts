import type { DeckSource, Slide, SlideKind } from "./types";

type Body = Partial<Omit<Slide, "kind" | "title">>;

/** Generic slide builder: s("concept", "Title", { bullets: [...] }, "speaker notes") */
export function s(kind: SlideKind, title: string, body: Body = {}, notes?: string): Slide {
  return { kind, title, ...body, ...(notes ? { notes } : {}) };
}

export function titleSlide(title: string, subtitle: string): Slide {
  return { kind: "title", title, subtitle };
}

export function objectives(bullets: string[], notes?: string): Slide {
  return s("objectives", "By the end of this session you will be able to…", { bullets }, notes);
}

interface IceBreakerOption {
  name: string;
  time: string;
  steps: string[];
}

export function icebreaker(a: IceBreakerOption, b: IceBreakerOption, debrief: string, notes?: string): Slide {
  return s(
    "icebreaker",
    "Ice breaker — pick one",
    {
      columns: [
        { heading: `Option A · ${a.time} · ${a.name}`, bullets: a.steps },
        { heading: `Option B · ${b.time} · ${b.name}`, bullets: b.steps },
      ],
      callout: `Debrief: ${debrief}`,
    },
    notes,
  );
}

export function takeaways(bullets: string[], callout?: string, notes?: string): Slide {
  return s("takeaways", "Key takeaways", { bullets, ...(callout ? { callout } : {}) }, notes);
}

export function sourcesSlide(sources: DeckSource[]): Slide {
  return s("sources", "Go deeper: sources worth your time", { sources });
}

export function src(
  type: DeckSource["type"],
  title: string,
  by: string | undefined,
  why: string,
  url?: string,
): DeckSource {
  return { type, title, ...(by ? { by } : {}), why, ...(url ? { url } : {}) };
}
