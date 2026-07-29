import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { Callout } from "@/components/ui/Card";
import { ScriptBlock } from "@/components/content/ScriptBlock";

export const metadata: Metadata = {
  title: "Managing Up: Communicating Sprint Reality to Skeptical Stakeholders",
  description: "How to deliver an honest status update when a stakeholder only wants good news.",
};

export default function ManagingUpPage() {
  return (
    <ArticleLayout
      eyebrow="Article"
      title="Managing Up: Communicating Sprint Reality to Skeptical Stakeholders"
      description="“We'll try our best” is not a status update. It's a way of delaying an uncomfortable conversation until it's too late to do anything about it."
      backHref="/resources/articles"
      backLabel="Back to Articles"
    >
      <p>
        Every Scrum Master eventually deals with a stakeholder whose reaction to bad news makes it
        tempting to soften it next time. The instinct is understandable — nobody enjoys the
        reaction. But a pattern of softened updates compounds into exactly the &quot;watermelon
        status&quot; anti-pattern: green on the outside, red underneath, discovered too late to do
        anything about it.
      </p>

      <h2>The trap: &quot;we'll try our best&quot;</h2>
      <p>
        This phrase feels safe because it commits to nothing and offends no one. That&apos;s exactly
        the problem — it tells the stakeholder nothing, and everyone in the room knows it. It
        doesn&apos;t buy goodwill; it buys silence until Friday, at which point there&apos;s no time left
        to do anything except explain why it didn&apos;t happen.
      </p>
      <ScriptBlock
        label="The trap vs. the real answer"
        lines={[
          {
            speaker: "Stakeholder",
            text: "This just needs to be done by Friday. I don't want excuses.",
            tone: "neutral",
          },
          {
            speaker: "The trap",
            text: "Understood — we'll try our best to get it done.",
            tone: "bad",
          },
          {
            speaker: "The real answer",
            text: "Here's exactly where we are: 3 of 5 items are done. The remaining 2 are blocked on the vendor API, which has been down since Tuesday. If it's back today, we make Friday. If not, here's what I'd cut to still hit the date.",
            tone: "good",
          },
        ]}
      />
      <p>
        Notice what the real answer does that &quot;we&apos;ll try&quot; never can: it gives the stakeholder
        an actual decision to make, today, while there&apos;s still time to make it. &quot;We&apos;ll try&quot;
        gives them nothing to do except wait and be disappointed later.
      </p>

      <h2>Lead with data, not adjectives</h2>
      <p>
        &quot;We&apos;re a bit behind&quot; invites an argument about what &quot;a bit&quot; means. A specific,
        falsifiable statement doesn&apos;t. It also repositions you: from someone whose mood the
        stakeholder has to manage, to someone reporting facts they can act on.
      </p>

      <h2>Say it earlier than feels comfortable</h2>
      <p>
        The instinct is to wait until you&apos;re certain before raising a risk, in case it resolves
        itself. In practice, almost every stakeholder prefers an early flag that turns out to be
        unnecessary over a late one that leaves no time to react. Frame it explicitly as a risk, not
        a certainty — that costs you nothing if it resolves on its own, and buys real time if it
        doesn&apos;t.
      </p>
      <ScriptBlock
        label="Flagging early, before you're sure"
        lines={[
          {
            speaker: "Scrum Master, day 2 of the sprint",
            text: "Flagging early in case this becomes a real problem: the vendor API had two outages last week. If that pattern continues, it could put Thursday's deliverable at risk. Nothing to act on yet, but I wanted you to have it now rather than Thursday.",
            tone: "good",
          },
        ]}
      />

      <h2>When the reaction is genuinely disproportionate</h2>
      <p>
        Sometimes the problem isn&apos;t your communication — the stakeholder reacts punitively to any
        bad news, however it&apos;s framed. That&apos;s worth naming directly, in a 1:1, not in the moment
        the news lands.
      </p>
      <ScriptBlock
        label="Naming the pattern, in private"
        lines={[
          {
            speaker: "Scrum Master, 1:1",
            text: "I want to keep giving you accurate updates, including when things aren't on track. I've noticed those updates tend to get a strong reaction — can we talk about how that's landing for you, and what would help?",
            tone: "good",
          },
        ]}
      />
      <p>
        This is uncomfortable to say. The alternative — quietly softening updates to manage their
        reaction — is how organizations end up genuinely surprised by problems that were visible
        for weeks, and it&apos;s the Scrum Master who softened the updates who ends up holding that
        blame, not the stakeholder whose reaction caused it.
      </p>

      <h2>Use the Sprint Review as evidence, not persuasion</h2>
      <p>
        A stakeholder who only hears about problems in a status document can dismiss them more
        easily than one who&apos;s seen the actual state of the work. Make the Review a real working
        session — show what actually exists, not a curated demo — so skepticism has less room to
        grow between updates.
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
