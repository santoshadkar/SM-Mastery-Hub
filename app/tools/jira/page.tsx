import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { Callout } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Jira for Scrum Masters",
  description: "Boards, workflows, and the reports a Scrum Master should monitor in Jira.",
};

export default function JiraPage() {
  return (
    <ArticleLayout
      eyebrow="Tools Hub"
      title="Jira"
      description="Jira is the most common tool for running Scrum boards. Here's what to configure and what to actually watch."
      backHref="/tools"
      backLabel="Back to Tools Hub"
    >
      <h2>Boards</h2>
      <p>
        A Jira Scrum board is generated from a saved filter (usually a project and a set of issue
        types) and organizes issues into a Sprint. The board itself is mostly configuration, and a
        few settings matter more than the rest:
      </p>
      <ul>
        <li>
          <strong>Columns and statuses</strong> — map your team&apos;s real workflow states to
          columns (e.g. To Do, In Progress, In Review, Done) rather than accepting Jira&apos;s
          defaults. Too many columns hides bottlenecks in the noise; too few hides them by merging
          distinct states together.
        </li>
        <li>
          <strong>Column constraints (WIP limits)</strong> — Jira lets you cap the number of issues
          in a column and will flag it visually when exceeded. Worth turning on for any column
          where multitasking is a known problem (often &quot;In Review&quot;).
        </li>
        <li>
          <strong>Swimlanes</strong> — group by epic, assignee, or a custom JQL query. Grouping by
          epic is usually more useful for a Scrum Master than by assignee, since it keeps attention
          on outcomes rather than individual utilization.
        </li>
        <li>
          <strong>Definition of Done as a workflow gate</strong> — where possible, don&apos;t let an
          issue move to &quot;Done&quot; without required fields (e.g. a linked test, a resolved
          resolution field) filled in, so the workflow enforces what the team agreed Done means.
        </li>
      </ul>

      <h2>Reports worth actually watching</h2>
      <p>
        Jira ships several built-in reports. Most are diagnostic tools, not vanity metrics — the
        value is in what they reveal about flow, not the number itself:
      </p>
      <ul>
        <li>
          <strong>Sprint burndown</strong> — remaining work (in points or hours) against time left
          in the Sprint. A flat line for several days is a stronger signal than the final total: it
          usually means work is stuck, not that the team is behind on effort.
        </li>
        <li>
          <strong>Velocity chart</strong> — completed points per Sprint over time, useful only for
          that team&apos;s own forecasting. Comparing velocity across teams is a reliable way to
          incentivize point inflation — see the anti-patterns page.
        </li>
        <li>
          <strong>Cumulative Flow Diagram</strong> — the count of issues in each status over time,
          stacked. A band that steadily widens is a bottleneck at that stage, visible well before it
          would show up in the burndown.
        </li>
        <li>
          <strong>Control chart</strong> — cycle time per issue, useful for flow-based (Kanban or
          Scrumban) teams to see whether cycle time is stable, trending, or has high variance that
          makes forecasting unreliable.
        </li>
      </ul>

      <h2>Backlog and refinement</h2>
      <p>
        Keep the Product Backlog in Jira&apos;s Backlog view ordered by priority, not just by
        creation date, and use epics to group related stories so refinement sessions can work
        top-down through a theme rather than jumping between unrelated items. Story point estimates
        and acceptance criteria belong on the issue itself, not in a separate document, so they
        travel with the work through the whole workflow.
      </p>

      <Callout title="Related pages">
        See <a href="/tools/confluence" className="text-brand-600 underline">Confluence</a> for
        where team working agreements and Definition of Done documentation should live, and{" "}
        <a href="/tools/azure-devops" className="text-brand-600 underline">Azure DevOps</a> for the
        equivalent setup if your organization uses that instead.
      </Callout>
    </ArticleLayout>
  );
}
