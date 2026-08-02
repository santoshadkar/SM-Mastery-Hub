import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { Callout } from "@/components/ui/Card";
import { ScriptBlock } from "@/components/content/ScriptBlock";

export const metadata: Metadata = {
  title: "Transitioning from Scrum to Kanban or Scrumban",
  description: "A phase-by-phase guide for a team moving from Sprint-based Scrum to flow-based Kanban or Scrumban.",
};

const phases = [
  {
    name: "Phase 1 — Visualize the Current Workflow As-Is",
    goal: "See the real workflow before changing anything — this is Kanban's own founding principle, and skipping it undermines everything after.",
    activities: [
      "Map every status work actually passes through today, including the ones not currently visible on the Scrum board (a queue before 'In Progress,' an approval step before 'Done').",
      "Resist the urge to redesign the workflow at this stage — the point is an honest map of reality, not an aspirational one.",
      "Pull whatever historical data already exists (recent cycle times, how long items sat in each status) to establish a real baseline before change.",
    ],
    exitCriteria: "The team agrees the visualized board reflects how work genuinely flows today, not how it's supposed to.",
  },
  {
    name: "Phase 2 — Introduce WIP Limits Inside the Existing Sprint Cadence",
    goal: "This is the Scrumban step — keep Sprint boundaries and the Retrospective cadence for now, while adding Kanban's pull discipline inside each Sprint.",
    activities: [
      "Set an initial WIP limit per column, often a rough starting point like the number of people who'd typically work that stage, and adjust based on what actually happens.",
      "Keep Sprint Planning for now, but start discussing capacity in terms of flow (how much is typically in progress at once) rather than only total points committed.",
      "Watch, and discuss openly in Retro, whether WIP limits are being respected or quietly ignored under pressure — an unenforced WIP limit is worse than no limit, since it creates false confidence.",
    ],
    exitCriteria: "The team is consistently working within its WIP limits for at least two or three Sprints without the limits being treated as optional.",
  },
  {
    name: "Phase 3 — Shift the Team's Metrics",
    goal: "Move the team's shared vocabulary from Sprint-based metrics (velocity, burndown) to flow-based ones (cycle time, throughput, cumulative flow) before removing Sprint boundaries.",
    activities: [
      "Start tracking cycle time per item alongside existing Sprint metrics, so the team has a real baseline before velocity stops being the primary reference.",
      "Introduce reading a Cumulative Flow Diagram together, specifically watching for widening bands as the team's new way of spotting bottlenecks.",
      "Prepare stakeholders for this shift explicitly — a switch away from velocity reporting without warning reads as the team suddenly becoming less measurable, not differently measurable.",
    ],
    exitCriteria: "The team and its stakeholders can read a cycle time forecast and a Cumulative Flow Diagram without the Scrum Master translating it every time.",
  },
  {
    name: "Phase 4 — Decide the Event Cadence Going Forward",
    goal: "Deliberately choose which Scrum events survive the transition and in what form — this choice is what actually distinguishes Scrumban from a full move to Kanban.",
    activities: [
      "Keep the Retrospective on a fixed cadence in almost all cases — regular reflection remains valuable regardless of how work flows.",
      "Replace Sprint Planning with a lighter-weight, more frequent replenishment meeting — pulling new work in as capacity frees up, rather than batching a full Sprint's worth at once.",
      "Decide what replaces the Sprint Review's stakeholder checkpoint — a fixed-cadence delivery review is common, so stakeholders don't lose their regular touchpoint even without Sprint boundaries.",
      "For Scrumban specifically, many teams keep a lightweight Sprint-length planning horizon even without a hard Sprint Backlog commitment — decide explicitly rather than letting it stay ambiguous.",
    ],
    exitCriteria: "Every former Scrum event has an explicit answer: kept as-is, adapted, or deliberately dropped — nothing left ambiguous.",
  },
  {
    name: "Phase 5 — Optionally Remove Sprint Boundaries Entirely (Full Kanban)",
    goal: "Only for teams moving fully to Kanban rather than Scrumban — continuous flow with no Sprint container at all.",
    activities: [
      "Move to a continuous pull model: work is pulled item by item as capacity frees up, with no batch Sprint boundary.",
      "Replace Sprint-based forecasting entirely with cycle-time-based probabilistic forecasting for stakeholder commitments.",
      "Re-confirm the Retrospective cadence — without a Sprint to anchor it, the team needs to deliberately choose a fixed interval (e.g. every two weeks) rather than let reflection quietly stop happening.",
    ],
    exitCriteria: "The team is delivering reliably with no Sprint container, and stakeholders have a working replacement cadence for visibility and feedback.",
  },
];

