import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { Callout } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Kanban & Scrumban",
  description: "Flow-based delivery with Kanban, and how Scrumban blends it with Scrum.",
};

export default function KanbanScrumbanPage() {
  return (
    <ArticleLayout
      eyebrow="Knowledge Hub"
      title="Kanban & Scrumban"
      description="Kanban manages work as a continuous flow rather than fixed-length iterations. Scrumban borrows from both worlds."
      backHref="/knowledge"
      backLabel="Back to Knowledge Hub"
    >
      <h2>What Kanban is</h2>
      <p>
        Kanban is a method for managing and improving the flow of work through a system,
        popularized for knowledge work by David J. Anderson in the late 2000s, drawing on Lean
        manufacturing ideas. Unlike Scrum, Kanban doesn&apos;t prescribe roles, events, or timeboxes.
        Instead, it defines a small set of practices that can be layered onto whatever process a
        team already runs:
      </p>
      <ul>
        <li>
          <strong>Visualize the workflow</strong> — make every stage work passes through visible,
          usually as columns on a board (e.g. Backlog, In Progress, Review, Done).
        </li>
        <li>
          <strong>Limit work in progress (WIP)</strong> — cap how many items can sit in a given
          column at once, which surfaces bottlenecks instead of hiding them behind more
          multitasking.
        </li>
        <li>
          <strong>Manage flow</strong> — actively watch how work moves through the system and
          address where it slows down or queues up.
        </li>
        <li>
          <strong>Make policies explicit</strong> — write down the rules for how items move between
          columns (e.g. what &quot;ready for review&quot; means) so decisions are consistent and visible.
        </li>
        <li>
          <strong>Implement feedback loops</strong> — regular cadences (e.g. a replenishment
          meeting, a delivery review) to inspect the system, similar in spirit to Scrum events but
          not mandatory or fixed-length.
        </li>
        <li>
          <strong>Improve collaboratively, evolve experimentally</strong> — use models and the
          scientific method to drive incremental, evidence-based change.
        </li>
      </ul>

      <h2>Reading a Kanban board and its metrics</h2>
      <p>
        A Kanban board pulls work rather than pushing it: a column only pulls in the next item once
        it has capacity, which is what the WIP limit enforces. The key metrics that come out of
        this are:
      </p>
      <ul>
        <li>
          <strong>Lead time</strong> — the time from when an item is requested to when it&apos;s
          delivered.
        </li>
        <li>
          <strong>Cycle time</strong> — the time from when work actually starts on an item to when
          it&apos;s finished, a narrower and often more actionable window than lead time.
        </li>
        <li>
          <strong>Throughput</strong> — how many items complete per unit of time, useful for
          forecasting without needing to estimate every item in story points.
        </li>
        <li>
          <strong>Cumulative Flow Diagram (CFD)</strong> — a stacked area chart of items in each
          state over time; a widening band for a given stage is a visible sign of a bottleneck.
        </li>
      </ul>

      <h2>What Scrumban is</h2>
      <p>
        Scrumban is a hybrid that keeps some of Scrum&apos;s structure — most often the Sprint
        Retrospective and a lightweight planning cadence — while replacing sprint-based, capacity
        planned iterations with Kanban&apos;s pull system and WIP limits. Instead of pulling a fixed
        batch of backlog items into a Sprint Backlog every one to four weeks, the team pulls new
        work item-by-item as capacity frees up, using WIP limits instead of a Sprint Backlog to
        bound how much is in flight at once.
      </p>
      <p>Scrumban tends to fit well when:</p>
      <ul>
        <li>
          A team does a mix of planned feature work and unplanned, interrupt-driven work (e.g.
          production support, incident response), where committing to a fixed Sprint Backlog isn&apos;t
          realistic.
        </li>
        <li>
          A team is transitioning away from Scrum toward a more continuous-flow way of working, and
          wants an incremental path rather than a hard cutover.
        </li>
        <li>
          Work items vary wildly in size and arrive unpredictably, making sprint-based capacity
          planning consistently inaccurate.
        </li>
      </ul>
      <p>
        In practice, a Scrum Master supporting a Scrumban team shifts from planning capacity by
        sprint to tuning WIP limits and replenishment cadence, and from tracking a burndown chart
        to tracking cycle time and a cumulative flow diagram.
      </p>

      <Callout title="Related pages">
        See <a href="/tools/jira" className="text-brand-600 underline">Jira</a> and{" "}
        <a href="/tools/azure-devops" className="text-brand-600 underline">Azure DevOps</a> for how
        to configure boards and WIP limits, and{" "}
        <a href="/knowledge/scrum-framework" className="text-brand-600 underline">The Scrum Framework</a>{" "}
        for the events Scrumban borrows from.
      </Callout>
    </ArticleLayout>
  );
}
