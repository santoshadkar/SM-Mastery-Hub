import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { LinkCard } from "@/components/ui/Card";
import { articleEntries } from "@/lib/content/articles";

export const metadata: Metadata = {
  title: "Articles",
  description: "Original, practical articles for Scrum Masters and Agile Coaches.",
};

export default function ArticlesIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free Resources / Articles"
        title="Articles"
        description="Short, practical write-ups on specific situations Scrum Masters actually run into — not general theory."
      />
      <Container className="py-10">
        <div className="grid gap-6 sm:grid-cols-2">
          {articleEntries.map((entry) => (
            <LinkCard
              key={entry.slug}
              href={`/resources/articles/${entry.slug}`}
              title={entry.title}
              description={`${entry.description} (${entry.readTime})`}
            />
          ))}
        </div>
        <div className="mt-10">
          <a href="/resources" className="text-sm font-medium text-brand-600 hover:text-brand-700">
            &larr; Back to Resources
          </a>
        </div>
      </Container>
    </>
  );
}
