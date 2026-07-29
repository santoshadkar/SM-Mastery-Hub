import type { InterviewQuestion } from "./types";

export const scalingStakeholdersQuestions: InterviewQuestion[] = [
  {
    id: "ss-1",
    question: "What's the difference between SAFe, LeSS, and Scrum@Scale?",
    answer:
      "SAFe is the most prescriptive, adding structured layers (Agile Release Trains, PI Planning, portfolio management) for large enterprises. LeSS takes the opposite approach — minimal added structure, keeping one Product Backlog, one Product Owner, and one Sprint across multiple teams. Scrum@Scale scales by networking the Scrum unit itself (Scrum of Scrums, Executive MetaScrum) rather than adding a separate framework layer. Which fits depends on the org's actual coordination problem, not which is 'best' in the abstract.",
  },
  {
    id: "ss-2",
    question: "How do you know when a team actually needs to adopt a scaling framework?",
    answer:
      "When coordination problems between multiple teams sharing a product become the bottleneck — not because a single team feels big, but because dependencies, shared backlogs, or cross-team release coordination are creating real friction. Adopting a scaling framework before that pain exists usually just adds ceremony without solving a real problem.",
  },
  {
    id: "ss-3",
    question: "What's the Spotify model, and is it something you'd recommend adopting directly?",
    answer:
      "It describes the organizational structure — squads, tribes, chapters, guilds — Spotify's engineering culture used around 2012. It's better understood as inspiration for team topology than a certified, prescriptive framework like SAFe or LeSS, and Spotify itself has since moved away from parts of it. I'd borrow the vocabulary selectively rather than adopting it wholesale as if it were a formal methodology.",
  },
  {
    id: "ss-4",
    question: "How would you run a Scrum of Scrums that isn't just a status meeting?",
    answer:
      "Change what representatives are asked to bring — not 'what did your team do' but 'what does my team need from another team, and what's another team waiting on from mine.' Keep a visible, persistent list of cross-team dependencies rather than relying on memory between sessions, so the meeting's actual job (resolving dependencies) stays visible.",
  },
  {
    id: "ss-5",
    question: "Two teams are blocked on each other every sprint. What's your approach?",
    answer:
      "Look at the interaction mode the two teams have defaulted into — often it's constant, high-touch collaboration on every item when a much cheaper, clearer handoff (one team consuming the other's output as a well-defined service) would work better once the boundary between their work is actually clear. If the dependency is structural — the org drew team boundaries in a way that guarantees this friction — that's worth escalating rather than continuing to manage sprint after sprint.",
  },
  {
    id: "ss-6",
    question: "How would you prepare a team for its first PI Planning event?",
    answer:
      "Walk through the format beforehand so the team's attention during the actual event goes to planning, not figuring out an unfamiliar structure under pressure. Explicitly coach them to name dependencies out loud, even uncomfortable ones, and to resist over-committing under the social pressure of a large room — the size of the room doesn't change the team's actual capacity.",
  },
  {
    id: "ss-7",
    question: "What's a platform team, and when would you advocate for standing one up?",
    answer:
      "A team that provides internal infrastructure or tooling — deployment pipelines, shared auth, logging — that other teams consume like a service, reducing undifferentiated heavy lifting each team would otherwise duplicate. I'd advocate for one when I have concrete evidence multiple teams are independently rebuilding similar infrastructure, framed as a capacity cost argument, not just 'it would be nice to have.'",
  },
  {
    id: "ss-8",
    question: "How do you manage a stakeholder who's been burned by a previous team's failures?",
    answer:
      "Don't argue with their skepticism — it's usually earned from real past experience, not irrational. Rebuild trust through small, easily verifiable commitments kept consistently over time (a reliable weekly update, direct visibility into real progress) rather than one big reassuring conversation or promise, which isn't credible to someone who's heard promises like that before.",
  },
  {
    id: "ss-9",
    question: "How would you turn a Sprint Review into a genuine working session with stakeholders instead of a one-way demo?",
    answer:
      "Bring at least one real, unresolved decision that needs stakeholder input, not just a demo of finished work — that's what shifts people from passive audience to active participants. If a stakeholder tries to pull it back into pure status reporting, redirect gently but directly to the actual decision you need their input on.",
  },
  {
    id: "ss-10",
    question: "What would you say to a stakeholder who wants a single, fixed delivery date on an uncertain piece of work?",
    answer:
      "Give a forecasted range with a stated confidence level based on real historical data, rather than either refusing to commit to anything or inventing false precision. Explain specifically what would narrow the range, and commit to a regular cadence of updates as it tightens, rather than one static answer that doesn't reflect new information as it arrives.",
  },
  {
    id: "ss-11",
    question: "How do you escalate a cross-team impediment without it turning into blaming another team?",
    answer:
      "Frame it as a system gap — misaligned priorities between teams — rather than a fault of the other team's people. Bring a specific, quantified cost (sprints affected, capacity lost) rather than a vague complaint, and loop in the other team's Scrum Master before escalating further up, so it lands as a shared, already-attempted problem rather than a surprise complaint about them.",
  },
  {
    id: "ss-12",
    question: "What's Nexus, and how many teams is it typically designed for?",
    answer:
      "Nexus, from Scrum.org, is a minimal scaling framework for roughly 3 to 9 teams working on one product. It adds a Nexus Integration Team accountable for ensuring an integrated increment each Sprint, plus a small set of additional events layered directly on top of each team's existing Scrum events, rather than replacing them.",
  },
  {
    id: "ss-13",
    question: "How would you handle a Product Owner and a stakeholder disagreeing publicly on backlog priority?",
    answer:
      "Don't referee the actual prioritization decision — that's the Product Owner's call to make, not yours. Facilitate the disagreement being heard fully, and if it's not resolving live, propose taking it into a dedicated conversation between the two of them rather than letting it consume the whole team's meeting time.",
  },
  {
    id: "ss-14",
    question: "What's your experience with, or understanding of, Scaled Agile Framework's Agile Release Train?",
    answer:
      "An Agile Release Train is a group of typically 5-12 teams working toward a shared solution on a common cadence, planned together through PI Planning. It's SAFe's mechanism for aligning multiple teams without requiring each one to individually negotiate every cross-team dependency — the shared cadence and joint planning event does that coordination work upfront instead.",
  },
  {
    id: "ss-15",
    question: "How would you decide whether an organization needs SAFe, or whether it's overkill?",
    answer:
      "Look at the actual coordination problem before recommending any specific framework — SAFe fits organizations with genuine portfolio-level funding and alignment needs across many products and teams. If the real problem is just two or three teams needing better dependency management, SAFe's full structure is usually more overhead than the problem requires, and something lighter like Nexus or LeSS would likely fit better.",
  },
];
