import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { LinkCard, Callout } from "@/components/ui/Card";
import { interviewCategories, getQuestionsForCategory, allInterviewQuestions } from "@/lib/content/interview";
import {
  IconClipboardCheck,
  IconTarget,
  IconUsers,
  IconCompass,
  IconChartBar,
  IconLayers,
} from "@/components/icons/Icons";

export const metadata: Metadata = {
  title: "Interview Preparation",
  description: `${allInterviewQuestions.length}+ Scrum Master interview questions with real answers, organized by topic.`,
};

const icons: Record<string, React.ReactNode> = {
  "scrum-agile-fundamentals": <IconClipboardCheck />,
  "scenario-behavioral": <IconTarget />,
  "facilitation-team-dynamics": <IconUsers />,
  "servant-leadership-coaching": <IconCompass />,
  "metrics-tools-reporting": <IconChartBar />,
  "scaling-stakeholders": <IconLayers />,
};

export default function InterviewPreparationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Knowledge Hub"
        title="Scrum Master Interview Preparation"
        description={`${allInterviewQuestions.length} mock interview questions with real, specific answers — organized by topic so you can drill the areas you're least confident in.`}
      />
      <Container className="py-10">
        <div className="mx-auto max-w-3xl">
          <Callout title="How to use this">
            These aren&apos;t meant to be memorized word-for-word — interviewers can tell a scripted
            answer from a real one. Read the reasoning behind each answer, then practice saying it
            in your own words. The <a href="/knowledge/interview-preparation/scenario-behavioral" className="text-brand-600 underline">Scenario &amp; Behavioral</a>{" "}
            category especially rewards using a real example from your own experience rather than a
            hypothetical.
          </Callout>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {interviewCategories.map((cat) => {
            const count = getQuestionsForCategory(cat.slug).length;
            return (
              <LinkCard
                key={cat.slug}
                href={`/knowledge/interview-preparation/${cat.slug}`}
                title={cat.name}
                description={`${cat.description} (${count} questions)`}
                icon={icons[cat.slug]}
              />
            );
          })}
        </div>

        <div className="mt-10">
          <a href="/knowledge" className="text-sm font-medium text-brand-600 hover:text-brand-700">
            &larr; Back to Knowledge Hub
          </a>
        </div>
      </Container>
    </>
  );
}
