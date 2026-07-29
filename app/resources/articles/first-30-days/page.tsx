import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { Callout } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Your First 30 Days as a New Scrum Master",
  description: "What to prioritize in your first month on a new team, before you try to fix anything.",
};

export default function FirstThirtyDaysPage() {
  return (
    <ArticleLayout
      eyebrow="Article"
      title="Your First 30 Days as a New Scrum Master"
      description="The instinct to fix things fast is understandable — and usually a mistake. Here's a week-by-week alternative."
      backHref="/resources/articles"
      backLabel="Back to Articles"
    >
      <p>
        New Scrum Masters — especially ones coming from a project management or delivery lead
        background — tend to make the same early mistake: they see three or four things wrong in
        the first week and start fixing them immediately. The problem isn&apos;t that the
        observations are wrong. It&apos;s that the team hasn&apos;t decided yet whether to trust you,
        and a fix imposed by someone who hasn&apos;t earned that trust rarely sticks.
      </p>

      <h2>Week 1: Observe more than you speak</h2>
      <p>
        Attend every event without changing anything about how it runs. Take notes on what seems
        to work, what seems tense, and where energy drops. Have informal 1:1s with each team
        member — not a formal &quot;get to know you&quot; interview, just a real conversation about what
        they enjoy and what frustrates them about how the team currently operates. Resist the urge
        to share your own opinions yet.
      </p>

      <h2>Week 2: Understand the system around the team</h2>
      <p>
        Meet the Product Owner properly — not just in Scrum events, but one-on-one, to understand
        their pressures and how they see the backlog. Meet the team&apos;s key stakeholders. Look at
        the last 3-6 sprints of data if it exists: velocity, carryover, incident load. You&apos;re
        building a map of the actual system, not just the team, because most of what limits a team
        early on is outside the team&apos;s control.
      </p>

      <h2>Week 3: Name one thing, small and safe</h2>
      <p>
        By now you&apos;ve probably spotted the highest-leverage problem. Resist fixing the biggest
        one first. Pick something small, low-risk, and clearly within the team&apos;s own control —
        a retro format that's gone stale, a Daily Scrum that's turned into status reporting — and
        propose a specific, reversible experiment. Frame it as an experiment, not a verdict on how
        they've been working.
      </p>

      <h2>Week 4: Start the real conversation about the bigger issues</h2>
      <p>
        With one small win behind you and a month of real observation, you're in a position to
        raise the harder topics — an absent Product Owner, unclear Definition of Done, or
        cross-team dependencies causing repeated carryover. These conversations land differently
        once the team has seen you deliver on something small first.
      </p>

      <h2>What to avoid in the first month</h2>
      <ul>
        <li>Rewriting the team's working agreements before you've read them.</li>
        <li>Comparing this team unfavorably to a previous team you worked with, even implicitly.</li>
        <li>Taking over facilitation of every event immediately — let the team keep some ownership while you learn.</li>
        <li>Promising fixes to problems that are actually organizational, before you've assessed whether they're yours to fix.</li>
      </ul>

      <Callout title="Related pages">
        See <a href="/knowledge/anti-patterns" className="text-brand-600 underline">Anti-Patterns &amp; Fixes</a>{" "}
        for the dysfunctions you're most likely to spot in week one, and{" "}
        <a href="/assessment" className="text-brand-600 underline">the Maturity Self-Assessment</a>{" "}
        to get a baseline read on your own starting point in the role.
      </Callout>
    </ArticleLayout>
  );
}
