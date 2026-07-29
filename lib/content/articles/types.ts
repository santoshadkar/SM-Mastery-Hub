export interface Article {
  slug: string;
  category: string;
  title: string;
  summary: string;
  readMinutes: number;
  body: string;
}

export interface ArticleCategory {
  slug: string;
  name: string;
  description: string;
}
