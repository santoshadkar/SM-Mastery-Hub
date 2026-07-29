import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { Callout } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Running a Retrospective That Actually Leads to Change",
  description: "Why most retros generate the same list every time, and how to break the cycle.",
};

export default function RetroChangePage() {
  return (
    <ArticleLayout
      eyebrow="Article"
      title="Running a Retrospective That Actually Leads to Change"
      description="If your team could recite last retro's action items from memory because nothing happened to them, the format isn't the problem."
      backHref="/resources/articles"
      backLabel="Back to Articles"
    >
      <p>
        Most retrospectives that stop producing value have a format problem on the surface and a
        follow-through problem underneath. Teams notice the format is stale before they notice the
        real issue: the last five retros' action items were never actually revisited.
      </p>

      <h2>Start every retro by closing the loop, not opening a new one</h2>
      <p>
        Before generating anything new, spend the first five minutes reviewing the action items
        from last time. Did they happen? If not, why not — was it forgotten, deprioritized, or
        blocked by something outside the team? This alone changes the tone of the room: the team
        learns that what they say in a retro has consequences, which is what makes the rest of the
        session worth taking seriously.
      </p>

      <h2>Limit the output, not the discussion</h2>
      <p>
        A retro that produces eight action items produces zero completed action items. Let the
        discussion be as wide-ranging as it needs to be, but converge on one or two commitments,
        each with a named owner and a date. If the team genuinely surfaces more than two things
        worth fixing, that's useful information too — it usually means the underlying cause is
        bigger than any one retro can resolve, and it's worth naming that explicitly rather than
        pretending two vague action items will cover it.
      </p>

      <h2>Match the format to the team's actual state</h2>
      <p>
        Start/Stop/Continue is a fine default, but it assumes a team that's roughly stable and
        willing to speak plainly. After an incident-heavy sprint, a format like Mad/Sad/Glad gives
        people permission to name the emotional cost before jumping to solutions. After a
        long, uneventful sprint, a more analytical format (the Sailboat, or a straightforward
        timeline of events) can surface things a default format would miss because nothing feels
        urgent enough to mention.
      </p>

      <h2>Watch for retro theater specifically</h2>
      <p>
        The clearest sign a retro has become theater is when the same issue appears three retros
        in a row with a new action item each time, and no one in the room reacts to the repetition.
        When you see that pattern, name it directly: &quot;this is the third time we've raised this —
        what's actually stopping us from fixing it at the root?&quot; That question alone often surfaces
        the real, harder problem hiding behind the recurring symptom.
      </p>

      <h2>Make the facilitator's role temporary</h2>
      <p>
        A retro that only works when you personally run it isn't durable. Rotate facilitation to
        different team members periodically. It surfaces a different set of blind spots than
        yours, and it means the retro survives your vacation, a reorg, or you eventually moving to
        a different team.
      </p>

      <Callout title="Related pages">
        See the <a href="/resources" className="text-brand-600 underline">retro formats in the Resources library</a>{" "}
        for a rotation of options, and{" "}
        <a href="/knowledge/anti-patterns" className="text-brand-600 underline">Anti-Patterns &amp; Fixes</a>{" "}
        for more on &quot;retro theater&quot; specifically.
      </Callout>
    </ArticleLayout>
  );
}
