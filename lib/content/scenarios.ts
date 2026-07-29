export interface Scenario {
  id: string;
  title: string;
  situation: string;
  whyTricky: string;
  approach: string[];
}

export const scenarios: Scenario[] = [
  {
    id: "production-incident-mid-sprint",
    title: "A production incident pulls the whole team off planned work",
    situation:
      "Two days into the Sprint, a critical production issue surfaces and the entire team drops what they're doing to fight it. By the time it's resolved, a day and a half of planned capacity is gone.",
    whyTricky:
      "The instinct is to just quietly absorb the loss and hope the team catches up — which either means silently sacrificing the Definition of Done to hit the original commitment, or missing the Sprint Goal without ever having an honest conversation about why.",
    approach: [
      "As soon as the scale of the incident is clear, reforecast the Sprint openly with the team and Product Owner rather than waiting until the Review to reveal the impact.",
      "Decide together, explicitly, what changes: does the Sprint Goal shrink, does something specific get cut, or is the goal now at real risk — make the choice visible instead of letting it happen by default.",
      "Bring the incident into the retro as real data, not just an excuse — was this genuinely unforeseeable, or does it point to a monitoring or reliability gap worth raising as its own backlog item.",
    ],
  },
  {
    id: "key-team-member-resigns-mid-sprint",
    title: "A key team member resigns in the middle of a sprint",
    situation:
      "Someone with deep, hard-to-replace knowledge of the codebase gives notice mid-sprint, and their departure date lands before several in-flight items can realistically be finished by them.",
    whyTricky:
      "There's pressure to squeeze knowledge transfer and notice-period productivity out of someone who's often already emotionally checked out, while the rest of the team absorbs both the workload gap and the morale hit of a departure.",
    approach: [
      "Reprioritize immediately around what only they can hand off versus what can be picked up by anyone — knowledge transfer on the truly unique parts of their work takes priority over squeezing out normal feature work in their remaining time.",
      "Talk to the team honestly about the Sprint Goal in light of the gap, rather than pretending capacity hasn't changed.",
      "Address the morale dimension directly, not just the logistics — a departure affects the team's mood and focus, and pretending it's business as usual usually backfires.",
    ],
  },
  {
    id: "reorg-merges-two-teams",
    title: "A reorg suddenly merges two teams with very different working styles",
    situation:
      "One team ran tight two-week sprints with strict WIP limits; the other worked in a much looser, ad hoc style. Leadership merges them into one team with a single sprint cadence, effective immediately.",
    whyTricky:
      "Both teams have real, working habits that got them results — this isn't a case of one team being right and the other wrong, and forcing one team's process onto the other without discussion breeds resentment fast.",
    approach: [
      "Don't default to either team's existing process wholesale — run this as a genuine joint working-agreement session where both groups explain why their approach worked for them.",
      "Expect the first few sprints to be rough and say so upfront, so a bumpy start doesn't get read as evidence the merge itself was a mistake.",
      "Watch specifically for two sub-groups that still silently operate as their old separate teams inside the new one — that's a sign the merge is happening on paper but not in practice yet.",
    ],
  },
  {
    id: "informal-decision-maker-sidelines-po",
    title: "An informal decision-maker has quietly sidelined the actual Product Owner",
    situation:
      "A long-tenured senior engineer has, over time, become the person the team actually checks with before doing anything — not the Product Owner, who's newer or less assertive.",
    whyTricky:
      "This rarely happens through any single dramatic moment — it accumulates gradually, which makes it easy to normalize and hard to name without it sounding like an attack on someone well-liked and genuinely knowledgeable.",
    approach: [
      "Name the pattern to yourself first with concrete evidence — specific instances where a prioritization or scope call went through the engineer instead of the Product Owner.",
      "Talk to the Product Owner privately first, since this is ultimately about their authority being undermined, and they need to be part of deciding how to address it.",
      "Address it as a structural, process issue in front of the team (clarifying who actually makes backlog decisions) rather than singling out the engineer personally, which would likely trigger defensiveness without fixing the underlying pattern.",
    ],
  },
  {
    id: "executive-demo-on-short-notice",
    title: "The team is asked to demo to executives on short notice, mid-sprint",
    situation:
      "With two days' notice, leadership asks for a polished demo of in-progress work for a visiting executive, disrupting the plan for the rest of the Sprint.",
    whyTricky:
      "Refusing outright can look like obstruction of a legitimate business need, but silently absorbing the disruption teaches the organization that Sprint plans are negotiable on a moment's notice whenever someone senior asks.",
    approach: [
      "Get specific about what's actually needed — often a genuine demo of real, working functionality is possible without derailing the Sprint, if scoped honestly rather than turned into a polishing exercise.",
      "Name the tradeoff explicitly to whoever's asking: preparing a demo takes real time away from planned work, so what should shift to make room.",
      "If this becomes a recurring pattern rather than a one-off, raise it as a planning input going forward — build known demo-readiness expectations into the Sprint plan rather than treating each request as a surprise.",
    ],
  },
  {
    id: "dependency-team-minimal-timezone-overlap",
    title: "A critical dependency team has almost no time zone overlap",
    situation:
      "Your team depends heavily on another team roughly 10-11 hours away, leaving only a narrow, awkward overlap window each day for real-time coordination.",
    whyTricky:
      "This is a structural constraint no amount of process discipline fully solves — the temptation is to schedule frequent synchronous meetings that exhaust whoever's attending outside their normal hours.",
    approach: [
      "Push toward async-first coordination as the default — clear written handoffs, recorded updates — reserving the narrow overlap window specifically for things that genuinely need real-time back-and-forth.",
      "Agree explicitly on response-time expectations for async requests, so neither side is left guessing how long to wait before escalating.",
      "Rotate who bears the inconvenient meeting time rather than always asking the same team to accommodate the other.",
    ],
  },
  {
    id: "mandated-switch-to-safe",
    title: "The organization mandates a switch from Scrum to SAFe with no warning",
    situation:
      "Leadership announces the organization is adopting SAFe, effective next quarter, with the team learning about it after the decision is already made.",
    whyTricky:
      "The team may reasonably feel like their working process — something they built and own — was replaced without any input, regardless of whether SAFe itself is a reasonable choice for the wider organization's coordination needs.",
    approach: [
      "Separate two different conversations: whether SAFe is the right call at the organizational level (likely not yours to relitigate) and how the team can retain as much real ownership as possible within it.",
      "Get genuinely fluent in SAFe fast, rather than resisting it out of loyalty to the old process — a Scrum Master who understands the new framework well can protect the team's autonomy inside it far better than one who's just unhappy about the change.",
      "Bring the team's concerns to whoever's driving the rollout, specifically and concretely, rather than either quietly complying or quietly resisting.",
    ],
  },
  {
    id: "vocal-minority-resists-every-change",
    title: "A vocal minority pushes back on every process change, however small",
    situation:
      "Two or three team members reflexively object to nearly any proposed change to how the team works, regardless of what it is, while the rest of the team goes along quietly.",
    whyTricky:
      "It's tempting to either cave to the loudest objections every time, or to steamroll past them — both avoid the harder question of what's actually driving the resistance.",
    approach: [
      "Talk to the resistant individuals privately and with real curiosity — reflexive resistance to all change often traces back to a specific past experience (a change that was imposed badly once) rather than genuine opposition to the current proposal.",
      "Frame changes explicitly as time-boxed experiments with a review point, which is a much easier yes for someone who's wary of permanent, imposed change.",
      "Don't let the vocal minority's objections silently override what the quieter majority actually wants — check with the whole team, not just whoever speaks up first.",
    ],
  },
  {
    id: "proxy-product-owner-no-authority",
    title: "The Product Owner is a proxy with no real decision-making authority",
    situation:
      "The person in the Product Owner seat can't actually make final prioritization calls — every real decision has to be checked with someone else higher up who isn't in any Scrum event.",
    whyTricky:
      "This makes refinement and planning slower and less trustworthy, since decisions made in the room can get quietly overturned later by someone who wasn't part of the conversation.",
    approach: [
      "Name the pattern directly with the proxy Product Owner — this usually isn't news to them, and they may be just as frustrated by the constraint as the team is.",
      "Push for either genuine delegated authority for the proxy on a defined scope of decisions, or get the actual decision-maker into the room for the calls that matter, rather than accepting an endless approval chain as normal.",
      "If neither is possible, at minimum make the real decision-making chain visible to the team, so they understand why some calls take longer than they should, rather than blaming the person in the PO seat.",
    ],
  },
  {
    id: "new-stakeholder-challenges-norms",
    title: "A new stakeholder immediately challenges the team's established norms",
    situation:
      "A newly onboarded stakeholder — a new VP, a new client contact — starts questioning long-standing team practices (the sprint cadence, the Definition of Done, how estimates work) within their first few weeks.",
    whyTricky:
      "Some of the challenge might be genuinely valid outside perspective; some might be someone new asserting authority without yet understanding the context behind why things are the way they are. Telling the two apart takes real listening, not a defensive reaction.",
    approach: [
      "Walk them through the reasoning behind current practices before defending or changing anything — most established norms have a real history, and sharing it turns a defensive conversation into an informative one.",
      "Stay genuinely open to the parts of their challenge that have merit — new eyes sometimes catch something the team has stopped questioning.",
      "If their challenge is really about establishing authority rather than the practices themselves, that's a relationship to build over time through consistent delivery, not something to resolve in one conversation.",
    ],
  },
  {
    id: "public-velocity-comparison",
    title: "Your team's velocity is publicly compared to another team's at a company all-hands",
    situation:
      "Leadership shows a slide comparing velocity numbers across teams in a company-wide meeting, with your team's number looking lower.",
    whyTricky:
      "This is exactly the scenario that predictably causes point inflation — the team will notice the public comparison whether or not you address it, and will likely start adjusting their estimating behavior in response regardless of what's said afterward.",
    approach: [
      "Address it with leadership directly and promptly, explaining specifically why cross-team velocity comparison is misleading (different teams' points aren't the same unit) rather than letting it stand unchallenged.",
      "Talk to the team about it too — acknowledge it happened, and be explicit that you don't want estimating behavior to change in response to a comparison that wasn't valid to begin with.",
      "Offer a better alternative for whatever leadership was actually trying to see (progress, delivery health) — outcome-based metrics rather than velocity, so the underlying need doesn't just recreate the same problem next quarter.",
    ],
  },
  {
    id: "quiet-quitting-team-member",
    title: "A team member is doing the bare minimum with no initiative",
    situation:
      "Someone who used to contribute actively — raising ideas, helping teammates, engaging in retros — has pulled back to doing exactly what's assigned and nothing more, for several sprints running.",
    whyTricky:
      "This is easy to misread as a simple motivation or attitude problem, when it's often a symptom of something specific — burnout, feeling undervalued, a personal issue outside work, or disengagement from a decision they disagreed with and never got to voice.",
    approach: [
      "Have a direct, private, curious conversation rather than letting the pattern continue unaddressed or reacting to it publicly — 'I've noticed a change in how engaged you've seemed, and wanted to check in' opens better than a complaint about output.",
      "Listen for whether this is situational (temporary, explainable) or a sign of a deeper disengagement that may need a manager's involvement, not just a Scrum Master's coaching conversation.",
      "Don't let the rest of the team's frustration about the reduced contribution build silently — if it's affecting team dynamics, that's worth acknowledging honestly once you understand the cause, even if the details of the conversation stay private.",
    ],
  },
  {
    id: "compliance-requirements-mid-project",
    title: "Legal or compliance imposes new documentation requirements mid-project",
    situation:
      "Partway through a project, a compliance or legal requirement is introduced that adds real, non-negotiable overhead to how work gets documented and reviewed going forward.",
    whyTricky:
      "This isn't a normal scope negotiation — compliance requirements usually aren't optional or up for debate, which means the honest response is adjusting capacity expectations, not trying to absorb the overhead invisibly.",
    approach: [
      "Treat the new requirement as a real, permanent addition to the Definition of Done or workflow, not a temporary inconvenience to work around quietly.",
      "Recalculate what the team can realistically deliver going forward given the added overhead, and communicate that recalibration honestly to stakeholders rather than trying to hit old estimates against new requirements.",
      "Build the new requirement into the actual board workflow (a required field, a review step) so it's structurally enforced rather than relying on everyone remembering to do it manually every time.",
    ],
  },
  {
    id: "distributed-across-outsourced-vendors",
    title: "The team is distributed across three outsourced vendors with different management chains",
    situation:
      "'The team' is really people from three different vendor organizations, each reporting to a different manager outside your control, working together on one product.",
    whyTricky:
      "Normal team-building levers — direct performance conversations, resourcing decisions, even simple scheduling — often require going through a vendor manager rather than being something you can address directly.",
    approach: [
      "Build a working relationship with each vendor's manager specifically, not just the individuals doing the work — many issues (capacity, priorities, personnel changes) will need to go through that channel regardless of how well you know the individuals day-to-day.",
      "Push hard for a single, shared Definition of Done and working agreement across all three vendor groups — without it, each group defaults to its own vendor's standards, and quality becomes inconsistent across the same product.",
      "Be realistic about what's genuinely yours to fix versus what requires escalating to whoever holds the actual vendor contracts — this structure has real limits on what team-level coaching alone can solve.",
    ],
  },
  {
    id: "team-broken-up-to-seed-new-teams",
    title: "A well-performing team is being split up to seed two new teams",
    situation:
      "Leadership decides to break apart a team that's finally hit its stride, distributing its members to jump-start two new, less experienced teams.",
    whyTricky:
      "This is often the right organizational call — spreading expertise is genuinely valuable — and it still means dismantling something that took real time and effort to build, with a real cost to the people who built it.",
    approach: [
      "Acknowledge the loss honestly with the team rather than only presenting the organizational logic — a high-performing team being split up is a legitimate thing to feel disappointed about, even when the reasoning is sound.",
      "Push for the split to be done deliberately — spreading experienced people across the new teams rather than randomly, so each new team actually gets a real anchor of Scrum maturity rather than diluting it evenly into mediocrity.",
      "Treat this as a genuine opportunity rather than only a loss — it's a natural moment to coach departing members on carrying good practices into a new context, and a real test of whether the practices you built were about the team or about the specific people in it.",
    ],
  },
];
