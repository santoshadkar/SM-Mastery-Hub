import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { Callout } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Confluence for Scrum Masters",
  description: "Documentation patterns for retro notes, working agreements, and roadmaps.",
};

export default function ConfluencePage() {
  return (
    <ArticleLayout
      eyebrow="Tools Hub"
      title="Confluence"
      description="The documentation that actually gets read is the documentation that's easy to find and kept current. A few patterns make that more likely."
      backHref="/tools"
      backLabel="Back to Tools Hub"
    >
      <h2>Structure: one space, a predictable hierarchy</h2>
      <p>
        Give the team a single Confluence space with a consistent page tree rather than scattering
        pages across personal spaces or ad-hoc locations. A structure that scales reasonably well:
      </p>
      <ul>
        <li>Team Home (links to everything below, updated when structure changes)</li>
        <li>Working Agreements (Definition of Ready, Definition of Done, team norms)</li>
        <li>Retrospectives (one page per retro, or one running page per quarter)</li>
        <li>Roadmap (living, not a point-in-time export)</li>
        <li>Onboarding (for new team members and new stakeholders)</li>
      </ul>

      <h2>Retro notes</h2>
      <p>
        Use a template so retros are easy to compare over time and easy to write up quickly. A
        minimal, reusable structure:
      </p>
      <ul>
        <li><strong>What went well</strong> — keep doing</li>
        <li><strong>What didn&apos;t go well</strong> — stop or change</li>
        <li><strong>Action items</strong> — owner and due date for each, carried forward until resolved</li>
        <li><strong>Follow-up from last retro</strong> — did the previous actions actually happen?</li>
      </ul>
      <p>
        The &quot;follow-up from last retro&quot; section is the one most teams skip and the one that
        matters most — without it, retros tend to drift into the &quot;retro theater&quot; anti-pattern
        described in the Knowledge Hub.
      </p>

      <h2>Team working agreements</h2>
      <p>
        A working agreement page should be short enough to actually read before a Sprint Planning
        session — a page of dense prose won&apos;t get referenced. Effective agreements are usually a
        checklist: Definition of Ready (what a story needs before it can be pulled into a Sprint),
        Definition of Done (what &quot;complete&quot; requires), and team norms (core hours, how PRs get
        reviewed, how conflicts get raised). Review and update it at a retro when reality has
        drifted from what&apos;s written, not on a fixed schedule.
      </p>

      <h2>Roadmaps</h2>
      <p>
        A roadmap in Confluence works best as a living page with a timeline view or a simple table
        (theme, target quarter, status, confidence), linked directly to the epics that represent it
        in Jira or Azure DevOps, rather than a static slide export that goes stale the day after
        it&apos;s presented. Mark confidence explicitly (e.g. committed / planned / exploring) so
        stakeholders don&apos;t read a &quot;later&quot; item as a promise.
      </p>

      <Callout title="Related pages">
        See <a href="/tools/jira" className="text-brand-600 underline">Jira</a> for where the
        underlying epics and stories live, and the{" "}
        <a href="/resources" className="text-brand-600 underline">Resources library</a> for a ready-to-copy
        retro template and Definition of Ready/Done checklist.
      </Callout>
    </ArticleLayout>
  );
}
