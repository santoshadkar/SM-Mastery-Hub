export interface Dimension {
  id: string;
  name: string;
  description: string;
  recommendationLinks: { href: string; label: string }[];
}

export interface Question {
  id: string;
  dimensionId: string;
  text: string;
}

export const dimensions: Dimension[] = [
  {
    id: "scrum-fundamentals",
    name: "Scrum Fundamentals",
    description: "Understanding of Scrum's roles, events, artifacts, and why they exist.",
    recommendationLinks: [
      { href: "/knowledge/scrum-framework", label: "The Scrum Framework" },
      { href: "/knowledge/anti-patterns", label: "Anti-Patterns & Fixes" },
    ],
  },
  {
    id: "facilitation",
    name: "Facilitation Skills",
    description: "Running events and discussions that surface real signal from the team.",
    recommendationLinks: [
      { href: "/resources", label: "Facilitation guides & retro formats" },
      { href: "/tools/confluence", label: "Confluence documentation patterns" },
    ],
  },
  {
    id: "servant-leadership",
    name: "Servant Leadership & Coaching",
    description: "Coaching the team toward self-management instead of directing the work.",
    recommendationLinks: [
      { href: "/knowledge/scrum-framework", label: "The Scrum Framework" },
      { href: "/tools/ai-for-scrum-masters", label: "AI for coaching conversation prep" },
    ],
  },
  {
    id: "stakeholder-management",
    name: "Stakeholder Management",
    description: "Managing expectations and communication with people outside the team.",
    recommendationLinks: [
      { href: "/tools/confluence", label: "Roadmaps in Confluence" },
      { href: "/knowledge/scrum-framework", label: "Sprint Review in The Scrum Framework" },
    ],
  },
  {
    id: "metrics",
    name: "Metrics & Data-Driven Improvement",
    description: "Using flow and delivery metrics to guide decisions, not just gut feel.",
    recommendationLinks: [
      { href: "/tools/jira", label: "Jira reports" },
      { href: "/knowledge/kanban-scrumban", label: "Kanban & Scrumban metrics" },
    ],
  },
  {
    id: "scaling",
    name: "Scaling & Cross-Team Coordination",
    description: "Working effectively when multiple teams share a product or dependencies.",
    recommendationLinks: [
      { href: "/knowledge/scaled-frameworks", label: "Scaled Agile Frameworks" },
    ],
  },
  {
    id: "continuous-improvement",
    name: "Continuous Improvement Mindset",
    description: "Treating your own practice as something to keep deliberately improving.",
    recommendationLinks: [
      { href: "/resources", label: "Free Resources Library" },
      { href: "/tools/ai-for-scrum-masters", label: "AI for Scrum Masters" },
    ],
  },
];

