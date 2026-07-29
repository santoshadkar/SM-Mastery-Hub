import type { Workshop } from "./types";
import { agileScrumFoundationsWorkshops } from "./agile-scrum-foundations";
import { teamHealthCultureWorkshops } from "./team-health-culture";
import { backlogEstimationDeliveryWorkshops } from "./backlog-estimation-delivery";
import { assessmentContinuousImprovementWorkshops } from "./assessment-continuous-improvement";

export const allWorkshops: Workshop[] = [
  ...agileScrumFoundationsWorkshops,
  ...teamHealthCultureWorkshops,
  ...backlogEstimationDeliveryWorkshops,
  ...assessmentContinuousImprovementWorkshops,
];

export function getWorkshopsByCategory(category: string): Workshop[] {
  return allWorkshops.filter((w) => w.category === category);
}

export function getWorkshop(category: string, slug: string): Workshop | undefined {
  return allWorkshops.find((w) => w.category === category && w.slug === slug);
}

export type { Workshop, WorkshopCategory, AgendaStep } from "./types";
export { workshopCategories, getWorkshopCategory } from "./categories";
