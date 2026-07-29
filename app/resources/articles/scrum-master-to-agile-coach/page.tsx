import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { Callout } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "From Scrum Master to Agile Coach: What Actually Changes",
  description: "The real differences in scope, skills, and daily work between the two roles.",
};

export default function ScrumMasterToAgileCoachPage() {
  return (
    <ArticleLayout
      eyebrow="Article"
      title="From Scrum Master to Agile Coach: What Actually Changes"
      description="The title change is easy. The scope change is the part worth thinking through before you make the move."
      backHref="/resources/articles"
      backLabel="Back to Articles"
    >
      <p>
        &quot;Agile Coach&quot; is used inconsistently across the industry — at some organizations it's
        just a more senior Scrum Master title, at others it's a genuinely different job. The
        distinction that tends to hold up in practice is scope: a Scrum Master's accountability is
        usually one team; an Agile Coach's accountability usually spans multiple teams, or the
        organizational system those teams sit inside.
      </p>

      <h2>What stays the same</h2>
      <p>
        The core skills don't change: facilitation, coaching conversations, servant leadership,
        reading team dynamics, understanding Scrum (or Kanban) deeply enough to adapt it rather
        than just apply it by rote. If those fundamentals are shaky, a title change to &quot;Agile
        Coach&quot; doesn't fix that — it just applies the same gaps to a wider surface area.
      </p>

      <h2>What actually changes</h2>
      <ul>
        <li>
          <strong>Scope of influence.</strong> You're no longer optimizing one team's Daily Scrum —
          you're looking at how work flows between teams, where handoffs create delay, and whether
          the organization's structure itself is the constraint.
        </li>
        <li>
          <strong>Distance from daily execution.</strong> You have less visibility into any single
          team's day-to-day reality, which means you have to get comfortable making judgments with
          less direct observation and more reliance on what teams and their Scrum Masters tell you.
        </li>
        <li>
          <strong>Political complexity.</strong> Organizational-level change usually touches
          budgets, reporting lines, and management incentives — problems a single-team Scrum
          Master rarely has to navigate directly.
        </li>
        <li>
          <strong>Coaching other Scrum Masters, not just teams.</strong> Part of the job becomes
          developing the Scrum Masters underneath you, which is a different skill from coaching a
          team directly — it's coaching someone else's coaching.
        </li>
        <li>
          <strong>Framework fluency across more than Scrum.</strong> At this scope, you're more
          likely to need working knowledge of scaled frameworks (SAFe, LeSS, Nexus, Scrum@Scale) —
          not necessarily to adopt one wholesale, but to speak the language of an organization that
          has, or is deciding whether to.
        </li>
      </ul>

      <h2>Signs you might be ready</h2>
      <p>
        You consistently score well on servant leadership and facilitation dimensions rather than
        just Scrum mechanics. You've already been informally coaching other Scrum Masters or
        peers, even without the title. You're comfortable raising organizational-level impediments
        rather than absorbing them at the team level. And — a good gut check — you're already
        curious about the scaled frameworks and organizational design questions rather than finding
        them abstract or irrelevant to your work.
      </p>

      <h2>Signs the timing might be premature</h2>
      <p>
        If your current team still needs significant hands-on coaching to run its own events well,
        or if your own Scrum fundamentals still feel shaky under pressure, a broader scope will
        dilute your attention rather than multiply your impact. It's a reasonable, common choice to
        get one team to a strong, self-sufficient state first.
      </p>

      <Callout title="Related pages">
        Check your own readiness with the{" "}
        <a href="/assessment" className="text-brand-600 underline">Maturity Self-Assessment</a>{" "}
        (particularly the Servant Leadership and Scaling dimensions), and read{" "}
        <a href="/knowledge/scaled-frameworks" className="text-brand-600 underline">Scaled Agile Frameworks</a>{" "}
        to build the organizational vocabulary the role tends to require.
      </Callout>
    </ArticleLayout>
  );
}
