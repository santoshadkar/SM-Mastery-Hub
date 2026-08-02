import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { Callout } from "@/components/ui/Card";
import { ScriptBlock } from "@/components/content/ScriptBlock";

export const metadata: Metadata = {
  title: "Transitioning from Waterfall to Scrum",
  description: "A phase-by-phase guide for a team, and the Scrum Master leading it, moving from Waterfall to Scrum.",
};

const phases = [
  {
    name: "Phase 1 — Assess & Educate",
    timeframe: "Weeks 1–2, before any Sprint starts",
    goal: "Build a shared, accurate understanding of what's actually changing and why, before touching any process.",
    activities: [
      "Run an Introduction to Agile workshop for the full team and key stakeholders together, not separately — a shared starting point prevents two different mental models forming early.",
      "Map the current Waterfall process as it actually runs today (not as documented) — phases, handoffs, approval gates — so the team can see concretely what's being replaced.",
      "Identify who the Product Owner and Scrum Master will be, and be explicit that neither is the old project manager role with a new label.",
      "Assess team skills for cross-functionality — Waterfall teams are often organized by specialism (all QA together, all dev together), which Scrum expects to blend within one team.",
    ],
    exitCriteria: "The team can explain, in their own words, why short iterations with real feedback loops address a specific pain their last Waterfall project had.",
  },
  {
    name: "Phase 2 — Pilot with One Team",
    timeframe: "Sprint 0 through the first 2–3 Sprints",
    goal: "Get one real team running one real, small Sprint — not a simulation — and learn from what actually breaks.",
    activities: [
      "Build an initial Product Backlog from whatever requirements already exist, resisting the urge to fully detail every item before starting — refine just enough to start.",
      "Run a real Sprint Planning, Daily Scrum, Sprint Review, and Retrospective, even imperfectly — the events teach the mindset faster than any workshop does.",
      "Deliberately keep the first Sprint's scope small and safe — the goal of the first Sprint is learning the mechanics, not proving velocity.",
      "Expect the first Sprint's estimates to be wrong, often significantly, and use it as real data rather than a failure.",
    ],
    exitCriteria: "The team has completed at least one full Sprint cycle end to end, including a genuine Retrospective with at least one real, followed-through action item.",
  },
  {
    name: "Phase 3 — Stabilize",
    timeframe: "Roughly months 1–3",
    goal: "Turn the pilot's rough edges into a working, reasonably reliable cadence the team and stakeholders can trust.",
    activities: [
      "Use each Retrospective to fix one specific friction point — carryover, unclear Definition of Done, planning running long — rather than trying to fix everything at once.",
      "Coach stakeholders through their new role in Sprint Review — genuine feedback and re-prioritization, not a status update they passively receive.",
      "Start tracking real Sprint data (completed points, carryover) to build an honest forecasting baseline instead of relying on the old Gantt-chart-style date commitments.",
      "Watch closely for 'mini-Waterfall' Sprints — analysis, then build, then test as separate phases within the Sprint — which is the most common relapse pattern for ex-Waterfall teams.",
    ],
    exitCriteria: "Sprint Planning, Daily Scrum, Review, and Retro all run without the Scrum Master having to explain their basic purpose each time.",
  },
  {
    name: "Phase 4 — Mature & Improve",
    timeframe: "3–6+ months onward",
    goal: "Move from 'doing Scrum' to genuinely operating on Scrum's values — see Agile Mindset: From Doing Agile to Being Agile.",
    activities: [
      "Introduce more advanced practices as genuine needs, not because a maturity model says to — story mapping, refined estimation, deeper metrics.",
      "Revisit the working agreement and Definition of Done periodically as the team's actual capability grows.",
      "Coach the team toward increasing self-management — fewer decisions routed through the Scrum Master as a default habit.",
      "Reassess whether the Product Owner and Scrum Master roles, chosen quickly in Phase 1, are still the right fit now that everyone understands the roles better.",
    ],
    exitCriteria: "The team can point to a specific practice they've changed on their own initiative, not one introduced by the Scrum Master or a coach.",
  },
];

const challenges = [
  {
    name: "The team wants a full spec before starting anything",
    detail:
      "Years of Waterfall habit make 'let's start with what we know and refine as we learn' feel reckless rather than disciplined. This is usually the single hardest habit to unlearn.",
  },
  {
    name: "Project managers are unsure what role they play now",
    detail:
      "Neither the Product Owner nor Scrum Master role is 'project manager with a new name,' and PMs are often left genuinely uncertain — sometimes anxious — about where they fit, which left unaddressed becomes quiet resistance.",
  },
  {
    name: "Leadership still wants a Gantt chart and a fixed end date",
    detail:
      "Reporting structures built around percent-complete and fixed milestones don't map cleanly onto Sprint-based forecasting, and switching the team's process without also updating how leadership is briefed creates a painful mismatch.",
  },
  {
    name: "Fixed-bid contracts assume Waterfall-style fixed scope",
    detail:
      "If client or vendor contracts were written assuming a fixed scope delivered on a fixed date, Scrum's iterative flexibility can be structurally incompatible until the contracting model itself changes — this is a real constraint, not just a mindset issue.",
  },
  {
    name: "'Sprint Zero' quietly becomes a multi-month upfront design phase",
    detail:
      "Some upfront setup is reasonable, but it's easy for a team steeped in Waterfall habits to let 'Sprint Zero' absorb months of architecture and design work before any real increment ships — see the 'Sprint Zero that never ends' anti-pattern.",
  },
  {
    name: "Massive carryover in the first several Sprints",
    detail:
      "A team used to detailed upfront planning tends to badly overestimate what fits in a short Sprint at first — this is normal, expected, and should be treated as data for calibration, not a sign the team or the framework is failing.",
  },
  {
    name: "The team stays organized by specialism instead of becoming cross-functional",
    detail:
      "Waterfall teams often have separate reporting lines for developers, testers, and analysts — genuinely blending them into one cross-functional Scrum Team frequently requires an organizational, not just process, change.",
  },
];

