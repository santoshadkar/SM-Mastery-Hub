import type { InterviewQuestion } from "./types";

export const servantLeadershipCoachingQuestions: InterviewQuestion[] = [
  {
    id: "slc-1",
    question: "What does 'servant leadership' actually mean to you, in practice?",
    answer:
      "It means your success is measured by the team's growing capability, not by how much you personally direct or control. In practice, it shows up as small daily choices — asking a coaching question instead of giving a direct answer, letting the team make a call you'd have made differently, removing an impediment instead of routing around it yourself. It's not about being passive; it's about where the decision-making authority sits.",
  },
  {
    id: "slc-2",
    question: "What's the difference between coaching, mentoring, teaching, and facilitating?",
    answer:
      "Teaching means supplying knowledge directly because you have it and the team doesn't. Mentoring means sharing your own experience as a perspective, not an instruction. Facilitating means owning the process of a conversation without owning its content or outcome. Coaching means asking questions that help someone find their own answer, contributing nothing about the content at all. New Scrum Masters default to teaching because it feels fastest; the skill is knowing which mode a given moment actually calls for.",
  },
  {
    id: "slc-3",
    question: "Give an example of when you'd deliberately choose to teach rather than coach.",
    answer:
      "When the team is missing a hard fact only you have — a compliance requirement, a past decision, a technical constraint — teaching that directly is faster and more honest than pretending a coaching question will surface knowledge that isn't there. Coaching works when the team has what it needs to reach a good answer itself; teaching is right when they genuinely don't.",
  },
  {
    id: "slc-4",
    question: "How do you avoid becoming the person the team defaults to for every unresolved problem?",
    answer:
      "Resist the urge to just do it yourself when something isn't happening — that's faster in the moment and expensive over time, because it teaches the team someone else will always close the gap. Instead, go back to whoever owns the action and ask what's actually blocking it, which surfaces the real cause and keeps ownership where it belongs.",
  },
  {
    id: "slc-5",
    question: "How would you coach a team member who isn't performing at the level the team needs?",
    answer:
      "Lead with curiosity, not a verdict — open by trying to understand what's going on rather than stating the problem as a judgment. Keep this distinct from a formal performance conversation, which isn't your role as Scrum Master; your version is a team-health conversation, and if it turns out to be a genuine performance issue, that gets looped to their manager, not managed by you alone indefinitely.",
  },
  {
    id: "slc-6",
    question: "How do you coach a Product Owner who over-specifies solutions instead of describing problems?",
    answer:
      "Ask about the outcome behind the overly detailed instruction rather than criticizing the behavior directly — it's usually driven by a past experience where a loosely specified request went wrong, not a desire to micromanage. Rebuilding trust with small wins (the team correctly interpreting a looser, outcome-focused ticket) tends to work better than a single conversation asking them to just trust the team more.",
  },
  {
    id: "slc-7",
    question: "When is it appropriate to be more directive rather than coaching?",
    answer:
      "Safety and compliance issues, genuine emergencies, and possibly a brand-new team that lacks enough shared context yet for pure coaching to be effective. The skill isn't avoiding direction entirely — it's being able to explain, even just to yourself, why a specific moment calls for it rather than defaulting to it out of habit or impatience.",
  },
  {
    id: "slc-8",
    question: "How do you get honest feedback about your own facilitation and coaching?",
    answer:
      "Ask specific questions, not general ones — 'did I stay out of the way enough in the Daily Scrum this week' gets a more honest answer than 'any feedback for me?' Just as important as asking is how you react to what you hear: defending or explaining your choices the first time someone gives you honest, mildly critical feedback teaches people that honesty gets met with justification, and they stop offering it.",
  },
  {
    id: "slc-9",
    question: "How do you build psychological safety on a new team?",
    answer:
      "Model vulnerability yourself first — admitting your own mistake or uncertainty openly signals it's safe for others to do the same. Respond to a raised concern or mistake with curiosity rather than blame, consistently, since safety is built through many small consistent reactions over time, not declared into existence with one speech about how 'this is a safe space.'",
  },
  {
    id: "slc-10",
    question: "What would you do if you realized you'd been directing the team more than coaching it?",
    answer:
      "Name it to yourself honestly first, then course-correct visibly rather than silently — telling the team something like 'I've noticed I've been jumping in with answers too quickly, I'm going to work on asking more questions instead' both holds you accountable and signals the shift is intentional, not confusing.",
  },
  {
    id: "slc-11",
    question: "How do you know when a team has actually become self-managing versus just seeming that way?",
    answer:
      "A genuinely self-managing team makes real decisions — about how to approach work, who does what, how to handle a problem — without checking with you first, and those decisions hold up reasonably well. A team that just seems self-managing on the surface still quietly waits for your approval before anything happens; watch what happens when you're out for a week, since that's usually the clearest test.",
  },
  {
    id: "slc-12",
    question: "How would you coach a team through a period of low morale?",
    answer:
      "Name what you're observing honestly rather than pretending things are fine, and ask the team directly what's driving it before assuming you already know. Address what's actually within the team's control (workload, process friction) while being honest about what isn't (a company-wide reorg, market pressure) rather than promising fixes for things you can't actually change.",
  },
  {
    id: "slc-13",
    question: "What's a mistake you've made as a Scrum Master, and what did you learn from it?",
    answer:
      "Interviewers are specifically listening for genuine self-awareness here, not a humble-brag disguised as a flaw ('I care too much'). A strong answer names a real misstep — jumping in to solve something the team should have owned, missing a team-health signal until it became a bigger problem — and describes concretely what changed in how you work afterward.",
  },
  {
    id: "slc-14",
    question: "How do you handle a situation where the team disagrees with your coaching approach?",
    answer:
      "Ask directly what specifically isn't working for them rather than assuming they're just resistant to being coached at all — sometimes the issue is timing, tone, or a mismatch with what they actually need in that moment, not the coaching approach itself. Be willing to adjust; coaching that isn't landing with a specific team isn't succeeding just because it's technically the 'right' approach in theory.",
  },
  {
    id: "slc-15",
    question: "What's the biggest difference between a good Scrum Master and a great one?",
    answer:
      "A good Scrum Master runs the mechanics well and keeps the team functioning. A great one is working themselves out of a job — deliberately building the team's own capability so it needs less of them over time, and treating their own growth (facilitation, coaching, organizational awareness) as continuously unfinished rather than something they've already mastered.",
  },
];
