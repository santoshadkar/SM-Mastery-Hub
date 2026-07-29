import type { Workshop } from "./types";

export const backlogEstimationDeliveryWorkshops: Workshop[] = [
  {
    slug: "user-story-slicing",
    category: "backlog-estimation-delivery",
    title: "User Story Slicing",
    duration: "75-90 minutes",
    audience: "A team whose backlog items are consistently too large to finish within a sprint",
    objective:
      "Teach the team concrete techniques for splitting large stories into small, independently valuable, deliverable slices.",
    whyItMatters:
      "Oversized stories are one of the most common causes of carryover and mid-sprint surprises — teams often know they should slice smaller but lack concrete techniques beyond 'just make it smaller,' which isn't actionable advice on its own.",
    materials: ["A real, currently oversized story from the team's own backlog", "Sticky notes"],
    agenda: [
      {
        time: "10 min",
        step: "Why size matters",
        detail: "Connect story size directly to real costs the team has felt: harder to estimate accurately, harder to finish within a sprint, harder to get fast feedback.",
      },
      {
        time: "25 min",
        step: "Walk through slicing techniques",
        detail:
          "Cover several concrete patterns: slicing by workflow steps (e.g. happy path first, edge cases later), by business rule variations, by data variations (one data type before all), by interface (basic UI before polish), and by acceptance criteria (each criterion as its own slice where feasible).",
      },
      {
        time: "30 min",
        step: "Practice on a real oversized story",
        detail: "Take an actual current backlog item that's too big, and slice it together as a group using the techniques just covered — real practice on real work lands far better than a hypothetical example.",
      },
      {
        time: "15 min",
        step: "Check each slice for independent value",
        detail: "For each resulting slice, ask: is this still independently valuable and demonstrable on its own, or did we just chop it into meaningless fragments? A slice that isn't independently useful isn't a good slice.",
      },
      {
        time: "10 min",
        step: "Agree on a slicing habit for refinement",
        detail: "Commit to explicitly checking story size against a rough threshold during refinement going forward, rather than discovering oversized stories at Sprint Planning.",
      },
    ],
    facilitatorTips: [
      "Always practice on the team's own real backlog item, not a generic textbook example — the skill transfers much better.",
      "Watch for slices that are technically smaller but no longer deliver real value on their own — that's the most common slicing mistake.",
    ],
  },
  {
    slug: "estimation-yesterdays-weather",
    category: "backlog-estimation-delivery",
    title: "Estimation of User Stories, Yesterday's Weather",
    duration: "60-75 minutes",
    audience: "A team estimating inconsistently, or a team considering moving away from detailed estimation toward simpler forecasting",
    objective:
      "Teach relative estimation techniques and introduce 'Yesterday's Weather' — using recent actual performance as the best predictor of near-term future performance.",
    whyItMatters:
      "Teams often over-invest in estimation precision that doesn't actually improve forecasting accuracy. This workshop reframes estimation around what's genuinely useful: relative sizing and honest use of recent history, not false precision.",
    materials: ["Planning poker cards (physical or digital)", "The team's own last 3-5 sprints of completed work data"],
    agenda: [
      {
        time: "15 min",
        step: "Reintroduce relative estimation",
        detail: "Reinforce that story points measure relative effort and uncertainty, not hours — use a simple comparison exercise (which of these two everyday tasks is bigger) to make the relative-sizing concept concrete before applying it to stories.",
      },
      {
        time: "20 min",
        step: "Practice estimating a batch of real stories",
        detail: "Run a quick planning poker round on several real upcoming backlog items, discussing outliers (why did two people estimate very differently) rather than just averaging silently.",
      },
      {
        time: "15 min",
        step: "Introduce 'Yesterday's Weather'",
        detail: "Explain the principle: the best predictor of what a team can do next sprint is what it actually did in recent sprints, not a fresh, hopeful re-estimate each time. Show the team's own recent completed-points history as the forecasting input.",
      },
      {
        time: "15 min",
        step: "Discuss when Yesterday's Weather breaks down",
        detail: "Be honest about the limits: a team whose composition or work type has changed significantly can't lean purely on recent history — Yesterday's Weather assumes reasonable continuity.",
      },
      {
        time: "10 min",
        step: "Agree on how the team will use this going forward",
        detail: "Commit to referencing actual recent throughput in planning conversations, rather than debating a fresh capacity number from scratch each sprint.",
      },
    ],
    facilitatorTips: [
      "If the team is estimation-fatigued, this is a natural bridge toward lighter-weight forecasting — see the deep-dive on estimating without story points for further alternatives.",
      "Don't let 'Yesterday's Weather' become an excuse to stop thinking critically about a sprint's actual composition — it's a strong default, not a substitute for judgment.",
    ],
  },
  {
    slug: "dor-dod-ac",
    category: "backlog-estimation-delivery",
    title: "DoR, DoD, AC",
    duration: "75 minutes",
    audience: "A team with inconsistent, implicit, or contested standards for when work is ready to start and ready to call done",
    objective:
      "Build the team's own explicit Definition of Ready, Definition of Done, and a shared understanding of what good acceptance criteria look like.",
    whyItMatters:
      "Ambiguity about these three things is behind a huge share of Scrum friction — items pulled into a sprint that weren't actually ready, work called 'done' that quietly wasn't, and acceptance criteria too vague to verify against.",
    materials: ["Sticky notes", "A real recent story with weak or missing acceptance criteria, if available"],
    agenda: [
      {
        time: "10 min",
        step: "Define the three terms clearly",
        detail: "Definition of Ready: what a story needs before Sprint Planning. Definition of Done: what 'complete' means for any item. Acceptance Criteria: the specific, testable conditions for one particular story.",
      },
      {
        time: "20 min",
        step: "Build the Definition of Ready together",
        detail: "Brainstorm and converge on a real checklist (see the Resources library template as a starting point) — keep it as a genuine checklist, not prose, so it's actually checkable.",
      },
      {
        time: "20 min",
        step: "Build the Definition of Done together",
        detail: "Same process for Done — and explicitly discuss what happens when the team is under deadline pressure to skip part of it, since that's when the DoD actually gets tested.",
      },
      {
        time: "15 min",
        step: "Practice writing acceptance criteria on a real story",
        detail: "Take a real, currently vague story and rewrite its acceptance criteria as specific, testable conditions — practicing on real work beats a generic exercise.",
      },
      {
        time: "10 min",
        step: "Decide where these live and how they're enforced",
        detail: "Agree on where the DoR/DoD checklists are visible (ideally on the board itself, not buried in a wiki) and whether the workflow tool can enforce any of it structurally.",
      },
    ],
    facilitatorTips: [
      "If the team already has a DoD nobody follows, address that honestly first — ask why it stopped being followed before writing a new one.",
      "Keep both checklists short enough to actually be read and checked in real time, not an aspirational essay.",
    ],
  },
  {
    slug: "user-story-mapping",
    category: "backlog-estimation-delivery",
    title: "User Story Mapping",
    duration: "2-3 hours",
    audience: "A Product Owner and team planning a new product or a significant new feature area",
    objective:
      "Build a visual map of the user's journey through a product, organized to reveal a sensible, incremental release plan rather than a flat, unordered backlog.",
    whyItMatters:
      "A flat backlog list hides the user's actual journey and makes it hard to see what a genuinely minimal, coherent first release looks like. Story mapping makes that structure visible.",
    materials: ["A large wall or digital whiteboard", "Sticky notes in at least two colors (activities/steps versus details)"],
    agenda: [
      {
        time: "20 min",
        step: "Map the backbone: the user's journey, left to right",
        detail: "Identify the broad activities a user goes through, in sequence, across the top of the map (e.g. Discover, Sign Up, Browse, Purchase, Get Support).",
      },
      {
        time: "40 min",
        step: "Add the steps under each activity",
        detail: "Under each backbone activity, add the specific steps the user takes, still left to right in the order they'd naturally occur.",
      },
      {
        time: "40 min",
        step: "Add details and variations below each step",
        detail: "Beneath each step, stack sticky notes for the specific stories, variations, and edge cases needed to support that step — this is where the map gets deep, not just wide.",
      },
      {
        time: "30 min",
        step: "Slice horizontal release lines",
        detail: "Draw a line across the map marking a genuinely minimal first release — one thin, complete slice across the whole journey, not a complete build-out of the first few activities and nothing else.",
      },
      {
        time: "20 min",
        step: "Discuss what's above and below the line",
        detail: "Explicitly agree what's in the first release and what's deliberately deferred, and why — the map makes this a visible, discussable decision instead of an implicit one.",
      },
    ],
    facilitatorTips: [
      "The temptation is always to build one activity fully before moving to the next — actively push back on this and insist on a thin slice across the whole journey for the first release.",
      "This workshop works best with the Product Owner deeply involved, not just the team — it's as much a product-thinking exercise as a backlog exercise.",
    ],
  },
  {
    slug: "velocity-and-its-importance",
    category: "backlog-estimation-delivery",
    title: "Velocity and Its Importance to the Team",
    duration: "45-60 minutes",
    audience: "A team new to tracking velocity, or a team whose relationship with velocity has become unhealthy (gaming it, being judged on it)",
    objective:
      "Build a shared, correct understanding of what velocity is for, and explicitly agree on how the team will and won't use it.",
    whyItMatters:
      "Velocity is one of the most commonly misused metrics in Scrum — misunderstanding it is what leads directly to point inflation and cross-team comparison, both of which quietly undermine planning.",
    materials: ["The team's own recent velocity history, if tracked", "A simple chart template"],
    agenda: [
      {
        time: "10 min",
        step: "Define velocity precisely",
        detail: "Completed story points per sprint, specific to this team's own estimating scale — not comparable across teams, and not a measure of hours or effort in any absolute sense.",
      },
      {
        time: "15 min",
        step: "What it's actually useful for",
        detail: "Forecasting: predicting how much a team can likely take on in a future sprint, based on recent actual performance — nothing more.",
      },
      {
        time: "15 min",
        step: "What it's not useful for, and why it backfires",
        detail: "Explicitly walk through why using velocity as a performance target or cross-team comparison predictably causes point inflation, using a concrete example if the team has experienced this.",
      },
      {
        time: "10 min",
        step: "Agree on the team's own ground rules",
        detail: "Get explicit agreement: velocity stays internal to this team's forecasting, is never compared to another team, and is never treated as a target to hit.",
      },
      {
        time: "10 min",
        step: "Decide what to say if asked to compare",
        detail: "Prepare the team with a shared, ready answer for if leadership ever does ask to compare velocity across teams, so nobody's caught off guard defending the metric alone.",
      },
    ],
    facilitatorTips: [
      "If leadership has already been comparing velocity across teams, this workshop alone won't fix that — pair it with a direct conversation with leadership (see 'The Velocity Conversation' in Interview Preparation for talking points).",
      "Bring the team's own real velocity chart if you have one — abstract explanation lands much better paired with the team's actual data.",
    ],
  },
  {
    slug: "intro-to-devops-and-pair-programming",
    category: "backlog-estimation-delivery",
    title: "Introduction to DevOps and Pair Programming",
    duration: "60-75 minutes",
    audience: "A team new to continuous delivery practices or considering adopting pair programming",
    objective:
      "Give the team a working understanding of DevOps as a cultural and technical practice, and pair programming as a specific collaborative technique, including when each genuinely helps.",
    whyItMatters:
      "Both practices are frequently adopted (or rejected) based on secondhand opinions rather than a real understanding of what problem each is meant to solve — this workshop grounds the decision in the team's actual needs.",
    materials: ["A simple diagram of a CI/CD pipeline, if available", "None required for the pair programming portion beyond willing participants"],
    agenda: [
      {
        time: "20 min",
        step: "DevOps as culture, not just tooling",
        detail:
          "Introduce DevOps as breaking down the wall between building software and operating it — shared ownership of reliability, not a separate team's problem. Connect this to the team's own Definition of Done and how 'done' should include operational readiness, not just code complete.",
      },
      {
        time: "15 min",
        step: "Walk the CI/CD pipeline concept",
        detail: "Cover the basic idea of continuous integration (merging and testing frequently) and continuous delivery (keeping the product always in a releasable state), tied to real examples from the team's own tooling if it exists.",
      },
      {
        time: "15 min",
        step: "Introduce pair programming and its variants",
        detail: "Cover the basic driver/navigator model, and variants like ping-pong pairing (alternating who writes the test versus the implementation) — presented as a tool to consider, not a mandate.",
      },
      {
        time: "15 min",
        step: "When pairing genuinely helps, and when it doesn't",
        detail: "Discuss honestly: pairing is often strong for complex or high-risk work and onboarding, and often overkill for simple, well-understood tasks — avoid presenting it as universally good or universally wasteful.",
      },
      {
        time: "10 min",
        step: "Agree on an experiment",
        detail: "If there's interest, agree on a specific, time-boxed experiment (e.g. pair on the next complex story) rather than a permanent mandate either way.",
      },
    ],
    facilitatorTips: [
      "Don't present DevOps or pair programming as things the team must adopt — present them as tools, and let the team's own real pain points (deployment friction, knowledge silos) drive genuine interest.",
      "If the team already has strong engineering practices, this can be a shorter, lighter session focused mainly on shared vocabulary rather than persuasion.",
    ],
  },
];
