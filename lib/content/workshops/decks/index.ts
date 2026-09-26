import type { Deck } from "./types";
import { agileScrumFoundationsDecks } from "./agile-scrum-foundations";
import { teamHealthCultureDecks } from "./team-health-culture";
import { backlogEstimationDeliveryDecks } from "./backlog-estimation-delivery";
import { assessmentContinuousImprovementDecks } from "./assessment-continuous-improvement";

export const allDecks: Deck[] = [
  ...agileScrumFoundationsDecks,
  ...teamHealthCultureDecks,
  ...backlogEstimationDeliveryDecks,
  ...assessmentContinuousImprovementDecks,
];

export function getDeck(workshopSlug: string): Deck | undefined {
  return allDecks.find((d) => d.workshopSlug === workshopSlug);
}

export function deckPptxPath(workshopSlug: string): string {
  return `/decks/${workshopSlug}.pptx`;
}

export type { Deck, Slide, SlideKind, DeckSource } from "./types";
