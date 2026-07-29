import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card, LinkCard } from "@/components/ui/Card";
import { IconBookOpen, IconLayers, IconClipboardCheck, IconUsers, IconLightbulb, IconCompass } from "@/components/icons/Icons";
import { articleEntries } from "@/lib/content/articles";

export const metadata: Metadata = {
  title: "Free Resources Library",
  description: "Ready-to-use templates, articles, recommended reading, and links to trusted external resources.",
};

const recommendedReading = [
  {
    title: "Scrum: The Art of Doing Twice the Work in Half the Time",
    author: "Jeff Sutherland",
    idea:
      "Written by one of Scrum's co-creators, this traces Scrum's origins and argues its core mechanics — short cycles, a single prioritized backlog, and relentless inspection — come from observing how teams actually get better, not from theory.",
  },
  {
    title: "Coaching Agile Teams",
    author: "Lyssa Adkins",
    idea:
      "A foundational text on the coaching side of the Scrum Master role, distinguishing coaching from teaching, mentoring, and facilitating, and making the case that a Scrum Master's job is to become progressively less necessary.",
  },
  {
    title: "Agile Retrospectives: Making Good Teams Great",
    author: "Esther Derby & Diana Larsen",
    idea:
      "The book most retro formats on this site (and elsewhere) ultimately trace back to — a structured approach to running retrospectives in phases (set the stage, gather data, generate insights, decide what to do, close) rather than jumping straight to a fix.",
  },
  {
    title: "The Scrum Field Guide",
    author: "Mitch Lacey",
    idea:
      "A practitioner-focused, scenario-based book that walks through common real-world Scrum problems (a Product Owner who won't prioritize, a team that pads estimates) with concrete responses, rather than restating the framework itself.",
  },
  {
    title: "Team Topologies",
    author: "Matthew Skelton & Manuel Pais",
    idea:
      "Directly relevant to the Scaling dimension of the self-assessment — argues that team structure and communication pathways should be designed deliberately around how work actually flows, rather than left to emerge by accident.",
  },
  {
    title: "Kanban: Successful Evolutionary Change for Your Technology Business",
    author: "David J. Anderson",
    idea:
      "The book that formalized Kanban for knowledge work, making the case for evolutionary, low-friction change (start with what you do now) instead of a disruptive framework switch.",
  },
];

