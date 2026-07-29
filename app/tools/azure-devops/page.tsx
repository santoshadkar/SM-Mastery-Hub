import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { Callout } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Azure DevOps for Scrum Masters",
  description: "Boards, sprints, and dashboards in Azure DevOps.",
};

export default function AzureDevOpsPage() {
  return (
    <ArticleLayout
      eyebrow="Tools Hub"
      title="Azure DevOps"
      description="Azure Boards covers the same ground as Jira with different vocabulary — here's the equivalent setup."
      backHref="/tools"
      backLabel="Back to Tools Hub"
    >
      <h2>Boards</h2>
      <p>
        Azure Boards organizes work into a hierarchy of work item types (commonly Epic &rarr;
        Feature &rarr; User Story/Bug &rarr; Task, depending on the selected process — Basic,
        Agile, Scrum, or CMMI). The Scrum process template in Azure DevOps maps closely to the
        Scrum framework itself: Product Backlog Items, Sprint Backlog, and a Taskboard for the
        active Sprint. As with Jira, a few configuration choices matter more than the rest:
      </p>
      <ul>
        <li>
          <strong>Board columns and swimlanes</strong> — customize columns per team to reflect the
          real workflow, and use the &quot;split column&quot; option (Doing / Done within one column) to
          make within-column WIP visible.
        </li>
        <li>
          <strong>WIP limits</strong> — set per-column limits on the Kanban board view; Azure Boards
          highlights columns that exceed their limit the same way Jira does.
        </li>
        <li>
          <strong>Taskboard vs. Kanban board</strong> — the Taskboard shows the active Sprint broken
          into tasks (useful for the Daily Scrum); the Kanban board shows backlog items across
          their full workflow (useful for refinement and flow tracking). Teams doing Scrumban tend
          to live almost entirely on the Kanban board.
        </li>
      </ul>

      <h2>Sprints</h2>
      <p>
        Azure DevOps handles Sprints as iteration paths with start/end dates, shared across the
        team&apos;s area path. Sprint Planning happens by dragging backlog items into the active
        iteration and breaking them into tasks with remaining-work estimates, which is what powers
        the Sprint burndown.
      </p>

      <h2>Dashboards worth building</h2>
      <p>
        Azure DevOps dashboards are widget-based and can be shared with stakeholders directly,
        which makes them a good home for the same signals covered on the Jira page:
      </p>
      <ul>
        <li><strong>Sprint Burndown widget</strong> — remaining work vs. time left in the Sprint.</li>
        <li><strong>Velocity widget</strong> — completed work per Sprint, for that team&apos;s own forecasting only.</li>
        <li>
          <strong>Cumulative Flow Diagram (CFD) widget</strong> — work items by state over time;
          available on the Analytics-backed widgets for teams with Analytics enabled.
        </li>
        <li>
          <strong>Cycle Time / Lead Time widgets</strong> — for flow-based teams tracking Scrumban
          rather than sprint velocity.
        </li>
      </ul>
      <p>
        As with any tool, the dashboard is only as useful as the team&apos;s discipline in keeping
        task status and remaining-work estimates current — a burndown built on stale task states
        will look calm right up until the Sprint Review reveals it wasn&apos;t.
      </p>

      <Callout title="Related pages">
        See <a href="/tools/jira" className="text-brand-600 underline">Jira</a> for the equivalent
        Jira-specific configuration, and{" "}
        <a href="/knowledge/kanban-scrumban" className="text-brand-600 underline">Kanban &amp; Scrumban</a>{" "}
        for how to read cycle time and cumulative flow metrics.
      </Callout>
    </ArticleLayout>
  );
}
