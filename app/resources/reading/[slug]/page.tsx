import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { bookNotes, getBookNote } from "@/lib/content/books";

type PageParams = Promise<{ slug: string }>;

export function generateStaticParams() {
  return bookNotes.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookNote(slug);
  if (!book) return {};
  return { title: book.title, description: book.summary };
}

export default async function BookNotePage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const book = getBookNote(slug);
  if (!book) notFound();

  return (
    <>
      <PageHeader
        eyebrow={`Free Resources / Recommended Reading / ${book.author}`}
        title={book.title}
        description={`${book.summary} (${book.readMinutes} min read)`}
      />
      <Container className="py-10">
        <div className="mx-auto max-w-3xl">
          <div className="prose-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{book.body}</ReactMarkdown>
          </div>
          <div className="mt-10 border-t border-slate-200 pt-6">
            <Link href="/resources/reading" className="text-sm font-medium text-brand-600 hover:text-brand-700">
              &larr; Back to Recommended Reading
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
