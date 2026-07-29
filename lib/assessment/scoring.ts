import { dimensions, questions } from "./questions";

export type Answers = Record<string, number>;

export interface DimensionScore {
  dimensionId: string;
  name: string;
  rawScore: number;
  maxScore: number;
  percentage: number;
}

export interface MaturityLevel {
  name: string;
  minPercentage: number;
  description: string;
}

export const maturityLevels: MaturityLevel[] = [
  {
    name: "Emerging",
    minPercentage: 0,
    description:
      "You're early in the role or new to these practices. Focus on building a solid grasp of the fundamentals before layering on more advanced techniques.",
  },
  {
    name: "Developing",
    minPercentage: 21,
    description:
      "The basics are in place, but consistency is the gap. Pick one or two habits to practice deliberately rather than trying to improve everything at once.",
  },
  {
    name: "Practicing",
    minPercentage: 41,
    description:
      "You're running the core mechanics reliably. The next step is sharpening judgment — knowing when to deviate from the standard playbook and why.",
  },
  {
    name: "Advanced",
    minPercentage: 61,
    description:
      "You're operating with strong judgment across most dimensions. Look for stretch opportunities — coaching other Scrum Masters or taking on cross-team challenges.",
  },
  {
    name: "Coaching Others",
    minPercentage: 81,
    description:
      "You're consistently strong across dimensions. Consider mentoring other Scrum Masters, and keep an eye on the lowest-scoring dimension so strength elsewhere doesn't mask a blind spot.",
  },
];

export function getMaturityLevel(percentage: number): MaturityLevel {
  let match = maturityLevels[0];
  for (const level of maturityLevels) {
    if (percentage >= level.minPercentage) match = level;
  }
  return match;
}

export function computeDimensionScores(answers: Answers): DimensionScore[] {
  return dimensions.map((dim) => {
    const dimQuestions = questions.filter((q) => q.dimensionId === dim.id);
    const rawScore = dimQuestions.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0);
    const maxScore = dimQuestions.length * 5;
    const percentage = maxScore > 0 ? Math.round((rawScore / maxScore) * 100) : 0;
    return { dimensionId: dim.id, name: dim.name, rawScore, maxScore, percentage };
  });
}

export function computeOverallPercentage(dimensionScores: DimensionScore[]): number {
  if (dimensionScores.length === 0) return 0;
  const total = dimensionScores.reduce((sum, d) => sum + d.percentage, 0);
  return Math.round(total / dimensionScores.length);
}

export function isComplete(answers: Answers): boolean {
  return questions.every((q) => typeof answers[q.id] === "number");
}
