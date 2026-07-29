export interface ToolEntry {
  slug: string;
  title: string;
  description: string;
}

export const toolEntries: ToolEntry[] = [
  {
    slug: "jira",
    title: "Jira",
    description:
      "Boards, workflows, and the reports a Scrum Master should actually be watching: burndown, velocity, and cumulative flow.",
  },
  {
    slug: "confluence",
    title: "Confluence",
    description:
      "Documentation patterns that hold up over time: retro notes, team working agreements, and living roadmaps.",
  },
  {
    slug: "azure-devops",
    title: "Azure DevOps",
    description:
      "Boards, sprints, and dashboards in Azure DevOps, with a structure that mirrors the Jira section for easy comparison.",
  },
  {
    slug: "ai-for-scrum-masters",
    title: "AI for Scrum Masters",
    description:
      "Concrete, practical ways to use AI/LLMs in the day-to-day work of facilitation, reporting, and coaching prep.",
  },
];

export function getToolEntry(slug: string): ToolEntry | undefined {
  return toolEntries.find((e) => e.slug === slug);
}
