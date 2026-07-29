import type { InterviewQuestion } from "./types";
import { scrumAgileFundamentalsQuestions } from "./scrum-agile-fundamentals";
import { scenarioBehavioralQuestions } from "./scenario-behavioral";
import { facilitationTeamDynamicsQuestions } from "./facilitation-team-dynamics";
import { servantLeadershipCoachingQuestions } from "./servant-leadership-coaching";
import { metricsToolsReportingQuestions } from "./metrics-tools-reporting";
import { scalingStakeholdersQuestions } from "./scaling-stakeholders";

export const questionsByCategory: Record<string, InterviewQuestion[]> = {
  "scrum-agile-fundamentals": scrumAgileFundamentalsQuestions,
  "scenario-behavioral": scenarioBehavioralQuestions,
  "facilitation-team-dynamics": facilitationTeamDynamicsQuestions,
  "servant-leadership-coaching": servantLeadershipCoachingQuestions,
  "metrics-tools-reporting": metricsToolsReportingQuestions,
  "scaling-stakeholders": scalingStakeholdersQuestions,
};

export const allInterviewQuestions: InterviewQuestion[] = Object.values(questionsByCategory).flat();

export function getQuestionsForCategory(category: string): InterviewQuestion[] {
  return questionsByCategory[category] ?? [];
}

export type { InterviewQuestion, InterviewCategory } from "./types";
export { interviewCategories, getInterviewCategory } from "./categories";
