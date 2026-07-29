import type { Article } from "./types";

export const facilitationArticles: Article[] = [
  {
    slug: "retro-that-leads-to-change",
    category: "facilitation",
    title: "Running a Retrospective That Actually Leads to Change",
    summary:
      "Why your retros generate the same list every time — with the real confrontation script for when an issue shows up for the third time in a row.",
    readMinutes: 8,
    body: `Most retrospectives that stop producing value have a format problem on the surface and a follow-through problem underneath. Teams notice the format is stale before they admit the real issue: the last five retros' action items were never actually revisited. Changing the format without fixing that is rearranging furniture in a room that's on fire.

## Open by closing the loop, every single time

Before generating anything new, spend the first five minutes reviewing last time's action items. Did they happen? If not, why not — forgotten, deprioritized, or blocked by something outside the team? Skip this once and it's a bad week. Skip it three retros running and you've trained the team that nothing they say here matters, which is a much harder thing to undo than it was to prevent.

> **Facilitator:** "Before we start anything new — last retro we said we'd add a 'blocked' column to the board by Wednesday. Did that happen?"
>
> **Team:** "...kind of? We talked about it but didn't actually set it up."
>
> **Facilitator, not letting it slide:** "Okay — let's actually do that in the next five minutes before we move on, then. What's stopping it from being real right now?"

## Limit the output, not the discussion

A retro that produces eight action items produces zero completed action items — that's not a motivation problem, it's a math problem. Let the discussion run wide, but converge on one or two commitments, each with a named owner and a real date. If the team surfaces five things worth fixing, that's useful information too: it usually means the underlying cause is bigger than any one retro can resolve, and naming that honestly beats pretending two vague bullet points will cover it.

## Watch for the third-time pattern — and say something about it

The clearest sign a retro has become theater is the same issue surfacing three retros in a row, each time with a fresh action item, and nobody in the room reacting to the repetition. This is the moment most facilitators let slide because naming it feels confrontational. Name it anyway — this exact confrontation is the highest-leverage thing you'll say all sprint.

> **Facilitator:** "This is the third retro in a row we've raised 'unclear requirements.' Last time the action was 'ask more questions in refinement.' Did that actually happen?"
>
> **Team:** "Sort of — but it still keeps happening."
>
> **Facilitator, going underneath the symptom:** "Then 'ask more questions' probably isn't the real fix. What's actually stopping us from getting clear requirements before we start — is it timing, is it the Product Owner not having the answers yet, or something else?"

That question — asked plainly, without blame — is usually what surfaces the actual root cause hiding behind a recurring symptom. It's uncomfortable precisely because it implies the last two retros didn't work. That discomfort is the cost of an honest retro; a comfortable one that keeps generating the same symptom is not actually cheaper, it's just cheaper today.

## Match the format to the team's actual state

Start/Stop/Continue is a fine default, but it assumes a team that's stable and willing to speak plainly. After an incident-heavy sprint, Mad/Sad/Glad gives people permission to name the emotional cost before jumping to solutions. After a long, uneventful sprint, a more analytical format (the Sailboat, or a plain timeline of events) surfaces things a default format would miss because nothing feels urgent enough to mention on its own.

## Make the facilitator's role temporary

A retro that only works when you personally run it isn't durable. Rotate facilitation to other team members periodically — it surfaces blind spots yours won't, and it means the retro survives your vacation, a reorg, or you eventually moving to a different team entirely.

## Related pages

See the [five-phase retro model](/resources/reading/agile-retrospectives) this article's structure comes from, the [retro formats in the Resources library](/resources) for a rotation of options, and [Anti-Patterns & Fixes](/knowledge/anti-patterns) for more on "retro theater" specifically.`,
  },
  {
    slug: "daily-scrum-status-report-fix",
    category: "facilitation",
    title: "Fixing a Daily Scrum That's Turned Into a Status Report to You",
    summary:
      "If the team addresses their updates to you instead of each other, the Daily Scrum has quietly become a status meeting with your name on it. Here's how to unwind that.",
    readMinutes: 5,
    body: `The tell is simple: watch where people look while they talk. If every Developer's eyes go to the Scrum Master while giving their update, the Daily Scrum has stopped being the team's event and started being yours — even if nobody decided that on purpose.

## How it happens without anyone choosing it

This pattern rarely starts deliberately. It usually creeps in because the Scrum Master asks the first clarifying question in the first few Daily Scrums of a new team, and the team learns — correctly — that answers get evaluated by whoever asks questions. From there, everyone starts addressing the person who evaluates, not the people who actually need the information.

## The physical fix, which works better than it should

Literally standing or sitting outside the circle, and staying visibly silent unless something needs unblocking, changes the dynamic faster than any verbal instruction. People address whoever's in their eyeline; remove yourself from the natural eyeline and updates start going to teammates by default.

> **Old pattern:** Developer looks at Scrum Master. "Yesterday I finished the login flow, today I'm starting on payments, no blockers."
>
> **What to say once, to reset it:** "I'm going to stay quiet during updates unless something's blocking someone — talk to each other, not to me. I'm here to unblock things after, not to track status during."

## What to do when someone reports a blocker

This is the one moment the Scrum Master should visibly engage — but even here, the instinct to solve it live in the meeting should be resisted. The Daily Scrum is for surfacing the blocker and confirming who's picking it up after, not for solving it on the spot with the whole team's time.

> **Right response to a blocker:** "Got it — let's take that offline right after this so we're not using everyone's time on it. I'll grab you in five minutes."

## If the pattern is really entrenched

For a team that's run status-meeting-style Daily Scrums for months, one reset conversation often isn't enough — old habits reassert themselves within a week. Revisit it explicitly in the next retro, framed as an experiment to evaluate rather than a rule that's already been declared fixed.

## Related pages

See [The Scrum Framework](/knowledge/scrum-framework) for the Daily Scrum's actual purpose, and [Anti-Patterns & Fixes](/knowledge/anti-patterns) for the "Scrum Master as task master" pattern this directly overlaps with.`,
  },
  {
    slug: "silent-brainstorm-for-quiet-teams",
    category: "facilitation",
    title: "The Silent Brainstorm: A Facilitation Technique for Teams That Won't Talk",
    summary:
      "When open questions get silence, the problem usually isn't the team — it's the format asking one person to speak first in front of everyone.",
    readMinutes: 5,
    body: `A team that goes quiet when you ask an open question isn't necessarily disengaged. Speaking first, in front of the group, with no time to think, is a genuinely hard thing to do — and the loudest, fastest-thinking person in the room ends up dominating simply because they're comfortable doing it, not because their ideas are actually the best ones.

## The technique itself

Everyone writes their own ideas on individual notes — physical sticky notes or a shared digital board — silently, for a fixed few minutes, before anyone speaks at all. Only after that does discussion open up, working from what's already on the board rather than from whoever spoke up first.

> **Facilitator:** "Let's take three minutes of quiet time — everyone write down anything that comes to mind about this sprint, one idea per note, no discussion yet. We'll go through them together after."

## Why this works better than it sounds like it should

Removing the requirement to speak first removes the advantage that goes to confidence and speed rather than to the quality of the idea. People who think carefully before speaking — often the same people who stay quiet in open discussion — get their ideas onto the board on equal footing with everyone else's, before group dynamics have a chance to anchor the conversation around whoever spoke first.

## What to do with a wall of silent notes

Group similar notes together as a team, out loud, before discussing any of them individually — this surfaces themes and repetition (a sign of something that matters to multiple people) before the conversation narrows down to one person's specific phrasing of it.

> **Facilitator, after the notes are up:** "I'm seeing three notes here that all seem to be about the same thing — unclear requirements slowing us down. Let's start there, since it came up from more than one of you independently."

## When not to use this

A team that's already comfortable speaking openly doesn't need this every time — used as a permanent default for a team that talks fine, it can feel like unnecessary ceremony. Reach for it specifically when you've noticed the same one or two voices dominating, or when a topic is sensitive enough that speaking first, out loud, carries real social risk.

## Related pages

See [Facilitation guides in the Resources library](/resources) for more situational techniques, and [Running a Retrospective That Actually Leads to Change](/resources/articles/facilitation/retro-that-leads-to-change) for where this technique fits inside the Gather Data phase.`,
  },
  {
    slug: "sprint-planning-with-unready-backlog",
    category: "facilitation",
    title: "Running Sprint Planning When the Backlog Isn't Actually Ready",
    summary:
      "You walk into Sprint Planning and half the top items don't have real acceptance criteria. Here's what to do in the room, not just what should have happened before it.",
    readMinutes: 6,
    body: `Ideally, this never happens — refinement should have caught it days earlier. It happens anyway, often enough that every Scrum Master needs a plan for the moment it does, rather than pretending better refinement will always prevent it.

## Don't quietly fill the gaps yourself

The tempting move is to smooth it over — the Scrum Master mentally fills in the missing acceptance criteria so planning doesn't stall, and the team commits to items nobody actually clarified. This feels efficient and is almost always a mistake: the ambiguity doesn't disappear, it just resurfaces mid-sprint as a surprise instead of a known risk going in.

> **The smoothing-over instinct:** Scrum Master quietly assumes reasonable acceptance criteria and moves planning along.
>
> **What to say instead:** "This item doesn't have clear acceptance criteria yet. Do we pull it in anyway and accept the risk, pull in something else that's actually ready, or pause and get the Product Owner to clarify right now before we commit to it?"

## Make the tradeoff a team decision, not a facilitator decision

The Scrum Master's job here is surfacing the choice, not making it. Sometimes the team genuinely knows the domain well enough to proceed with reasonable assumptions; sometimes the ambiguity is exactly the kind that's caused rework before. Only the team and Product Owner, together, can weigh that — not the person facilitating the meeting.

## Use the moment to fix the actual cause

An unready backlog at Sprint Planning is a refinement problem, not a planning problem — treating it only as a planning-day fire to put out guarantees it happens again next sprint. Bring it to the very next retro explicitly, with the specific example, rather than letting it fade once the immediate meeting is over.

> **In the next retro:** "Two of our top three items weren't actually ready at Sprint Planning last week. What would it take for refinement to catch that a few days earlier next time?"

## If it's a repeating pattern

If this happens most sprints, the deeper issue is usually that refinement itself doesn't have real ownership or a real cadence — it's happening ad hoc, if at all. That's worth raising as its own topic, separate from any single sprint's planning session.

## Related pages

See the [Definition of Ready checklist](/resources) for what "ready" should actually mean before an item reaches planning, and [The Scrum Framework](/knowledge/scrum-framework) for how Sprint Planning fits with the rest of the cadence.`,
  },
  {
    slug: "when-nobody-talks-in-retro",
    category: "facilitation",
    title: "What to Do When Nobody Talks in Retro (and Dot-Voting Isn't Fixing It)",
    summary:
      "Some silence in a retro is thoughtful. Some silence is a team that's decided speaking honestly isn't safe. Telling the difference changes what you should do next.",
    readMinutes: 6,
    body: `Not all quiet retros are the same problem. A team that's genuinely fine tends to look relaxed while quiet. A team that's gone silent because it doesn't feel safe tends to look tense while quiet — arms crossed, quick glances at each other, answers that are technically words but say nothing. Reading which one you're facing changes everything about what to do next.

## When it's genuinely fine

Some sprints really were uneventful, and a short, quiet retro is an honest reflection of that, not a symptom. Forcing engagement out of a team that has nothing pressing to say — through icebreakers, forced sharing, elaborate formats — can do more harm than the silence itself, training the team to see retros as performative rather than useful.

## When it isn't fine

The tell that something's actually wrong is silence paired with visible tension, or a pattern where the same one or two people always speak and everyone else defaults to "yeah, agreed" regardless of the topic. That's not a content problem you can dot-vote your way past — it's a safety problem, and format changes won't fix a safety problem.

> **Facilitator, naming it directly, in private with a trusted team member first:** "I've noticed the last few retros have been pretty quiet, and it doesn't feel like the relaxed kind of quiet. Is there something making it hard to speak up openly in the room?"

## Why dot-voting specifically doesn't help here

Dot-voting is a technique for narrowing down options that are already on the table — it assumes the real issues already got voiced and just need prioritizing. If the real issue never got said out loud in the first place because it doesn't feel safe to say, dot-voting just efficiently prioritizes the safe, surface-level topics instead, which can look like progress while avoiding the actual problem entirely.

## What actually helps: smaller conversations first

Sometimes the fix isn't a better retro technique at all — it's talking to two or three team members individually, outside the retro, to understand what's actually happening before trying to solve it in the full group. A retro can only be as honest as the room feels safe, and sometimes rebuilding that safety starts one conversation at a time, not in the next retro format you try.

## Related pages

See [Servant Leadership & Coaching](/resources/articles/servant-leadership) for more on reading team dynamics beneath the surface, and [Anti-Patterns & Fixes](/knowledge/anti-patterns) for the broader pattern of teams that go through the motions without real inspection.`,
  },
];
