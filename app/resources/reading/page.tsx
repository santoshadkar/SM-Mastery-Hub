import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { Callout } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "The Real Ideas Behind the Books We Recommend",
  description:
    "Deep breakdowns of the actual frameworks from four well-known Agile books — not blurbs.",
};

export default function RecommendedReadingPage() {
  return (
    <ArticleLayout
      eyebrow="Free Resources"
      title="The Real Ideas Behind the Books We Recommend"
      description="Not a summary of what each book is about — a real, usable breakdown of the actual model each one is known for. We can't reproduce the books' text, so this is our own detailed write-up of the ideas, written to be immediately useful even if you never open the book."
      backHref="/resources"
      backLabel="Back to Resources"
    >
      <h2>Agile Retrospectives — Esther Derby &amp; Diana Larsen</h2>
      <p>
        This is the book almost every retro format in circulation traces back to. Its central
        contribution is a five-phase structure for a retrospective — and the reason most retros
        that have gone stale feel pointless is almost always that two of the five phases got
        quietly skipped.
      </p>
      <h3>1. Set the Stage (2–5 minutes)</h3>
      <p>
        The point isn&apos;t small talk — it&apos;s getting every person&apos;s voice into the room early, on
        something low-stakes, so silence doesn&apos;t calcify for the rest of the session. A single
        round of &quot;one word for how this sprint felt&quot; does more work than it looks like: the
        Scrum Master now knows, before the real conversation starts, whether the room is tired,
        tense, or fine.
      </p>
      <h3>2. Gather Data (10–15 minutes)</h3>
      <p>
        This is the phase teams skip most, and it&apos;s the one that matters most. Before anyone is
        allowed to say what they think should change, the team reconstructs a shared, factual
        timeline of what actually happened — deploys, blockers, decisions, incidents — plus how
        people felt at each point. Skip this and the retro runs on whoever&apos;s memory is loudest
        that day, not on what actually occurred.
      </p>
      <h3>3. Generate Insights (15–20 minutes)</h3>
      <p>
        Now, and only now, the team is allowed to ask why. The technique that does the most work
        here is simply asking &quot;why&quot; again on anything that sounds like a recurring theme, instead
        of accepting the first answer. A team that jumps straight here from Set the Stage ends up
        debating opinions instead of examining a shared set of facts, which is exactly how retros
        turn into the same two people arguing every time.
      </p>
      <h3>4. Decide What To Do (10–15 minutes)</h3>
      <p>
        The discipline here is subtraction, not addition. A good retro will surface five or six
        plausible actions; the job is to cut that down to one or two, each with a named owner and
        a real date, and let the rest go. Teams that walk out with six action items walk out with
        zero completed action items — that&apos;s not a motivation problem, it&apos;s a math problem.
      </p>
      <h3>5. Close (5 minutes)</h3>
      <p>
        A deliberate ending — often a quick round of appreciation — plus an explicit statement that
        next retro will open by checking whether this one&apos;s actions actually happened. That single
        sentence is what turns a retro from a venting session into a mechanism the team can trust.
      </p>
      <p>
        <strong>The uncomfortable part:</strong> if your retros feel like theater, it&apos;s rarely the
        format. It&apos;s that Gather Data and Close are the two phases teams cut when short on time —
        and those are precisely the two phases that make the other three matter.
      </p>

      <h2>Coaching Agile Teams — Lyssa Adkins</h2>
      <p>
        The book&apos;s most useful idea is a distinction between four different ways of helping
        someone, and the observation that new Scrum Masters overwhelmingly default to the one that
        feels the most useful in the moment and is, long-term, the least developmental.
      </p>
      <p>Take a real question a Developer might ask: &quot;Should we refactor this now or after the Sprint?&quot; The same question, answered four different ways:</p>
      <ul>
        <li>
          <strong>Teaching</strong> — &quot;Refactor now. Technical debt compounds, and it&apos;s cheaper to
          fix today than in three sprints.&quot; You have knowledge the team lacks, so you supply it
          directly.
        </li>
        <li>
          <strong>Mentoring</strong> — &quot;When I hit this on a past team, we let it ride and paid for
          it for months — I&apos;d lean toward doing it now, but you know this codebase better than I
          do.&quot; You share your own experience as a data point, not an instruction.
        </li>
        <li>
          <strong>Facilitating</strong> — &quot;Let&apos;s put this to the whole team — what are the
          tradeoffs as you all see them?&quot; You own the process of the conversation, not its
          content or outcome.
        </li>
        <li>
          <strong>Coaching</strong> — &quot;What would help you decide between the two right now?&quot; You
          contribute nothing about the content at all — only a question that helps them find their
          own answer.
        </li>
      </ul>
      <p>
        <strong>Why this matters:</strong> Teaching feels the best in the moment — it&apos;s fast, and
        it looks like you&apos;re adding value. It&apos;s also the mode that keeps a team dependent on you.
        Coaching is the hardest of the four because it means tolerating the team&apos;s short-term
        struggle — visibly not helping, by the normal definition of help — in exchange for their
        long-term ownership of the decision. Most Scrum Masters have to consciously practice
        reaching for coaching and facilitating before teaching, because teaching is what comes
        naturally under pressure.
      </p>

      <h2>Scrum: The Art of Doing Twice the Work in Half the Time — Jeff Sutherland</h2>
      <p>
        Strip away the origin story and the book&apos;s actual argument is about waste — specifically,
        that most of the waste in knowledge work isn&apos;t laziness or bad tooling, it&apos;s
        context-switching. A person split across three projects doesn&apos;t deliver a third of each;
        the overhead of switching contexts eats a large, often invisible chunk of all three. Scrum&apos;s
        mechanics — a single ranked backlog, one Sprint Goal, a team that doesn&apos;t start new work
        mid-sprint — exist specifically to make multitasking harder to hide and harder to default
        into.
      </p>
      <p>
        <strong>The uncomfortable part for a lot of &quot;Scrum&quot; teams:</strong> the book&apos;s results
        depend on the parts of Scrum that create real pressure — a genuinely single priority at a
        time, and stopping unfinished work rather than quietly carrying it forward sprint after
        sprint. It&apos;s common for organizations to keep the ceremonies (stand-ups, sprints, a
        backlog) while dropping the parts that actually constrain behavior, and then wonder why
        the promised results never showed up. The mechanics without the constraint are just a
        calendar with extra meetings.
      </p>

      <h2>Team Topologies — Matthew Skelton &amp; Manuel Pais</h2>
      <p>
        Directly useful for the Scaling dimension of this site&apos;s self-assessment: the book gives
        actual vocabulary for a problem every Scrum Master eventually hits — a team blocked on
        another team, with no shared language for why that dependency is expensive or what to do
        about it.
      </p>
      <h3>Four team types</h3>
      <ul>
        <li><strong>Stream-aligned</strong> — organized around one continuous flow of work (a product, service, or user journey), able to deliver end-to-end without waiting on another team for most of what it needs.</li>
        <li><strong>Enabling</strong> — exists to help stream-aligned teams close a capability gap, temporarily, through coaching and consulting — not by doing the work for them.</li>
        <li><strong>Complicated-subsystem</strong> — owns a piece of the system that genuinely requires deep specialist knowledge, so stream-aligned teams don&apos;t all need that specialism themselves.</li>
        <li><strong>Platform</strong> — provides internal infrastructure or tooling that stream-aligned teams consume like a product, removing undifferentiated heavy lifting from their plate.</li>
      </ul>
      <h3>Three interaction modes</h3>
      <ul>
        <li><strong>Collaboration</strong> — two teams working closely together for a bounded period. High communication overhead, useful when the boundary between the teams&apos; work genuinely isn&apos;t clear yet.</li>
        <li><strong>X-as-a-Service</strong> — one team consumes another&apos;s output as a well-defined service, with minimal ongoing back-and-forth required.</li>
        <li><strong>Facilitating</strong> — one team helps another get unstuck, temporarily, with the explicit goal of removing the dependency over time rather than making it permanent.</li>
      </ul>
      <p>
        <strong>Why this matters:</strong> most organizations default every cross-team relationship
        to Collaboration out of habit, because it feels thorough — and it&apos;s the single most
        expensive mode there is. If your team is gridlocked waiting on another team, this framework
        gives you a genuinely useful question to bring to that conversation: does this relationship
        actually need to be Collaboration, or would X-as-a-Service be cheaper for both sides once
        the boundary is clear?
      </p>

      <Callout title="Related pages">
        See the <a href="/knowledge/scaled-frameworks" className="text-brand-600 underline">Scaled Agile Frameworks</a>{" "}
        page for how these ideas relate to SAFe, LeSS, Nexus, and Scrum@Scale, and the{" "}
        <a href="/resources/articles/retro-that-leads-to-change" className="text-brand-600 underline">retrospective article</a>{" "}
        for how the five-phase model plays out with a real facilitation script.
      </Callout>
    </ArticleLayout>
  );
}
