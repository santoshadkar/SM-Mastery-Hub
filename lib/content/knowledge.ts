export interface KnowledgeEntry {
  slug: string;
  title: string;
  description: string;
}

export const knowledgeEntries: KnowledgeEntry[] = [
  {
    slug: "agile-manifesto",
    title: "Agile Values & Principles",
    description:
      "The four values and twelve principles behind the Agile Manifesto, and what they actually mean in day-to-day team practice.",
  },
  {
    slug: "scrum-framework",
    title: "The Scrum Framework",
    description:
      "Roles, events, artifacts, and the empirical process control theory (transparency, inspection, adaptation) that Scrum is built on.",
  },
  {
    slug: "kanban-scrumban",
    title: "Kanban & Scrumban",
    description:
      "Flow-based delivery with Kanban, its core practices, and how Scrumban blends Scrum's cadence with Kanban's flow controls.",
  },
  {
    slug: "scaled-frameworks",
    title: "Scaled Agile Frameworks",
    description:
      "SAFe, LeSS, Nexus, Scrum@Scale, and the Spotify model compared — what each solves for and when to reach for it.",
  },
  {
    slug: "anti-patterns",
    title: "Anti-Patterns & Fixes",
    description:
      "The most common ways Scrum and Agile go wrong in real teams, and concrete steps a Scrum Master can take to address each one.",
  },
  {
    slug: "waterfall-to-scrum-transition",
    title: "Transitioning from Waterfall to Scrum",
    description:
      "A phase-by-phase guide for a team — and the Scrum Master leading it — moving from Waterfall to Scrum, including the challenges specific to that move.",
  },
  {
    slug: "scrum-to-kanban-transition",
    title: "Transitioning from Scrum to Kanban/Scrumban",
    description:
      "A phase-by-phase guide for a team moving from Sprint-based Scrum to flow-based Kanban or a Scrumban hybrid.",
  },
  {
    slug: "real-world-scenarios",
    title: "Real-World Scenarios",
    description:
      "15 real organizational situations — a reorg, a resignation, a mandated framework switch — and a concrete approach to each.",
  },
  {
    slug: "interview-preparation",
    title: "Interview Preparation",
    description:
      "100+ mock interview questions with real answers, organized by topic, so you can drill your weakest areas before the real thing.",
  },
];

export function getKnowledgeEntry(slug: string): KnowledgeEntry | undefined {
  return knowledgeEntries.find((e) => e.slug === slug);
}
