import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { Callout } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Anti-Patterns & Fixes",
  description: "Common ways Scrum and Agile go wrong, and how to address each one.",
};

const antiPatterns = [
  {
    name: "Zombie Scrum",
    symptom:
      "The team runs every event on schedule — stand-up, planning, review, retro — but there's no real inspection or adaptation happening. Meetings happen because the calendar says so, not because anyone expects them to change anything.",
    fix:
      "Pick one event and make its output visible and binding: e.g. every retrospective ends with 1-2 concrete actions that show up on the next Sprint's backlog. Rebuilding the habit of acting on inspection in one event tends to spread to the others.",
  },
  {
    name: "Watermelon status",
    symptom:
      "Sprint and project status looks green from the outside (on a report, in a stand-up) but is actually red once you look inside — scope is slipping, quality is degrading, or the team is quietly over capacity.",
    fix:
      "Replace subjective status colors with a small set of objective signals the team already produces: a real burndown/cumulative flow trend, the Definition of Done checklist, and an honest count of carried-over items. Make it safe to report red early.",
  },
  {
    name: "Mini-waterfall sprints",
    symptom:
      "Within a single Sprint, work still moves in phases — all analysis first, then all building, then all testing crammed at the end — so nothing is really 'done' until the last day, and problems surface too late to fix.",
    fix:
      "Push the team toward slicing backlog items small enough that each one goes analysis-build-test within days, not the whole Sprint. Track a Cumulative Flow Diagram or a simple aging chart to catch items stuck in one phase.",
  },
  {
    name: "Absent or proxy Product Owner",
    symptom:
      "The Product Owner is unavailable for most of the Sprint, or a business analyst answers on their behalf without real authority to make backlog and priority decisions — leading to stale requirements and Sprint Reviews where nothing gets truly accepted.",
    fix:
      "Name the actual decision-maker and negotiate a minimum weekly cadence they commit to (backlog refinement, PO office hours). If a proxy is genuinely required, get explicit, written decision authority delegated to them rather than leaving it implicit.",
  },
  {
    name: "Scrum Master as task master",
    symptom:
      "The Scrum Master runs the Daily Scrum like a status meeting directed at them, assigns tasks, and chases people for updates — effectively acting as a project manager rather than a servant-leader.",
    fix:
      "Step back physically and verbally from the Daily Scrum — let Developers address each other, not the Scrum Master. Redirect 'what did you do yesterday' questions back to the team: 'are we still on track for the Sprint Goal?' is the question that matters.",
  },
  {
    name: "Story point inflation / gaming velocity",
    symptom:
      "Velocity keeps climbing sprint over sprint without any real increase in delivered value, because the team has learned that leadership treats velocity as a performance metric rather than a planning input.",
    fix:
      "Stop using velocity to compare teams or as a target to hit. Use it only for that team's own forecasting, and pair it with a quality/outcome metric (e.g. escaped defects, cycle time) so inflating points stops being the path of least resistance.",
  },
  {
    name: "Retro theater",
    symptom:
      "Retrospectives surface the same issues sprint after sprint, action items are written down but never actually followed up on, and the team has quietly stopped expecting anything to change.",
    fix:
      "Cap the number of action items per retro (one or two), assign a clear owner, and open the next retro by reviewing whether they actually happened before generating new ones. Vary the retro format if energy is low — see the facilitation guides in the Resources library.",
  },
  {
    name: "Hidden technical debt in a 'done' increment",
    symptom:
      "Items are marked done to hit the Sprint Goal, but testing, refactoring, or documentation was skipped and quietly deferred, so the Definition of Done doesn't reflect what actually shipped.",
    fix:
      "Make the Definition of Done specific and visible on the board itself, and treat 'not meeting DoD' as not done, full stop — even if that means the Sprint Goal isn't met. Track a running technical-debt backlog so deferred work is visible instead of invisible.",
  },
  {
    name: "Cross-team multitasking",
    symptom:
      "Developers are split across two or more teams or projects at once, so no team ever has their full, dedicated attention — Sprint plans are consistently missed and nobody can say why.",
    fix:
      "Make the allocation visible (a simple matrix of person x team x percentage) and take it to whoever controls resourcing as a concrete impediment, with the cost in missed Sprint Goals attached. This is often an organizational impediment, not a team-level one — escalate it as such.",
  },
];

export default function AntiPatternsPage() {
  return (
    <ArticleLayout
      eyebrow="Knowledge Hub"
      title="Anti-Patterns & Fixes"
      description="The most common ways Scrum and Agile break down in real teams — and what a Scrum Master can actually do about each one."
      backHref="/knowledge"
      backLabel="Back to Knowledge Hub"
    >
      <p>
        Most Scrum dysfunction doesn&apos;t come from the framework being wrong — it comes from the
        mechanics being followed while the underlying values (transparency, inspection, adaptation,
        and the Scrum values of commitment, focus, openness, respect, and courage) are quietly
        absent. The patterns below are some of the most common, with a concrete first step for
        each.
      </p>

      <div className="not-prose mt-8 space-y-6">
        {antiPatterns.map((p) => (
          <div key={p.name} className="rounded-xl border border-slate-200 p-5">
            <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              <span className="font-medium text-slate-800">Symptom: </span>
              {p.symptom}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              <span className="font-medium text-slate-800">First step: </span>
              {p.fix}
            </p>
          </div>
        ))}
      </div>

      <Callout title="Not every problem is a Scrum problem" tone="warning">
        Some of these (proxy Product Owner, cross-team multitasking) are organizational
        constraints the team can&apos;t fix on its own. Part of the Scrum Master&apos;s job is telling
        the difference and escalating the ones that require organizational change, rather than
        absorbing them as the team&apos;s failure.
      </Callout>
    </ArticleLayout>
  );
}
