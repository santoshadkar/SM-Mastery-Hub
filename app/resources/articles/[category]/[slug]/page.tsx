import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { allArticles, getArticle, getArticleCategory, getArticlesByCategory } from "@/lib/content/articles";

type PageParams = Promise<{ category: string; slug: string }>;

export function generateStaticParams() {
  return allArticles.map((a) => ({ category: a.category, slug: a.slug }));
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { category, slug } = await params;
  const article = getArticle(category, slug);
  if (!article) return {};
  return { title: article.title, description: article.summary };
}

export default async function ArticlePage({ params }: { params: PageParams }) {
  const { category, slug } = await params;
  const article = getArticle(category, slug);
  if (!article) notFound();

  const cat = getArticleCategory(category)!;
  const related = getArticlesByCategory(category).filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={`Free Resources / Articles / ${cat.name}`}
        title={article.title}
        description={`${article.summary} (${article.readMinutes} min read)`}
      />
      <Container className="py-10">
        <div className="mx-auto max-w-3xl">
          <div className="prose-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.body}</ReactMarkdown>
          </div>

          {related.length > 0 ? (
            <div className="mt-14 border-t border-slate-200 pt-8">
              <h2 className="text-lg font-bold text-slate-900">More from {cat.name}</h2>
              <ul className="mt-4 space-y-3">
                {related.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/resources/articles/${category}/${a.slug}`}
                      className="font-medium text-brand-600 hover:text-brand-700"
                    >
                      {a.title} &rarr;
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-10 border-t border-slate-200 pt-6">
            <Link
              href={`/resources/articles/${category}`}
              className="text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              &larr; Back to {cat.name}
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
