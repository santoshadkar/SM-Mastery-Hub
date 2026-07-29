import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { Callout } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Managing Up: Communicating Sprint Reality to Skeptical Stakeholders",
  description: "How to deliver an honest status update when a stakeholder only wants good news.",
};

export default function ManagingUpPage() {
  return (
    <ArticleLayout
      eyebrow="Article"
      title="Managing Up: Communicating Sprint Reality to Skeptical Stakeholders"
      description="Some stakeholders reward good news and punish bad news. That doesn't mean the answer is to only deliver good news."
      backHref="/resources/articles"
      backLabel="Back to Articles"
    >
      <p>
        Every Scrum Master eventually deals with a stakeholder whose reaction to bad news makes it
        tempting to soften it next time. The instinct is understandable — nobody enjoys the
        reaction — but a pattern of softened updates compounds into exactly the &quot;watermelon
        status&quot; anti-pattern: green on the outside, red underneath, discovered too late to do
        anything about it.
      </p>

      <h2>Lead with data, not adjectives</h2>
      <p>
        &quot;We're a bit behind&quot; invites debate about what &quot;a bit&quot; means. &quot;We've completed 60% of
        committed points with two days left in the Sprint, and the remaining items depend on a
        third-party API that's been unstable this week&quot; doesn't. Specific, falsifiable statements
        are harder to argue with than vague reassurance — and they position you as someone
        reporting facts, not someone whose mood the stakeholder needs to manage.
      </p>

      <h2>Separate the fact from the plan</h2>
      <p>
        Bad news lands better when it arrives with a next step attached. &quot;This is behind&quot; is a
        dead end. &quot;This is behind, here's why, and here's what we're doing about it by Friday&quot;
        gives the stakeholder something to do with the information besides being upset. If you
        don't have a next step yet, say so honestly rather than inventing one — &quot;we don't have a
        fix yet, and I'll have an update by end of day tomorrow&quot; is still better than false
        reassurance.
      </p>

      <h2>Say it earlier than feels comfortable</h2>
      <p>
        The instinct is to wait until you're sure before raising a risk, in case it resolves
        itself. In practice, the stakeholder almost always prefers an early flag that turns out to
        be unnecessary over a late one that leaves no time to react. Frame early flags explicitly
        as risks, not certainties: &quot;flagging early in case this becomes a problem&quot; sets the right
        expectation and doesn't cost you credibility if it resolves on its own.
      </p>

      <h2>When the reaction is genuinely disproportionate</h2>
      <p>
        Sometimes the issue isn't your communication — it's that the stakeholder reacts punitively
        to any bad news regardless of how it's framed. That's worth naming directly, ideally in a
        1:1 rather than in the moment: &quot;I want to keep giving you accurate updates, including when
        things aren't on track — can we talk about how that lands for you?&quot; This is uncomfortable,
        but the alternative — quietly softening updates to manage their reaction — is how
        organizations end up genuinely surprised by problems that were visible for weeks.
      </p>

      <h2>Use the Sprint Review as evidence, not persuasion</h2>
      <p>
        A stakeholder who only hears about problems in a status document can dismiss them more
        easily than one who's seen the actual state of the work in a genuine Sprint Review. Make
        the Review a real working session — show the actual state of things, not a curated demo —
        so skepticism has less room to grow between updates.
      </p>

      <Callout title="Related pages">
        See <a href="/tools/confluence" className="text-brand-600 underline">Confluence</a> for
        how to structure a roadmap that communicates confidence levels honestly, and{" "}
        <a href="/knowledge/anti-patterns" className="text-brand-600 underline">Anti-Patterns &amp; Fixes</a>{" "}
        for more on &quot;watermelon status.&quot;
      </Callout>
    </ArticleLayout>
  );
}
