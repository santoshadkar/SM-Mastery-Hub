import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { Callout } from "@/components/ui/Card";
import { ScriptBlock } from "@/components/content/ScriptBlock";

export const metadata: Metadata = {
  title: "Running a Retrospective That Actually Leads to Change",
  description: "Why most retros generate the same list every time, and how to break the cycle.",
};

export default function RetroChangePage() {
  return (
    <ArticleLayout
      eyebrow="Article"
      title="Running a Retrospective That Actually Leads to Change"
      description="If your team could recite last retro's action items from memory because nothing ever happened to them, the format was never the problem."
      backHref="/resources/articles"
      backLabel="Back to Articles"
    >
      <p>
        Most retrospectives that stop producing value have a format problem on the surface and a
        follow-through problem underneath. Teams notice the format is stale before they admit the
        real issue: the last five retros&apos; action items were never actually revisited. Changing the
        format without fixing that is rearranging furniture in a room that&apos;s on fire.
      </p>

      <h2>Open by closing the loop, every single time</h2>
      <p>
        Before generating anything new, spend the first five minutes reviewing last time&apos;s action
        items. Did they happen? If not, why not — forgotten, deprioritized, or blocked by something
        outside the team? Skip this once and it&apos;s a bad week. Skip it three retros running and
        you&apos;ve trained the team that nothing they say here matters, which is a much harder thing
        to undo than it was to prevent.
      </p>
      <ScriptBlock
        label="Opening the loop"
        lines={[
          {
            speaker: "Facilitator",
            text: "Before we start anything new — last retro we said we'd add a 'blocked' column to the board by Wednesday. Did that happen?",
            tone: "neutral",
          },
          {
            speaker: "Team",
            text: "...kind of? We talked about it but didn't actually set it up.",
            tone: "neutral",
          },
          {
            speaker: "Facilitator, not letting it slide",
            text: "Okay — let's actually do that in the next five minutes before we move on, then. What's stopping it from being real right now?",
            tone: "good",
          },
        ]}
      />

      <h2>Limit the output, not the discussion</h2>
      <p>
        A retro that produces eight action items produces zero completed action items — that&apos;s
        not a motivation problem, it&apos;s a math problem. Let the discussion run wide, but converge
        on one or two commitments, each with a named owner and a real date. If the team surfaces
        five things worth fixing, that&apos;s useful information too: it usually means the underlying
        cause is bigger than any one retro can resolve, and naming that honestly beats pretending
        two vague bullet points will cover it.
      </p>

      <h2>Watch for the third-time pattern — and say something about it</h2>
      <p>
        The clearest sign a retro has become theater is the same issue surfacing three retros in a
        row, each time with a fresh action item, and nobody in the room reacting to the repetition.
        This is the moment most facilitators let slide because naming it feels confrontational. Name
        it anyway — this exact confrontation is the highest-leverage thing you'll say all sprint.
      </p>
      <ScriptBlock
        label="The third-time confrontation"
        lines={[
          {
            speaker: "Facilitator",
            text: "This is the third retro in a row we've raised 'unclear requirements.' Last time the action was 'ask more questions in refinement.' Did that actually happen?",
            tone: "neutral",
          },
          {
            speaker: "Team",
            text: "Sort of — but it still keeps happening.",
            tone: "neutral",
          },
          {
            speaker: "Facilitator, going underneath the symptom",
            text: "Then 'ask more questions' probably isn't the real fix. What's actually stopping us from getting clear requirements before we start — is it timing, is it the Product Owner not having the answers yet, or something else?",
            tone: "good",
          },
        ]}
      />
      <p>
        That question — asked plainly, without blame — is usually what surfaces the actual root
        cause hiding behind a recurring symptom. It&apos;s uncomfortable precisely because it implies
        the last two retros didn&apos;t work. That discomfort is the cost of an honest retro; a
        comfortable one that keeps generating the same symptom is not actually cheaper, it&apos;s just
        cheaper today.
      </p>

      <h2>Match the format to the team's actual state</h2>
      <p>
        Start/Stop/Continue is a fine default, but it assumes a team that&apos;s stable and willing to
        speak plainly. After an incident-heavy sprint, Mad/Sad/Glad gives people permission to name
        the emotional cost before jumping to solutions. After a long, uneventful sprint, a more
        analytical format (the Sailboat, or a plain timeline of events) surfaces things a default
        format would miss because nothing feels urgent enough to mention on its own.
      </p>

      <h2>Make the facilitator's role temporary</h2>
      <p>
        A retro that only works when you personally run it isn&apos;t durable. Rotate facilitation to
        other team members periodically — it surfaces blind spots yours won&apos;t, and it means the
        retro survives your vacation, a reorg, or you eventually moving to a different team
        entirely.
      </p>

      <Callout title="Related pages">
        See the <a href="/resources/reading" className="text-brand-600 underline">five-phase retro model</a>{" "}
        this article's structure comes from, the{" "}
        <a href="/resources" className="text-brand-600 underline">retro formats in the Resources library</a>{" "}
        for a rotation of options, and{" "}
        <a href="/knowledge/anti-patterns" className="text-brand-600 underline">Anti-Patterns &amp; Fixes</a>{" "}
        for more on &quot;retro theater&quot; specifically.
      </Callout>
    </ArticleLayout>
  );
}
