import type { Article } from "./types";

export const scrumFundamentalsArticles: Article[] = [
  {
    slug: "first-30-days",
    category: "scrum-fundamentals",
    title: "Your First 30 Days as a New Scrum Master",
    summary:
      "The instinct to fix things fast is a trap. What to actually do week by week — with the exact wrong answer new Scrum Masters give, and what to say instead.",
    readMinutes: 9,
    body: `Here's the uncomfortable truth: by day three, you will have spotted at least one real problem. Your instinct will be to fix it immediately, because that's what got you hired — you're good at spotting problems and solving them. Resist it anyway. The team hasn't decided whether to trust you yet, and a fix imposed by someone who hasn't earned that trust doesn't stick — it just gets quietly worked around the moment you look away.

## Week 1: Observe more than you speak

Attend every event without changing anything about how it runs. Take notes on what seems to work, what seems tense, and where energy drops. Have informal 1:1s with each team member — not a "get to know you" interview, a real conversation about what frustrates them. The hardest part of week one isn't the observing. It's staying quiet when someone asks you, directly, to solve something on the spot.

> **Developer, day 2:** "So what's your plan to fix our estimation problem? We're always wrong."
>
> **Wrong answer (feels helpful, isn't):** "Oh, I've seen this before — switch to T-shirt sizing, it usually fixes it."
>
> **Right answer (feels unhelpful, isn't):** "I don't have one yet — I want to understand what's actually causing it first. Can you walk me through a specific sprint where the estimate went really wrong?"

That T-shirt-sizing answer might even be right eventually. In week one it's guaranteed to be wrong, because you don't yet know whether the estimation problem is really about estimation — or about a Product Owner who quietly changes scope mid-sprint and blames the number afterward. Fixing the wrong layer doesn't just fail; it teaches the team you make calls without listening, which is the exact reputation you spend the rest of the quarter undoing.

## Week 2: Understand the system around the team

Meet the Product Owner properly — not just in Scrum events, one-on-one, to understand their pressures and how they actually see the backlog. Meet the team's key stakeholders. Pull the last 3-6 sprints of data if it exists: velocity, carryover, incident load. You're mapping the system, not the team, because most of what limits a team in its first month is outside the team's control — and if you diagnose it as a team problem, you'll spend your political capital fixing the wrong thing.

## Week 3: Name one thing, small and safe

By now you've probably spotted the highest-leverage problem in the whole system. Do not touch it yet. Pick something small, low-risk, and clearly inside the team's own control — a retro format that's gone stale, a Daily Scrum that's turned into status reporting — and propose it as a reversible experiment, not a verdict on how they've been working.

> **Framing that lands:** "I noticed our Daily Scrum has turned into updates directed at me. Can we try, just for this week, everyone talking to each other instead — and I'll stay quiet unless something needs unblocking?"

Notice the shape of that sentence: "just for this week" and "try" do real work. They make the ask reversible, which is what makes it safe for a team that doesn't know you yet to say yes.

## Week 4: Start the real conversation about the bigger issues

With one small, visible win behind you, you're in a position to raise what you actually spotted in week one — an absent Product Owner, an unclear Definition of Done, a dependency that causes carryover every single sprint. These conversations land differently once the team has seen you deliver on something small first, instead of arriving as a stranger with a list of everything wrong.

> **To the team, not the PO, first:** "I've noticed refinement keeps stalling because questions for the Product Owner sit unanswered for days. Is that something you've felt too, or is it just me reading it wrong?"
>
> **Then, to the Product Owner, privately:** "The team's blocked on your input more often than makes sense for a healthy backlog. What would a sustainable weekly rhythm for refinement questions look like for you?"

## What to avoid in the first month

- Rewriting the team's working agreements before you've actually read them.
- Comparing this team unfavorably to a previous one you worked with, even implicitly.
- Taking over facilitation of every event immediately — let the team keep some ownership while you're still learning the terrain.
- Promising to fix problems that are actually organizational, before you've worked out whether they're yours to fix at all.`,
  },
  {
    slug: "definition-of-done-nobody-follows",
    category: "scrum-fundamentals",
    title: "The Definition of Done Nobody Actually Follows",
    summary:
      "Most teams have a Definition of Done written down somewhere. Fewer teams actually enforce it under deadline pressure. Here's how to tell, and what to do about it.",
    readMinutes: 6,
    body: `Ask a team if they have a Definition of Done and almost every team says yes. Ask them to show you where it's written, and pull up three "done" items from the last sprint against it, and the story usually changes. A Definition of Done that exists only in a wiki page nobody opens isn't a Definition of Done — it's a document.

## The tell: watch what happens in week two of a bad sprint

The real test of a Definition of Done isn't a calm sprint — it's a sprint that's going badly. When the team is behind and the Sprint Goal is at risk, watch what happens to the DoD. If testing quietly becomes "we'll do it next sprint," if code review turns into a rubber stamp, if "done" starts meaning "the happy path works," you don't have a Definition of Done — you have a Definition of Done that only applies when it's convenient.

> **Developer, under pressure:** "It works, let's just call it done and write the tests next sprint."
>
> **The easy answer:** "Sure, we're already behind."
>
> **The answer that protects the DoD:** "If we skip tests now, we're not behind on this item — we're carrying invisible debt into next sprint disguised as a finished one. Let's talk to the PO about scope instead of quietly redefining done."

## Make it a checklist, not a paragraph

A Definition of Done written as flowing prose gets skimmed and forgotten. A Definition of Done written as a literal checklist — visible on the board itself, not buried in Confluence — gets checked. The format difference matters more than most teams expect: a checklist is something you can fail to complete, which makes it enforceable in a way a paragraph never is.

## Enforce it as a workflow gate, not a reminder

If your tool (Jira, Azure DevOps) allows it, make the DoD a literal gate — required fields, a linked test case, an explicit review approval — before an item can move to Done. This isn't bureaucracy for its own sake; it's the difference between a standard the team occasionally forgets and a standard the system won't let them skip.

## The conversation to have when the DoD keeps getting bent

If this keeps happening, the fix usually isn't more reminders — it's an honest conversation about capacity. A team that consistently can't meet its own Definition of Done within a sprint is a team that's either committing to too much, or working against a DoD that was set by aspiration rather than by what the team can sustainably deliver.

> **The honest question to ask the team:** "We've quietly skipped part of our Definition of Done three sprints in a row. Is the DoD wrong, or is our sprint commitment wrong? Because right now we're pretending both are fine, and they can't both be true."

## Related pages

See [The Scrum Framework](/knowledge/scrum-framework) for where the Definition of Done fits among Scrum's commitments, and [Anti-Patterns & Fixes](/knowledge/anti-patterns) for the "hidden technical debt" pattern this directly feeds.`,
  },
  {
    slug: "sprint-goal-not-a-todo-list",
    category: "scrum-fundamentals",
    title: "Why Your Sprint Goal Isn't Actually a Goal",
    summary:
      "A list of ten unrelated backlog items with a sentence pasted on top isn't a Sprint Goal. Here's how to tell the difference, and how to fix it in your next planning session.",
    readMinutes: 6,
    body: `Read your last five Sprint Goals back to yourself. If more than one or two could be replaced with "complete the items we selected this sprint" without losing any meaning, you don't have Sprint Goals — you have a list with a caption.

## The test: could the team drop an item and still succeed?

A real Sprint Goal survives losing an item. If the team can't finish everything selected, a genuine goal tells them which items still matter and which can slip without the sprint being a failure. A fake Sprint Goal — really just a list wearing a goal's clothing — gives no such guidance, because every item was equally "the goal" to begin with.

> **Weak Sprint Goal:** "Complete the 12 backlog items selected for this sprint."
>
> **Real Sprint Goal:** "Let a returning customer check out using a saved payment method, end to end, so we can start the beta with real users next week."

The second version tells the team something the first one can't: if the "saved address autofill" polish item doesn't make it, that's fine — checkout with a saved payment method working end to end is what actually matters.

## Where fake Sprint Goals usually come from

Almost always, it's a Product Owner (or a Scrum Master facilitating planning) who treats Sprint Goal-writing as a five-minute formality at the end of planning, after the real work of picking items is already done. A goal bolted on after the fact is definitionally not driving the selection — it's describing it. The fix is sequencing: propose the goal before pulling items, not after.

> **In Sprint Planning, said out loud:** "Before we pull anything into the sprint — what's the one outcome that would make this sprint a genuine win, even if a few lower-priority items don't make it?"

## What a Scrum Master actually does here

You're not writing the goal — that's the Product Owner's call — but you are the one who should notice when planning has skipped straight to item selection, and pull the conversation back. This is one of the few moments where interrupting the flow of planning is worth the friction it causes.

## Related pages

See [The Scrum Framework](/knowledge/scrum-framework) for how the Sprint Goal fits with the Sprint Backlog's other commitments, and the [sprint planning agenda](/resources) for where this conversation belongs in the meeting itself.`,
  },
  {
    slug: "mid-sprint-scope-change",
    category: "scrum-fundamentals",
    title: "Handling a Mid-Sprint Scope Change Without Blowing Up the Sprint Goal",
    summary:
      "Scope changes happen. The mistake isn't having one — it's not having a clear process for deciding whether it threatens the Sprint Goal before agreeing to it.",
    readMinutes: 5,
    body: `A mid-sprint request isn't automatically a problem — Scrum explicitly allows scope to be clarified and renegotiated with the Product Owner as more is learned. The problem is when it gets agreed to reflexively, in a hallway conversation, without anyone checking it against the Sprint Goal first.

## The two questions that matter

Before any mid-sprint request gets a yes or no, two questions need real answers: does this genuinely threaten the Sprint Goal, and does saying yes mean something else has to come out? Skipping either question is how sprints quietly turn into open-ended work queues instead of committed plans.

> **Stakeholder, mid-sprint:** "Can we just squeeze this one urgent fix in? It's small."
>
> **The reflexive yes (the trap):** "Sure, we'll fit it in."
>
> **The real answer:** "Let's check — does this put the Sprint Goal at risk? If not, what should come out to make room, since the team's still at full capacity either way?"

## Small requests are the dangerous ones, not big ones

Nobody reflexively agrees to a big mid-sprint request — its size forces a real conversation. It's the "quick," "small," "just a tiny thing" requests that erode a sprint, because each one individually seems too minor to push back on, and the team absorbs five of them without anyone noticing the Sprint Goal is now unreachable.

## Make the trade-off visible, every time

The discipline that actually works is refusing to let "yes" happen without a visible trade-off attached — something specific comes out, or the team explicitly agrees the Sprint Goal is now at risk and flags it upward immediately, not at the Sprint Review when it's too late to do anything about it.

> **What to say when nothing can come out:** "If nothing can come out, then I need to flag right now that the Sprint Goal is at risk — not at the review on Friday. Let's decide together whether that's acceptable."

## Related pages

See [The Scrum Framework](/knowledge/scrum-framework) for the Sprint's own rule about protecting the Sprint Goal, and [Managing Up](/resources/articles/stakeholder-management/managing-up) for how to communicate the resulting risk honestly.`,
  },
  {
    slug: "when-to-say-no-to-the-product-owner",
    category: "scrum-fundamentals",
    title: "When to Actually Say No to the Product Owner",
    summary:
      "Scrum Masters are taught to serve the Product Owner, not defer to them on everything. Here's where the line actually is, and how to hold it without it becoming a power struggle.",
    readMinutes: 6,
    body: `"Servant leadership" gets misread by a lot of new Scrum Masters as "the Product Owner is always right." They're not — the Product Owner owns the backlog's content and priority, full stop, but they don't own the team's process, capacity, or Definition of Done. Knowing the difference is the entire job.

## What's actually the Product Owner's call

Backlog content, priority, and whether the increment meets the acceptance criteria they set — that's theirs alone, and a Scrum Master arguing with a legitimate prioritization call is overstepping. Push back there and you're not protecting the team, you're just being difficult.

## What's not the Product Owner's call

The Definition of Done, how much the team commits to in a sprint, and whether the team's process gets bypassed under pressure — none of that belongs to the Product Owner, even when the pressure to bend it is coming from them.

> **Product Owner, under deadline pressure:** "Can we just skip code review on this one? We really need it out today."
>
> **The deferential answer (the trap):** "I guess if it's urgent..."
>
> **The answer that holds the line:** "I hear the urgency — but our Definition of Done isn't something either of us can waive one item at a time. If this is genuinely urgent enough to skip review, that's a conversation for the whole team about the risk, not a quiet exception."

## The line isn't personal, so don't make it personal

The reason this works without becoming a power struggle is that you're not saying no to the Product Owner as a person — you're pointing at a team agreement neither of you gets to unilaterally waive. That reframing matters: it moves the conversation from "you vs. me" to "both of us vs. a standard we already agreed to."

## When the Product Owner keeps pushing anyway

If this becomes a pattern rather than a one-off, that's worth naming directly and privately — not as a complaint, but as a genuine question about what's driving the repeated pressure. Often it's not the Product Owner being unreasonable; it's pressure coming from further up that they haven't been equipped to push back on themselves.

## Related pages

See [The Scrum Framework](/knowledge/scrum-framework) for the actual accountabilities Scrum assigns to each role, and [Anti-Patterns & Fixes](/knowledge/anti-patterns) for what happens when a Scrum Master defers on this too often.`,
  },
];
