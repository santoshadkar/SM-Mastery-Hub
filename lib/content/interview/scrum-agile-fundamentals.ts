import type { InterviewQuestion } from "./types";

export const scrumAgileFundamentalsQuestions: InterviewQuestion[] = [
  {
    id: "saf-1",
    question: "What is Scrum, in your own words?",
    answer:
      "Scrum is a lightweight framework for developing and sustaining complex products through short, fixed-length iterations called Sprints. It's built on empiricism — transparency, inspection, and adaptation — rather than trying to plan everything upfront. Avoid reciting a textbook definition word-for-word; interviewers want to hear that you understand *why* it works, not that you memorized the Scrum Guide.",
  },
  {
    id: "saf-2",
    question: "What's the difference between Agile and Scrum?",
    answer:
      "Agile is a set of values and principles (the Agile Manifesto) about how to approach software delivery — it's a mindset, not a process. Scrum is one specific, popular framework that implements those values through concrete roles, events, and artifacts. You can be Agile without doing Scrum, and — this is the part that trips people up — you can go through the motions of Scrum without actually being Agile.",
  },
  {
    id: "saf-3",
    question: "What are the three pillars of empiricism in Scrum?",
    answer:
      "Transparency, inspection, and adaptation. Transparency means the process and the work are visible to everyone responsible for the outcome, with a shared understanding of what 'done' means. Inspection means artifacts and progress are checked often enough to catch problems. Adaptation means adjusting the process or product as soon as inspection reveals something is off. All three have to be present — inspection without adaptation is just observation, and transparency without inspection is just data nobody looks at.",
  },
  {
    id: "saf-4",
    question: "Name the five Scrum values. Why do they matter more than they sound like they would?",
    answer:
      "Commitment, focus, courage, openness, and respect. They matter because Scrum's mechanics only work if the values are actually present — a Daily Scrum without openness becomes theater, a Sprint Goal without commitment becomes a wish list. When a Scrum implementation feels broken, it's very often one of these five values quietly missing, not a flaw in the framework itself.",
  },
  {
    id: "saf-5",
    question: "What's the difference between the Product Owner and the Scrum Master?",
    answer:
      "The Product Owner is accountable for maximizing the value of the product and owns the Product Backlog's content, ordering, and visibility. The Scrum Master is accountable for the team's effectiveness and for Scrum being understood and enacted well — coaching, removing impediments, facilitating. Neither manages the other, and neither directs the Developers' day-to-day work; that's the Developers' own call.",
  },
  {
    id: "saf-6",
    question: "Is the Scrum Master a project manager?",
    answer:
      "No, and this is one of the most common misconceptions candidates need to correct clearly. A traditional project manager typically owns the plan, assigns tasks, and tracks status top-down. A Scrum Master doesn't assign work or own the plan — the team self-manages that. The Scrum Master's job is coaching, facilitation, and removing impediments, not command and control.",
  },
  {
    id: "saf-7",
    question: "What is a Sprint Goal, and why does it matter?",
    answer:
      "A single, coherent objective for the Sprint that gives the team a reason for doing the work, not just a list of what to do. It matters because it gives the team flexibility — if one item turns out to be harder than expected, the Sprint Goal tells them which items still matter and which can flex, rather than treating every item as equally essential.",
  },
  {
    id: "saf-8",
    question: "What's the Definition of Done, and who owns it?",
    answer:
      "A shared, explicit checklist of what 'complete' actually means for any piece of work — often including things like code reviewed, tests passing, and acceptance criteria verified. It's owned by the whole Scrum Team, not any single role, and it should be visible and enforced consistently, especially under deadline pressure, which is exactly when teams are tempted to quietly bend it.",
  },
  {
    id: "saf-9",
    question: "What's the difference between the Product Backlog and the Sprint Backlog?",
    answer:
      "The Product Backlog is the full, ordered, ever-evolving list of everything known to be needed in the product, owned by the Product Owner. The Sprint Backlog is the subset pulled into the current Sprint — the Sprint Goal, the selected items, and the plan for delivering them — owned by the Developers.",
  },
  {
    id: "saf-10",
    question: "What happens if the team doesn't finish everything in the Sprint Backlog?",
    answer:
      "Unfinished items typically return to the Product Backlog to be re-prioritized and possibly pulled into a future Sprint — they don't automatically carry over as-is. What matters more than the incomplete items themselves is whether the Sprint Goal was met; a team can miss a couple of lower-priority items and still have a successful Sprint if the Goal was achieved.",
  },
  {
    id: "saf-11",
    question: "Can the Sprint length change from Sprint to Sprint?",
    answer:
      "It can, but it's discouraged in practice — a consistent Sprint length builds a predictable cadence for planning, forecasting, and events, and constantly changing it undermines the team's ability to build a reliable rhythm. If a change is genuinely needed (e.g. switching from two-week to one-week Sprints), that's a deliberate team decision, not something that drifts sprint to sprint.",
  },
  {
    id: "saf-12",
    question: "Who can cancel a Sprint, and when should that happen?",
    answer:
      "Only the Product Owner has the authority to cancel a Sprint, and it should be rare — reserved for situations where the Sprint Goal has become obsolete, for example due to a major change in company direction or market conditions. It's a last resort, not a tool for a Sprint that's simply going badly; a struggling Sprint is usually better served by adapting the plan within the Sprint than by canceling it.",
  },
  {
    id: "saf-13",
    question: "What's the purpose of the Daily Scrum, and how long should it be?",
    answer:
      "It's a short, Developer-owned event — typically timeboxed to 15 minutes — to inspect progress toward the Sprint Goal and adjust the plan for the next day. It's not a status report to the Scrum Master or a manager; if it's turned into that, it's stopped serving its actual purpose.",
  },
  {
    id: "saf-14",
    question: "What's the difference between a Sprint Review and a Sprint Retrospective?",
    answer:
      "The Sprint Review inspects the *product* — the team and stakeholders look at the increment and adapt the Product Backlog based on what was learned. The Retrospective inspects the *process* — the team looks at how they worked together (individuals, interactions, tools, process) and plans improvements. Mixing the two up is a common early mistake — stakeholders don't belong in the Retrospective, and process improvement isn't the point of the Review.",
  },
  {
    id: "saf-15",
    question: "What is refinement, and is it an official Scrum event?",
    answer:
      "Refinement is the ongoing activity of adding detail, estimates, and order to Product Backlog items so they're ready to be pulled into a future Sprint. It's not one of the five official Scrum events with a fixed timebox — it's an activity that happens continuously throughout the Sprint, and Scrum doesn't prescribe exactly how or when a team should do it.",
  },
  {
    id: "saf-16",
    question: "What's a common misconception about story points?",
    answer:
      "That they're a measure of time. They're not — they're a relative measure of effort, complexity, and uncertainty, deliberately abstracted away from hours specifically so teams stop trying to convert them into a precise time commitment. When leadership starts treating points as hours, or comparing point totals across teams, that's a sign the concept has been misunderstood, not that the team is estimating badly.",
  },
  {
    id: "saf-17",
    question: "What's the difference between a Scrum Team being cross-functional and being specialized?",
    answer:
      "Cross-functional means the team collectively has all the skills needed to go from idea to a usable increment without depending on people outside the team. It doesn't mean every individual can do every skill — individuals can still specialize — but the team as a whole shouldn't be blocked waiting on a skill nobody inside it has.",
  },
  {
    id: "saf-18",
    question: "Why does Scrum recommend small teams?",
    answer:
      "Communication overhead grows non-linearly with team size — more people means more possible communication pathways, more coordination cost, and more diffusion of accountability. A Scrum Team is generally kept small enough (commonly cited around 10 or fewer total participants) that it can stay nimble and communicate directly, rather than needing formal coordination layers a larger group would require.",
  },
  {
    id: "saf-19",
    question: "What's an Increment, and does it have to be released to users?",
    answer:
      "An Increment is a concrete, usable step toward the Product Goal that meets the team's Definition of Done. It doesn't have to be released to end users immediately — the Product Owner decides when to actually release — but it does have to be genuinely usable and done, not a partial, untested draft dressed up as complete.",
  },
  {
    id: "saf-20",
    question: "If you had to explain why Scrum works in one sentence, what would you say?",
    answer:
      "Short feedback loops make problems visible while they're still cheap to fix, and a framework that forces regular, honest inspection of real progress beats one that relies on a detailed plan surviving contact with reality. That's a stronger answer than reciting the roles and events, because it shows you understand the *reasoning*, not just the vocabulary.",
  },
];
