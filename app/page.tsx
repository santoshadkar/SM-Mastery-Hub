import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LinkCard, Card } from "@/components/ui/Card";
import { HeroIllustration } from "@/components/graphics/HeroIllustration";
import {
  IconCompass,
  IconWrench,
  IconTarget,
  IconBookOpen,
  IconUsers,
  IconLayers,
  IconSparkles,
} from "@/components/icons/Icons";

const servesGroups = [
  {
    title: "The Developers",
    icon: <IconUsers />,
    items: [
      "Coaching self-management and cross-functionality, rather than assigning tasks",
      "Facilitating Scrum events so they stay effective without running over time",
      "Removing impediments to the team's progress, escalating the ones outside the team's control",
      "Helping the team focus on high-value work within a Sprint Goal, not just a list of tickets",
    ],
  },
  {
    title: "The Product Owner",
    icon: <IconTarget />,
    items: [
      "Helping find techniques for effective Product Goal definition and backlog management",
      "Helping the team understand the need for clear, well-ordered Product Backlog items",
      "Facilitating stakeholder collaboration, especially in Sprint Reviews",
      "Helping establish empirical, iterative product planning in a complex environment",
    ],
  },
  {
    title: "The Organization",
    icon: <IconLayers />,
    items: [
      "Leading, training, and coaching the organization in its Scrum adoption",
      "Planning and advising on Scrum implementations within the organization",
      "Helping employees and stakeholders understand and enact an empirical, Agile approach",
      "Removing barriers between stakeholders and Scrum Teams",
    ],
  },
];

const whyItMatters = [
  {
    title: "Distributed and hybrid teams need more intentional facilitation, not less",
    detail:
      "When a team isn't in a room together, the informal alignment that used to happen by osmosis has to be actively built — that's a Scrum Master's core skill, not a nice-to-have.",
  },
  {
    title: "Faster market change rewards short feedback loops over rigid long-range plans",
    detail:
      "The discipline of shipping in short cycles and adapting based on real feedback is exactly what protects a team from betting months of work on an assumption that turns out wrong.",
  },
  {
    title: "AI accelerates drafting and analysis — it doesn't replace judgment or coaching",
    detail:
      "As AI tools take over more first-draft work, the differentiating human skill shifts even further toward facilitation, coaching, and organizational judgment — a Scrum Master's actual job, not a side effect of it.",
  },
  {
    title: "Scaling Agile across many teams needs Scrum Masters who understand coordination, not just mechanics",
    detail:
      "As organizations scale past one team, dependency management and cross-team facilitation become the bottleneck — see Scaled Agile Frameworks for how that scope expands.",
  },
  {
    title: "Psychological safety and servant leadership are now directly tied to retention",
    detail:
      "In a competitive talent market, how a team is led day to day — coached versus commanded — is a real factor in whether good people stay, not just a culture nicety.",
  },
];

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

      <section className="border-b border-slate-200 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              What Is Scrum Mastery?
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Who is a Scrum Master, really?
            </h2>
            <p className="mt-4 text-slate-600">
              <strong className="text-slate-800">Scrum Mastery</strong> is the practice of servant
              leadership applied specifically to Agile product delivery — the ongoing discipline
              of helping a team and organization get better at building valuable products through
              Scrum&apos;s empirical approach of transparency, inspection, and adaptation. It isn&apos;t
              a skill you finish learning; the best Scrum Masters treat their own growth as
              continuously unfinished, the same way they coach their teams to.
            </p>
            <p className="mt-4 text-slate-600">
              A <strong className="text-slate-800">Scrum Master</strong> is one of three
              accountabilities the Scrum Guide defines — alongside the Product Owner and the
              Developers — not a job title bolted onto a traditional project manager, and not the
              team&apos;s boss. A Scrum Master is accountable for the Scrum Team&apos;s effectiveness and
              for Scrum being understood and enacted well, achieved primarily through coaching,
              facilitation, and removing impediments — not by directing the work itself.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <h3 className="text-lg font-bold text-slate-900">
              Roles &amp; responsibilities: a Scrum Master serves three groups
            </h3>
            <p className="mt-2 text-slate-600">
              The Scrum Guide frames the role around who it serves, not a list of tasks. In
              practice, that breaks down into three directions at once:
            </p>
          </div>
          <div className="mx-auto mt-6 grid max-w-5xl gap-6 sm:grid-cols-3">
            {servesGroups.map((group) => (
              <Card key={group.title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  {group.icon}
                </div>
                <h4 className="mt-4 font-semibold text-slate-900">Serves {group.title}</h4>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-600">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-3xl">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <IconSparkles className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Why this role matters more than ever in today&apos;s Agile arena
              </h3>
            </div>
            <div className="mt-6 space-y-5">
              {whyItMatters.map((point) => (
                <div key={point.title} className="rounded-xl border border-slate-200 bg-white p-5">
                  <p className="font-semibold text-slate-900">{point.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{point.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/knowledge/scrum-framework"
                className="text-sm font-medium text-brand-600 underline underline-offset-2 hover:text-brand-700"
              >
                Read the full Scrum Framework breakdown &rarr;
              </Link>
              <Link
                href="/assessment"
                className="text-sm font-medium text-brand-600 underline underline-offset-2 hover:text-brand-700"
              >
                See where you stand with the Maturity Self-Assessment &rarr;
              </Link>
            </div>
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
