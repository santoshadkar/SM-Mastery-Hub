import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { LinkCard } from "@/components/ui/Card";
import { articleCategories, getArticleCategory, getArticlesByCategory } from "@/lib/content/articles";

type PageParams = Promise<{ category: string }>;

export function generateStaticParams() {
  return articleCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { category } = await params;
  const cat = getArticleCategory(category);
  if (!cat) return {};
  return { title: cat.name, description: cat.description };
}

export default async function ArticleCategoryPage({ params }: { params: PageParams }) {
  const { category } = await params;
  const cat = getArticleCategory(category);
  if (!cat) notFound();

  const articles = getArticlesByCategory(category);

  return (
    <>
      <PageHeader eyebrow="Free Resources / Articles" title={cat.name} description={cat.description} />
      <Container className="py-10">
        <div className="grid gap-6 sm:grid-cols-2">
          {articles.map((a) => (
            <LinkCard
              key={a.slug}
              href={`/resources/articles/${category}/${a.slug}`}
              title={a.title}
              description={`${a.summary} (${a.readMinutes} min read)`}
            />
          ))}
        </div>
        <div className="mt-10">
          <Link href="/resources/articles" className="text-sm font-medium text-brand-600 hover:text-brand-700">
            &larr; Back to Articles
          </Link>
        </div>
      </Container>
    </>
  );
}