export const questions: Question[] = [
  // Scrum Fundamentals
  { id: "sf-1", dimensionId: "scrum-fundamentals", text: "I can clearly explain the purpose of each Scrum event, not just its mechanics." },
  { id: "sf-2", dimensionId: "scrum-fundamentals", text: "I ensure the Definition of Done is specific, visible, and actually enforced on the board." },
  { id: "sf-3", dimensionId: "scrum-fundamentals", text: "I can distinguish organizational impediments from team-level ones, and handle each differently." },
  { id: "sf-4", dimensionId: "scrum-fundamentals", text: "Our Sprint Goal is a single, coherent objective — not just a list of unrelated backlog items." },
  { id: "sf-5", dimensionId: "scrum-fundamentals", text: "I actively protect the team from scope changes that would endanger the current Sprint Goal." },

  // Facilitation Skills
  { id: "fa-1", dimensionId: "facilitation", text: "I vary retrospective formats based on the team's energy and recent history, rather than repeating the same one every time." },
  { id: "fa-2", dimensionId: "facilitation", text: "I can keep a Daily Scrum focused and on time without it becoming a status report directed at me." },
  { id: "fa-3", dimensionId: "facilitation", text: "I use techniques like round-robin or silent brainstorming to draw out quieter voices in discussions." },
  { id: "fa-4", dimensionId: "facilitation", text: "I have a specific technique ready for when a discussion goes in circles or one person dominates." },
  { id: "fa-5", dimensionId: "facilitation", text: "Our retro action items are tracked and followed up on in the next retro, not forgotten." },

  // Servant Leadership & Coaching
  { id: "sl-1", dimensionId: "servant-leadership", text: "I ask coaching questions rather than giving direct answers when the team faces a decision it can own." },
  { id: "sl-2", dimensionId: "servant-leadership", text: "I have real coaching or 1:1 conversations with team members outside of Scrum events." },
  { id: "sl-3", dimensionId: "servant-leadership", text: "I actively push decisions down to the team rather than making them myself when the team could own them." },
  { id: "sl-4", dimensionId: "servant-leadership", text: "I notice when I've been directing work rather than facilitating it, and correct course." },
  { id: "sl-5", dimensionId: "servant-leadership", text: "Team members come to me with problems because they trust how I'll respond, not because I hold authority over them." },

  // Stakeholder Management
  { id: "st-1", dimensionId: "stakeholder-management", text: "Stakeholders get a realistic view of Sprint progress, including risk, not just a polished summary." },
  { id: "st-2", dimensionId: "stakeholder-management", text: "I manage stakeholder expectations about timelines using data (velocity/throughput) rather than guesses." },
  { id: "st-3", dimensionId: "stakeholder-management", text: "I can translate technical or team concerns into language that lands with non-technical stakeholders." },
  { id: "st-4", dimensionId: "stakeholder-management", text: "Sprint Reviews are genuine working sessions with stakeholders, not one-way demos." },
  { id: "st-5", dimensionId: "stakeholder-management", text: "I proactively communicate bad news early rather than waiting for it to surface on its own." },

  // Metrics & Data-Driven Improvement
  { id: "me-1", dimensionId: "metrics", text: "I track flow metrics (cycle time, cumulative flow, or similar) in addition to or instead of velocity alone." },
  { id: "me-2", dimensionId: "metrics", text: "I use metrics to start conversations and investigate, not to judge individual performance." },
  { id: "me-3", dimensionId: "metrics", text: "I can read a cumulative flow diagram and identify where a bottleneck is forming." },
  { id: "me-4", dimensionId: "metrics", text: "I resist using velocity to compare across teams or as a target to hit." },
  { id: "me-5", dimensionId: "metrics", text: "Retrospective decisions are informed by real data from the Sprint, not just anecdote or the last complaint." },

  // Scaling & Cross-Team Coordination
  { id: "sc-1", dimensionId: "scaling", text: "I understand how our organization structures multi-team coordination and where it tends to break down." },
  { id: "sc-2", dimensionId: "scaling", text: "I can identify and help resolve dependencies between our team and others before they become blockers." },
  { id: "sc-3", dimensionId: "scaling", text: "I've contributed to or participated in a cross-team synchronization event (Scrum of Scrums, PI Planning, or similar)." },
  { id: "sc-4", dimensionId: "scaling", text: "I know which scaling approach (if any) our organization follows and why it was chosen." },
  { id: "sc-5", dimensionId: "scaling", text: "When cross-team multitasking or unclear ownership causes problems, I escalate it as an organizational impediment rather than absorbing it silently." },

  // Continuous Improvement Mindset
  { id: "ci-1", dimensionId: "continuous-improvement", text: "I treat my own practice as something to keep improving, not something I've already mastered." },
  { id: "ci-2", dimensionId: "continuous-improvement", text: "I seek out feedback about my own facilitation and coaching, not just the team's process." },
  { id: "ci-3", dimensionId: "continuous-improvement", text: "I experiment with new techniques deliberately, rather than only ever running things the way I always have." },
  { id: "ci-4", dimensionId: "continuous-improvement", text: "I read, study, or discuss Agile/Scrum ideas outside of what's strictly required for my current role." },
  { id: "ci-5", dimensionId: "continuous-improvement", text: "I can point to something specific I've changed about how I work in the last few months, based on a lesson learned." },
];

export const likertLabels: Record<number, string> = {
  1: "Rarely / Never",
  2: "Occasionally",
  3: "About half the time",
  4: "Often",
  5: "Consistently",
};

export function questionsForDimension(dimensionId: string): Question[] {
  return questions.filter((q) => q.dimensionId === dimensionId);
}
