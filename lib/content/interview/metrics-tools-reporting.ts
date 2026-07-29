import type { InterviewQuestion } from "./types";

export const metricsToolsReportingQuestions: InterviewQuestion[] = [
  {
    id: "mtr-1",
    question: "What's velocity, and what's it actually useful for?",
    answer:
      "Velocity is the amount of work (usually in story points) a team completes per Sprint. It's useful for that team's own forecasting — predicting roughly how much work fits in a future Sprint based on its own recent history. It's not useful, and actively harmful, as a cross-team comparison or a performance target, since both uses predictably lead to point inflation rather than real improvement.",
  },
  {
    id: "mtr-2",
    question: "How would you respond if leadership asked why velocity hasn't gone up this quarter?",
    answer:
      "Reset what velocity actually measures before defending any specific number — it's specific to this team's own estimating scale, not comparable across teams or necessarily meaningful quarter over quarter on its own. Redirect to better evidence of real improvement, like cycle time trends or defect rates, and be upfront that treating velocity itself as a target predictably causes teams to inflate estimates rather than genuinely improve.",
  },
  {
    id: "mtr-3",
    question: "What is a Cumulative Flow Diagram, and how do you read one?",
    answer:
      "A stacked area chart showing the count of work items in each workflow status over time. The single most useful thing to look for is a widening band — if one status (say, 'In Review') is getting visibly wider over several weeks relative to the others, work is arriving there faster than it's leaving, which is a bottleneck forming, often before it would show up anywhere else.",
  },
  {
    id: "mtr-4",
    question: "What's the difference between cycle time and lead time?",
    answer:
      "Lead time is measured from when an item is requested to when it's delivered. Cycle time is measured from when work actually starts on it to when it's finished — a narrower window that excludes time spent waiting in a backlog before anyone picks it up. Cycle time is usually the more actionable metric for a team since it reflects what the team controls directly.",
  },
  {
    id: "mtr-5",
    question: "How would you forecast a delivery date without using story point estimates?",
    answer:
      "Use the team's historical cycle time distribution — pull 20-30 recently completed, genuinely comparable items, and use the spread of how long they took as a probabilistic forecast for a new similar item. This gives an honest range with a stated confidence level rather than a single guessed date, and it doesn't require anyone to estimate anything new.",
  },
  {
    id: "mtr-6",
    question: "What's carryover, and is it always a bad sign?",
    answer:
      "Carryover is work planned for a Sprint that doesn't finish and rolls into the next one. It's not automatically bad — occasional carryover on genuinely hard work is normal. A rising trend over several sprints is the real signal worth investigating, and the most common underlying cause is items entering the Sprint without actually being ready, not the team working too slowly.",
  },
  {
    id: "mtr-7",
    question: "How do you use data in a retrospective without it feeling like an audit?",
    answer:
      "Introduce it as a starting question, not a conclusion — 'carryover was higher than usual this sprint, what was different?' invites investigation, while 'carryover was 40%, which is too high' invites defensiveness. Avoid pointing at any single person's numbers publicly; if the data implicates an individual, address that privately, not in the group retro.",
  },
  {
    id: "mtr-8",
    question: "What Jira reports do you actually pay attention to as a Scrum Master, and why?",
    answer:
      "Sprint burndown for a live signal on whether work is flowing or stuck (a flat line for days matters more than the final number), the Cumulative Flow Diagram for spotting bottlenecks, and velocity strictly for that team's own forecasting. I'd be cautious about over-relying on any single chart in isolation — each is diagnostic, not a complete picture on its own.",
  },
  {
    id: "mtr-9",
    question: "How is Azure Boards' Taskboard different from its Kanban board view?",
    answer:
      "The Taskboard shows the active Sprint broken into tasks, which is the useful view for a Daily Scrum. The Kanban board shows backlog items across their full workflow, which is more useful for refinement and flow tracking across sprints — teams running Scrumban tend to live almost entirely on the Kanban board rather than the Taskboard.",
  },
  {
    id: "mtr-10",
    question: "How would you set WIP limits for a team new to Kanban or Scrumban?",
    answer:
      "Start with a rough limit based on team size for each in-progress column (a common starting heuristic is roughly the number of people who'd typically work in that stage, sometimes slightly less to force focus) and adjust based on what actually happens — if a column is constantly over its limit and it's genuinely a bottleneck, that's useful signal; if the limit is just ignored without consequence, it's not tight enough to matter yet.",
  },
  {
    id: "mtr-11",
    question: "A stakeholder asks for a firm delivery date but the work has real uncertainty. How do you respond with data?",
    answer:
      "Give a forecasted range based on actual historical throughput or cycle time, with a stated confidence level, rather than either refusing to estimate or inventing a falsely precise date. Explain specifically what would tighten the range (an unresolved technical unknown, a pending third-party dependency) so the stakeholder has real levers to think about, not just a number to wait on.",
  },
  {
    id: "mtr-12",
    question: "What's a metric you'd be cautious about introducing, and why?",
    answer:
      "Individual-level metrics — tickets closed per person, story points per developer — tend to backfire even when well-intentioned, because they optimize individual output at the expense of collaboration, code review quality, and honest estimation. Team-level flow and outcome metrics are almost always safer and more useful than anything measured at the individual level.",
  },
  {
    id: "mtr-13",
    question: "How do you explain the difference between output metrics and outcome metrics to a stakeholder?",
    answer:
      "Output metrics measure activity — story points delivered, features shipped. Outcome metrics measure whether that activity actually mattered — did the feature reduce support tickets, increase retention, solve the problem it was built for. A team can have strong output metrics and be delivering the wrong things entirely; outcome metrics are the check on whether output is actually valuable.",
  },
  {
    id: "mtr-14",
    question: "How would you use data to catch a bottleneck before it affects the Sprint Goal?",
    answer:
      "Watch the Cumulative Flow Diagram or board state mid-sprint, not just at the Daily Scrum's verbal updates — a widening band in a specific status is visible well before it would show up as a missed goal at the Sprint Review. Raising it as soon as it's visible, rather than waiting to see if it resolves on its own, is what actually prevents it from becoming a missed Sprint Goal.",
  },
  {
    id: "mtr-15",
    question: "What's your view on using AI tools to help generate sprint reports or summarize metrics?",
    answer:
      "Useful as a first-draft accelerant — turning raw numbers into stakeholder-friendly language, or summarizing a pile of raw notes — but not a substitute for actually verifying the numbers and the honest framing yourself. An AI tool has no way to know if a metric is misleading in context; that judgment call stays with the Scrum Master.",
  },
];