export default function WaterfallToScrumPage() {
  return (
    <ArticleLayout
      eyebrow="Knowledge Hub"
      title="Transitioning from Waterfall to Scrum"
      description="For a Scrum Master who's spent years running Waterfall projects and has just been asked to lead a Scrum team — a real process, not just a values lecture."
      backHref="/knowledge"
      backLabel="Back to Knowledge Hub"
    >
      <p>
        The hardest part of this transition isn&apos;t learning Scrum&apos;s mechanics — those can be
        taught in an afternoon (see <a href="/knowledge/scrum-framework" className="text-brand-600 underline">The Scrum Framework</a>).
        The hard part is <em>unlearning</em> habits that were genuinely reasonable under Waterfall —
        detailed upfront specs, fixed-date commitments, phase-gated sign-offs — and that don&apos;t
        just become useless under Scrum, they actively work against it if left in place.
      </p>

      <h2>The four-phase transition process</h2>
      <div className="not-prose mt-6 space-y-6">
        {phases.map((phase, i) => (
          <div key={phase.name} className="rounded-xl border border-slate-200 p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-slate-900">
                <span className="text-brand-600">{i + 1}. </span>
                {phase.name}
              </h3>
              <span className="text-sm text-slate-500">{phase.timeframe}</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              <span className="font-medium text-slate-800">Goal: </span>
              {phase.goal}
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-600">
              {phase.activities.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              <span className="font-medium text-slate-800">Exit criteria: </span>
              {phase.exitCriteria}
            </p>
          </div>
        ))}
      </div>

      <h2>Common challenges, specific to ex-Waterfall teams</h2>
      <div className="not-prose mt-6 space-y-5">
        {challenges.map((c) => (
          <div key={c.name} className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-900">{c.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{c.detail}</p>
          </div>
        ))}
      </div>

      <h2>Two conversations you'll likely need to have</h2>
      <ScriptBlock
        label="When the team wants a full spec before starting"
        lines={[
          {
            speaker: "Team member",
            text: "We can't really start until we know exactly what we're building — can we get a full requirements doc first?",
            tone: "neutral",
          },
          {
            speaker: "Response that acknowledges the real concern",
            text: "That instinct makes sense — you've been burned before by unclear requirements. The difference here isn't less clarity, it's getting clarity in smaller pieces, closer to when we build each one, so we're not guessing months ahead about things that might change.",
            tone: "good",
          },
        ]}
      />
      <ScriptBlock
        label="Redefining a project manager's role"
        lines={[
          {
            speaker: "Former project manager",
            text: "So what am I actually supposed to do now? It doesn't sound like there's a PM role in Scrum at all.",
            tone: "neutral",
          },
          {
            speaker: "Honest, specific answer",
            text: "You're right that 'project manager' isn't a Scrum role — but your planning and stakeholder-management experience maps closely onto either the Product Owner or Scrum Master accountability. Let's talk through what you actually enjoy about the work you've been doing, since that's a better guide than the title.",
            tone: "good",
          },
        ]}
      />

      <Callout title="A readiness checklist before you start Sprint 1" tone="warning">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Leadership has agreed on how progress will be reported going forward — not still expecting a Waterfall-style Gantt chart from a Scrum team.</li>
          <li>A real Product Owner has been identified who can make backlog decisions, not a proxy with no authority.</li>
          <li>Existing contracts or commitments have been reviewed for fixed-scope assumptions that conflict with iterative delivery.</li>
          <li>The team understands this is a genuine experiment to learn from, not a mandate to get perfectly right on the first try.</li>
        </ul>
      </Callout>

      <Callout title="Related pages">
        See <a href="/resources/articles/scrum-fundamentals/first-30-days" className="text-brand-600 underline">Your First 30 Days as a New Scrum Master</a>{" "}
        for what to prioritize once Sprint 1 is underway, <a href="/knowledge/anti-patterns" className="text-brand-600 underline">Anti-Patterns &amp; Fixes</a>{" "}
        for &quot;mini-waterfall sprints&quot; and &quot;Sprint Zero that never ends&quot; specifically, and{" "}
        <a href="/workshops/agile-scrum-foundations/introduction-to-agile" className="text-brand-600 underline">the Introduction to Agile workshop</a>{" "}
        for Phase 1&apos;s kickoff session.
      </Callout>
    </ArticleLayout>
  );
}