const externalResources = [
  {
    name: "Scrum.org",
    url: "https://www.scrum.org",
    description:
      "Home of the official Scrum Guide, plus free articles, forums, and assessments from Ken Schwaber's organization.",
  },
  {
    name: "Scrum Alliance",
    url: "https://www.scrumalliance.org",
    description:
      "Certifications (CSM, CSPO, and others) plus a large library of free community articles and resources.",
  },
  {
    name: "Agile Alliance",
    url: "https://www.agilealliance.org",
    description:
      "A nonprofit with an extensive free glossary, conference talks, and the Agile Manifesto's original site.",
  },
  {
    name: "Scaled Agile Framework (SAFe)",
    url: "https://scaledagileframework.com",
    description:
      "The official, free, browsable reference for SAFe — every role, event, and competency in the framework.",
  },
  {
    name: "Atlassian Agile Coach",
    url: "https://www.atlassian.com/agile",
    description:
      "Atlassian's free guide to agile, Scrum, and Kanban concepts, written with a practical, tool-agnostic lens.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free Resources"
        title="Templates, articles, and trusted external resources"
        description="Copy what's useful directly from this page, read an article on a specific situation, or follow the links below to well-established free resources maintained by the wider Agile community."
      />
      <Container className="py-10">
        <LinkCard
          href="/resources/articles"
          title="Articles"
          description={`${articleEntries.length} original, practical write-ups on specific situations Scrum Masters run into — from your first 30 days to managing up.`}
          icon={<IconLightbulb />}
        />
      </Container>
      <Container className="space-y-14 pb-16">
        <section>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
              <IconUsers className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Retrospective formats</h2>
          </div>
          <p className="mt-2 max-w-2xl text-slate-600">
            Rotate formats to keep retros from going stale — see the &quot;retro theater&quot;
            anti-pattern in the Knowledge Hub.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Card>
              <h3 className="font-semibold text-slate-900">Start / Stop / Continue</h3>
              <p className="mt-2 text-sm text-slate-600">
                Three columns: things to <em>start</em> doing, things to <em>stop</em> doing, and
                things to <em>continue</em> doing. Simple and fast — good default for teams new to
                retros or short on time.
              </p>
            </Card>
            <Card>
              <h3 className="font-semibold text-slate-900">4 Ls: Liked, Learned, Lacked, Longed for</h3>
              <p className="mt-2 text-sm text-slate-600">
                Four columns capturing what the team liked, what they learned, what was lacking,
                and what they longed for. Surfaces more nuance than Start/Stop/Continue; good for a
                mid-project checkpoint.
              </p>
            </Card>
            <Card>
              <h3 className="font-semibold text-slate-900">Sailboat</h3>
              <p className="mt-2 text-sm text-slate-600">
                A sailboat metaphor: wind (what&apos;s pushing the team forward), anchors (what&apos;s
                holding it back), rocks (risks ahead), and the island (the goal). Good for teams
                that respond well to visual/metaphorical prompts.
              </p>
            </Card>
            <Card>
              <h3 className="font-semibold text-slate-900">Mad / Sad / Glad</h3>
              <p className="mt-2 text-sm text-slate-600">
                Emotion-first columns for what made the team mad, sad, or glad this Sprint. Useful
                after a rough sprint (incidents, conflict) when naming the emotional temperature
                matters before jumping to solutions.
              </p>
            </Card>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
              <IconClipboardCheck className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Definition of Ready / Definition of Done checklist</h2>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Card>
              <h3 className="font-semibold text-slate-900">Definition of Ready (a story can enter Sprint Planning)</h3>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-600">
                <li>Acceptance criteria are written and understood by the team</li>
                <li>Dependencies (other teams, external systems) are identified</li>
                <li>The story is small enough to complete within one Sprint</li>
                <li>Any required design or data is available</li>
                <li>The Product Owner has answered the team&apos;s open questions</li>
              </ul>
            </Card>
            <Card>
              <h3 className="font-semibold text-slate-900">Definition of Done (an item can be called complete)</h3>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-600">
                <li>Code is reviewed and merged</li>
                <li>Automated tests written and passing</li>
                <li>Acceptance criteria verified against the working product</li>
                <li>Documentation updated where relevant</li>
                <li>Deployed to (or ready for) the agreed environment</li>
              </ul>
            </Card>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Treat both lists as a starting point — the real Definition of Ready/Done is whatever
            your team agrees to and writes down in Confluence (see the{" "}
            <a href="/tools/confluence" className="text-brand-600 underline">Confluence guide</a>).
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
              <IconLayers className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Sprint planning agenda</h2>
          </div>
          <Card className="mt-6">
            <ol className="list-inside list-decimal space-y-2 text-sm text-slate-700">
              <li><strong>Set the stage (5 min)</strong> — remind the team of capacity (PTO, holidays, known interruptions).</li>
              <li><strong>Sprint Goal (10-15 min)</strong> — Product Owner proposes a goal; team discusses and confirms it&apos;s achievable.</li>
              <li><strong>Select backlog items (20-30 min)</strong> — pull top-priority, Ready items until the team's forecast capacity is reached.</li>
              <li><strong>Break down into tasks (remaining time)</strong> — Developers decompose selected items into tasks with rough estimates.</li>
              <li><strong>Confirm and commit</strong> — read the Sprint Goal aloud; confirm everyone understands and agrees to the plan.</li>
            </ol>
          </Card>
        </section>

        <section>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
              <IconLightbulb className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Facilitation guides</h2>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Card>
              <h3 className="font-semibold text-slate-900">When one person dominates discussion</h3>
              <p className="mt-2 text-sm text-slate-600">
                Use a round-robin or silent brainstorming (everyone writes ideas on stickies before
                anyone speaks) so quieter voices are captured before the loudest opinion anchors
                the conversation.
              </p>
            </Card>
            <Card>
              <h3 className="font-semibold text-slate-900">When the team goes quiet</h3>
              <p className="mt-2 text-sm text-slate-600">
                Switch from an open question to a specific, low-stakes one (&quot;on a scale of 1-5,
                how confident are you in this plan?&quot;) — a number is easier to offer than an
                opinion, and it opens the door to follow-up questions.
              </p>
            </Card>
            <Card>
              <h3 className="font-semibold text-slate-900">When a discussion goes in circles</h3>
              <p className="mt-2 text-sm text-slate-600">
                Park it visibly (a &quot;parking lot&quot; column or note) with an owner and a time to
                revisit, so the meeting moves on without the topic feeling dismissed.
              </p>
            </Card>
            <Card>
              <h3 className="font-semibold text-slate-900">When stakeholders push for a fixed date</h3>
              <p className="mt-2 text-sm text-slate-600">
                Bring the team&apos;s actual velocity/throughput data and a forecast range instead of
                a single date, and separate &quot;what we&apos;re confident about&quot; from &quot;what depends on
                unknowns we haven&apos;t resolved yet.&quot;
              </p>
            </Card>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
              <IconBookOpen className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Recommended reading</h2>
          </div>
          <p className="mt-2 max-w-2xl text-slate-600">
            Well-known, real books in the field. These are original one-paragraph summaries of each
            book&apos;s core idea, written for this site — not excerpts from the books themselves.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {recommendedReading.map((book) => (
              <Card key={book.title}>
                <h3 className="font-semibold text-slate-900">{book.title}</h3>
                <p className="mt-0.5 text-sm text-slate-500">{book.author}</p>
                <p className="mt-2 text-sm text-slate-600">{book.idea}</p>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
              <IconCompass className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Trusted external resources</h2>
          </div>
          <p className="mt-2 max-w-2xl text-slate-600">
            Well-established, free resources from recognized organizations in the Agile community.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {externalResources.map((r) => (
              <Card key={r.url}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-800"
                >
                  {r.name}
                </a>
                <p className="mt-2 text-sm text-slate-600">{r.description}</p>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
