export type Band = "low" | "mid" | "high";

export interface BandedActions {
  low: string[];
  mid: string[];
  high: string[];
}

export function getBand(percentage: number): Band {
  if (percentage < 41) return "low";
  if (percentage < 71) return "mid";
  return "high";
}

export const recommendations: Record<string, BandedActions> = {
  "scrum-fundamentals": {
    low: [
      "Re-read the Scrum framework end to end and, for each event, write down in your own words why it exists — not just how to run it.",
      "Write your team's Definition of Done as an explicit checklist and make it visible on the board, not just implied.",
      "Before the next Sprint Planning, practice separating 'what' the Sprint Goal is from the individual backlog items that support it.",
    ],
    mid: [
      "Audit your last three Sprint Goals — if any were really just a list of tickets, work with your Product Owner to sharpen the next one into a single objective.",
      "Pick one impediment currently sitting with the team and explicitly decide whether it's organizational or team-level, then handle it accordingly.",
      "Walk your Definition of Done with the team and check whether it's actually enforced or quietly skipped under deadline pressure.",
    ],
    high: [
      "Mentor a newer Scrum Master or team member through the reasoning behind an event, not just its mechanics.",
      "Look for a place where 'the way we've always done Scrum' has calcified into ritual, and question whether it still serves the team.",
      "Use your fluency to help the team distinguish Scrum's non-negotiables from local conventions that could flex.",
    ],
  },
  facilitation: {
    low: [
      "Pick one new retro format from the Resources library and run it in your next retrospective instead of your default.",
      "Before your next Daily Scrum, decide in advance how you'll stay quiet and let Developers address each other directly.",
      "Write down one concrete technique (round-robin, silent brainstorming) and commit to using it in your next planning or refinement session.",
    ],
    mid: [
      "Track whether last retro's action items actually got followed up on — if not, make that the very first agenda item next time.",
      "Identify the one discussion pattern (dominance, silence, circling) that recurs most in your meetings and pair it with a specific counter-technique.",
      "Ask a peer or your manager to observe one facilitation session and give you targeted feedback.",
    ],
    high: [
      "Experiment with a facilitation technique you haven't tried, even though your current toolkit already works.",
      "Coach another Scrum Master through a facilitation challenge they're stuck on.",
      "Facilitate a cross-team session (not just your own team) to stretch the skill into a harder context.",
    ],
  },
  "servant-leadership": {
    low: [
      "Schedule one real 1:1 this week with a team member that isn't about Sprint status.",
      "In your next team decision point, deliberately ask a question instead of offering your own answer, even if it's slower.",
      "Notice one moment this week where you directed work rather than facilitated it, and name it to yourself afterward.",
    ],
    mid: [
      "Pick one recurring decision the team routes through you and hand it back to them explicitly, with your reasoning.",
      "Prepare 2-3 open-ended coaching questions before your next 1:1 instead of improvising in the moment.",
      "Ask the team directly: 'where am I still acting more like a manager than a coach?' and sit with the answer.",
    ],
    high: [
      "Take on coaching another Scrum Master or a less experienced team lead.",
      "Look for the one area (often stakeholder-facing) where you still default to directing rather than coaching, and address it deliberately.",
      "Mentor someone through the discomfort of stepping back from authority-based leadership.",
    ],
  },
  "stakeholder-management": {
    low: [
      "Before your next stakeholder update, write down the actual risk to the Sprint Goal before writing the polished summary.",
      "Bring last Sprint's real velocity/throughput numbers into your next timeline conversation instead of an estimate.",
      "Practice restating one piece of technical or team context in plain language a non-technical stakeholder could repeat back to you.",
    ],
    mid: [
      "Turn your next Sprint Review into a working session — ask stakeholders a specific question you need their input on, not just a demo.",
      "The next time there's bad news, communicate it a day earlier than your instinct says to.",
      "Ask a stakeholder directly what would make your Sprint Reviews more useful to them.",
    ],
    high: [
      "Use your stakeholder trust to advocate for a harder organizational change the team needs.",
      "Help a peer Scrum Master improve their own stakeholder communication.",
      "Push for more forecast-based (not date-based) conversations across the wider organization, not just your team.",
    ],
  },
  metrics: {
    low: [
      "Start tracking one flow metric (cycle time or cumulative flow) alongside whatever you already track, even informally.",
      "Next time someone raises a concern, ask 'what does the data say?' before relying on anecdote.",
      "Learn to read a cumulative flow diagram — the Kanban & Scrumban page in the Knowledge Hub is a good starting point.",
    ],
    mid: [
      "Use last Sprint's metrics to open your next retrospective instead of starting from memory.",
      "Check whether velocity is being used anywhere to compare teams or as a target, and push back if it is.",
      "Pick one bottleneck visible in your flow data and raise it explicitly with the team.",
    ],
    high: [
      "Build a lightweight dashboard the team maintains itself, rather than one only you interpret.",
      "Teach the team to read the metrics themselves so data-driven inspection doesn't depend on you.",
      "Use your fluency to challenge a metric being misused elsewhere in the organization (e.g. velocity as a KPI).",
    ],
  },
  scaling: {
    low: [
      "Map out, on paper, how your organization currently coordinates across teams — even if the answer is 'informally.'",
      "Identify one dependency your team has on another team before it becomes a blocker, and raise it proactively.",
      "Read the Scaled Agile Frameworks page in the Knowledge Hub to learn the vocabulary your organization may already be using.",
    ],
    mid: [
      "Attend or observe one cross-team synchronization event (Scrum of Scrums, PI Planning, or equivalent) even if it's not officially your job.",
      "Find out explicitly which scaling approach, if any, your organization has chosen, and why.",
      "The next time cross-team multitasking causes a problem, document it and escalate it as an organizational impediment rather than absorbing it.",
    ],
    high: [
      "Take on a coordinating role across teams, even informally, to build scaling experience directly.",
      "Help your organization evaluate whether its current scaling approach still fits, rather than assuming it does.",
      "Share what's working in your team's cross-team coordination with other Scrum Masters facing the same dependencies.",
    ],
  },
  "continuous-improvement": {
    low: [
      "Pick one specific thing about how you work and change it deliberately this month, then note what happened.",
      "Ask one team member for honest feedback on your facilitation, not just on the team's process.",
      "Read or watch one piece of Agile/Scrum content this month that isn't strictly required for your current role.",
    ],
    mid: [
      "Try a technique you've read about but haven't actually used yet, even if your current approach already works fine.",
      "Ask for feedback on your coaching specifically, not just your logistics (scheduling, notes, boards).",
      "Keep a short running log of what you've changed about your own practice over the last quarter.",
    ],
    high: [
      "Mentor another Scrum Master through their own improvement process.",
      "Write up or share one lesson you've learned recently so others can benefit from it.",
      "Deliberately seek out a harder team or context to keep stretching, rather than staying comfortable.",
    ],
  },
};
