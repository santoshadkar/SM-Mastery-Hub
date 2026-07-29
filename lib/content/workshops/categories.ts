import type { WorkshopCategory } from "./types";

export const workshopCategories: WorkshopCategory[] = [
  {
    slug: "agile-scrum-foundations",
    name: "Agile & Scrum Foundations",
    description: "Onboarding workshops for teams and stakeholders new to Agile or Scrum, or due for a refresher.",
  },
  {
    slug: "team-health-culture",
    name: "Team Health & Culture",
    description: "Workshops that build the trust, safety, and shared identity a high-performing team runs on.",
  },
  {
    slug: "backlog-estimation-delivery",
    name: "Backlog, Estimation & Delivery",
    description: "Practical workshops for turning a rough idea into sliced, estimated, ready-to-build work.",
  },
  {
    slug: "assessment-continuous-improvement",
    name: "Assessment & Continuous Improvement",
    description: "Workshops for diagnosing where a team actually stands and improving it with real data.",
  },
];

export function getWorkshopCategory(slug: string): WorkshopCategory | undefined {
  return workshopCategories.find((c) => c.slug === slug);
}
