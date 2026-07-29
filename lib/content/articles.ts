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
      "What to actually prioritize in your first month on a new team, week by week — before you try to fix anything.",
    readTime: "6 min read",
  },
  {
    slug: "retro-that-leads-to-change",
    title: "Running a Retrospective That Actually Leads to Change",
    description:
      "Why most retros generate the same list every time, and the specific facilitation choices that break the cycle.",
    readTime: "5 min read",
  },
  {
    slug: "estimating-without-story-points",
    title: "Estimating Without Story Points: Alternatives and Trade-offs",
    description:
      "Story points aren't mandatory. A practical look at #NoEstimates, flow-based forecasting, and when each approach fits.",
    readTime: "6 min read",
  },
  {
    slug: "managing-up",
    title: "Managing Up: Communicating Sprint Reality to Skeptical Stakeholders",
    description:
      "How to deliver an honest status update to a stakeholder who only wants to hear that everything is on track.",
    readTime: "5 min read",
  },
  {
    slug: "scrum-master-to-agile-coach",
    title: "From Scrum Master to Agile Coach: What Actually Changes",
    description:
      "The real differences in scope, skills, and daily work between the two roles — and how to tell if you're ready.",
    readTime: "6 min read",
  },
];

export function getArticleEntry(slug: string): ArticleEntry | undefined {
  return articleEntries.find((a) => a.slug === slug);
}
