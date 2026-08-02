import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { LinkCard } from "@/components/ui/Card";
import { knowledgeEntries } from "@/lib/content/knowledge";
import { IconCompass, IconClipboardCheck, IconBoard, IconLayers, IconLightbulb, IconTarget, IconSparkles, IconChartBar } from "@/components/icons/Icons";

export const metadata: Metadata = {
  title: "Knowledge Hub",
  description:
    "Structured, accurate reference content on Agile values, Scrum, Kanban/Scrumban, scaled frameworks, anti-patterns, framework transitions, real-world scenarios, and interview prep.",
};

const icons: Record<string, React.ReactNode> = {
  "agile-manifesto": <IconCompass />,
  "scrum-framework": <IconClipboardCheck />,
  "kanban-scrumban": <IconBoard />,
  "scaled-frameworks": <IconLayers />,
  "anti-patterns": <IconLightbulb />,
  "waterfall-to-scrum-transition": <IconChartBar />,
  "scrum-to-kanban-transition": <IconBoard />,
  "real-world-scenarios": <IconTarget />,
  "interview-preparation": <IconSparkles />,
};

export default function KnowledgeHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Knowledge Hub"
        title="A reference library for Agile & Scrum"
        description="Structured explanations of the frameworks and concepts a Scrum Master relies on day to day — written to be accurate, not exhaustive."
      />
      <Container className="py-10">
        <div className="grid gap-6 sm:grid-cols-2">
          {knowledgeEntries.map((entry) => (
            <LinkCard
              key={entry.slug}
              href={`/knowledge/${entry.slug}`}
              title={entry.title}
              description={entry.description}
              icon={icons[entry.slug]}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
