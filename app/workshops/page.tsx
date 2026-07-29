import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { LinkCard, Callout } from "@/components/ui/Card";
import { workshopCategories, getWorkshopsByCategory, allWorkshops } from "@/lib/content/workshops";
import { IconCompass, IconUsers, IconClipboardCheck, IconTarget } from "@/components/icons/Icons";

export const metadata: Metadata = {
  title: "Workshops",
  description: `${allWorkshops.length} ready-to-run workshop guides for Scrum Masters and Agile Coaches to facilitate with their teams.`,
};

const icons: Record<string, React.ReactNode> = {
  "agile-scrum-foundations": <IconCompass />,
  "team-health-culture": <IconUsers />,
  "backlog-estimation-delivery": <IconClipboardCheck />,
  "assessment-continuous-improvement": <IconTarget />,
};

export default function WorkshopsIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Workshops"
        title="Workshop Facilitation Guides"
        description={`${allWorkshops.length} ready-to-run workshops a Scrum Master is often asked to facilitate — each with an objective, materials list, timed agenda, and facilitator tips, not just a topic summary.`}
      />
      <Container className="py-10">
        <div className="mx-auto mb-10 max-w-3xl">
          <Callout title="How to use these">
            Each guide is a real, timed run-of-show you can adapt to your team&apos;s context —
            print the agenda, adjust the timings to fit your slot, and swap in your own team&apos;s
            examples wherever the guide suggests using &quot;a real recent example.&quot; These aren&apos;t
            slide decks; they&apos;re facilitation plans.
          </Callout>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {workshopCategories.map((cat) => {
            const count = getWorkshopsByCategory(cat.slug).length;
            return (
              <LinkCard
                key={cat.slug}
                href={`/workshops/${cat.slug}`}
                title={cat.name}
                description={`${cat.description} (${count} workshops)`}
                icon={icons[cat.slug]}
              />
            );
          })}
        </div>
      </Container>
    </>
  );
}
