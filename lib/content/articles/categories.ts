import type { ArticleCategory } from "./types";

export const articleCategories: ArticleCategory[] = [
  {
    slug: "scrum-fundamentals",
    name: "Scrum Fundamentals",
    description: "The mechanics of Scrum, and the judgment calls that don't show up in the framework diagram.",
  },
  {
    slug: "facilitation",
    name: "Facilitation Skills",
    description: "Running events and discussions that surface real signal from the team.",
  },
  {
    slug: "servant-leadership",
    name: "Servant Leadership & Coaching",
    description: "Coaching the team toward self-management instead of directing the work.",
  },
  {
    slug: "stakeholder-management",
    name: "Stakeholder Management",
    description: "Managing expectations and communication with people outside the team.",
  },
  {
    slug: "metrics",
    name: "Metrics & Data-Driven Improvement",
    description: "Using flow and delivery metrics to guide decisions, not just gut feel.",
  },
  {
    slug: "scaling",
    name: "Scaling & Cross-Team Coordination",
    description: "Working effectively when multiple teams share a product or dependencies.",
  },
  {
    slug: "continuous-improvement",
    name: "Continuous Improvement Mindset",
    description: "Treating your own practice as something to keep deliberately improving.",
  },
];

export function getArticleCategory(slug: string): ArticleCategory | undefined {
  return articleCategories.find((c) => c.slug === slug);
}
