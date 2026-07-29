import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { Callout } from "@/components/ui/Card";
import { ScriptBlock } from "@/components/content/ScriptBlock";

export const metadata: Metadata = {
  title: "Your First 30 Days as a New Scrum Master",
  description: "What to prioritize in your first month on a new team, before you try to fix anything.",
};

export default function FirstThirtyDaysPage() {
  return (
    <ArticleLayout
      eyebrow="Article"
      title="Your First 30 Days as a New Scrum Master"
      description="The instinct to fix things fast is a trap — and it's the single most common way new Scrum Masters burn their credibility before they've earned any."
      backHref="/resources/articles"
      backLabel="Back to Articles"
    >
      <p>
        Here's the uncomfortable truth: by day three, you will have spotted at least one real
        problem. Your instinct will be to fix it immediately, because that's what got you hired —
        you're good at spotting problems and solving them. Resist it anyway. The team hasn&apos;t
        decided whether to trust you yet, and a fix imposed by someone who hasn&apos;t earned that
        trust doesn&apos;t stick — it just gets quietly worked around the moment you look away.
      </p>

      <h2>Week 1: Observe more than you speak</h2>
      <p>
        Attend every event without changing anything about how it runs. Take notes on what seems
        to work, what seems tense, and where energy drops. Have informal 1:1s with each team
        member — not a &quot;get to know you&quot; interview, a real conversation about what frustrates
        them. The hardest part of week one isn&apos;t the observing. It&apos;s staying quiet when someone
        asks you, directly, to solve something on the spot.
      </p>
      <ScriptBlock
        label="Week 1 — the estimation question"
        lines={[
          {
            speaker: "Developer, day 2",
            text: "So what's your plan to fix our estimation problem? We're always wrong.",
            tone: "neutral",
          },
          {
            speaker: "Wrong answer (feels helpful, isn't)",
            text: "Oh, I've seen this before — switch to T-shirt sizing, it usually fixes it.",
            tone: "bad",
          },
          {
            speaker: "Right answer (feels unhelpful, isn't)",
            text: "I don't have one yet — I want to understand what's actually causing it first. Can you walk me through a specific sprint where the estimate went really wrong?",
            tone: "good",
          },
        ]}
      />
      <p>
        That T-shirt-sizing answer might even be right eventually. In week one it&apos;s guaranteed to
        be wrong, because you don&apos;t yet know whether the estimation problem is really about
        estimation — or about a Product Owner who quietly changes scope mid-sprint and blames the
        number afterward. Fixing the wrong layer doesn&apos;t just fail; it teaches the team you make
        calls without listening, which is the exact reputation you spend the rest of the quarter
        undoing.
      </p>

      <h2>Week 2: Understand the system around the team</h2>
      <p>
        Meet the Product Owner properly — not just in Scrum events, one-on-one, to understand their
        pressures and how they actually see the backlog. Meet the team&apos;s key stakeholders. Pull
        the last 3-6 sprints of data if it exists: velocity, carryover, incident load. You&apos;re
        mapping the system, not the team, because most of what limits a team in its first month is
        outside the team&apos;s control — and if you diagnose it as a team problem, you'll spend your
        political capital fixing the wrong thing.
      </p>

      <h2>Week 3: Name one thing, small and safe</h2>
      <p>
        By now you&apos;ve probably spotted the highest-leverage problem in the whole system. Do not
        touch it yet. Pick something small, low-risk, and clearly inside the team&apos;s own control —
        a retro format that&apos;s gone stale, a Daily Scrum that&apos;s turned into status reporting — and
        propose it as a reversible experiment, not a verdict on how they&apos;ve been working.
      </p>
      <ScriptBlock
        label="Week 3 — proposing the small change"
        lines={[
          {
            speaker: "Framing that lands",
            text: "I noticed our Daily Scrum has turned into updates directed at me. Can we try, just for this week, everyone talking to each other instead — and I'll stay quiet unless something needs unblocking?",
            tone: "good",
          },
        ]}
      />
      <p>
        Notice the shape of that sentence: &quot;just for this week&quot; and &quot;try&quot; do real work. They
        make the ask reversible, which is what makes it safe for a team that doesn&apos;t know you yet
        to say yes.
      </p>

      <h2>Week 4: Start the real conversation about the bigger issues</h2>
      <p>
        With one small, visible win behind you, you&apos;re in a position to raise what you actually
        spotted in week one — an absent Product Owner, an unclear Definition of Done, a dependency
        that causes carryover every single sprint. These conversations land differently once the
        team has seen you deliver on something small first, instead of arriving as a stranger with
        a list of everything wrong.
      </p>
      <ScriptBlock
        label="Week 4 — naming the absent Product Owner"
        lines={[
          {
            speaker: "To the team, not the PO, first",
            text: "I've noticed refinement keeps stalling because questions for the Product Owner sit unanswered for days. Is that something you've felt too, or is it just me reading it wrong?",
            tone: "good",
          },
          {
            speaker: "Then, to the Product Owner, privately",
            text: "The team's blocked on your input more often than makes sense for a healthy backlog. What would a sustainable weekly rhythm for refinement questions look like for you?",
            tone: "good",
          },
        ]}
      />

      <h2>What to avoid in the first month</h2>
      <ul>
        <li>Rewriting the team&apos;s working agreements before you&apos;ve actually read them.</li>
        <li>Comparing this team unfavorably to a previous one you worked with, even implicitly.</li>
        <li>Taking over facilitation of every event immediately — let the team keep some ownership while you&apos;re still learning the terrain.</li>
        <li>Promising to fix problems that are actually organizational, before you&apos;ve worked out whether they&apos;re yours to fix at all.</li>
      </ul>

      <Callout title="Related pages">
        See <a href="/knowledge/anti-patterns" className="text-brand-600 underline">Anti-Patterns &amp; Fixes</a>{" "}
        for the dysfunctions you&apos;re most likely to spot in week one, and{" "}
        <a href="/assessment" className="text-brand-600 underline">the Maturity Self-Assessment</a>{" "}
        to get a baseline read on your own starting point in the role.
      </Callout>
    </ArticleLayout>
  );
}
