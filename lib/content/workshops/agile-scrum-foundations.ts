import type { Workshop } from "./types";

export const agileScrumFoundationsWorkshops: Workshop[] = [
  {
    slug: "introduction-to-agile",
    category: "agile-scrum-foundations",
    title: "Introduction to Agile",
    duration: "60-75 minutes",
    audience: "New team members, or a team/stakeholder group that's never worked in an Agile way before",
    objective:
      "Give participants a working understanding of why Agile exists and what it actually asks of them day to day — not just the vocabulary.",
    whyItMatters:
      "Most 'Introduction to Agile' sessions fail the same way: they walk through the Manifesto's values and principles as trivia to memorize, and nobody leaves able to explain what's actually different about how they'll work tomorrow. The workshop below is built backward from that gap.",
    materials: ["Whiteboard or shared virtual canvas", "Sticky notes (physical or digital)", "A real example of a recent project gone wrong from waterfall-style planning, if one exists"],
    agenda: [
      {
        time: "10 min",
        step: "Start with the pain, not the theory",
        detail:
          "Ask the group to describe a project that went badly because requirements changed late, or because problems weren't visible until the end. Write these on stickies. This becomes the motivation for everything that follows.",
      },
      {
        time: "15 min",
        step: "Introduce the four values as answers to that pain",
        detail:
          "Walk through the Agile Manifesto's four values, tying each one directly back to one of the pain points just raised — don't present them as abstract philosophy.",
      },
      {
        time: "15 min",
        step: "Contrast short feedback loops with long ones",
        detail:
          "Use a simple visual: a 6-month plan with one checkpoint at the end, versus short iterations with review points throughout. Ask which one catches a wrong assumption earlier.",
      },
      {
        time: "15 min",
        step: "Address the common myths directly",
        detail:
          "Explicitly debunk 'Agile means no planning,' 'Agile means no documentation,' and 'Agile means fast' — these misconceptions actively undermine adoption if left unaddressed.",
      },
      {
        time: "10 min",
        step: "Close with what changes starting Monday",
        detail:
          "End concretely: what will this team's first Sprint actually look like, what event happens when, and who does what. Abstract values need a landing point in real, upcoming action.",
      },
    ],
    facilitatorTips: [
      "Resist the urge to cover Scrum's mechanics in this session — this workshop is about the mindset shift, not the framework details (that's a separate workshop, Scrum in a Nutshell).",
      "If skeptics push back that 'this is just common sense,' agree — and point out that the discipline is in actually doing it consistently under pressure, not in the idea being novel.",
    ],
  },
  {
    slug: "scrum-in-a-nutshell",
    category: "agile-scrum-foundations",
    title: "Scrum in a Nutshell",
    duration: "60 minutes",
    audience: "A team about to start using Scrum, or one that's been doing it informally and needs a shared baseline",
    objective:
      "Give the team a single, shared mental model of Scrum's roles, events, and artifacts they can all point back to.",
    whyItMatters:
      "Teams that never got a proper shared introduction tend to each carry a slightly different idea of what Scrum actually requires, which shows up later as disagreement about 'that's not how Scrum works' during a real disagreement about something else entirely.",
    materials: ["The Sprint Cycle diagram (see the Scrum Framework page in the Knowledge Hub)", "Printed or digital one-pager of roles/events/artifacts"],
    agenda: [
      {
        time: "10 min",
        step: "The three pillars of empiricism",
        detail: "Introduce transparency, inspection, and adaptation as the actual foundation everything else sits on — not a side note.",
      },
      {
        time: "15 min",
        step: "Walk the Sprint cycle visually",
        detail: "Draw the Sprint as a circle with the five events around it, explaining each one's purpose in a single sentence before moving to the next.",
      },
      {
        time: "15 min",
        step: "The three accountabilities",
        detail: "Cover Product Owner, Scrum Master, and Developers — explicitly correcting the 'Scrum Master is a project manager' misconception here, since it surfaces almost every time.",
      },
      {
        time: "10 min",
        step: "The three artifacts and their commitments",
        detail: "Product Backlog/Product Goal, Sprint Backlog/Sprint Goal, Increment/Definition of Done — as a matched set, not three unrelated lists.",
      },
      {
        time: "10 min",
        step: "Q&A anchored to this specific team",
        detail: "Ask what, specifically, feels unclear about how this maps to their actual upcoming work — generic questions get generic answers; make it concrete.",
      },
    ],
    facilitatorTips: [
      "Use this team's own upcoming project as the running example throughout, not a generic hypothetical — it makes the abstractions land.",
      "If the team already has strong opinions from a past, badly-run Scrum experience, surface that early rather than letting it simmer as unspoken skepticism.",
    ],
  },
  {
    slug: "importance-of-scrum-events",
    category: "agile-scrum-foundations",
    title: "Importance of All the Events of Scrum",
    duration: "60 minutes",
    audience: "A team that's technically running all five events but seems to be going through the motions",
    objective:
      "Reconnect each Scrum event to the specific problem it exists to solve, so the team runs them with intent rather than habit.",
    whyItMatters:
      "This workshop exists specifically for teams at risk of, or already in, the 'Zombie Scrum' anti-pattern — the events are happening, but nobody remembers why, which is exactly what makes them start to feel pointless.",
    materials: ["Five index cards or digital cards, one per event", "The team's own recent retro notes if available"],
    agenda: [
      {
        time: "10 min",
        step: "Ask the team to rate each event's value, honestly",
        detail: "Anonymous 1-5 rating per event: how valuable does this actually feel right now? This surfaces which events have quietly gone stale before you say a word about theory.",
      },
      {
        time: "30 min",
        step: "Walk each event's actual purpose, one at a time",
        detail:
          "For each event, state the specific problem it solves (Sprint Planning: shared understanding of the Sprint Goal and plan; Daily Scrum: daily replanning toward that goal; Review: adapting the backlog based on real feedback; Retro: improving how the team works). Compare this purpose against the team's honest rating from step one.",
      },
      {
        time: "15 min",
        step: "Diagnose the lowest-rated event together",
        detail: "For whichever event scored lowest, ask directly: is the event's purpose not being met, or has the event just become a habit disconnected from its purpose? The fix differs for each.",
      },
      {
        time: "5 min",
        step: "Commit to one specific change",
        detail: "Pick one concrete adjustment to try in the next Sprint for the weakest event, and agree to revisit it explicitly in the next retro.",
      },
    ],
    facilitatorTips: [
      "This works far better as a live diagnostic with this specific team's real data than as an abstract lecture on why events matter in general.",
      "Expect some defensiveness if an event scores low — frame it as diagnosing the event, not blaming whoever normally runs it.",
    ],
  },
  {
    slug: "agile-mindset-doing-vs-being",
    category: "agile-scrum-foundations",
    title: "Agile Mindset — From Doing Agile to Being Agile",
    duration: "75-90 minutes",
    audience: "Teams and stakeholders who've been running Scrum mechanically for a while but haven't internalized the underlying values",
    objective:
      "Help participants recognize the difference between performing Agile ceremonies and actually operating with an Agile mindset — and see where their own team currently sits on that spectrum.",
    whyItMatters:
      "A team can run every event perfectly and still not be Agile in any meaningful sense — this is the single most common plateau teams hit after the first few months, and it's rarely addressed directly because it's uncomfortable to name.",
    materials: ["A 'Doing vs. Being' comparison chart (prepared in advance)", "Sticky notes for a self-assessment exercise"],
    agenda: [
      {
        time: "15 min",
        step: "Introduce the distinction with concrete contrasts",
        detail:
          "Present specific pairs: 'holding a retro' (doing) versus 'genuinely changing behavior based on a retro' (being); 'having a Sprint Goal' versus 'making real tradeoffs to protect it.' Each pair should land as recognizable, not abstract.",
      },
      {
        time: "20 min",
        step: "Anonymous team self-assessment",
        detail:
          "For each of several practices (retros, Daily Scrum, Definition of Done, stakeholder collaboration), have each person privately mark whether the team is 'doing' or 'being' — then reveal and discuss the spread of answers.",
      },
      {
        time: "20 min",
        step: "Discuss the gaps openly",
        detail:
          "Where the group disagreed most, or where most people marked 'doing,' dig into why — this is usually where the richest, most honest conversation of the workshop happens.",
      },
      {
        time: "15 min",
        step: "Identify the underlying value, not just the behavior",
        detail:
          "For the weakest area, trace it back to which Agile value or Scrum value is actually thin — courage, openness, respect — since fixing the symptom without the value underneath rarely holds.",
      },
      {
        time: "10 min",
        step: "One personal commitment each",
        detail:
          "Ask each person for one specific, personal behavior change — not a team-level action item, an individual one — since mindset shift ultimately happens person by person.",
      },
    ],
    facilitatorTips: [
      "This workshop requires real psychological safety to work — if the team hasn't built that yet, run the Psychological Safety workshop first.",
      "Model vulnerability yourself by naming one place you personally are still 'doing' rather than 'being' — it sets the tone for honest participation.",
    ],
  },
  {
    slug: "shu-ha-ri",
    category: "agile-scrum-foundations",
    title: "Shu Ha Ri",
    duration: "45 minutes",
    audience: "Teams debating whether to follow Scrum 'by the book' or adapt it, and coaches wondering how much to enforce",
    objective:
      "Give the team a shared framework for understanding when strict adherence to the rules is right, and when deliberate deviation is appropriate.",
    whyItMatters:
      "Without this framework, 'should we follow the rules exactly or adapt them' becomes a recurring, unresolved argument. Shu Ha Ri gives a shared vocabulary for recognizing which stage the team is actually in, which turns an abstract debate into a concrete assessment.",
    materials: ["A simple three-stage diagram (Shu / Ha / Ri)"],
    agenda: [
      {
        time: "10 min",
        step: "Introduce the three stages",
        detail:
          "Shu (follow the rules exactly, to build a foundation), Ha (understand the reasoning well enough to start adapting deliberately), Ri (transcend the rules, moving fluidly based on deep understanding of the underlying principles).",
      },
      {
        time: "15 min",
        step: "Place the team honestly on the spectrum",
        detail:
          "Ask specifically: does this team understand the reasoning behind current practices well enough to safely adapt them, or is it still building that foundation? Different individuals may honestly be at different stages.",
      },
      {
        time: "15 min",
        step: "Apply it to a real, current debate",
        detail:
          "Take an actual disagreement the team has had recently about following versus adapting a practice, and use the Shu-Ha-Ri lens to reframe it: is this a Shu-stage team trying to skip to Ri prematurely, or a genuinely Ha-stage team that's earned the right to adapt?",
      },
      {
        time: "5 min",
        step: "Agree on a shared check-in question",
        detail:
          "Going forward, agree the team will ask 'do we understand this well enough to adapt it, or are we skipping a step' before deviating from a standard practice.",
      },
    ],
    facilitatorTips: [
      "This concept is genuinely useful for coaching your own progression as a Scrum Master too, not just the team's — be honest about where you are on it yourself.",
      "Avoid using this as a way to shut down legitimate new ideas by declaring the team 'not ready' — that's a misuse of the framework, not an application of it.",
    ],
  },
  {
    slug: "agile-ways-of-working-working-agreement",
    category: "agile-scrum-foundations",
    title: "Agile Ways of Working — Working Agreement",
    duration: "75 minutes",
    audience: "A newly formed team, or an existing team whose norms have drifted or were never made explicit",
    objective:
      "Produce a real, specific, team-authored working agreement covering how the team actually wants to work together — not a generic template nobody reads again.",
    whyItMatters:
      "A working agreement imposed by the Scrum Master rather than built by the team rarely gets referenced again after the workshop that created it. The value is almost entirely in the team building it together, not in the document itself.",
    materials: ["Sticky notes, several colors", "A shared doc or wiki page to capture the final agreement (see Confluence documentation patterns)"],
    agenda: [
      {
        time: "10 min",
        step: "Set the frame: this is theirs, not yours",
        detail: "State explicitly that you're facilitating, not authoring — the agreement only has teeth if the team actually wrote it.",
      },
      {
        time: "20 min",
        step: "Brainstorm by category",
        detail:
          "Work through categories one at a time: core hours and availability, how PRs get reviewed, how conflict gets raised, meeting norms, Definition of Ready and Done expectations — silent brainstorming per category to get every voice in before discussing.",
      },
      {
        time: "20 min",
        step: "Group, discuss, and resolve disagreements",
        detail:
          "Cluster similar notes, and specifically surface any note that conflicts with another — those disagreements are the most valuable part of the workshop, since they're the norms that were never actually agreed on before.",
      },
      {
        time: "15 min",
        step: "Write the final agreement in plain language",
        detail:
          "Keep it short enough to actually be read again — a checklist, not an essay. Overly long working agreements get written once and never referenced.",
      },
      {
        time: "10 min",
        step: "Agree on a revisit cadence",
        detail:
          "Set an explicit time (e.g. at a future retro) to review whether the agreement still reflects reality, since working agreements go stale exactly like any other artifact.",
      },
    ],
    facilitatorTips: [
      "If the team already has an old, ignored working agreement, address that directly first — ask why it stopped being followed before writing a new one that risks the same fate.",
      "Publish it somewhere genuinely visible (pinned in the team's shared space), not buried in a folder nobody opens.",
    ],
  },
];
