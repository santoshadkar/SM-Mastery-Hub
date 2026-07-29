import type { Workshop } from "./types";

export const teamHealthCultureWorkshops: Workshop[] = [
  {
    slug: "team-canvas",
    category: "team-health-culture",
    title: "Team Canvas",
    duration: "90-120 minutes",
    audience: "A newly formed team, or an existing team that's never explicitly aligned on purpose and ways of working",
    objective:
      "Build a shared, visual, one-page reference covering the team's purpose, goals, roles, values, and rules of engagement.",
    whyItMatters:
      "Teams frequently assume alignment on purpose and roles that was never actually discussed out loud — the Team Canvas forces those assumptions into the open before they cause friction mid-project instead of at the start.",
    materials: ["A large Team Canvas template (physical poster or digital whiteboard)", "Sticky notes in multiple colors", "Markers"],
    agenda: [
      {
        time: "10 min",
        step: "Introduce the canvas sections",
        detail: "Walk through the canvas's typical sections: purpose, common goals, values, needs and expectations, strengths, weaknesses, roles and skills, rules and activities.",
      },
      {
        time: "20 min",
        step: "Purpose and common goals",
        detail: "Ask each person to individually write what they believe the team's purpose is, then compare — the variance is often the most illuminating part of this section.",
      },
      {
        time: "20 min",
        step: "Strengths, weaknesses, and needs",
        detail: "Have people share what they personally bring to the team and what they individually need from it to do their best work — this section often surfaces things a team never discusses directly.",
      },
      {
        time: "20 min",
        step: "Roles, rules, and activities",
        detail: "Clarify who does what, and agree on the practical rules the team will operate by day to day — this section overlaps with, and can feed into, a formal Working Agreement.",
      },
      {
        time: "15 min",
        step: "Values",
        detail: "Surface the values the team actually wants to operate by, not generic corporate values — ask for specific behaviors that would demonstrate each value in practice.",
      },
      {
        time: "10 min",
        step: "Review and commit",
        detail: "Read the finished canvas aloud as a team, and agree where it will live and when it'll be revisited.",
      },
    ],
    facilitatorTips: [
      "This works best face to face or on a real-time collaborative whiteboard — doing it purely async loses the value of hearing where people's answers diverge.",
      "Revisit the canvas after a few months, not just once — a team's purpose and needs shift as the work and membership change.",
    ],
  },
  {
    slug: "five-dysfunctions-of-a-team",
    category: "team-health-culture",
    title: "5 Dysfunctions in the Team",
    duration: "90 minutes",
    audience: "An established team experiencing friction, low trust, or unclear commitment to decisions",
    objective:
      "Introduce Lencioni's dysfunction pyramid and help the team honestly diagnose which level is the actual root cause of their current friction.",
    whyItMatters:
      "Teams usually treat the visible symptom (missed deadlines, avoided accountability) directly, when the real cause sits lower in the pyramid — this workshop's value is entirely in getting the team to look underneath the visible problem.",
    materials: ["A drawn or printed pyramid diagram (see the book deep-dive on Five Dysfunctions of a Team)", "Sticky notes"],
    agenda: [
      {
        time: "15 min",
        step: "Introduce the pyramid",
        detail:
          "Walk through all five levels bottom to top: Absence of Trust, Fear of Conflict, Lack of Commitment, Avoidance of Accountability, Inattention to Results — emphasizing that each level enables the one above it.",
      },
      {
        time: "20 min",
        step: "Anonymous self-assessment per level",
        detail: "Have each person privately rate the team 1-5 on each of the five dysfunctions, then reveal and discuss the spread — anonymity matters here, since trust itself is one of the things being assessed.",
      },
      {
        time: "25 min",
        step: "Trace the top symptom to its root",
        detail:
          "Take whichever dysfunction scored worst — often near the top of the pyramid — and work backward: is this really a top-level problem, or a symptom of something lower down (usually trust or unresolved conflict) never having been addressed?",
      },
      {
        time: "20 min",
        step: "Discuss the root cause directly",
        detail: "Have an honest conversation about the actual root dysfunction identified, which is often more uncomfortable — and more valuable — than discussing the surface symptom would have been.",
      },
      {
        time: "10 min",
        step: "One concrete commitment",
        detail: "Agree on one specific behavior change addressing the root cause, not the symptom, to try before revisiting this at a future retro.",
      },
    ],
    facilitatorTips: [
      "This workshop can surface real, uncomfortable team history — be prepared to slow down and let a hard conversation happen rather than rushing to the next agenda item.",
      "If trust is genuinely the lowest-scoring level, don't expect this single workshop to fix it — it's a starting diagnosis, not a resolution, and trust-building is a longer, ongoing process.",
    ],
  },
  {
    slug: "psychological-safety",
    category: "team-health-culture",
    title: "Psychological Safety",
    duration: "60-75 minutes",
    audience: "Any team, but especially one where retros feel guarded or the same few voices always speak",
    objective:
      "Build shared understanding of what psychological safety actually is, why it matters, and what specific behaviors build or erode it.",
    whyItMatters:
      "Psychological safety is often treated as an abstract feel-good concept rather than something built through specific, repeatable behaviors — this workshop's job is making it concrete and actionable, not just naming it as a goal.",
    materials: ["Sticky notes", "A few real (anonymized, if needed) examples of safety-eroding moments to discuss"],
    agenda: [
      {
        time: "10 min",
        step: "Define it concretely",
        detail: "Psychological safety is the shared belief that the team is safe for interpersonal risk-taking — admitting a mistake, asking a 'basic' question, disagreeing with someone senior — without fear of punishment or humiliation.",
      },
      {
        time: "15 min",
        step: "Identify safety-building and safety-eroding behaviors",
        detail: "Brainstorm together: what specific behaviors (not personality traits) build safety, and what specific behaviors erode it? Keep this behavioral and concrete, not about who's 'nice' or 'difficult.'",
      },
      {
        time: "15 min",
        step: "Reflect on the team's own recent history",
        detail: "Ask, carefully and without putting anyone on the spot: has there been a moment recently where speaking up felt risky? What made it feel that way?",
      },
      {
        time: "15 min",
        step: "Discuss the facilitator's/leader's specific role",
        detail: "Address directly that safety is disproportionately shaped by how those with more authority (often the Scrum Master or senior members) respond to mistakes and dissent — model this by naming your own commitment here.",
      },
      {
        time: "10 min",
        step: "Agree on one team norm",
        detail: "Commit to one specific, checkable behavior the team will hold itself to (e.g. 'no interrupting when someone's explaining a mistake') rather than a vague aspiration.",
      },
    ],
    facilitatorTips: [
      "Safety is built through consistent behavior over months, not declared in one workshop — treat this as planting the concept, not completing the work.",
      "Watch your own reaction in the room the first time someone takes a real risk after this workshop — how you respond in that exact moment either validates or undermines everything just discussed.",
    ],
  },
  {
    slug: "high-performance-team",
    category: "team-health-culture",
    title: "High Performance Team",
    duration: "75 minutes",
    audience: "A team performing reasonably well that wants to identify what's actually holding it back from excellence",
    objective:
      "Help the team assess itself against known markers of high-performing teams and identify concrete gaps to close.",
    whyItMatters:
      "'Be a high-performing team' is not an actionable goal on its own — this workshop breaks the abstract aspiration into specific, assessable dimensions the team can actually act on.",
    materials: ["A simple rubric of high-performance markers (trust, clear goals, complementary skills, accountability, results focus)"],
    agenda: [
      {
        time: "10 min",
        step: "Introduce the markers of high performance",
        detail: "Cover the common markers: clear, shared goals; complementary skills genuinely being used; mutual accountability; high trust; a strong focus on collective results over individual credit.",
      },
      {
        time: "20 min",
        step: "Team self-assessment against each marker",
        detail: "Rate the team honestly, individually then as a group discussion, on each marker — this often overlaps usefully with the Maturity Self-Assessment's dimensions if the team has taken it.",
      },
      {
        time: "20 min",
        step: "Identify the single biggest gap",
        detail: "Rather than trying to improve everything at once, identify the one marker with the most room for growth and the most leverage if improved.",
      },
      {
        time: "15 min",
        step: "Brainstorm specific actions for that one gap",
        detail: "Generate concrete, specific actions the team could take — not generic advice like 'communicate more,' but a specific practice change.",
      },
      {
        time: "10 min",
        step: "Commit and set a review point",
        detail: "Agree on one or two actions and a specific date to check whether they actually happened and moved the needle.",
      },
    ],
    facilitatorTips: [
      "Avoid comparing this team to another team as the benchmark — compare the team to its own past performance and to the markers themselves, not to a rival team, which invites unhealthy comparison instead of honest self-assessment.",
      "This pairs well as a follow-up to the Maturity Self-Assessment or the 5 Dysfunctions workshop, since both feed useful data into this discussion.",
    ],
  },
  {
    slug: "emotional-intelligence-for-agile-teams",
    category: "team-health-culture",
    title: "Emotional Intelligence for Agile Teams",
    duration: "75-90 minutes",
    audience: "Any team, particularly one navigating conflict, high pressure, or significant change",
    objective:
      "Build the team's shared vocabulary and skill for recognizing and managing emotions — their own and each other's — in a way that improves collaboration rather than suppressing feelings.",
    whyItMatters:
      "Agile ceremonies assume honest, direct communication, which is much harder without basic emotional intelligence — a team that can't recognize when a conversation has become emotionally charged will keep having the same unproductive arguments.",
    materials: ["A simple model of emotional intelligence (self-awareness, self-regulation, empathy, social skill)", "Scenario cards for discussion, if available"],
    agenda: [
      {
        time: "15 min",
        step: "Introduce the four components",
        detail: "Self-awareness (recognizing your own emotional state), self-regulation (managing your reaction rather than being controlled by it), empathy (reading others' emotional states), and social skill (using that awareness to navigate interactions well).",
      },
      {
        time: "15 min",
        step: "Practice self-awareness with a real check-in",
        detail: "Have each person briefly name their current emotional state and one factor influencing it — a low-stakes way to practice naming emotions out loud in a team setting.",
      },
      {
        time: "20 min",
        step: "Discuss a scenario where emotion derailed a conversation",
        detail: "Using a hypothetical or anonymized real example, discuss what emotional signals were likely present, and what a more self-aware or empathetic response might have looked like.",
      },
      {
        time: "20 min",
        step: "Practice restoring safety in a heated moment",
        detail: "This connects directly to the 'crucial conversations' idea of noticing when safety has left a conversation — practice, in pairs, a short script for pausing and re-establishing safety mid-disagreement.",
      },
      {
        time: "10 min",
        step: "Agree on a team signal",
        detail: "Some teams find it useful to agree on a simple, low-stakes phrase or signal anyone can use to flag 'this conversation needs to pause and reset' without it feeling like an accusation.",
      },
    ],
    facilitatorTips: [
      "Keep this practical and behavioral rather than turning it into an abstract psychology lecture — the goal is usable skills, not theory.",
      "This workshop pairs naturally with Crucial Conversations (see the Recommended Reading deep-dive) for a more detailed treatment of the safety-restoring skill specifically.",
    ],
  },
];