const challenges = [
  {
    name: "The team feels like it's losing predictability",
    detail:
      "Sprint commitments, however imperfect, gave stakeholders a fixed checkpoint to anchor around — moving to continuous flow can feel like losing that structure entirely unless a clear replacement cadence is set up first.",
  },
  {
    name: "Confusion about whether velocity still means anything",
    detail:
      "It doesn't, in any direct sense, once Sprint boundaries are gone or loosened — teams need an explicit, taught replacement (cycle time forecasting) rather than being left to wonder what number to use instead.",
  },
  {
    name: "WIP limits get ignored without a Sprint's structure to reinforce them",
    detail:
      "A Sprint Backlog creates a natural, visible boundary around commitment; without it, WIP limits are the only thing enforcing focus, and teams under pressure will quietly blow past them if the discipline isn't actively maintained.",
  },
  {
    name: "Stakeholders lose their regular feedback checkpoint",
    detail:
      "If Sprint Review goes away without a deliberate replacement, stakeholders can feel like they've lost visibility into the work entirely, which erodes trust fast — set up the replacement cadence before removing the old one, not after.",
  },
  {
    name: "\"Kanban-but\" — relabeling the board without changing behavior",
    detail:
      "The most common shallow version of this transition: the Scrum board gets renamed a Kanban board, but WIP limits, pull discipline, and flow metrics never actually get adopted — parallel to the 'Scrum-but' anti-pattern, just in the other direction.",
  },
  {
    name: "Disagreement about whether to keep any Sprint-length horizon",
    detail:
      "Pure Kanban purists sometimes push to remove all fixed cadences immediately; in practice, many teams (correctly) find value in keeping a Sprint-length planning horizon even without a hard commitment — that's a legitimate Scrumban choice, not a failure to fully adopt Kanban.",
  },
];

export default function ScrumToKanbanPage() {
  return (
    <ArticleLayout
      eyebrow="Knowledge Hub"
      title="Transitioning from Scrum to Kanban or Scrumban"
      description="For a team that's been running Scrum and has been asked to move to Kanban or a Scrumban hybrid — what actually changes, and how to get there without losing what worked."
      backHref="/knowledge"
      backLabel="Back to Knowledge Hub"
    >
      <p>
        This move usually comes from a real, specific pain: work that doesn&apos;t arrive in tidy,
        plannable batches (production support, a stream of interrupt-driven requests), or item
        sizes that vary so much a fixed-length Sprint stops being a useful planning unit. See{" "}
        <a href="/knowledge/kanban-scrumban" className="text-brand-600 underline">Kanban &amp; Scrumban</a>{" "}
        for the underlying concepts this guide assumes. The distinction that matters most for this
        transition: are you moving to <strong>Scrumban</strong> (a hybrid that keeps some Scrum
        structure) or all the way to <strong>Kanban</strong> (no Sprint boundaries at all)? Most
        teams should treat Scrumban as the default first stop, not skip straight to full Kanban.
      </p>

      <h2>The transition process</h2>
      <div className="not-prose mt-6 space-y-6">
        {phases.map((phase, i) => (
          <div key={phase.name} className="rounded-xl border border-slate-200 p-5">
            <h3 className="text-lg font-semibold text-slate-900">
              <span className="text-brand-600">{i + 1}. </span>
              {phase.name}
            </h3>
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

      <h2>Common challenges in this transition</h2>
      <div className="not-prose mt-6 space-y-5">
        {challenges.map((c) => (
          <div key={c.name} className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-900">{c.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{c.detail}</p>
          </div>
        ))}
      </div>

      <h2>Explaining the metric shift to stakeholders</h2>
      <ScriptBlock
        label="When a stakeholder asks why velocity reporting stopped"
        lines={[
          {
            speaker: "Stakeholder",
            text: "The last few updates haven't mentioned velocity at all — are we not tracking progress the same way anymore?",
            tone: "neutral",
          },
          {
            speaker: "Response that reframes rather than apologizes",
            text: "We're tracking it differently, not less — velocity only made sense with fixed Sprints, and it never really told you when something would ship anyway. Cycle time gives us an actual forecast range for individual items, which is a more direct answer to the question you actually care about.",
            tone: "good",
          },
        ]}
      />

      <Callout title="Signs a team is ready to make this move" tone="warning">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Work genuinely arrives unpredictably (support tickets, incidents) rather than the team simply disliking Sprint commitment.</li>
          <li>Item sizes vary widely enough that Sprint-based capacity planning has been consistently, measurably inaccurate.</li>
          <li>The team already has reasonably healthy Scrum fundamentals — this transition compounds existing dysfunction rather than fixing it.</li>
          <li>There's a plan for how stakeholders will get visibility and a feedback checkpoint once Sprint Review's fixed cadence changes or goes away.</li>
        </ul>
      </Callout>

      <Callout title="Related pages">
        See the <a href="/resources/reading/kanban-successful-evolutionary-change" className="text-brand-600 underline">Kanban book deep-dive</a>{" "}
        for the &quot;start with what you do now&quot; principle Phase 1 is built on, the{" "}
        <a href="/resources/articles/metrics/cycle-time-forecasting" className="text-brand-600 underline">cycle time forecasting article</a>{" "}
        for the replacement metric in detail, and{" "}
        <a href="/resources/articles/metrics/velocity-conversation-with-leadership" className="text-brand-600 underline">
          The Velocity Conversation
        </a>{" "}
        for handling leadership questions about the change.
      </Callout>
    </ArticleLayout>
  );
}
