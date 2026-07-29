import type { Article } from "./types";

export const scalingArticles: Article[] = [
  {
    slug: "scrum-of-scrums-not-just-status",
    category: "scaling",
    title: "Running a Scrum of Scrums That Isn't Just a Status Meeting",
    summary:
      "Most Scrum of Scrums meetings degrade into every team reporting status to a room that can't do anything about most of what's reported. Here's the fix.",
    readMinutes: 6,
    body: `A Scrum of Scrums that works is a dependency-resolution meeting. A Scrum of Scrums that's degraded is a status meeting with more people in it, where each representative reports their team's update to a room that mostly can't act on any of it. The second version is extremely common, and it's exactly why a lot of organizations conclude Scrum of Scrums "doesn't work" — the mechanism was never actually being used for what it's for.

## The test: does anything ever get resolved in the room?

If you can't recall a single instance where a cross-team blocker was actually surfaced and resolved (or a next step assigned) during a Scrum of Scrums in the last month, it's a status meeting regardless of what it's called. A working one has a visible trail of dependencies raised and closed.

> **Status-meeting framing:** "Team A: on track. Team B: on track. Team C: slightly behind due to a bug."
>
> **Working framing:** "Team A is blocked on an API contract from Team B that hasn't been finalized — Team B, when can we get clarity on that, and does it need to happen before your next sprint starts?"

## Change what representatives are asked to bring

Instead of "what did your team do," ask each representative to bring specifically: what does my team need from another team right now, and what is another team waiting on from mine. This single framing change turns the meeting from parallel status reports into an actual dependency map.

> **The question that changes the meeting:** "Before status — does anyone have something blocking them that another team in this room could unblock today?"

## Keep a visible, running list of cross-team dependencies

A Scrum of Scrums without a persistent artifact tracking open cross-team dependencies relies entirely on memory between meetings, which is how the same blocker gets re-raised for three weeks running without anyone noticing the pattern. A simple shared board — dependency, owner, status — makes the meeting's actual job visible.

## What to do if it's already degraded into status theater

Naming it directly to the other representatives is usually more effective than quietly trying to change the format alone — since the meeting belongs to everyone in the room, not just its facilitator.

> **Naming it to the group:** "I think we've drifted into reporting status to each other without actually resolving dependencies live. Can we try, for the next few sessions, only covering things that need another team's action?"

## Related pages

See [Scaled Agile Frameworks](/knowledge/scaled-frameworks) for how Scrum of Scrums fits within Scrum@Scale specifically, and [What to Do When Two Teams Are Blocked on Each Other](/resources/articles/scaling/two-teams-blocked-on-each-other) for the underlying dependency problem this meeting exists to solve.`,
  },
  {
    slug: "two-teams-blocked-on-each-other",
    category: "scaling",
    title: "What to Do When Two Teams Are Blocked on Each Other Every Single Sprint",
    summary:
      "A recurring cross-team dependency isn't a scheduling problem you can fix with better coordination alone. Sometimes the relationship itself needs to change.",
    readMinutes: 6,
    body: `When two teams block each other sprint after sprint, the instinct is to solve it with more coordination — another sync meeting, a shared Slack channel, tighter planning alignment. Sometimes that's the right fix. Often, the real issue is that the two teams have defaulted into an expensive way of interacting without ever deciding to.

## Name the interaction mode you're actually in

Most persistent cross-team dependency pain comes from two teams defaulting to constant, high-touch back-and-forth on every piece of shared work — genuinely useful when a boundary is still being figured out, expensive and unnecessary once it isn't. The fix often isn't more of that interaction; it's less of it, with a clearer boundary in its place.

> **The question to ask both teams together:** "Do we actually need this much back-and-forth on every item, or is there a clear enough boundary here that one team could just deliver something the other consumes, with much less ongoing coordination?"

## Consider a well-defined handoff instead of constant collaboration

If the boundary between the two teams' work is genuinely clear — one team needs a specific, well-specified output from the other, not ongoing joint decision-making — a service-style relationship, with an agreed contract and much less continuous back-and-forth, is usually both cheaper and less frustrating than trying to coordinate closer.

> **Proposing the shift:** "What if instead of joint planning every sprint, we agree on a clear contract for what your team provides ours, and we plan against that contract independently? We'd only need to sync when the contract itself needs to change."

## When the dependency is really about unclear ownership, not workload

Sometimes what looks like a blocking dependency is actually two teams unsure who owns a particular piece of the system, leading to a assumption that any change requires joint sign-off. Clarifying ownership explicitly can remove the need for coordination that was never actually necessary once someone owns the decision outright.

## When it's a structural problem too big for the two teams to fix themselves

If the dependency exists because of how the organization has drawn team boundaries in the first place — splitting a single, indivisible piece of work across two teams that will always need to coordinate closely no matter what — that's worth escalating as an organizational design question, not something to keep managing sprint after sprint.

> **Escalating as a structural issue:** "This dependency has cost us real time for four sprints in a row. I don't think better coordination fixes it — I think it's a sign these two areas of work shouldn't be split across separate teams. Can we talk about that at the org level?"

## Related pages

See [Team Topologies](/resources/reading/team-topologies) for the actual vocabulary (interaction modes, team types) this article draws on, and [Scaled Agile Frameworks](/knowledge/scaled-frameworks) for how different scaling frameworks handle cross-team dependencies structurally.`,
  },
  {
    slug: "preparing-for-first-pi-planning",
    category: "scaling",
    title: "Preparing Your Team for Its First PI Planning",
    summary:
      "PI Planning is a lot for a team that's never done it — two days, dozens of people, a room full of dependencies to map in real time. Here's how to actually prepare them.",
    readMinutes: 6,
    body: `A team walking into their first PI (Program Increment) Planning event without preparation tends to either freeze — agreeing to whatever's put in front of them because the pace feels too fast to push back — or disengage, treating it as something happening to them rather than with them. Both are avoidable with the right preparation the week before.

## Walk through the format before the event, not during it

The single highest-value thing to do beforehand is a short internal walkthrough of what will actually happen — the agenda, the draft plan review, breakout sessions, the confidence vote at the end — so the team's cognitive load during the real event goes toward the actual planning, not toward figuring out the format for the first time under time pressure.

> **Setting expectations beforehand:** "This will move fast and involve a lot of people at once. Our job in the breakout sessions specifically is to map anything we depend on from another team, and anything another team depends on from us — that's the part most worth your attention."

## Prepare the team to actually name dependencies, not just accept a plan

New teams at PI Planning often quietly accept a draft plan that has unstated dependencies buried in it, because pushing back in a room full of unfamiliar people from other teams feels risky. Explicitly coach the team beforehand that naming a dependency out loud, even an uncomfortable one, is exactly what the event is for.

> **Coaching before the event:** "If you spot something in the draft plan that depends on another team delivering something first, say so out loud in the room — that's the entire point of this exercise, and it's much cheaper to catch now than three sprints in."

## Don't let the team over-commit just to seem cooperative

The social pressure of a large room, with leadership present, pushes toward everyone nodding along to an ambitious plan. Prepare the team specifically to voice capacity concerns as confidently as they would in a normal Sprint Planning, since the format's size shouldn't change the honesty of the commitment.

> **What to reinforce beforehand:** "The size of the room doesn't make our actual capacity any bigger. If something looks unrealistic, say so here — it's much more expensive to say it three sprints into the Program Increment."

## After the event: bring the dependencies home

The team's draft plan and any newly identified dependencies need to actually make it back into the team's own backlog and board — a PI Planning event that produces a plan nobody references again in daily work has produced a document, not a plan.

## Related pages

See [Scaled Agile Frameworks](/knowledge/scaled-frameworks) for what PI Planning is within SAFe specifically, and [Running a Scrum of Scrums That Isn't Just a Status Meeting](/resources/articles/scaling/scrum-of-scrums-not-just-status) for the ongoing cadence that should follow up on what gets committed here.`,
  },
  {
    slug: "escalating-cross-team-impediment",
    category: "scaling",
    title: "Escalating a Cross-Team Impediment Without Making It Personal",
    summary:
      "Escalating a blocker caused by another team can easily read as blaming that team. Here's how to raise it as a system problem instead, and actually get it resolved.",
    readMinutes: 5,
    body: `Escalating an impediment that another team is causing is one of the more socially uncomfortable parts of the Scrum Master role — done badly, it reads as complaining about another team to their bosses. Done well, it reads as surfacing a shared problem that neither team can fix alone. The difference is almost entirely in the framing.

## Frame it as a system gap, not a team failure

The other team is very rarely blocking yours out of malice or incompetence — usually they have their own competing priorities, their own capacity constraints, and no visibility into how much their delay is costing your team. Escalating with that framing, rather than a framing of fault, gets a much better reception and a much better outcome.

> **Framed as blame (triggers defensiveness, damages the relationship):** "Team B keeps missing their deadlines and it's blocking us every sprint."
>
> **Framed as a system gap (invites a real fix):** "Our team depends on an API contract from Team B, and it's consistently not ready when we need it. I don't think this is anyone dropping the ball — I think it's a sign the two teams' priorities aren't currently aligned on this dependency, and that's worth fixing at a level above either team."

## Bring the cost, specifically, not just the complaint

A vague "this keeps happening" is easy to deprioritize. A specific, quantified cost — sprints affected, carryover caused, a concrete example with dates — is much harder to wave away, because it makes the impact of inaction visible rather than abstract.

> **Vague version:** "This dependency keeps causing problems."
>
> **Specific version:** "This dependency has caused carryover in 3 of the last 4 sprints, roughly 15% of our capacity each time. I want to flag it at a level where both teams' priorities can actually be aligned."

## Go through the other Scrum Master first, not around them

Escalating a cross-team issue by going straight to leadership without first raising it with the other team's Scrum Master tends to damage the peer relationship you'll need for the next dependency too. A quick, direct conversation first — even if it doesn't resolve things on its own — makes any later escalation land as a shared, already-attempted problem rather than a surprise attack.

> **The conversation to have first:** "I want to flag this dependency issue somewhere it can actually get fixed at the priority level — wanted to loop you in first, since it affects your team too, before I raise it further."

## Related pages

See [Running a Scrum of Scrums That Isn't Just a Status Meeting](/resources/articles/scaling/scrum-of-scrums-not-just-status) for where this kind of issue should ideally surface earlier, and [Anti-Patterns & Fixes](/knowledge/anti-patterns) for the "cross-team multitasking" pattern this often sits alongside.`,
  },
  {
    slug: "when-your-team-needs-a-platform-team",
    category: "scaling",
    title: "When Your Team Needs a Platform Team (and How to Ask for One)",
    summary:
      "If your team keeps rebuilding the same infrastructure other teams also need, the fix might not be more people on your team — it might be a team that doesn't exist yet.",
    readMinutes: 5,
    body: `A recurring pattern in growing organizations: multiple teams independently building and maintaining similar infrastructure — deployment pipelines, authentication, logging — because no shared platform exists yet to provide it. Each team absorbs the cost as if it were unavoidable, when the actual fix is organizational, not something any one team can solve by working harder.

## Spot the pattern before proposing the fix

Before asking for a platform team, gather concrete evidence that this is happening across multiple teams, not just yours — a genuinely shared platform team only makes sense if the underlying need is genuinely shared, not just something one team happens to find annoying.

> **What to look for:** Ask peer Scrum Masters or tech leads on other teams whether they've built or maintained something similar recently — deployment tooling, a shared auth flow, common logging infrastructure. If two or three teams independently say yes, that's real evidence.

## Frame the ask around cognitive load, not convenience

"It would be nice to have a platform team" is easy to deprioritize. "Three teams are each spending real capacity maintaining nearly identical infrastructure that isn't differentiated, valuable work" is a cost argument leadership can actually weigh against the cost of standing up a shared team.

> **Making the case:** "Three of our teams are independently maintaining very similar deployment pipelines. That's real capacity going toward undifferentiated infrastructure work instead of toward what actually makes our products different. A shared platform team consuming that as a service would free up meaningful capacity across all three."

## Be specific about what "as a service" means here

A platform team that becomes another queue every stream-aligned team has to wait on defeats the purpose — the ask should be specific about a genuinely self-service, low-friction relationship, not just moving the same work to a different team with the same coordination overhead.

> **Setting the expectation upfront:** "For this to actually reduce our load, the platform needs to be something we can consume directly, on our own schedule — not something that requires a ticket and a two-week wait every time we need something from it."

## If a full platform team isn't realistic yet

If the organization isn't ready to fund a dedicated platform team, a smaller first step — one person with explicit, protected time to build a shared internal tool a few teams need — can validate the need and build the case for something bigger later.

## Related pages

See [Team Topologies](/resources/reading/team-topologies) for the platform team concept and the interaction modes that make it work well, and [What to Do When Two Teams Are Blocked on Each Other](/resources/articles/scaling/two-teams-blocked-on-each-other) for the related dependency pattern.`,
  },
];
