import type { Workshop } from "./types";

export const assessmentContinuousImprovementWorkshops: Workshop[] = [
  {
    slug: "agile-assessment-for-team-members",
    category: "assessment-continuous-improvement",
    title: "Agile Assessment for All the Team Members",
    duration: "60 minutes",
    audience: "An established team wanting an honest, shared read on its own Agile maturity",
    objective:
      "Get every team member's honest, individual perspective on the team's Agile maturity across several dimensions, and turn the combined picture into real discussion.",
    whyItMatters:
      "A Scrum Master's own read on team maturity is one perspective among several — this workshop surfaces where the team genuinely agrees and, more usefully, where perceptions diverge sharply, which is often where the real issues live.",
    materials: ["This site's Maturity Self-Assessment, or a similar dimension-based rubric", "A way to collect anonymous individual responses"],
    agenda: [
      {
        time: "10 min",
        step: "Introduce the dimensions being assessed",
        detail: "Cover the categories (e.g. Scrum fundamentals, facilitation, collaboration, metrics use, continuous improvement) so everyone's rating the same things with the same shared definitions.",
      },
      {
        time: "15 min",
        step: "Individual, anonymous self-assessment",
        detail: "Have each team member rate the team (not just themselves) on each dimension privately, without discussion first — this avoids anchoring everyone to the first opinion voiced aloud.",
      },
      {
        time: "15 min",
        step: "Reveal and look for the spread, not just the average",
        detail: "Show the combined results, specifically highlighting dimensions where individual ratings varied widely — that variance is more informative than the average score.",
      },
      {
        time: "15 min",
        step: "Discuss the widest gaps",
        detail: "For the dimension with the most disagreement, ask directly: what's making some people see this differently than others? This usually surfaces an assumption or experience that wasn't shared before.",
      },
      {
        time: "5 min",
        step: "Pick one focus area",
        detail: "Agree on the single lowest-scoring or most-disputed dimension to focus improvement effort on before the next assessment.",
      },
    ],
    facilitatorTips: [
      "Anonymity is essential here — if people believe their individual ratings will be attributed to them, the results skew toward what's socially safe to say rather than what's honestly true.",
      "Repeat this periodically (quarterly is reasonable) so the team can see real trend data over time, not just a single snapshot.",
    ],
  },
  {
    slug: "root-cause-analysis",
    category: "assessment-continuous-improvement",
    title: "Root Cause Analysis",
    duration: "60 minutes",
    audience: "A team dealing with a recurring problem that keeps getting treated at the symptom level",
    objective:
      "Teach the team a concrete technique (the 5 Whys, or a fishbone/Ishikawa diagram) for tracing a recurring problem back to its actual root cause.",
    whyItMatters:
      "Teams frequently apply the same shallow fix to a recurring problem sprint after sprint because nobody has actually traced it to its root — this workshop gives a repeatable technique for doing that, rather than relying on whoever's intuition is loudest.",
    materials: ["Whiteboard or shared canvas", "A real, currently recurring problem from the team's own history"],
    agenda: [
      {
        time: "10 min",
        step: "Introduce the 5 Whys technique",
        detail: "Explain the core idea: start with the visible symptom, and ask 'why' repeatedly (typically around five times) until the answers stop being superficial and start pointing at a genuine systemic cause.",
      },
      {
        time: "25 min",
        step: "Apply it to a real recurring problem",
        detail:
          "Take an actual issue the team keeps hitting (e.g. 'requirements keep being unclear at Sprint Planning') and walk the whys together as a group, writing each answer visibly so the chain of reasoning stays traceable.",
      },
      {
        time: "15 min",
        step: "Introduce the fishbone diagram as an alternative",
        detail: "For problems with multiple plausible contributing categories (people, process, tools, environment), a fishbone diagram can surface several root causes in parallel rather than one linear chain — useful when the 5 Whys feels too linear for a complex problem.",
      },
      {
        time: "10 min",
        step: "Distinguish root cause from contributing factor",
        detail: "Discuss which of the causes surfaced are genuinely root (fixing this would prevent recurrence) versus merely contributing (worth noting but not sufficient on their own).",
      },
    ],
    facilitatorTips: [
      "Resist the urge to stop at the first sympathetic-sounding answer — the real root cause is often less comfortable to name than the first one or two whys.",
      "This pairs naturally with a retrospective's Generate Insights phase — it's a concrete technique for that phase specifically, not a separate ceremony.",
    ],
  },
  {
    slug: "value-stream-mapping",
    category: "assessment-continuous-improvement",
    title: "Value Stream Mapping",
    duration: "2-3 hours",
    audience: "A team or organization wanting to see where time and value are actually lost across the full delivery process",
    objective:
      "Map the full end-to-end flow of work — from idea to delivered value — and identify where genuine value-adding time is dwarfed by waiting and handoffs.",
    whyItMatters:
      "Teams often only see their own slice of the delivery process and assume most delays happen elsewhere. A value stream map makes the whole path visible, frequently revealing that the team's own work is a small fraction of total elapsed time.",
    materials: ["A large wall or digital whiteboard", "Sticky notes", "Real timing data for recent items if available (when a request was made, when work started, when it shipped)"],
    agenda: [
      {
        time: "20 min",
        step: "Define the start and end points",
        detail: "Agree explicitly on where the map begins (e.g. 'idea proposed') and ends (e.g. 'live in production and adopted by users') — a map with an unclear scope produces unclear insight.",
      },
      {
        time: "40 min",
        step: "Map every step in the process",
        detail: "List every step the work genuinely passes through, including approvals, handoffs between teams, and queues — not just the steps visible on the team's own board.",
      },
      {
        time: "30 min",
        step: "Add real timing for each step",
        detail: "For each step, estimate or pull real data on process time (actual work time) versus wait time (time sitting idle in a queue) — this distinction is the entire point of the exercise.",
      },
      {
        time: "30 min",
        step: "Calculate flow efficiency",
        detail: "Total process time divided by total lead time gives a rough flow efficiency percentage — this number is very often shockingly low, and that's the useful, motivating discovery.",
      },
      {
        time: "20 min",
        step: "Identify the biggest single improvement opportunity",
        detail: "Rather than trying to fix every wait, pick the single largest wait-time contributor and discuss what's actually causing it and what a realistic first step looks like.",
      },
    ],
    facilitatorTips: [
      "This is most powerful when it includes steps outside the team's direct control (approvals, other teams, compliance reviews) — don't limit the map to just the Scrum team's own board.",
      "Bring real data where possible rather than relying purely on memory — actual timestamps are frequently more sobering than people's intuitive sense of how long things take.",
    ],
  },
  {
    slug: "design-thinking-principles",
    category: "assessment-continuous-improvement",
    title: "Design Thinking Principles",
    duration: "90 minutes",
    audience: "A team or Product Owner wanting a more structured approach to understanding user problems before jumping to solutions",
    objective:
      "Introduce the core phases of Design Thinking (empathize, define, ideate, prototype, test) and practice applying them to a real current product problem.",
    whyItMatters:
      "Teams under delivery pressure often jump straight to building a solution before genuinely understanding the problem — Design Thinking's discipline is specifically about slowing down that first step, which usually pays for itself many times over.",
    materials: ["Sticky notes", "A real, current product problem or opportunity to work through"],
    agenda: [
      {
        time: "15 min",
        step: "Introduce the five phases",
        detail: "Empathize (understand the user's real experience), Define (frame the actual problem, not an assumed solution), Ideate (generate many possible solutions before committing to one), Prototype (build a cheap, testable version), Test (get real feedback and iterate).",
      },
      {
        time: "20 min",
        step: "Empathize: work from real user input",
        detail: "Using existing research, support tickets, or direct user quotes if available, discuss what the user is actually experiencing — resist jumping to solutions during this phase.",
      },
      {
        time: "15 min",
        step: "Define the problem statement",
        detail: "Write a clear problem statement in the form '[user] needs [need] because [insight]' — deliberately solution-free at this stage.",
      },
      {
        time: "20 min",
        step: "Ideate without judgment",
        detail: "Brainstorm as many possible solutions as possible, explicitly deferring judgment — quantity over quality at this stage, since premature filtering kills genuinely good but unusual ideas.",
      },
      {
        time: "20 min",
        step: "Select and sketch a prototype approach",
        detail: "Pick one or two promising ideas and sketch, even roughly, what a cheap, fast way to test the idea with real users would look like before committing to full development.",
      },
    ],
    facilitatorTips: [
      "The most common failure mode is rushing through Empathize and Define to get to the more exciting Ideate phase — protect the early phases, since a well-defined problem makes everything after it easier.",
      "This connects naturally to User Story Mapping — Design Thinking can inform what goes on the map, especially for a new feature area.",
    ],
  },
];
