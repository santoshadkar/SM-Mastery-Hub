import type { InterviewQuestion } from "./types";

export const facilitationTeamDynamicsQuestions: InterviewQuestion[] = [
  {
    id: "ftd-1",
    question: "What makes a good facilitator, in your view?",
    answer:
      "Someone who manages the process without controlling the content — they keep the conversation on track, timeboxed, and inclusive, but don't insert their own opinion into the decision being made. A good facilitator is also comfortable with silence; the instinct to fill a quiet moment with your own suggestion is one of the most common facilitation mistakes.",
  },
  {
    id: "ftd-2",
    question: "How do you keep a Daily Scrum from turning into a status report directed at you?",
    answer:
      "Physically and verbally step outside the conversation — don't stand where people naturally address you, and explicitly tell the team to talk to each other, not to you. If someone reports a blocker, resist solving it live in the meeting; acknowledge it and take it offline immediately after so the meeting's time isn't spent on one person's problem.",
  },
  {
    id: "ftd-3",
    question: "How would you run a retrospective for a team that's gone quiet and disengaged?",
    answer:
      "First figure out whether the quiet is contentment or discomfort — they look different (relaxed versus tense) and need opposite responses. If it's discomfort, a format change alone won't fix a safety problem; that often needs individual conversations before the group can be honest together again. If it's genuine contentment because the sprint was uneventful, don't force artificial engagement just to fill the timebox.",
  },
  {
    id: "ftd-4",
    question: "What's your approach when one person dominates every discussion?",
    answer:
      "Use structural techniques rather than confronting the person directly in the moment — round-robin turn-taking, or silent brainstorming where everyone writes ideas before anyone speaks, gives quieter voices a fair chance without singling the dominant person out publicly. If the pattern persists, a private conversation about making space for others is more effective than repeatedly cutting them off in front of the group.",
  },
  {
    id: "ftd-5",
    question: "How do you handle a Sprint Planning session where the backlog isn't actually ready?",
    answer:
      "Don't quietly fill in the gaps yourself to keep the meeting moving — that just moves the ambiguity into the sprint as a hidden risk. Surface the choice explicitly to the team and Product Owner: proceed with acknowledged risk, swap in something that is ready, or pause to clarify right there. Whatever's decided, raise the readiness gap in the next retro so it doesn't repeat.",
  },
  {
    id: "ftd-6",
    question: "What retrospective formats do you use, and how do you choose between them?",
    answer:
      "Rotate based on the team's recent history rather than defaulting to the same one every time — Start/Stop/Continue for a stable, plain-spoken team; Mad/Sad/Glad after an emotionally rough sprint; a Sailboat or timeline format after a long, uneventful one where nothing feels urgent enough to raise on its own. Repeating the same format indefinitely is one of the more common causes of retros going stale.",
  },
  {
    id: "ftd-7",
    question: "How do you make sure retrospective action items actually get done?",
    answer:
      "Limit the number to one or two per retro, each with a named owner and a real date — more than that reliably produces zero completed items rather than several. Then open the *next* retro by explicitly checking whether they happened, before generating anything new. Skipping that check-in is the single most common reason retros stop producing real change.",
  },
  {
    id: "ftd-8",
    question: "How would you facilitate a Sprint Review with disengaged stakeholders?",
    answer:
      "Bring at least one genuine open question that needs their input, rather than only a polished demo — a real decision changes people from passive audience to active participants. If a stakeholder tries to redirect it into a pure status check, acknowledge that briefly and steer back to the specific decision you need from them.",
  },
  {
    id: "ftd-9",
    question: "What do you do when a discussion in a meeting keeps going in circles?",
    answer:
      "Park it visibly — a parking lot list with an owner and a time to revisit — so the conversation can move on without anyone feeling dismissed. Circling discussions are often a sign the actual disagreement hasn't been named explicitly yet; naming it plainly ('it sounds like the real disagreement is X, is that fair?') sometimes resolves it faster than continuing the same conversation.",
  },
  {
    id: "ftd-10",
    question: "How do you facilitate when you personally disagree with the direction the team is heading?",
    answer:
      "Separate facilitating from contributing — if you have a genuine stake in the content, it's more honest to explicitly step out of the facilitator role for a moment and say so ('speaking as a team member here, not as facilitator, I'd push back on this') rather than subtly steering the conversation while pretending to be neutral.",
  },
  {
    id: "ftd-11",
    question: "How would you handle recurring conflict between two specific team members?",
    answer:
      "Address it privately with each person before bringing anything to the group — public confrontation in a team setting tends to entrench positions rather than resolve them. Understand what's actually driving the conflict (working style differences, unclear ownership, a past unresolved incident) before proposing a fix, since the right intervention depends entirely on the cause.",
  },
  {
    id: "ftd-12",
    question: "What's your view on rotating who facilitates the team's events?",
    answer:
      "Strongly in favor of it, at least periodically — a retro or Daily Scrum that only works when one specific person runs it isn't durable, and rotating facilitation surfaces blind spots the regular facilitator wouldn't catch. It also builds facilitation skill across the team, which pays off directly if you're ever out or move to a different team.",
  },
  {
    id: "ftd-13",
    question: "How do you handle a stakeholder who consistently skips Sprint Review, then complains about decisions later?",
    answer:
      "Answer their specific concern, but also name the pattern directly rather than just re-explaining each time — point out that this was covered at the Review, and ask what would make attending (or a shorter async alternative) work better for them going forward, so their input can shape decisions before they're made, not after.",
  },
  {
    id: "ftd-14",
    question: "What signs tell you a team's Daily Scrum has stopped being useful?",
    answer:
      "Updates addressed to you instead of teammates, no adjustment to the day's plan regardless of what's said, and the meeting running past its timebox with information that could have been async. Any of these is a sign the event has drifted from its purpose — inspecting progress toward the Sprint Goal — into a ritual performed out of habit.",
  },
  {
    id: "ftd-15",
    question: "How would you introduce a new facilitation technique to a team that's skeptical of change?",
    answer:
      "Frame it explicitly as a time-boxed experiment, not a permanent change — 'let's just try this for one retro and decide together if it's worth keeping' is a much easier ask than presenting it as the new normal. Skepticism about process change is usually really about not wanting yet another thing imposed on them without a say, so giving them the decision to keep or drop it afterward addresses that directly.",
  },
];
