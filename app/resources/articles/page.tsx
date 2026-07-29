import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { LinkCard } from "@/components/ui/Card";
import { articleCategories, getArticlesByCategory } from "@/lib/content/articles";
import {
  IconClipboardCheck,
  IconUsers,
  IconTarget,
  IconCompass,
  IconChartBar,
  IconLayers,
  IconSparkles,
} from "@/components/icons/Icons";

export const metadata: Metadata = {
  title: "Articles",
  description: "Scripted, opinionated articles for Scrum Masters, organized by the situations they actually face.",
};

const icons: Record<string, React.ReactNode> = {
  "scrum-fundamentals": <IconClipboardCheck />,
  facilitation: <IconUsers />,
  "servant-leadership": <IconTarget />,
  "stakeholder-management": <IconCompass />,
  metrics: <IconChartBar />,
  scaling: <IconLayers />,
  "continuous-improvement": <IconSparkles />,
};

export default function ArticlesIndexPage() {
  const totalCount = articleCategories.reduce(
    (sum, c) => sum + getArticlesByCategory(c.slug).length,
    0,
  );

  return (
    <>
      <PageHeader
        eyebrow="Free Resources / Articles"
        title="Articles"
        description={`${totalCount} scripted, opinionated write-ups on specific situations Scrum Masters actually run into, organized into the same 7 dimensions used by the Maturity Self-Assessment.`}
      />
      <Container className="py-10">
        <div className="grid gap-6 sm:grid-cols-2">
          {articleCategories.map((cat) => {
            const count = getArticlesByCategory(cat.slug).length;
            return (
              <LinkCard
                key={cat.slug}
                href={`/resources/articles/${cat.slug}`}
                title={cat.name}
                description={`${cat.description} (${count} articles)`}
                icon={icons[cat.slug]}
              />
            );
          })}
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
