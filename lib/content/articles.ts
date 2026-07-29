export interface ArticleEntry {
  slug: string;
  title: string;
  description: string;
  readTime: string;
}

export const articleEntries: ArticleEntry[] = [
  {
    slug: "first-30-days",
    title: "Your First 30 Days as a New Scrum Master",
    description:
      "The instinct to fix things fast is a trap. What to actually do week by week — with the exact wrong answer new Scrum Masters give, and what to say instead.",
    readTime: "9 min read",
  },
  {
    slug: "retro-that-leads-to-change",
    title: "Running a Retrospective That Actually Leads to Change",
    description:
      "Why your retros generate the same list every time — with the real confrontation script for when an issue shows up for the third time in a row.",
    readTime: "8 min read",
  },
  {
    slug: "managing-up",
    title: "Managing Up: Communicating Sprint Reality to Skeptical Stakeholders",
    description:
      "\"We'll try our best\" is a trap that costs you Friday. The exact words to use instead when a stakeholder wants only good news.",
    readTime: "8 min read",
  },
];

export function getArticleEntry(slug: string): ArticleEntry | undefined {
  return articleEntries.find((a) => a.slug === slug);
}
