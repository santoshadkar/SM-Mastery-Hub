import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { QAAccordion } from "@/components/content/QAAccordion";
import { interviewCategories, getInterviewCategory, getQuestionsForCategory } from "@/lib/content/interview";

type PageParams = Promise<{ category: string }>;

export function generateStaticParams() {
  return interviewCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { category } = await params;
  const cat = getInterviewCategory(category);
  if (!cat) return {};
  return { title: cat.name, description: cat.description };
}

export default async function InterviewCategoryPage({ params }: { params: PageParams }) {
  const { category } = await params;
  const cat = getInterviewCategory(category);
  if (!cat) notFound();

  const questions = getQuestionsForCategory(category);

  return (
    <>
      <PageHeader
        eyebrow="Knowledge Hub / Interview Preparation"
        title={cat.name}
        description={`${cat.description} (${questions.length} questions — click any question to reveal the answer.)`}
      />
      <Container className="py-10">
        <div className="mx-auto max-w-3xl">
          <QAAccordion questions={questions} />
          <div className="mt-10 border-t border-slate-200 pt-6">
            <Link
              href="/knowledge/interview-preparation"
              className="text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              &larr; Back to Interview Preparation
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
