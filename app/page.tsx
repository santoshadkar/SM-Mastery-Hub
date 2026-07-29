import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LinkCard } from "@/components/ui/Card";
import { HeroIllustration } from "@/components/graphics/HeroIllustration";
import { IconCompass, IconWrench, IconTarget, IconBookOpen } from "@/components/icons/Icons";

const pillars = [
  {
    href: "/knowledge",
    title: "Knowledge Hub",
    description:
      "Agile values, the Scrum framework, Kanban/Scrumban, scaled frameworks, and anti-patterns — explained clearly, without the jargon.",
    icon: <IconCompass />,
  },
  {
    href: "/tools",
    title: "Tools Hub",
    description:
      "Practical, day-to-day guidance for Jira, Confluence, Azure DevOps, and using AI as part of your Scrum Master toolkit.",
    icon: <IconWrench />,
  },
  {
    href: "/assessment",
    title: "Maturity Self-Assessment",
    description:
      "A 35-question assessment across 7 dimensions of the role, with a radar chart and targeted growth recommendations.",
    icon: <IconTarget />,
  },
  {
    href: "/resources",
    title: "Free Resources Library",
    description:
      "Ready-to-use templates, articles, and recommended reading, plus links to trusted external resources.",
    icon: <IconBookOpen />,
  },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50 to-white">
        <Container className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="flex flex-col items-start gap-6">
            <p className="rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700">
              For practicing Scrum Masters &amp; Agile Coaches
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Everything you need to run great Scrum teams, in one place.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              ScrumMaster Hub brings together a reference knowledge base, practical tool guides,
              a self-assessment to track your own growth, curated free resources, and an AI
              assistant that stays focused on Agile and Scrum — so you spend less time hunting
              for answers and more time coaching your team.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/assessment"
                className="rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                Take the Self-Assessment
              </Link>
              <Link
                href="/knowledge"
                className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Browse the Knowledge Hub
              </Link>
            </div>
          </div>
          <div className="hidden justify-self-center lg:flex">
            <HeroIllustration />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-10 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Four pillars, one hub
            </h2>
            <p className="mt-3 text-slate-600">
              No login, no setup — everything runs in your browser. Jump into whichever pillar
              is useful to you right now.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((p) => (
              <LinkCard
                key={p.href}
                href={p.href}
                title={p.title}
                description={p.description}
                icon={p.icon}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <Container className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Have a question right now?</h2>
            <p className="mt-1 text-slate-600">
              The Scrum Master Assistant is available site-wide via the chat button in the
              bottom-right corner, or on its own page.
            </p>
          </div>
          <Link
            href="/chat"
            className="whitespace-nowrap rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Open the Assistant
          </Link>
        </Container>
      </section>
    </>
  );
}
