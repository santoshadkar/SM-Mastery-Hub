import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { Callout } from "@/components/ui/Card";
import { SprintCycleDiagram } from "@/components/graphics/SprintCycleDiagram";

export const metadata: Metadata = {
  title: "The Scrum Framework",
  description: "Roles, events, artifacts, and empirical process control in Scrum.",
};

export default function ScrumFrameworkPage() {
  return (
    <ArticleLayout
      eyebrow="Knowledge Hub"
      title="The Scrum Framework"
      description="Scrum is a lightweight framework for developing, delivering, and sustaining complex products through iterative, incremental work."
      backHref="/knowledge"
      backLabel="Back to Knowledge Hub"
    >
      <h2>Empirical process control</h2>
      <p>
        Scrum is built on empiricism: the idea that knowledge comes from experience and
        decisions should be based on what is observed, not on upfront prediction. Three pillars
        support this:
      </p>
      <ul>
        <li>
          <strong>Transparency</strong> — the process and the work must be visible to everyone
          responsible for the outcome, using a shared, common understanding of what &quot;done&quot; means.
        </li>
        <li>
          <strong>Inspection</strong> — artifacts and progress toward the goal are inspected
          frequently enough to detect problems, but not so often that inspection itself gets in
          the way of the work.
        </li>
        <li>
          <strong>Adaptation</strong> — when inspection shows that something is outside acceptable
          limits, the process or the product is adjusted as soon as possible.
        </li>
      </ul>
      <p>
        Scrum also names five values that make empiricism work in practice: commitment, focus,
        openness, respect, and courage. When teams struggle with Scrum, it&apos;s frequently a
        breakdown in one of these values rather than a problem with the mechanics.
      </p>

      <h2>The three accountabilities</h2>
      <p>Scrum defines three accountabilities, not job titles or reporting lines:</p>
      <ul>
        <li>
          <strong>Product Owner</strong> — accountable for maximizing the value of the product
          that results from the team&apos;s work. Owns the Product Backlog, including its content,
          ordering, and visibility.
        </li>
        <li>
          <strong>Scrum Master</strong> — accountable for the team&apos;s effectiveness, and for
          establishing Scrum as defined in practice. Serves the team, the Product Owner, and the
          wider organization — coaching, removing impediments, and facilitating events without
          directing the work itself.
        </li>
        <li>
          <strong>Developers</strong> — the people who commit to creating any aspect of a usable
          increment each Sprint. Cross-functional as a group, self-managing in how they turn the
          backlog into an increment.
        </li>
      </ul>

      <h2>The five events</h2>
      <div className="not-prose my-6">
        <SprintCycleDiagram />
      </div>
      <ul>
        <li>
          <strong>The Sprint</strong> — a fixed-length container (typically one to four weeks)
          for all other events. No changes are made that would endanger the Sprint Goal; scope may
          be clarified and renegotiated with the Product Owner as more is learned.
        </li>
        <li>
          <strong>Sprint Planning</strong> — the team decides why this Sprint is valuable (the
          Sprint Goal), what can be done (which backlog items), and how the chosen work will get
          done.
        </li>
        <li>
          <strong>Daily Scrum</strong> — a short (roughly 15-minute), Developer-owned inspection of
          progress toward the Sprint Goal, used to adjust the plan for the next day.
        </li>
        <li>
          <strong>Sprint Review</strong> — the team and stakeholders inspect the outcome of the
          Sprint and adapt the Product Backlog based on what was learned; a working session, not a
          one-way demo.
        </li>
        <li>
          <strong>Sprint Retrospective</strong> — the team inspects how the last Sprint went in
          terms of individuals, interactions, process, and tools, and plans improvements to carry
          into the next Sprint.
        </li>
      </ul>

      <h2>The three artifacts and their commitments</h2>
      <p>Each artifact carries a commitment that gives it a clear target to measure progress against:</p>
      <ul>
        <li>
          <strong>Product Backlog</strong> — the ordered, emergent list of everything known to be
          needed in the product. Its commitment is the <strong>Product Goal</strong>, the longer-term
          objective the Scrum Team is working toward.
        </li>
        <li>
          <strong>Sprint Backlog</strong> — the Sprint Goal, the backlog items selected for the
          Sprint, and the plan for delivering them. Its commitment is the <strong>Sprint Goal</strong>,
          the single objective for the Sprint.
        </li>
        <li>
          <strong>Increment</strong> — a concrete, usable step toward the Product Goal, meeting the
          team&apos;s Definition of Done. Its commitment is the <strong>Definition of Done</strong>, the
          shared standard that determines when work is actually complete.
        </li>
      </ul>

      <h2>What a Scrum Master actually does</h2>
      <p>
        A common misconception is that the Scrum Master runs the daily stand-up like a project
        manager and reports status upward. In practice, the accountability runs the other way: the
        Scrum Master serves the Developers by coaching self-management and cross-functionality,
        serves the Product Owner by helping with backlog management techniques and stakeholder
        collaboration, and serves the organization by leading adoption of Scrum and removing
        barriers between stakeholders and the team.
      </p>

      <Callout title="Related pages">
        See <a href="/knowledge/anti-patterns" className="text-brand-600 underline">Anti-Patterns &amp; Fixes</a>{" "}
        for the most common ways these roles and events break down, and the{" "}
        <a href="/tools/jira" className="text-brand-600 underline">Jira</a> /{" "}
        <a href="/tools/azure-devops" className="text-brand-600 underline">Azure DevOps</a> guides
        for how to configure boards around these artifacts.
      </Callout>
    </ArticleLayout>
  );
}
