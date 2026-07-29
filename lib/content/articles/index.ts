import type { Article } from "./types";
import { scrumFundamentalsArticles } from "./scrum-fundamentals";
import { facilitationArticles } from "./facilitation";
import { servantLeadershipArticles } from "./servant-leadership";
import { stakeholderManagementArticles } from "./stakeholder-management";
import { metricsArticles } from "./metrics";
import { scalingArticles } from "./scaling";
import { continuousImprovementArticles } from "./continuous-improvement";

export const allArticles: Article[] = [
  ...scrumFundamentalsArticles,
  ...facilitationArticles,
  ...servantLeadershipArticles,
  ...stakeholderManagementArticles,
  ...metricsArticles,
  ...scalingArticles,
  ...continuousImprovementArticles,
];

export function getArticlesByCategory(category: string): Article[] {
  return allArticles.filter((a) => a.category === category);
}

export function getArticle(category: string, slug: string): Article | undefined {
  return allArticles.find((a) => a.category === category && a.slug === slug);
}

export type { Article, ArticleCategory } from "./types";
export { articleCategories, getArticleCategory } from "./categories";
