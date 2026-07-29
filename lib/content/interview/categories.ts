import type { InterviewCategory } from "./types";

export const interviewCategories: InterviewCategory[] = [
  {
    slug: "scrum-agile-fundamentals",
    name: "Scrum & Agile Fundamentals",
    description: "Core definitions and concepts interviewers use to check you know the framework beyond buzzwords.",
  },
  {
    slug: "scenario-behavioral",
    name: "Scenario & Behavioral Questions",
    description: '"What would you do if..." questions — the ones that actually predict how you\'ll perform on the job.',
  },
  {
    slug: "facilitation-team-dynamics",
    name: "Facilitation & Team Dynamics",
    description: "How you run events and handle the human dynamics inside them.",
  },
  {
    slug: "servant-leadership-coaching",
    name: "Servant Leadership & Coaching",
    description: "Questions probing whether you coach a team or just manage one.",
  },
  {
    slug: "metrics-tools-reporting",
    name: "Metrics, Tools & Reporting",
    description: "Jira/Azure DevOps fluency and how you read and report on delivery data.",
  },
  {
    slug: "scaling-stakeholders",
    name: "Scaling & Stakeholder Management",
    description: "Multi-team coordination and managing the people outside the team.",
  },
];

export function getInterviewCategory(slug: string): InterviewCategory | undefined {
  return interviewCategories.find((c) => c.slug === slug);
}
