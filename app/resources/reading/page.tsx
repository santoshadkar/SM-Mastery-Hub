import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { LinkCard } from "@/components/ui/Card";
import { bookNotes } from "@/lib/content/books";

export const metadata: Metadata = {
  title: "The Real Ideas Behind the Books We Recommend",
  description: "Deep breakdowns of the actual frameworks from well-known Agile and leadership books — not blurbs.",
};

export default function RecommendedReadingIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free Resources"
        title="The Real Ideas Behind the Books We Recommend"
        description="Not a summary of what each book is about — a real, usable breakdown of the actual model each one is known for. We can't reproduce the books' text, so this is our own detailed write-up of the ideas, written to be immediately useful even if you never open the book."
      />
      <Container className="py-10">
        <div className="grid gap-6 sm:grid-cols-2">
          {bookNotes.map((book) => (
            <LinkCard
              key={book.slug}
              href={`/resources/reading/${book.slug}`}
              title={book.title}
              description={`${book.author} — ${book.summary}`}
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
