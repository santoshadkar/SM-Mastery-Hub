import type { Article } from "./types";

export const metricsArticles: Article[] = [
  {
    slug: "reading-a-cumulative-flow-diagram",
    category: "metrics",
    title: "Reading a Cumulative Flow Diagram Without a Statistics Degree",
    summary:
      "The chart looks intimidating and the insight it gives is simple: where is work piling up, and since when. Here's how to actually read one in under a minute.",
    readMinutes: 5,
    body: `A Cumulative Flow Diagram (CFD) is a stacked area chart, one band per workflow status, showing the count of items in each status over time. It looks like a lot at first glance. The insight it's actually built to give you is much narrower: which stage of your workflow is quietly turning into a queue.

## The one thing to look for: a widening band

Every other detail of the chart is secondary to this one pattern. If the band representing "In Review," say, is getting visibly wider over the last two or three weeks compared to the bands around it, work is arriving into review faster than it's leaving — a bottleneck is forming, right there, well before it would show up as a missed Sprint Goal.

> **What a widening band actually means:** More items are entering that status than leaving it. Somewhere upstream, work is being finished faster than it can be reviewed, tested, or approved — and it's piling up exactly where the band is widening.

## What a healthy CFD looks like

In a healthy flow, each band stays roughly parallel to the ones around it — bands can be different sizes (some stages naturally hold more work than others), but their width should stay stable over time, not steadily grow. Parallel, evenly-spaced bands moving together are the sign to look for, not perfect straight lines.

## Using it in a retro without turning it into a math lecture

The chart doesn't need to be explained in full to be useful in a retro — point at the one widening band and ask a plain question about it, rather than walking the team through how CFDs work in the abstract.

> **In retro:** "Looking at this chart, the 'In Review' band has been getting wider for the last two weeks. Does that match what it's felt like from the inside?"

## What it won't tell you

A CFD shows where work is piling up — it doesn't tell you why. A widening review band could mean not enough reviewers, reviews that take longer than they should, or a policy that requires two approvals instead of one. Treat the chart as the start of an investigation, not the answer to one.

## Related pages

See [Kanban & Scrumban](/knowledge/kanban-scrumban) for more on where CFDs come from, and [Jira](/tools/jira) or [Azure DevOps](/tools/azure-devops) for where to actually find this chart in each tool.`,
  },
  {
    slug: "velocity-conversation-with-leadership",
    category: "metrics",
    title: "The Velocity Conversation: What to Say When Leadership Wants It to Go Up",
    summary:
      'Someone above the team asks why velocity hasn\'t increased. This is a genuinely dangerous moment for a team\'s honesty about its own numbers — here\'s how to handle it.',
    readMinutes: 6,
    body: `The moment leadership starts asking why velocity isn't higher, or comparing it across teams, is the exact moment story point inflation becomes rational for the team — if the number is being judged, the team will, consciously or not, start optimizing the number instead of the work it's supposed to represent. Handling this conversation well protects the number's usefulness; handling it badly destroys it permanently.

## Explain what velocity actually is, plainly, before defending any specific number

Most leadership pressure on velocity comes from treating it like a productivity metric comparable across teams or over long stretches of time, which it was never designed to be. Before defending this team's specific number, it's worth resetting what the number actually means.

> **Leadership:** "Why hasn't velocity gone up this quarter? Other teams are higher."
>
> **Reframing before defending anything:** "Velocity is specific to this team's own estimating scale — it's not comparable to another team's number, the same way two people's rulers marked in different units can't be compared directly. What I can tell you about is whether we're delivering more real value quarter over quarter, which is a different, better question."

## Redirect to outcomes the number was never meant to answer

Once the comparison framing is set aside, there's usually a real, legitimate question underneath the leadership concern — is the team actually getting more effective over time. Answer that directly, with better evidence than velocity: cycle time trends, defect rates, or specific delivered outcomes.

> **Better answer to the real underlying question:** "Cycle time on similar-sized items has dropped from nine days to six over the last two quarters, and we've cut escaped defects roughly in half. That's the trend I'd point to for whether we're improving — velocity alone wouldn't show you that."

## What to do if the pressure continues anyway

If leadership keeps insisting on velocity specifically as the measure of success even after this conversation, that's worth naming as a risk to the team directly and honestly — because the team will notice the pressure regardless of what's said in this meeting, and will adjust its estimating behavior to match what's being measured, whether or not that's the intent.

> **Naming the risk to leadership, plainly:** "If velocity becomes the measure we're judged on, I want to be upfront that teams predictably respond by inflating estimates rather than genuinely improving — I'd rather flag that risk now than have it show up quietly in six months."

## Related pages

See [Jira reports](/tools/jira) and [Anti-Patterns & Fixes](/knowledge/anti-patterns) for the "story point inflation" pattern this conversation is meant to head off.`,
  },
  {
    slug: "cycle-time-forecasting",
    category: "metrics",
    title: "Using Cycle Time to Forecast Without Making a Single Estimate",
    summary:
      "You don't need story points to give a stakeholder an honest, data-backed answer about when something will likely be done. Here's the practical version.",
    readMinutes: 6,
    body: `If your team already tracks how long items actually take from start to finish — cycle time — you already have everything needed to forecast upcoming work, without asking anyone to estimate anything in advance. This is often faster and more honest than a fresh estimate would be anyway.

## The core idea, in plain terms

Pull the cycle times of the last 20-30 completed items of roughly similar type. That distribution — not its average, the whole spread — is your forecast for the next similar item. If 85% of recent items finished within 3 to 9 days, a new similar item has roughly an 85% chance of finishing within that same range, with no new estimating conversation required.

> **What this replaces:** Instead of asking "how many story points is this," and translating points into a guessed timeline, you're asking "how long have similar items actually taken recently," and using that real history directly.

## Why the whole distribution matters, not just the average

An average cycle time of 6 days can hide a distribution where most items take 4-5 days but a meaningful chunk take 15+ — averaging that away gives false confidence. Reporting a range with a stated confidence level ("85% chance of finishing within 3 to 9 days") is more honest than a single average number pretending to be precise.

> **What to say to a stakeholder using this data:** "Based on the last 25 similar items, there's about an 85% chance this finishes within 3 to 9 days from when we start it. I can't promise a single date, but that range reflects our actual recent history, not a guess."

## What "similar" needs to mean for this to work

This only holds up if the historical items you're pulling from are genuinely comparable in kind to the new one — comparing a one-line copy change against a multi-service integration and calling them "similar" breaks the method. Keep separate cycle-time histories for genuinely different categories of work if your team's work varies a lot in size or type.

## What this doesn't replace

This is a forecasting technique, not a substitute for understanding scope — if nobody's looked closely enough at the work to know it's genuinely similar to past items, no amount of historical data will save the forecast from being wrong. Cycle time forecasting assumes reasonable scoping has already happened; it doesn't do that scoping for you.

## Related pages

See [Reading a Cumulative Flow Diagram](/resources/articles/metrics/reading-a-cumulative-flow-diagram) for a related flow metric, and [Kanban & Scrumban](/knowledge/kanban-scrumban) for where cycle time fits in flow-based teams generally.`,
  },
  {
    slug: "what-carryover-rate-tells-you",
    category: "metrics",
    title: "What Your Carryover Rate Is Actually Telling You",
    summary:
      "Carryover isn't automatically bad. A high or rising carryover rate is a symptom worth investigating, not a verdict to react to on its own.",
    readMinutes: 5,
    body: `Carryover — items planned for a sprint that don't finish and roll into the next one — gets treated in a lot of teams as a simple failure metric: lower is always better. That's not quite right. A team with zero carryover, ever, might just be sandbagging its commitments; a team with occasional carryover on genuinely hard, well-understood work might be operating perfectly honestly.

## What a rising trend actually means, versus an occasional item

One carried-over item in an otherwise strong sprint is rarely meaningful on its own — work varies, and perfect prediction every single sprint isn't a realistic bar. A carryover rate that's been climbing steadily over several sprints is a different signal entirely, and worth investigating before it's dismissed as normal variation.

> **The question that separates the two:** "Is this one unusual item, or is this the fourth sprint in a row where carryover has gone up?"

## The most common hidden cause: items weren't actually ready

By far the most frequent real cause behind rising carryover isn't the team being slow — it's that items entered the sprint without being genuinely ready, and the ambiguity that should have been resolved in refinement instead ate real time mid-sprint. Carryover, in this case, is a refinement problem wearing a delivery-speed costume.

> **Investigating with the team:** "Looking at what carried over the last three sprints — was the common thread that these items weren't fully understood going in, or something else entirely?"

## The second most common cause: interruptions, not the plan itself

The other frequent cause is unplanned work — production incidents, urgent requests — eating into capacity that was already committed elsewhere. If this is the pattern, the fix isn't better estimation, it's making the unplanned work visible and explicitly protected-for, rather than pretending the sprint plan alone determines outcomes.

## What not to do with a rising carryover rate

Responding to rising carryover by simply committing to less work every sprint, without understanding the actual cause, treats the symptom directly and often makes the underlying problem invisible rather than solved — a smaller commitment can still carry over at the same rate if the real cause (unready items, interruptions) hasn't changed.

## Related pages

See [Definition of Ready checklist](/resources) for the readiness gap that's often the real cause, and [Jira reports](/tools/jira) or [Azure DevOps](/tools/azure-devops) for where carryover data actually lives.`,
  },
  {
    slug: "turning-bad-sprint-data-into-retro-not-blame",
    category: "metrics",
    title: "Turning a Bad Sprint's Data Into a Real Retro Conversation, Not a Blame Session",
    summary:
      "Data makes a retro sharper. It can also make it feel like an audit if it's introduced badly. The difference is entirely in how it's framed.",
    readMinutes: 5,
    body: `Bringing real numbers into a retro after a rough sprint is usually the right call — it grounds the conversation in what actually happened instead of whoever's frustration is loudest that day. It can also, handled carelessly, feel like the Scrum Master arriving with evidence for a prosecution. The difference is almost entirely in the framing of the first sentence.

## Frame the data as a starting question, not a conclusion

Data presented as "here's what went wrong" invites defensiveness. The same data presented as an open question invites investigation. The numbers haven't changed; the emotional register in the room has.

> **Framed as a verdict (triggers defensiveness):** "Our carryover was 40% this sprint, which is way too high."
>
> **Framed as a question (invites investigation):** "Carryover was higher this sprint than it's been in a while — 40% versus our usual 10-15%. What was different about this sprint that might explain that?"

## Separate the data from any single person

If the numbers point toward a specific individual's work — one person's items consistently taking longer, say — resist presenting that publicly by name in a retro. Raise the pattern in general terms with the team, and have any individual-specific conversation privately, separately, with care.

> **What not to do in a group retro:** Point at a specific person's carried-over items in front of the whole team.
>
> **What to do instead:** Raise the pattern generally with the team, and follow up privately: "I noticed a couple of items took longer than expected this sprint — want to talk through what happened there, just the two of us?"

## Use the data to ask "why," not to end the conversation

The numbers are a way into the conversation, not a replacement for it. A retro that presents a chart and moves straight to action items without anyone actually discussing what happened has used data as a shortcut past the conversation that mattered, not as a way into it.

## When the data reveals something outside the team's control

Sometimes a bad sprint's numbers point toward something the team genuinely couldn't have prevented — an external dependency failure, an unplanned incident. In that case, the retro's job shifts from "what should we do differently" to "how do we make dependencies on unreliable external systems more visible earlier next time" — a different, still useful, conversation.

## Related pages

See [Running a Retrospective That Actually Leads to Change](/resources/articles/facilitation/retro-that-leads-to-change) for the broader retro structure this fits into, and [What Your Carryover Rate Is Actually Telling You](/resources/articles/metrics/what-carryover-rate-tells-you) for reading this specific metric.`,
  },
];
