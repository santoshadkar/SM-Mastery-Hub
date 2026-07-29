import type { Article } from "./types";

export const servantLeadershipArticles: Article[] = [
  {
    slug: "the-question-that-actually-coaches",
    category: "servant-leadership",
    title: 'The Question That Actually Coaches: "What Would Help You Decide?"',
    summary:
      "Most Scrum Masters default to answering questions. The single hardest skill in the role is learning when to ask one back instead.",
    readMinutes: 5,
    body: `A Developer asks you something. You know the answer, or at least a reasonable one. Answering feels like help — it's fast, it's useful, and it makes you feel like you're doing the job. It's also, more often than people expect, the wrong move.

## Why answering feels right and often isn't

Every time you answer a question the team could have worked through themselves, you make it slightly more likely they'll bring you the next one too, instead of working it out. This isn't about withholding help out of principle — it's that the team's ability to make good calls without you is the actual, durable outcome you're being paid to build, and every reflexive answer trades a little of that away for a small, immediate convenience.

> **Developer:** "Should we refactor this now or after the sprint?"
>
> **The reflexive answer:** "Refactor now — technical debt compounds and it'll cost more later."
>
> **The coaching question:** "What would help you decide between the two right now?"

## The discomfort is the point, not a side effect

The coaching question above will, some fraction of the time, be met with a slightly annoyed "I don't know, that's why I'm asking you." Sit in that discomfort rather than rescuing the moment with an answer. Usually a second, more specific question — "what's the actual cost of waiting, versus the cost of doing it now?" — gets further than caving and just telling them what to do.

## When answering directly actually is the right call

This isn't a rule to apply universally. If the team is missing information only you have — a policy, a past decision, a hard constraint — teaching them that fact directly is faster and more honest than pretending a question will surface knowledge that isn't there yet. The skill isn't "never answer," it's noticing which situation you're actually in before defaulting to the comfortable one.

> **Where teaching, not coaching, is right:** "Is production access something we can just request directly?" — "No, that has to go through security review; here's the process." That's a fact, not a judgment call — answer it.

## A habit that builds the skill over time

Before answering any question, silently ask yourself one thing first: does the team actually have what it needs to answer this itself, or are they genuinely missing information only I have? That half-second pause is most of the skill — most Scrum Masters already know the difference once they stop to check.

## Related pages

See [the four coaching modes from Coaching Agile Teams](/resources/reading/coaching-agile-teams) for the fuller framework this article draws from, and the [Maturity Self-Assessment](/assessment) to see where your own instinct to teach versus coach currently sits.`,
  },
  {
    slug: "ill-just-do-it-myself-trap",
    category: "servant-leadership",
    title: '"I\'ll Just Do It Myself" Is the Most Expensive Sentence a Scrum Master Can Think',
    summary:
      "It's faster in the moment, every single time. That's exactly why it's a trap — and why the teams whose Scrum Masters resist it end up more capable, not less.",
    readMinutes: 5,
    body: `Something isn't happening — an action item, a piece of documentation, a decision that's stalled. You could nudge the team to do it, which might take days and follow-up. Or you could just do it yourself in twenty minutes. The second option is always faster. It's also how a team quietly stops being able to function without you.

## The math that makes this trap so easy to fall into

Doing it yourself really is faster this one time — that part isn't wrong. The mistake is comparing this one instance's cost instead of the compounding cost of a team that's learned the Scrum Master will eventually just handle whatever doesn't get done. Once that expectation sets in, follow-through on team commitments quietly becomes optional, because someone else always closes the gap.

> **Internal monologue that leads here:** "The retro action item still isn't done three days later. I could remind them again, or just set up the board column myself right now."

## What to do instead, even though it's slower

Go back to whoever owned the action item, specifically, and ask what's actually stopping it — not as a nag, but as a genuine question. Often the honest answer reveals something useful: it wasn't clear who owned it, it turned out harder than expected, or it simply wasn't prioritized against real work. All three of those are more useful to know than a quietly completed task.

> **Instead of doing it yourself:** "You had the action item to add the blocked column — what's gotten in the way of it happening? Is it clarity, time, or something else?"

## The one real exception

If something is time-sensitive and truly blocking the whole team right now — not just undone, but actively stopping work — stepping in directly is the right call. The distinction is urgency versus habit: an occasional, genuine emergency intervention doesn't teach the team the same lesson that routinely absorbing their follow-through does.

## What this looks like once it's already become a habit

If you notice you've been quietly doing the team's follow-through for weeks, the fix isn't to stop cold — that just leaves things undone with no transition. Name it in a retro, plainly, and hand specific things back explicitly rather than just withdrawing silently and hoping the team notices the gap on their own.

## Related pages

See [the four coaching modes](/resources/reading/coaching-agile-teams) for the broader distinction between helping and doing, and the Servant Leadership dimension of the [Maturity Self-Assessment](/assessment) for a read on where this shows up in your own practice.`,
  },
  {
    slug: "coaching-a-team-member-not-pulling-weight",
    category: "servant-leadership",
    title: "Having the Conversation When a Team Member Isn't Pulling Their Weight",
    summary:
      "This isn't a performance-management conversation, and it's not the Scrum Master's job to run one. But avoiding it entirely isn't servant leadership either — it's just avoidance.",
    readMinutes: 6,
    body: `A Scrum Master isn't a team member's manager, and formal performance conversations genuinely aren't the role's job. That fact gets used, sometimes, as a reason to avoid a conversation that actually is appropriate — a peer-level, team-health conversation about a pattern the whole team can see and nobody's naming.

## Separate the two conversations clearly

There's a performance conversation (compensation, role fit, formal feedback) that belongs to a manager, and there's a team-dynamics conversation (this is affecting how the team works together, and I want to understand what's going on) that belongs to anyone who cares about the team's health, including the Scrum Master. Confusing the two is what makes people avoid the second one entirely.

> **What's not your conversation to have:** "Your performance rating is at risk because of this."
>
> **What is your conversation to have:** "I've noticed the last few sprints, your items have carried over consistently, and I wanted to check in — what's going on, and is there something the team or I could do differently?"

## Lead with curiosity, not a verdict

The instinct is to open with the observation as an accusation, even gently phrased. Leading with genuine curiosity about the cause — burnout, unclear expectations, something happening outside work, disengagement with the work itself — gets a real answer far more often than an opening that already implies a conclusion.

> **Opens badly:** "You've been underperforming the last few sprints."
>
> **Opens better:** "I've noticed a change in your sprint output the last few weeks, and I wanted to understand what's happening before assuming anything."

## What to do with what you learn

If it's something situational and temporary, the team can often absorb it for a while with the right conversation about expectations. If it's a longer-term fit or engagement issue, that genuinely is outside a Scrum Master's authority to resolve — and the honest, professional move is looping in their manager, not quietly managing it yourself indefinitely or, worse, saying nothing and letting the rest of the team's resentment build in silence.

## Why silence is its own choice, with its own cost

Not having this conversation doesn't make it neutral — the rest of the team notices the gap regardless, and a Scrum Master who visibly avoids it reads, fairly or not, as either not caring about team health or not having the courage to raise it. Neither is the reputation servant leadership is supposed to build.

## Related pages

See [The Question That Actually Coaches](/resources/articles/servant-leadership/the-question-that-actually-coaches) for how to frame the follow-up conversation once the cause is understood, and [Anti-Patterns & Fixes](/knowledge/anti-patterns) for related team-health patterns.`,
  },
  {
    slug: "coaching-a-controlling-product-owner",
    category: "servant-leadership",
    title: "Coaching a Product Owner Who Won't Let Go of Control",
    summary:
      "A Product Owner who dictates solutions instead of outcomes isn't malicious, usually — they're often just accountable for results with no other lever they trust. Here's how to coach that, not fight it.",
    readMinutes: 6,
    body: `A Product Owner who writes tickets as exact implementation instructions instead of problems to solve is a common frustration for teams and Scrum Masters alike. The instinct is to treat it as an overreach that needs correcting. It's usually more productive to treat it as an anxiety that needs addressing.

## What's actually driving the behavior, most of the time

Product Owners who over-specify solutions are frequently doing it because they've been burned before — a team built the wrong thing from a loosely specified problem, and the lesson they took away was to specify tighter, not to improve the collaboration that would have caught the misunderstanding earlier. The controlling behavior is a symptom of a trust gap, not the root cause.

> **What it looks like:** A backlog item written as "Add a dropdown with these exact five options in this exact order" instead of "Let a user filter results by category."

## The coaching move: ask about the outcome, not the spec

Rather than telling the Product Owner they're micromanaging — which reads as criticism and triggers defensiveness — ask about the underlying goal the overly specific ticket was trying to protect. This surfaces the real requirement and often reveals that the team has more flexibility than the rigid spec implied.

> **Instead of:** "You're being too prescriptive with these tickets."
>
> **Try:** "Walk me through why this dropdown needs exactly these five options in this order — what's the outcome you're protecting by being that specific?"

## Rebuild trust with small, visible wins

If the underlying issue is a past miscommunication, the fix isn't a single conversation — it's a string of small instances where the team correctly interprets a looser, outcome-focused ticket and delivers what the Product Owner actually wanted. Trust rebuilds through evidence, not through being asked to trust more.

> **Proposing the experiment:** "Can we try one upcoming item written as an outcome instead of a spec, and you review it with the team before we build, so you can course-correct early if we're heading the wrong way?"

## When it isn't anxiety, it's just habit or temperament

Sometimes the answer really is simpler — some Product Owners come from backgrounds where detailed specification was standard practice, and it's a habit rather than a trust issue. Either way, the same coaching approach applies: understand the "why" before trying to change the "what."

## Related pages

See [the four coaching modes](/resources/reading/coaching-agile-teams) for the broader distinction between teaching, mentoring, facilitating, and coaching this conversation draws on.`,
  },
  {
    slug: "when-to-stop-coaching-and-direct",
    category: "servant-leadership",
    title: "When to Stop Coaching and Start Directing (Yes, Sometimes You Should)",
    summary:
      "Servant leadership isn't a religion that forbids ever giving a direct instruction. Some situations genuinely call for it — knowing which ones is the actual skill.",
    readMinutes: 5,
    body: `A lot of coaching-focused Scrum Master training leaves people with the impression that direct instruction is always wrong. It isn't. There are real situations where the coaching stance actively makes things worse, and a Scrum Master who applies it dogmatically in those moments isn't being principled — they're being unhelpful in the name of a principle.

## Safety and compliance aren't coaching moments

If something touches security, legal compliance, or genuine safety, this isn't the moment for "what do you think we should do?" A hard constraint is a fact to communicate directly, not a judgment call to facilitate — and treating it as an open question wastes time and can create real risk.

> **Not a coaching moment:** "Should we store customer payment data in plain text to save time?" — "No. That's a hard compliance requirement, not a team decision — here's what we're required to do instead."

## Genuine emergencies aren't coaching moments either

When something is actively broken in production and every minute matters, this is the moment to direct clearly, not to run a facilitated discussion about the best approach. Coaching is a long-term investment in the team's capability; an active incident is not the moment to make that investment at the expense of resolving it.

## New teams sometimes need more direction early, briefly

A team that's brand new to Scrum, or brand new to working together, sometimes genuinely doesn't have enough shared context yet for pure coaching to be effective — a little more direct teaching early on, with an explicit plan to pull back as the team gains footing, can be the right call rather than a failure of servant leadership.

> **Reasonable to say to a brand-new team:** "Since this is everyone's first sprint together, I'm going to be a bit more directive about how we run these events for the first couple of weeks, and then hand more of that facilitation over to you as we find our footing."

## The real skill is naming which mode you're in

What separates good judgment here from just defaulting to whichever is easier is being explicit, even just to yourself, about why a given moment calls for direction rather than coaching. If you can't articulate the reason, that's usually a sign you're directing out of habit or impatience, not because the situation actually calls for it.

## Related pages

See [the four coaching modes from Coaching Agile Teams](/resources/reading/coaching-agile-teams) for the full framework, and [The Scrum Framework](/knowledge/scrum-framework) for where a Scrum Master's accountability actually sits.`,
  },
];
