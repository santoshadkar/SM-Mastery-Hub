import type { InterviewQuestion } from "./types";

export const scenarioBehavioralQuestions: InterviewQuestion[] = [
  {
    id: "sb-1",
    question: "A team member consistently misses the Daily Scrum. What do you do?",
    answer:
      "First, understand why before deciding it's a discipline problem — it could be a scheduling conflict, disengagement, or something personal. Talk to them privately, not in front of the team. If it's logistical (wrong time zone, conflicting meeting), fix the logistics. If it's disengagement, that's a servant-leadership conversation about what's actually going on, not a lecture about attendance. Bringing it up publicly in the meeting itself usually just creates embarrassment without solving the underlying cause.",
  },
  {
    id: "sb-2",
    question: "Your Product Owner is unavailable for most of a critical sprint. How do you handle it?",
    answer:
      "Name the impact concretely and immediately, rather than letting the team quietly stall — 'refinement has stalled twice this week because we can't get PO input, and it's putting the Sprint Goal at risk.' Propose a specific, sustainable cadence (e.g. a standing 30-minute daily window) rather than a vague ask to 'be more available.' If the unavailability continues despite that, escalate to whoever the PO reports to, framed as a risk to delivery, not a complaint about the person.",
  },
  {
    id: "sb-3",
    question: "Two senior developers get into an open disagreement during Sprint Planning. What do you do in the moment?",
    answer:
      "Don't take sides on the technical content — that's not your call to referee. Facilitate: acknowledge both viewpoints are being heard, and if it's derailing the meeting, propose parking it with a named owner and a time to resolve it outside the meeting, so planning can continue. If the disagreement recurs across multiple meetings, that's worth a private conversation with both individuals about how they want to handle technical disagreement going forward, since that's a team-health issue, not a one-time event.",
  },
  {
    id: "sb-4",
    question: "A stakeholder demands new scope be added mid-sprint. How do you respond?",
    answer:
      "Don't reflexively say yes or no — check it against the Sprint Goal first. Ask directly: does this threaten the Sprint Goal, and if we say yes, what comes out to make room? Make the trade-off explicit and visible rather than letting the team silently absorb it. If nothing can come out and the goal is now at risk, flag that immediately to the stakeholder and Product Owner rather than waiting until the Sprint Review to reveal it.",
  },
  {
    id: "sb-5",
    question: "Your team has missed its Sprint Goal three sprints in a row. What's your first move?",
    answer:
      "Look for a pattern before assuming it's the same cause each time — pull the data (carryover, cycle time, what specifically didn't get done) rather than relying on memory or the loudest opinion in the room. Bring that data to a retrospective framed as a genuine question, not a verdict: 'this is the third sprint in a row — what's actually different about how we're planning or executing?' Resist the urge to just commit to less next time without understanding why the pattern exists — that treats the symptom, not the cause.",
  },
  {
    id: "sb-6",
    question: "A team member complains privately that another team member isn't pulling their weight. How do you handle it?",
    answer:
      "Thank them for raising it, and be clear about what you can and can't do — you're not their manager and this isn't a performance-management conversation you can run alone. Observe the pattern yourself over the next sprint or two rather than acting purely on secondhand information. If you confirm it's real, have a curious, non-accusatory conversation with the person directly about what's going on before assuming it's a motivation problem — it might be workload, unclear expectations, or something outside work entirely.",
  },
  {
    id: "sb-7",
    question: "Leadership tells you to cut the Sprint Retrospective to save time. How do you respond?",
    answer:
      "Don't just comply or refuse outright — understand what's actually driving the request first; it's often a symptom of retros feeling low-value, not genuine hostility to the idea of reflection. Make the case for what the Retrospective actually produces (the team's own process improvements, which is where a lot of hard-won efficiency gains come from) and offer a compromise if there's a real time constraint — a shorter, tighter retro rather than none at all. If leadership insists anyway, that's worth being honest about as a real risk to the team's ability to improve, not something to quietly absorb.",
  },
  {
    id: "sb-8",
    question: "The team is being asked to work unpaid overtime to hit a deadline. What's your role here?",
    answer:
      "This is squarely a servant-leadership moment. Your job is to make the tradeoff visible and honest, not to just relay the pressure downward — bring real data (forecasted completion, what's actually achievable at sustainable pace) to whoever's asking for the deadline, and present the actual options: cut scope, extend the date, or accept the quality/burnout risk of overtime. Don't let 'the team will just work extra hours' become the default, invisible answer nobody actually decided on.",
  },
  {
    id: "sb-9",
    question: "You're managing a fully remote team across three time zones. Daily Scrum attendance is inconsistent. What do you try?",
    answer:
      "Don't assume one Daily Scrum time will ever feel equally convenient for everyone — pick a time that's reasonable for the most people, and build an async fallback (a written update in a shared channel) for whoever genuinely can't make it live. Rotate the 'inconvenient' time slot if the team is spread evenly across zones, rather than always asking the same people to accommodate. The goal is the actual purpose of the event — inspecting progress toward the Sprint Goal — not perfect synchronous attendance.",
  },
  {
    id: "sb-10",
    question: "Your Product Owner keeps reprioritizing the backlog mid-sprint, disrupting the team's focus. How do you address it?",
    answer:
      "Distinguish clarifying scope (which Scrum explicitly allows) from genuinely re-prioritizing what the team is actively working on (which threatens the Sprint Goal). Have a direct conversation with the PO about the cost of this pattern — context-switching has a real, measurable toll on delivery — and propose a clearer boundary: changes to backlog order are fine anytime, but changes to what's already pulled into the active Sprint need a real conversation about the Sprint Goal first.",
  },
  {
    id: "sb-11",
    question: "You notice signs of burnout on the team during a high-pressure release. What do you do?",
    answer:
      "Name it directly and early rather than waiting for someone to break down or quit — burnout signs (cynicism, withdrawal, sloppy work from previously careful people) are often visible before anyone says the word 'burnout' out loud. Raise it with the team and, separately, with whoever's driving the pressure, framed around the real cost: burned-out teams produce worse work and leave, which is more expensive long-term than protecting capacity now. Advocate for something concrete — reduced scope, a breather Sprint, extra support — not just sympathy.",
  },
  {
    id: "sb-12",
    question: "A senior engineer openly calls Scrum 'bureaucratic overhead' in front of the team. How do you respond?",
    answer:
      "Don't get defensive about the framework itself — ask what specifically feels bureaucratic; there's often a legitimate complaint underneath (a ceremony that's become theater, a report nobody reads) that's worth fixing regardless of their framing. If the complaint turns out to be about Scrum's actual value rather than a specific broken practice, that's a longer conversation about outcomes, not process — ask what they'd propose instead, and be genuinely open to changing something if their alternative would actually work better.",
  },
  {
    id: "sb-13",
    question: "Two Product Owners are competing for the same team's capacity. What's your move?",
    answer:
      "This is usually a sign of an organizational structure problem, not something you can fully resolve at the team level — flag it as such rather than trying to quietly broker peace indefinitely. In the short term, push for a single, ranked, combined backlog with one clear priority order both POs can see, rather than the team silently absorbing two competing sets of instructions. If it keeps happening, escalate the structural question of whether this team should really be serving two Product Owners at once.",
  },
  {
    id: "sb-14",
    question: "A stakeholder goes around the Product Owner and asks developers directly for changes. How do you handle it?",
    answer:
      "Address it with the stakeholder directly and without hostility — they're often just trying to move fast, not deliberately undermining the process. Explain the cost plainly: requests outside the backlog process create untracked, unprioritized work that competes invisibly with what the team already committed to. Redirect them to the Product Owner for anything beyond a genuine emergency, and make sure the Product Owner knows this is happening so they can reinforce the same boundary from their side too.",
  },
  {
    id: "sb-15",
    question: "The team's Definition of Done is being quietly skipped under deadline pressure. What do you do?",
    answer:
      "Name it the moment you notice it, rather than letting it become a habit — 'if we skip tests now, we're not actually done, we're just calling it done.' Push the real conversation back to scope or timeline rather than letting the Definition of Done silently flex instead. If this keeps happening, it's worth an honest conversation about whether the Definition of Done itself is realistic given the team's actual capacity, since a standard nobody can consistently meet isn't really a standard.",
  },
  {
    id: "sb-16",
    question: "Tell me about a time you had a conflict with a Product Owner. How did you handle it?",
    answer:
      "Structure your answer using something like the STAR method (Situation, Task, Action, Result), and pick a real example if you have one — interviewers can usually tell a fabricated story from a real one by how specific it is. A strong answer shows you held a boundary (like the Definition of Done, or team capacity) without making it personal, and that you focused on the shared goal rather than winning the argument.",
  },
  {
    id: "sb-17",
    question: "Describe a situation where you had to deliver bad news to a stakeholder. How did you approach it?",
    answer:
      "A strong answer leads with specifics: what the bad news was, how early you raised it relative to when you knew, and what you offered alongside it (options, a revised plan) rather than just the problem. It should also show you didn't soften the message to avoid an uncomfortable reaction — the interviewer is listening for whether you protect the team's honesty or protect your own comfort.",
  },
  {
    id: "sb-18",
    question: "How would you handle a team that's technically doing all the Scrum events but seems disengaged?",
    answer:
      "This is the 'Zombie Scrum' pattern — the mechanics are present but the values (inspection, adaptation, genuine engagement) aren't. Don't add more process on top of disengagement; that usually makes it worse. Instead, investigate the cause directly with the team — sometimes it's retro fatigue from actions never being followed through on, sometimes it's a deeper morale issue outside Scrum's mechanics entirely. Start by fixing whichever single event has the most obvious signs of life missing, rather than trying to fix everything at once.",
  },
  {
    id: "sb-19",
    question: "A team member disagrees with a decision made in Sprint Planning and brings it up again a week later. What do you do?",
    answer:
      "Don't dismiss it just because the decision is 'already made' — new information a week in might genuinely change the calculus, and shutting that down teaches the team that raising concerns after the fact is pointless. That said, distinguish between new information and simple regret about a decision that was made with the information available at the time; the second case is worth acknowledging honestly ('this was the right call with what we knew then') without reopening it purely because someone's uncomfortable with the outcome.",
  },
  {
    id: "sb-20",
    question: "How do you handle a Product Owner who writes vague, poorly specified backlog items?",
    answer:
      "Coach rather than criticize — show them, with a specific example, the difference a clearer acceptance criterion made for a past item versus a vague one, rather than lecturing about best practices abstractly. Build a lightweight Definition of Ready together as a shared standard, so the conversation becomes about a mutual agreement rather than your personal preference. If the vagueness continues despite that, involve the team directly in refinement so gaps get caught collaboratively before Sprint Planning, not during it.",
  },
  {
    id: "sb-21",
    question: "What would you do if you disagreed with how a more senior stakeholder wanted to run a Scrum event?",
    answer:
      "Raise the disagreement privately and with genuine curiosity about their reasoning first — they may have context you don't, or you may have a legitimate point they haven't considered. Frame your concern around the outcome the event is meant to produce, not a rules-based argument about 'that's not how Scrum says to do it.' If you can't reach agreement and it's genuinely damaging the event's purpose, it's fair to propose a time-boxed experiment to test your approach rather than a permanent change, which is an easier ask to say yes to.",
  },
  {
    id: "sb-22",
    question: "How would you coach a Scrum Master who's new to the role and struggling?",
    answer:
      "Start by understanding what specifically they're struggling with — new Scrum Masters commonly default to either over-directing (acting like a project manager) or under-facilitating (staying silent when the team genuinely needs help). Give specific, observable feedback tied to real events you've both seen, not generic advice, and model the behavior you're coaching toward rather than only describing it abstractly.",
  },
  {
    id: "sb-23",
    question: "A team consistently overcommits in Sprint Planning. How do you address it?",
    answer:
      "Bring real historical data — actual completed work per sprint — into planning, rather than relying on optimism or the loudest voice's confidence. Ask directly what's driving the overcommitment: pressure from a Product Owner or stakeholder, a desire to look productive, or genuinely poor estimation. The fix differs depending on the cause — a pressure problem needs a boundary conversation, an estimation problem needs practice and better historical reference points.",
  },
  {
    id: "sb-24",
    question: "How would you handle a situation where the whole team wants to abandon Scrum for something less structured?",
    answer:
      "Take it seriously rather than defending the framework reflexively — ask specifically what about Scrum feels like it's not working, since there's often a real, fixable problem underneath a broad complaint. If the team's actual need is more continuous flow with less rigid iteration, that might genuinely point toward Kanban or Scrumban rather than abandoning structure altogether. Frame any change as an experiment with a review point, not an irreversible decision, so it's easier for everyone to agree to trying it.",
  },
  {
    id: "sb-25",
    question: "Why should we hire you as our Scrum Master over another candidate?",
    answer:
      "Avoid generic claims like 'I'm passionate about Agile.' A strong answer names something specific and differentiated — a real situation you handled well, a concrete skill (data-driven facilitation, coaching experience, scaling exposure) tied to what this specific role actually needs. It also helps to be honest about where you're still growing, since claiming to be flawless in a role built around continuous improvement tends to undercut the answer rather than strengthen it.",
  },
];
