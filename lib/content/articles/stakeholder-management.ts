import type { Article } from "./types";

export const stakeholderManagementArticles: Article[] = [
  {
    slug: "managing-up",
    category: "stakeholder-management",
    title: "Managing Up: Communicating Sprint Reality to Skeptical Stakeholders",
    summary:
      '"We\'ll try our best" is a trap that costs you Friday. The exact words to use instead when a stakeholder wants only good news.',
    readMinutes: 8,
    body: `Every Scrum Master eventually deals with a stakeholder whose reaction to bad news makes it tempting to soften it next time. The instinct is understandable — nobody enjoys the reaction. But a pattern of softened updates compounds into exactly the "watermelon status" anti-pattern: green on the outside, red underneath, discovered too late to do anything about it.

## The trap: "we'll try our best"

This phrase feels safe because it commits to nothing and offends no one. That's exactly the problem — it tells the stakeholder nothing, and everyone in the room knows it. It doesn't buy goodwill; it buys silence until Friday, at which point there's no time left to do anything except explain why it didn't happen.

> **Stakeholder:** "This just needs to be done by Friday. I don't want excuses."
>
> **The trap:** "Understood — we'll try our best to get it done."
>
> **The real answer:** "Here's exactly where we are: 3 of 5 items are done. The remaining 2 are blocked on the vendor API, which has been down since Tuesday. If it's back today, we make Friday. If not, here's what I'd cut to still hit the date."

Notice what the real answer does that "we'll try" never can: it gives the stakeholder an actual decision to make, today, while there's still time to make it. "We'll try" gives them nothing to do except wait and be disappointed later.

## Lead with data, not adjectives

"We're a bit behind" invites an argument about what "a bit" means. A specific, falsifiable statement doesn't. It also repositions you: from someone whose mood the stakeholder has to manage, to someone reporting facts they can act on.

## Say it earlier than feels comfortable

The instinct is to wait until you're certain before raising a risk, in case it resolves itself. In practice, almost every stakeholder prefers an early flag that turns out to be unnecessary over a late one that leaves no time to react. Frame it explicitly as a risk, not a certainty — that costs you nothing if it resolves on its own, and buys real time if it doesn't.

> **Scrum Master, day 2 of the sprint:** "Flagging early in case this becomes a real problem: the vendor API had two outages last week. If that pattern continues, it could put Thursday's deliverable at risk. Nothing to act on yet, but I wanted you to have it now rather than Thursday."

## When the reaction is genuinely disproportionate

Sometimes the problem isn't your communication — the stakeholder reacts punitively to any bad news, however it's framed. That's worth naming directly, in a 1:1, not in the moment the news lands.

> **Scrum Master, 1:1:** "I want to keep giving you accurate updates, including when things aren't on track. I've noticed those updates tend to get a strong reaction — can we talk about how that's landing for you, and what would help?"

This is uncomfortable to say. The alternative — quietly softening updates to manage their reaction — is how organizations end up genuinely surprised by problems that were visible for weeks, and it's the Scrum Master who softened the updates who ends up holding that blame, not the stakeholder whose reaction caused it.

## Use the Sprint Review as evidence, not persuasion

A stakeholder who only hears about problems in a status document can dismiss them more easily than one who's seen the actual state of the work. Make the Review a real working session — show what actually exists, not a curated demo — so skepticism has less room to grow between updates.

## Related pages

See [Confluence](/tools/confluence) for how to structure a roadmap that communicates confidence levels honestly, and [Anti-Patterns & Fixes](/knowledge/anti-patterns) for more on "watermelon status."`,
  },
  {
    slug: "sprint-review-as-working-session",
    category: "stakeholder-management",
    title: "Turning a Sprint Review Into a Real Working Session Instead of a Demo",
    summary:
      "A polished, one-way demo is the single biggest missed opportunity in most Scrum implementations. Here's the difference, in the exact words used in the room.",
    readMinutes: 6,
    body: `A demo shows stakeholders what happened. A working Sprint Review uses what happened to decide what happens next, with the stakeholders actually in the room contributing to that decision. Most teams run the first kind and call it the second.

## The tell: does the backlog ever change in the room?

If a Sprint Review has never once resulted in a backlog item being added, reprioritized, or dropped, live, in the meeting, it's a demo with a Scrum-shaped label on it. A real Sprint Review treats the Product Backlog as something actively worked on during the meeting, not something referenced afterward.

> **Demo framing:** "Let me show you what we built this sprint." *(shows screens, takes no questions that change anything)*
>
> **Working-session framing:** "Here's what we built — and here's a specific decision we need your input on before we plan next sprint."

## Bring a real question, not just real work

The single highest-leverage change to a Sprint Review is arriving with at least one genuine open question for stakeholders — not a rhetorical one, an actual unresolved decision that their input will change. This is what pulls people from passive audience into active participants.

> **What to bring instead of just a demo:** "We built two versions of this flow and aren't sure which one better matches what customers actually need — can we walk through both together and get your read?"

## Handle the stakeholder who tries to turn it into status theater

Some stakeholders, out of habit, will try to steer the Review back into a one-way status update — asking only "are we on track," not engaging with the actual work. Redirect gently but directly, back toward the working question you came with.

> **Stakeholder:** "So are we on track overall?"
>
> **Redirect:** "We'll get to overall status in a second — first, I really do want your take on this specific decision, since it affects what we build next."

## Why this actually matters for trust, not just meeting quality

A Sprint Review that stakeholders experience as genuinely useful — where their input visibly changed something — builds exactly the kind of trust that makes the hard conversations in [Managing Up](/resources/articles/stakeholder-management/managing-up) land better later. A stakeholder who's only ever seen curated demos has no evidence that what you show them reflects reality, which is precisely what makes bad news land as a surprise instead of an update.

## Related pages

See [The Scrum Framework](/knowledge/scrum-framework) for the Sprint Review's actual purpose, and [Confluence](/tools/confluence) for documenting the decisions that come out of a working session like this.`,
  },
  {
    slug: "what-to-say-when-you-dont-have-a-date",
    category: "stakeholder-management",
    title: "What to Say When a Stakeholder Asks for a Date You Don't Have",
    summary:
      "\"I don't know yet\" is true and useless on its own. Here's how to say it in a way that still gives the stakeholder something real to work with.",
    readMinutes: 5,
    body: `A stakeholder asking "when will this be done" isn't usually asking out of idle curiosity — they have their own commitments riding on the answer. Refusing to give any number at all, even when a precise one genuinely isn't knowable yet, leaves them with nothing to plan around, which is its own kind of unhelpful.

## Give a range and a confidence level, not silence

Instead of a single date you're not confident in, or no date at all, give a forecasted range based on the team's actual historical throughput, along with an honest read on how confident that range is. This is more useful than either extreme — a fake precise date, or a refusal to estimate anything.

> **Stakeholder:** "When will this be done? I need something to tell my boss."
>
> **Unhelpful extreme 1:** "I can't give you a date, it's too uncertain."
>
> **Unhelpful extreme 2:** "March 15th." *(with no real basis for that specific day)*
>
> **What actually helps:** "Based on how similar work has gone recently, I'd forecast 3 to 5 weeks, with 4 being most likely. I'll tighten that range as we learn more in the next week or two — I'd rather give you a moving, honest range than a fake precise date."

## Explain what would change the range, not just the range itself

A number alone invites the question "why not sooner." Naming the specific things that would tighten or loosen the estimate gives the stakeholder real levers to think about, instead of just a passive number to wait on.

> **Adding the "why":** "The biggest uncertainty right now is whether the third-party integration behaves the way their docs describe — once we've actually tested against it, I can tighten this range a lot."

## When they push for a single hard number anyway

Some stakeholders will keep pushing past a range for a single committed date, often because their own reporting structure demands one. Acknowledge the pressure they're under without inventing false precision to relieve it.

> **Stakeholder, pushing:** "I really need one date, not a range."
>
> **Holding the line honestly:** "I get that pressure — but giving you a single date I'm not confident in doesn't actually help you plan better, it just moves the surprise to later. What I can do is commit to updating you weekly as the range narrows."

## Related pages

See [Using Cycle Time to Forecast Without Estimating](/resources/articles/metrics/cycle-time-forecasting) for the forecasting approach this kind of range is based on, and [Managing Up](/resources/articles/stakeholder-management/managing-up) for the broader pattern of leading with data.`,
  },
  {
    slug: "stakeholder-who-skips-review-then-complains",
    category: "stakeholder-management",
    title: "Handling the Stakeholder Who Skips Sprint Review and Complains Later",
    summary:
      "The pattern is familiar: they don't show up, then react with surprise or frustration to something that was shown, in detail, at a meeting they skipped.",
    readMinutes: 5,
    body: `This is one of the more quietly corrosive patterns in stakeholder management — not because any single instance is a crisis, but because it repeats, and each time it repeats it teaches the team that showing up doesn't matter, since the complaints happen regardless.

## Don't just accept the retroactive complaint

The instinct is to answer the complaint on its merits and move on, which is polite but reinforces exactly the behavior causing the problem — why attend the Review if raising concerns afterward works just as well? Address the pattern itself, gently but directly, alongside answering the actual concern.

> **Stakeholder, a week later:** "Wait, why does this work this way? I wasn't expecting that."
>
> **Answering the concern only:** *(explains the reasoning, doesn't mention the missed Review)*
>
> **Answering the pattern too:** "Happy to walk through the reasoning — this is actually exactly what we showed and discussed at last week's Review. I want to make sure you're able to weigh in while there's still time to change something, rather than after. Is there a way to make the Review timing work better for you?"

## Make attending easier before you make it a bigger conversation

Sometimes the honest cause isn't indifference — it's a genuinely bad meeting time, or a Review that's historically been a low-value demo they've learned to skip. Before treating this as a stakeholder-engagement problem, rule out that the Review itself hasn't been worth their time (see [turning Sprint Review into a working session](/resources/articles/stakeholder-management/sprint-review-as-working-session)).

## If it keeps happening despite good-faith fixes

If timing and format aren't the issue and the pattern continues, it's fair to be more direct about the cost of the pattern — specifically, that feedback given after decisions are made is much more expensive to act on than feedback given before.

> **More direct version:** "I want to take your input seriously, and it's hard to do that well after something's already built. Could we find a standing time that works for you, even a shorter version, so your feedback lands while it can still shape the outcome?"

## Related pages

See [Turning a Sprint Review Into a Real Working Session](/resources/articles/stakeholder-management/sprint-review-as-working-session) for making the meeting itself worth attending, and [Confluence](/tools/confluence) for documenting decisions so async stakeholders have a real way to catch up.`,
  },
  {
    slug: "rebuilding-trust-with-a-burned-stakeholder",
    category: "stakeholder-management",
    title: "Building Trust With a Stakeholder Who's Been Burned by a Past Team",
    summary:
      "Their skepticism isn't about you. It's evidence from a previous team's failure that you're inheriting whether it's fair or not.",
    readMinutes: 5,
    body: `A stakeholder who double-checks everything, asks pointed questions in every meeting, or seems to assume the worst about timelines isn't necessarily reacting to your team. Often, they're still reacting to a different team, a different project, months or years ago — and no amount of reasonable behavior from you erases that history instantly.

## Don't take the skepticism personally, and don't argue with it

The instinct when someone seems unfairly skeptical is to defend the current team's track record, sometimes a little too forcefully. This usually backfires — the stakeholder isn't being irrational, they're pattern-matching on real past experience, and arguing with the pattern doesn't address the experience that created it.

> **Defensive response (understandable, unhelpful):** "That's not fair, we've hit every commitment this quarter."
>
> **Response that actually builds trust:** "That makes sense given what you've dealt with before — I'd rather earn your confidence through what actually happens than ask you to just take my word for it."

## Trust rebuilds through small, verifiable commitments, not big promises

A large promise ("we'll definitely hit every date from now on") isn't credible to someone who's been burned before, and shouldn't be — it's exactly the kind of assurance that led to the last disappointment. Small, specific, easily-checked commitments, kept consistently, do more work than any single reassuring conversation.

> **A commitment that's easy to verify and rebuilds trust over time:** "I'll send you a two-line update every Friday, even on weeks where there's nothing new to report — so you always know where things stand without having to ask."

## Give them a low-cost way to verify things themselves

Where possible, give the skeptical stakeholder direct, low-friction visibility into real progress — a shared dashboard, an open invitation to any Sprint Review, a standing async update — rather than asking them to simply trust secondhand reports. Skepticism earned from being burned tends to soften faster with direct visibility than with reassurance alone.

## Be patient with the timeline of rebuilding trust

This is slow, and it's supposed to be — a stakeholder who was burned once and starts trusting again after one good sprint hasn't actually recalibrated, they've just been lucky once. Consistent, unglamorous reliability over a longer stretch is what actually does the work here.

## Related pages

See [Managing Up](/resources/articles/stakeholder-management/managing-up) for the underlying communication habits that support this, and [Confluence](/tools/confluence) for structuring the kind of visible, easy-to-check documentation that helps.`,
  },
];
