export interface BookNote {
  slug: string;
  title: string;
  author: string;
  summary: string;
  readMinutes: number;
  body: string;
}

export const bookNotes: BookNote[] = [
  {
    slug: "agile-retrospectives",
    title: "Agile Retrospectives: Making Good Teams Great",
    author: "Esther Derby & Diana Larsen",
    summary:
      "The five-phase retro structure almost every format on this site descends from — and why skipping two of the phases is exactly why your retros feel pointless.",
    readMinutes: 7,
    body: `This is the book almost every retro format in circulation traces back to. Its central contribution is a five-phase structure for a retrospective — and the reason most retros that have gone stale feel pointless is almost always that two of the five phases got quietly skipped.

## 1. Set the Stage (2-5 minutes)

The point isn't small talk — it's getting every person's voice into the room early, on something low-stakes, so silence doesn't calcify for the rest of the session. A single round of "one word for how this sprint felt" does more work than it looks like: the Scrum Master now knows, before the real conversation starts, whether the room is tired, tense, or fine.

## 2. Gather Data (10-15 minutes)

This is the phase teams skip most, and it's the one that matters most. Before anyone is allowed to say what they think should change, the team reconstructs a shared, factual timeline of what actually happened — deploys, blockers, decisions, incidents — plus how people felt at each point. Skip this and the retro runs on whoever's memory is loudest that day, not on what actually occurred.

## 3. Generate Insights (15-20 minutes)

Now, and only now, the team is allowed to ask why. The technique that does the most work here is simply asking "why" again on anything that sounds like a recurring theme, instead of accepting the first answer. A team that jumps straight here from Set the Stage ends up debating opinions instead of examining a shared set of facts.

## 4. Decide What To Do (10-15 minutes)

The discipline here is subtraction, not addition. A good retro will surface five or six plausible actions; the job is to cut that down to one or two, each with a named owner and a real date, and let the rest go. Teams that walk out with six action items walk out with zero completed action items.

## 5. Close (5 minutes)

A deliberate ending — often a quick round of appreciation — plus an explicit statement that next retro will open by checking whether this one's actions actually happened. That single sentence is what turns a retro from a venting session into a mechanism the team can trust.

**The uncomfortable part:** if your retros feel like theater, it's rarely the format. It's that Gather Data and Close are the two phases teams cut when short on time — and those are precisely the two phases that make the other three matter.

## Related pages

See [Running a Retrospective That Actually Leads to Change](/resources/articles/facilitation/retro-that-leads-to-change) for how this structure plays out with a real facilitation script.`,
  },
  {
    slug: "coaching-agile-teams",
    title: "Coaching Agile Teams",
    author: "Lyssa Adkins",
    summary:
      "The four different ways to help a team — and why 'coaching' is the one new Scrum Masters use least, because it's the one that doesn't feel like help.",
    readMinutes: 6,
    body: `The book's most useful idea is a distinction between four different ways of helping someone, and the observation that new Scrum Masters overwhelmingly default to the one that feels the most useful in the moment and is, long-term, the least developmental.

Take a real question a Developer might ask: "Should we refactor this now or after the Sprint?" The same question, answered four different ways:

- **Teaching** — "Refactor now. Technical debt compounds, and it's cheaper to fix today than in three sprints." You have knowledge the team lacks, so you supply it directly.
- **Mentoring** — "When I hit this on a past team, we let it ride and paid for it for months — I'd lean toward doing it now, but you know this codebase better than I do." You share your own experience as a data point, not an instruction.
- **Facilitating** — "Let's put this to the whole team — what are the tradeoffs as you all see them?" You own the process of the conversation, not its content or outcome.
- **Coaching** — "What would help you decide between the two right now?" You contribute nothing about the content at all — only a question that helps them find their own answer.

**Why this matters:** Teaching feels the best in the moment — it's fast, and it looks like you're adding value. It's also the mode that keeps a team dependent on you. Coaching is the hardest of the four because it means tolerating the team's short-term struggle — visibly not helping, by the normal definition of help — in exchange for their long-term ownership of the decision.

Most Scrum Masters have to consciously practice reaching for coaching and facilitating before teaching, because teaching is what comes naturally under pressure.

## Related pages

See [The Question That Actually Coaches](/resources/articles/servant-leadership/the-question-that-actually-coaches) and [When to Stop Coaching and Start Directing](/resources/articles/servant-leadership/when-to-stop-coaching-and-direct) for this framework applied to real situations.`,
  },
  {
    slug: "scrum-doing-twice-the-work",
    title: "Scrum: The Art of Doing Twice the Work in Half the Time",
    author: "Jeff Sutherland",
    summary:
      "Why the book's core argument isn't about ceremonies at all — it's about what multitasking actually costs a team, and why most 'Scrum' rollouts never test that idea for real.",
    readMinutes: 6,
    body: `Strip away the origin story and the book's actual argument is about waste — specifically, that most of the waste in knowledge work isn't laziness or bad tooling, it's context-switching. A person split across three projects doesn't deliver a third of each; the overhead of switching contexts eats a large, often invisible chunk of all three.

Scrum's mechanics — a single ranked backlog, one Sprint Goal, a team that doesn't start new work mid-sprint — exist specifically to make multitasking harder to hide and harder to default into.

**The uncomfortable part for a lot of "Scrum" teams:** the book's results depend on the parts of Scrum that create real pressure — a genuinely single priority at a time, and stopping unfinished work rather than quietly carrying it forward sprint after sprint. It's common for organizations to keep the ceremonies (stand-ups, sprints, a backlog) while dropping the parts that actually constrain behavior, and then wonder why the promised results never showed up. The mechanics without the constraint are just a calendar with extra meetings.

## Related pages

See [The Scrum Framework](/knowledge/scrum-framework) for how these mechanics fit together, and [Anti-Patterns & Fixes](/knowledge/anti-patterns) for "cross-team multitasking" as a concrete example of this cost.`,
  },
  {
    slug: "team-topologies",
    title: "Team Topologies",
    author: "Matthew Skelton & Manuel Pais",
    summary:
      "The four team types and three interaction modes that give you actual vocabulary for why a cross-team dependency is expensive — and what to do about it.",
    readMinutes: 7,
    body: `Directly useful for the Scaling dimension of this site's self-assessment: the book gives actual vocabulary for a problem every Scrum Master eventually hits — a team blocked on another team, with no shared language for why that dependency is expensive or what to do about it.

## Four team types

- **Stream-aligned** — organized around one continuous flow of work (a product, service, or user journey), able to deliver end-to-end without waiting on another team for most of what it needs.
- **Enabling** — exists to help stream-aligned teams close a capability gap, temporarily, through coaching and consulting — not by doing the work for them.
- **Complicated-subsystem** — owns a piece of the system that genuinely requires deep specialist knowledge, so stream-aligned teams don't all need that specialism themselves.
- **Platform** — provides internal infrastructure or tooling that stream-aligned teams consume like a product, removing undifferentiated heavy lifting from their plate.

## Three interaction modes

- **Collaboration** — two teams working closely together for a bounded period. High communication overhead, useful when the boundary between the teams' work genuinely isn't clear yet.
- **X-as-a-Service** — one team consumes another's output as a well-defined service, with minimal ongoing back-and-forth required.
- **Facilitating** — one team helps another get unstuck, temporarily, with the explicit goal of removing the dependency over time rather than making it permanent.

**Why this matters:** most organizations default every cross-team relationship to Collaboration out of habit, because it feels thorough — and it's the single most expensive mode there is. If your team is gridlocked waiting on another team, this framework gives you a genuinely useful question to bring to that conversation: does this relationship actually need to be Collaboration, or would X-as-a-Service be cheaper for both sides once the boundary is clear?

## Related pages

See [What to Do When Two Teams Are Blocked on Each Other](/resources/articles/scaling/two-teams-blocked-on-each-other) and [When Your Team Needs a Platform Team](/resources/articles/scaling/when-your-team-needs-a-platform-team) for this framework applied directly.`,
  },
  {
    slug: "scrum-field-guide",
    title: "The Scrum Field Guide",
    author: "Mitch Lacey",
    summary:
      "Not one big model — a repeating pattern for real Scrum problems: name the symptom, trace it to the principle being violated, apply a concrete fix. Here's that pattern in practice.",
    readMinutes: 5,
    body: `Unlike a book built around one central framework, this one's value is in a repeated pattern applied across dozens of specific, recognizable Scrum problems: a Product Owner who won't prioritize, a team that pads every estimate, a stakeholder who wants updates outside the Sprint Review. Each time, the book follows the same three-step move.

## The pattern: symptom, principle, fix

**Step 1 — name the symptom precisely.** Not "the team is slow," but the exact, specific behavior: "estimates are consistently 2-3x actual effort." Precision here matters because vague symptoms get vague, ineffective fixes.

**Step 2 — trace it to the Scrum principle actually being violated.** Padded estimates, for instance, usually trace back to a broken feedback loop between estimate and consequence — the team has learned that inaccurate estimates get punished, so they protect themselves with padding, which is a rational response to a bad incentive, not a skill problem.

**Step 3 — apply a fix aimed at the principle, not the symptom.** For padded estimates specifically: separate estimation from commitment publicly, and stop treating variance from an estimate as a personal failure — the fix targets the incentive causing the behavior, not the number itself.

**Why this pattern matters more than any single fix:** most Scrum dysfunction gets treated at the symptom level — a padded estimate gets a stricter estimating process, a quiet Product Owner gets a scolding about responsiveness — when the actual, durable fix requires identifying which underlying principle broke first.

## Related pages

See [Anti-Patterns & Fixes](/knowledge/anti-patterns) for a similar symptom-to-fix structure applied to common Scrum dysfunctions on this site.`,
  },
  {
    slug: "kanban-successful-evolutionary-change",
    title: "Kanban: Successful Evolutionary Change for Your Technology Business",
    author: "David J. Anderson",
    summary:
      "The book's real argument isn't the Kanban board — it's 'start with what you do now,' and why that's a harder discipline than it sounds.",
    readMinutes: 5,
    body: `It's easy to read this book as being about WIP limits and columns — those are real practices, and they're covered in depth on the [Kanban & Scrumban](/knowledge/kanban-scrumban) page. The book's actual distinguishing argument is narrower and, in practice, harder to follow: change evolutionarily, starting from the process the team already runs, rather than replacing it wholesale.

## "Start with what you do now," taken seriously

This principle sounds obvious and is routinely ignored in practice — most process changes, including a lot of "adopting Kanban," actually mean discarding the current process and installing a new one, which is precisely the disruptive approach the book argues against. Genuinely starting with what you do now means visualizing the existing workflow, however messy, before changing a single practice.

## Respect current roles, responsibilities, and job titles

Unlike some Scrum implementations that redefine roles as part of the rollout, the book's approach explicitly avoids forcing organizational or role changes as a precondition — the argument is that a team's willingness to improve its process shouldn't have to survive an unrelated fight over titles and reporting lines first.

## Encourage leadership at all levels, not just from the top

The book's version of change doesn't depend on a mandate from above — small improvements, proposed and owned by whoever notices the opportunity, are how the system actually gets better over time, which is a meaningfully different model than a leadership-driven transformation program.

**Why this is harder than it sounds:** evolutionary change is slower and less visually impressive than a clean-slate rollout, which makes it a hard sell to leadership wanting to point at a dramatic "before and after." The book's bet is that slower, less disruptive change actually sticks, where dramatic mandated change frequently reverts once attention moves elsewhere.

## Related pages

See [Kanban & Scrumban](/knowledge/kanban-scrumban) for the practices (WIP limits, visualizing flow) this evolutionary approach is applied to.`,
  },
  {
    slug: "radical-candor",
    title: "Radical Candor",
    author: "Kim Scott",
    summary:
      "The 2x2 that explains why feedback so often lands as either an attack or gets watered down into nothing — and the one quadrant that's actually neither.",
    readMinutes: 5,
    body: `The book's central, widely-cited model is a simple 2x2: one axis is "Care Personally," the other is "Challenge Directly." Most feedback failures come from being strong on only one axis, not both.

## The four quadrants

- **Radical Candor** (high on both) — you challenge someone directly because you genuinely care about their success, and you say so plainly. This is the target, and it's uncomfortable to practice because it requires both honesty and warmth at the same time, which don't always come naturally together.
- **Obnoxious Aggression** (challenge without care) — blunt, harsh feedback delivered without any signal that you're invested in the person, which reads as an attack regardless of how technically accurate it is.
- **Ruinous Empathy** (care without challenge) — the most common failure mode for people who consider themselves kind: withholding honest feedback to avoid discomfort, which feels compassionate in the moment and is often the least respectful option, since it denies someone the information they need to improve.
- **Manipulative Insincerity** (neither) — feedback that's dishonest and self-serving, offered for political reasons rather than the recipient's benefit.

**Why Ruinous Empathy is the one to watch for as a Scrum Master specifically:** the servant-leadership instinct — protect the team, don't be the harsh voice — pushes naturally toward Ruinous Empathy. Telling yourself you're "being kind" by not naming a real problem directly is usually just avoiding the discomfort of Radical Candor while calling it compassion.

## Related pages

See [Having the Conversation When a Team Member Isn't Pulling Their Weight](/resources/articles/servant-leadership/coaching-a-team-member-not-pulling-weight) for this model applied to a real, specific conversation.`,
  },
  {
    slug: "crucial-conversations",
    title: "Crucial Conversations",
    author: "Kerry Patterson, Joseph Grenny, Ron McMillan & Al Switzler",
    summary:
      "The skill of noticing when a normal conversation has quietly become high-stakes — and restoring safety before continuing, instead of pushing through it.",
    readMinutes: 5,
    body: `The book's core distinction is naming what makes a conversation "crucial": high stakes, differing opinions, and strong emotions, all present at once. Most communication advice assumes calm, low-stakes exchanges — this book is specifically about the much harder case where those conditions are all in play simultaneously.

## Notice safety leaving the conversation, not just content going wrong

The book's key practical insight is that people stop being able to hear content accurately once they no longer feel safe in the conversation — at that point, the problem isn't what's being said, it's that the conversation itself has become unsafe, and no amount of better content will fix that until safety is restored first.

> **A sign safety has left the room:** the other person goes either silent (withdrawing, deflecting, going quiet) or verbally aggressive (attacking, labeling, exaggerating) — both are signals to stop and address the safety of the conversation itself before continuing with the original point.

## Restore safety before returning to content

Once safety is visibly gone, the move isn't to push the original point harder — it's to explicitly step out of the content and address the relationship in the moment, often by clarifying what you don't mean before restating what you do.

> **Restoring safety mid-conversation:** "I don't want this to feel like an attack — my goal here is to figure this out together, not to blame anyone. Can we back up for a second?"

**Why this matters specifically for a Scrum Master:** facilitation and coaching conversations are exactly the kind of moderate-stakes, opinion-differing situations that can tip into "crucial" without warning — the skill of noticing the tip and addressing safety directly, rather than plowing through the discomfort, is what separates a conversation that resolves something from one that just damages trust.

## Related pages

See [Handling a Mid-Sprint Scope Change](/resources/articles/scrum-fundamentals/mid-sprint-scope-change) and [Managing Up](/resources/articles/stakeholder-management/managing-up) for conversations that can tip into exactly this territory.`,
  },
  {
    slug: "five-dysfunctions-of-a-team",
    title: "The Five Dysfunctions of a Team",
    author: "Patrick Lencioni",
    summary:
      "A pyramid of team dysfunctions stacked on each other — and why you can't fix the dysfunction at the top without addressing the one underneath it first.",
    readMinutes: 5,
    body: `The book's model is a pyramid of five dysfunctions, each one enabling the one above it — the practical implication being that trying to fix a higher dysfunction without addressing the one beneath it first tends to fail, because the foundation isn't there to support the fix.

## The pyramid, bottom to top

1. **Absence of Trust** — team members aren't willing to be vulnerable or admit weakness with each other, so genuine collaboration never gets off the ground.
2. **Fear of Conflict** — without trust, disagreements stay unspoken or get smoothed over instead of debated honestly, which means the best ideas don't actually get pressure-tested.
3. **Lack of Commitment** — without real conflict and debate, decisions get made without genuine buy-in, so people nod along in the room and quietly disagree afterward.
4. **Avoidance of Accountability** — without real commitment to a decision, nobody feels entitled to hold anyone else accountable to it, since it was never truly agreed to in the first place.
5. **Inattention to Results** — without accountability, individual or departmental ego takes priority over the team's collective outcome.

**Why the ordering matters more than the list itself:** a team stuck at "Avoidance of Accountability" often gets treated with more accountability structures — checklists, sign-offs, tracking — when the real gap is underneath, at "Lack of Commitment," which itself traces back to conflict never actually happening honestly, which traces back to trust never having been built in the first place.

**The diagnostic question this gives a Scrum Master:** when a team shows a dysfunction near the top of the pyramid, the useful move is asking which dysfunction underneath it might be the real cause, rather than treating the visible symptom directly.

## Related pages

See [Running a Retrospective That Actually Leads to Change](/resources/articles/facilitation/retro-that-leads-to-change) for building the kind of honest conflict this pyramid depends on.`,
  },
  {
    slug: "drive",
    title: "Drive: The Surprising Truth About What Motivates Us",
    author: "Daniel H. Pink",
    summary:
      "Autonomy, mastery, and purpose — the three things that actually motivate knowledge work, and why carrot-and-stick incentives quietly undermine all three.",
    readMinutes: 5,
    body: `The book's argument is that for work requiring genuine thinking and judgment — as opposed to simple, repetitive tasks — traditional carrot-and-stick incentives (bonuses tied to narrow metrics, punishment for missed targets) don't just fail to help, they can actively make performance worse by crowding out the intrinsic motivators that actually drive good knowledge work.

## The three intrinsic motivators

- **Autonomy** — the desire to direct our own work, rather than be micromanaged in how a task gets done, even when the task itself is assigned.
- **Mastery** — the desire to get better at something that matters, which requires real challenge and honest feedback, not just repetition.
- **Purpose** — the desire to feel like the work serves something larger than the task itself.

**Why this matters directly for a Scrum Master:** several core Scrum mechanics map almost directly onto these three motivators — a self-managing team (autonomy), a Sprint Goal that ties work to a real outcome (purpose), and a Definition of Done paired with genuine retrospection (mastery, through honest feedback on the team's own improvement). A Scrum Master who understands this can explain why Scrum's mechanics work in motivational terms, not just procedural ones.

**The trap to watch for:** introducing individual, metric-based incentives on top of a Scrum team — bonuses tied to velocity, recognition tied to individual ticket counts — tends to undermine autonomy and purpose specifically, which is part of why linking velocity to performance evaluation (see the Metrics dimension of this site) backfires so reliably.

## Related pages

See [The Velocity Conversation](/resources/articles/metrics/velocity-conversation-with-leadership) for a real example of this exact dynamic in practice.`,
  },
  {
    slug: "turn-the-ship-around",
    title: "Turn the Ship Around!",
    author: "L. David Marquet",
    summary:
      "The shift from 'leader-follower' to 'leader-leader,' and the one language change — from asking permission to stating intent — that makes distributed authority real instead of theoretical.",
    readMinutes: 5,
    body: `Written by a former submarine captain, the book's core argument translates unusually well to Scrum: most organizations run on a "leader-follower" model, where authority and competence are both expected to sit with the leader, and everyone else waits for instruction. The alternative the book proposes — "leader-leader" — pushes both authority and the competence to use it well down to whoever actually has the relevant information.

## The mechanism that makes this real, not just aspirational

Distributing authority in name only, without changing anything else, tends to fail — people say they want their team to own decisions, then still expect to be asked before anything happens. The book's specific, practical mechanism for making the shift real is a change in language: instead of asking permission ("Should I do X?"), team members state intent ("I intend to do X").

> **Old pattern (leader-follower):** "Can I deploy this fix now?" — waits for a yes before acting.
>
> **New pattern (leader-leader):** "I intend to deploy this fix now, since it's a low-risk change and the tests are passing — flag me if there's a reason not to." — acts unless stopped, rather than waiting to be told to proceed.

**Why this small language shift does real work:** "may I" keeps the decision-making load and the authority with the person being asked, regardless of how much you say you want to delegate. "I intend to" moves the default to action, with the more senior person's role shifting from approver to a safety check who can intervene only when something's actually wrong — which is a fundamentally different distribution of authority than asking permission ever produces.

**Why this matters directly for a Scrum Master:** this is a concrete, practical mechanism for the self-managing team Scrum already asks for in principle — "I intend to" is a sentence a Scrum Master can actively coach a team toward using, rather than just telling them to "be more self-managing" in the abstract.

## Related pages

See ["I'll Just Do It Myself" Is the Most Expensive Sentence](/resources/articles/servant-leadership/ill-just-do-it-myself-trap) for the Scrum Master's own version of shifting away from being the default decision-maker.`,
  },
];

export function getBookNote(slug: string): BookNote | undefined {
  return bookNotes.find((b) => b.slug === slug);
}
