import type { Deck } from "./types";
import { icebreaker, objectives, s, sourcesSlide, src, takeaways, titleSlide } from "./builders";

export const teamHealthCultureDecks: Deck[] = [
  // ───────────────────────────────────────── Team Canvas
  {
    workshopSlug: "team-canvas",
    title: "Team Canvas",
    subtitle: "A one-page, team-authored picture of who we are and how we work",
    slides: [
      titleSlide("Team Canvas", "A one-page, team-authored picture of who we are and how we work"),
      objectives([
        "Explain what a team canvas is for and how it differs from a working agreement",
        "Distinguish purpose, goals and values — and write each one well",
        "Surface differences in how teammates understand our purpose and roles",
        "Complete a first version of our own canvas together",
        "Decide where the canvas will live and when we will revisit it",
      ]),
      icebreaker(
        {
          name: "Why did you join?",
          time: "5 min",
          steps: [
            "Each person shares in one sentence what drew them to this team or product",
            "Write each answer on a sticky note",
            "Cluster the notes: mission, people, learning, craft, other",
            "Notice how different our reasons are — and what we share",
          ],
        },
        {
          name: "Our team as a vehicle",
          time: "8 min",
          steps: [
            "In pairs or trios, draw the team as a vehicle: bus, sailboat, relay team, rocket",
            "Show where the engine, steering and brakes are",
            "Each group presents its drawing in 60 seconds",
            "Ask: which picture is closest to how it really feels today?",
          ],
        },
        "The differences are the point: a canvas exists because people rarely share the same picture of the team without talking about it.",
      ),
      s(
        "concept",
        "What a team canvas is — and why teams need one",
        {
          bullets: [
            "A single visual page where a team writes down its purpose, goals, values, roles and ways of working",
            "Built together in a workshop: the conversation matters more than the finished page",
            "Makes hidden assumptions visible before they turn into friction mid-project",
            "Complements — not replaces — the Product Goal, Sprint Goal and working agreement",
            "Useful at kickoff, after a reorg or merger, and whenever membership changes",
          ],
          callout: "A canvas is an alignment tool. If nobody argues while filling it in, we probably skipped the useful part.",
        },
      ),
      s(
        "concept",
        "Purpose vs. goals vs. values",
        {
          table: {
            headers: ["Element", "The question it answers", "Weak example", "Stronger example"],
            rows: [
              ["Purpose", "Why do we exist?", "Deliver features", "Make paying for an order the least stressful minute of a customer's day"],
              ["Common goals", "What do we want to achieve, and by when?", "Improve quality", "Cut failed payments this quarter, checked in each Sprint Review"],
              ["Personal goals", "What does each person want from being here?", "(left blank)", "'I want to learn the payments domain' — so we pair on it"],
              ["Values", "How will we behave when it is hard?", "Teamwork", "We raise risks early; we ship small and reversible changes"],
            ],
            colWidths: [1.1, 2, 1.5, 2.9],
          },
        },
        "Spend the most time on purpose and personal goals — teams skip them and then wonder why motivation is uneven.",
      ),
      s(
        "concept",
        "The boxes we will fill",
        {
          columns: [
            {
              heading: "Who we are",
              bullets: [
                "Purpose — why we exist",
                "Common goals — what success looks like",
                "Personal goals — what each of us wants to grow",
                "Values — how we behave under pressure",
                "Roles and skills — who brings what",
              ],
            },
            {
              heading: "How we work together",
              bullets: [
                "Strengths — what we can lean on",
                "Weaknesses and risks — where we are exposed",
                "Needs and expectations — what we need from each other and from outside",
                "Rules and activities — the habits that keep us aligned",
              ],
            },
          ],
          callout: "Adapted from the widely used Team Canvas format — rename or add boxes to suit your team.",
        },
      ),
      s(
        "concept",
        "Roles, skills and cover",
        {
          bullets: [
            "Keep Scrum accountabilities (Product Owner, Scrum Master, Developers) separate from the skills each person brings",
            "Map skills on a simple matrix: who is expert, who can help, who wants to learn",
            "Look for single points of failure — skills only one person has (the 'bus factor')",
            "Encourage 'T-shaped' people: deep in one area, useful across several",
            "Turn gaps into learning goals or pairing plans rather than blame",
          ],
        },
      ),
      s(
        "concept",
        "From values to behaviours",
        {
          table: {
            headers: ["Value", "We will see…", "We will not see…"],
            rows: [
              ["Openness", "Unfinished work shown early; 'I don't know' said out loud", "Surprises revealed at the Sprint Review"],
              ["Ownership", "People pick up the next most valuable item, not only their own", "Waiting to be assigned work"],
              ["Learning", "Small experiments after retros; mistakes shared", "Blame after incidents"],
              ["Respect", "Meetings start on time; everyone finishes their point", "Side conversations and multitasking"],
            ],
            colWidths: [1.1, 3, 2.6],
          },
          callout: "A value is only real if we can name a behaviour that shows it — and one that would break it.",
        },
      ),
      s(
        "example",
        "Live example: the 'Checkout Experience' team canvas",
        {
          columns: [
            {
              heading: "Who we are",
              bullets: [
                "Purpose: make paying for an order the least stressful minute of a customer's day",
                "Common goal: cut failed payments this quarter; check progress each Sprint Review",
                "Personal goals: Priya wants payments depth; Sam wants to lead refinement",
                "Values: raise risks early; small releases; explain the why",
              ],
            },
            {
              heading: "How we work together",
              bullets: [
                "Strengths: strong test automation; fast pull-request culture",
                "Risk: only one person knows the payment-provider integration",
                "Needs: a product owner decision within one working day",
                "Rules: no meetings Wednesday afternoons; pair on the integration each Sprint",
              ],
            },
          ],
          callout: "Illustrative team. Notice how the risk box directly produced a pairing rule.",
        },
      ),
      s(
        "usage",
        "Where a team canvas pays off",
        {
          bullets: [
            "Kickoff of a new team: aligns people who have never worked together",
            "After a reorg or merger: two teams' habits become one team's shared picture",
            "New joiners: a one-page 'who we are' beats an hour of ad-hoc explanations",
            "Stakeholder conversations: shows what the team is for and what it needs",
            "Retrospectives: a reference when we ask 'are we still the team we said we wanted to be?'",
          ],
        },
      ),
      s(
        "pitfalls",
        "Why canvases end up as posters nobody reads",
        {
          bullets: [
            "The facilitator writes it for the team, so nobody owns it",
            "Skipping disagreements — a clean canvas usually means a shallow conversation",
            "Vague values ('teamwork', 'quality') that cannot change any behaviour",
            "Filling it once and never revisiting it as the team and work change",
            "Hiding the personal goals and needs boxes because they feel uncomfortable",
          ],
        },
      ),
      s(
        "activity",
        "Try it: fill in our canvas (90–120 minutes)",
        {
          steps: [
            { label: "Introduce the boxes (10 min)", detail: "Walk through each box; agree we can rename or add boxes." },
            { label: "Purpose and goals (40 min)", detail: "Everyone writes purpose alone, then compare — the variance is the discussion. Then common and personal goals." },
            { label: "Strengths, risks and needs (25 min)", detail: "Silent brainstorm, cluster, and pick the top item in each box." },
            { label: "Roles, rules and values (25 min)", detail: "Agree who covers what, the few rules we will keep, and behaviours that show each value." },
            { label: "Commit (10 min)", detail: "Read it aloud, decide where it lives, and set a revisit date." },
          ],
        },
      ),
      takeaways(
        [
          "A team canvas aligns purpose, goals, values, roles and ways of working on one page",
          "The value is in the conversation — especially where people disagree",
          "Turn values into observable behaviours and risks into concrete actions",
          "Keep it visible and revisit it when the team or the work changes",
        ],
      ),
      sourcesSlide([
        src("Website", "The Team Canvas", "A free, widely used team-alignment canvas", "Search for 'Team Canvas' for the original template and facilitation guide."),
        src("Book", "Start With Why", "Simon Sinek", "A popular framing for thinking about purpose before goals."),
        src("Book", "Business Model Generation", "Alexander Osterwalder & Yves Pigneur", "The canvas-on-a-page approach that inspired many team and product canvases."),
        src("Website", "Liberating Structures — Purpose-to-Practice", "Henri Lipmanowicz & Keith McCandless", "A structured way to move from purpose to concrete practices.", "https://liberatingstructures.com"),
        src("Guide", "The Scrum Guide — Product Goal", "Ken Schwaber & Jeff Sutherland", "How the Product Goal gives the team a long-term objective.", "https://scrumguides.org"),
      ]),
    ],
  },

  // ───────────────────────────────────────── Five Dysfunctions
  {
    workshopSlug: "five-dysfunctions-of-a-team",
    title: "5 Dysfunctions in the Team",
    subtitle: "Reading the pyramid to find the real cause behind team friction",
    slides: [
      titleSlide("5 Dysfunctions in the Team", "Reading the pyramid to find the real cause behind team friction"),
      objectives([
        "Name the five dysfunctions in Lencioni's model and how each builds on the one below",
        "Describe what each looks like on a Scrum team, in real behaviour",
        "Score our own team anonymously and read the spread, not just the average",
        "Trace a visible symptom down to its root dysfunction",
        "Choose one behaviour change aimed at the root, not the symptom",
      ]),
      icebreaker(
        {
          name: "Personal histories",
          time: "8 min",
          steps: [
            "Each person shares: where they grew up, how many siblings, and one unusual thing about their childhood",
            "Keep it to one minute each; no follow-up questions",
            "Facilitator goes first to model a light level of openness",
            "Ask: what did you learn about a colleague that surprised you?",
          ],
        },
        {
          name: "Two truths and a lie",
          time: "10 min",
          steps: [
            "Each person writes two true statements and one lie about themselves, related to work history",
            "Others guess the lie by vote",
            "The owner reveals it and tells the story behind one truth",
            "Debrief: how did sharing something personal change how you see each other?",
          ],
        },
        "Trust starts with knowing each other as people. That is exactly the base of the pyramid we are about to examine.",
      ),
      s(
        "concept",
        "The pyramid: each level enables the one above",
        {
          table: {
            headers: ["Level (top → bottom)", "Dysfunction", "Healthy counterpart"],
            rows: [
              ["5", "Inattention to results — status and ego over team outcome", "Collective results come first"],
              ["4", "Avoidance of accountability — no peer-to-peer challenge", "Peers hold each other to standards"],
              ["3", "Lack of commitment — ambiguity; 'yes' in the room, 'no' afterwards", "Clarity and real buy-in"],
              ["2", "Fear of conflict — artificial harmony", "Productive, passionate debate of ideas"],
              ["1", "Absence of trust — invulnerability", "Vulnerability-based trust"],
            ],
            colWidths: [1.3, 3.4, 2.6],
          },
          callout: "Fixing a higher level without the one beneath it rarely lasts.",
        },
        "Read from the bottom: trust makes conflict safe, conflict produces commitment, commitment allows accountability, accountability drives results.",
      ),
      s(
        "concept",
        "Level 1 — Trust (the foundation)",
        {
          columns: [
            {
              heading: "What it is",
              bullets: [
                "Vulnerability-based trust: admitting mistakes, weaknesses and 'I need help' without fear",
                "Different from predictive trust ('I know you will deliver')",
                "Built by knowing each other and by leaders modelling vulnerability first",
              ],
            },
            {
              heading: "Signs on a Scrum team",
              bullets: [
                "Blockers appear at the Daily Scrum on the day they occur — or they do not",
                "Retros stay polite; real issues are discussed afterwards in corridors",
                "People hide unfinished work until it looks good",
                "Apologies and 'I was wrong' are rare",
              ],
            },
          ],
        },
      ),
      s(
        "concept",
        "Levels 2 & 3 — Conflict and commitment",
        {
          table: {
            headers: ["", "Fear of conflict", "Lack of commitment"],
            rows: [
              ["Looks like", "Refinement and planning end quickly with no debate; disagreement shows up later", "Everyone nods in Sprint Planning; scope is quietly re-argued mid-Sprint"],
              ["Root", "Low trust: disagreeing feels personal or risky", "Ideas were never debated, so people do not feel heard"],
              ["Healthy version", "Debate ideas passionately, without attacking people", "Clear decisions, everyone commits — 'disagree and commit'"],
              ["Scrum tie-in", "Refinement, estimation, retros", "Sprint Goal, Sprint Planning"],
            ],
            colWidths: [1.2, 3, 3],
          },
        },
        "Note: absence of conflict is not harmony. Teams with no visible disagreement are often hiding it.",
      ),
      s(
        "concept",
        "Levels 4 & 5 — Accountability and results",
        {
          table: {
            headers: ["", "Avoidance of accountability", "Inattention to results"],
            rows: [
              ["Looks like", "Missed Definition of Done goes unchallenged; the Scrum Master is the only enforcer", "Individuals optimise their own tickets while the Sprint Goal slips"],
              ["Root", "No clear commitment, so no agreed standard to hold each other to", "Personal status or ego outweighs the team's outcome"],
              ["Healthy version", "Peers remind each other of agreed standards, kindly and directly", "Team scoreboard: Sprint Goal and Increment come first"],
              ["Scrum tie-in", "Definition of Done, working agreement", "Sprint Goal, Product Goal, Sprint Review"],
            ],
            colWidths: [1.2, 3, 3],
          },
        },
      ),
      s(
        "concept",
        "The pyramid mapped onto Scrum",
        {
          bullets: [
            "Trust → openness in the Daily Scrum and Retrospective",
            "Conflict → honest debate in refinement, estimation and planning",
            "Commitment → a Sprint Goal the whole team owns",
            "Accountability → a Definition of Done and working agreement peers uphold",
            "Results → the Increment and Product Goal, not individual output",
          ],
          callout: "Each Scrum event is a place where one level of the pyramid is either built or eroded.",
        },
      ),
      s(
        "example",
        "Live example: 'our estimates agree — but stories keep overrunning'",
        {
          steps: [
            { label: "Symptom", detail: "Planning poker always converges quickly, yet several stories overrun every Sprint." },
            { label: "Why 1 — no debate", detail: "Nobody voices a different number; estimates align suspiciously fast (fear of conflict)." },
            { label: "Why 2 — why silent?", detail: "A past estimate was mocked in a retro; people avoid standing out (weak trust)." },
            { label: "Root", detail: "Absence of trust makes disagreement feel unsafe, so hidden risks stay hidden." },
            { label: "Action", detail: "Facilitator asks the highest and lowest estimator to explain first; team agrees 'no ridicule of estimates'." },
          ],
          callout: "Illustrative scenario. Fixing 'estimation' directly would have missed the real cause.",
        },
      ),
      s(
        "usage",
        "How a Scrum Master uses the model",
        {
          bullets: [
            "As a diagnostic: when a team shows a top-level symptom, ask which level below is the true cause",
            "As a health check every quarter, scored anonymously by the whole team",
            "To choose interventions: trust-building exercises for level 1; facilitation techniques for level 2",
            "To brief a new leader on why 'more accountability' may not be what the team needs",
            "To frame retro topics without labelling individuals",
          ],
        },
      ),
      s(
        "pitfalls",
        "Handle with care",
        {
          bullets: [
            "Labelling a person as 'the dysfunction' instead of describing team behaviour",
            "Expecting one workshop to fix trust — it is built over months of consistent behaviour",
            "Mistaking a quiet, polite team for a healthy one",
            "Running this without safety — anonymity in scoring is essential",
            "Assigning accountability structures (trackers, sign-offs) when commitment or trust is the real gap",
          ],
        },
      ),
      s(
        "activity",
        "Try it: anonymous pyramid score",
        {
          steps: [
            { label: "Introduce the levels (10 min)", detail: "Read the five descriptions; agree what each means in our context." },
            { label: "Score anonymously (10 min)", detail: "1–5 for each level on cards or a poll; no names." },
            { label: "Reveal spread and average (10 min)", detail: "Where do people disagree? Disagreement itself is information." },
            { label: "Trace the worst symptom down (20 min)", detail: "Ask 'why' toward the base of the pyramid." },
            { label: "One behaviour commitment (10 min)", detail: "Aimed at the root level; review at the next retro." },
          ],
        },
      ),
      takeaways(
        [
          "Five dysfunctions stack: trust, conflict, commitment, accountability, results",
          "Symptoms at the top usually have roots lower down — usually trust",
          "Quiet agreement is not harmony; healthy teams argue about ideas safely",
          "Aim interventions at the root level, and measure again in a quarter",
        ],
      ),
      sourcesSlide([
        src("Book", "The Five Dysfunctions of a Team", "Patrick Lencioni", "The source model, told as a leadership fable, with assessment ideas."),
        src("Article", "Book deep-dive on this site", "ScrumMaster Hub", "A summary of the pyramid and how it maps onto Scrum.", "https://scrummaster-hub.vercel.app/resources/reading/five-dysfunctions-of-a-team"),
        src("Book", "Crucial Conversations", "Patterson, Grenny, McMillan & Switzler", "Skills for staying safe and honest when conversations get difficult."),
        src("Book", "The Fearless Organization", "Amy C. Edmondson", "Evidence and practice on psychological safety — the ground for trust."),
        src("Book", "Radical Candor", "Kim Scott", "Direct challenge combined with genuine care — the healthy conflict pattern."),
      ]),
    ],
  },

  // ───────────────────────────────────────── Psychological Safety
  {
    workshopSlug: "psychological-safety",
    title: "Psychological Safety",
    subtitle: "Building a team where it is safe to speak up, ask and be wrong",
    slides: [
      titleSlide("Psychological Safety", "Building a team where it is safe to speak up, ask and be wrong"),
      objectives([
        "Define psychological safety accurately — and what it is not",
        "Explain why it matters, using the research behind Google's Project Aristotle and Edmondson's work",
        "Recognise leader and peer behaviours that build or erode it",
        "Describe four stages of safety and where our team sits",
        "Agree one team norm that makes speaking up easier",
      ]),
      icebreaker(
        {
          name: "Failure résumé",
          time: "8 min",
          steps: [
            "Facilitator goes first: share a small professional mistake and what it taught you",
            "Each person shares one mistake and one lesson (their choice of size)",
            "Rule: respond with thanks or curiosity only — no jokes at anyone's expense",
            "Notice how the room feels after the first honest story",
          ],
        },
        {
          name: "Anonymous questions we never asked",
          time: "8 min",
          steps: [
            "Everyone writes on a card a question they were afraid to ask at work",
            "Collect cards; the facilitator shuffles and reads them aloud",
            "The team answers together, thanking the unknown asker",
            "Ask: what would make it easier to ask these in the open?",
          ],
        },
        "The facilitator's own reaction in this moment teaches more than any slide: respond to vulnerability with thanks.",
      ),
      s(
        "concept",
        "What psychological safety is — and is not",
        {
          columns: [
            {
              heading: "It is",
              bullets: [
                "A shared belief that the team is safe for interpersonal risk-taking",
                "Confidence that speaking up with a question, concern or mistake will not be punished or humiliated",
                "Something a team experiences together, shaped strongly by leaders' reactions",
              ],
            },
            {
              heading: "It is not",
              bullets: [
                "Being nice all the time or avoiding disagreement",
                "Lower standards or no accountability",
                "A guarantee that every idea is accepted",
                "A personality trait — it is built by behaviour and context",
              ],
            },
          ],
          callout: "Amy Edmondson's definition: a shared belief that the team is safe for interpersonal risk taking.",
        },
      ),
      s(
        "concept",
        "Safety and standards go together",
        {
          table: {
            headers: ["", "Low standards", "High standards"],
            rows: [
              ["High psychological safety", "Comfort zone — pleasant, little challenge or learning", "Learning zone — people speak up, take risks and improve"],
              ["Low psychological safety", "Apathy zone — disengaged, going through the motions", "Anxiety zone — people hide problems for fear of blame"],
            ],
            colWidths: [1.8, 2.6, 2.8],
          },
          callout: "The goal is the learning zone: high safety AND high standards. Adapted from Amy Edmondson's model.",
        },
      ),
      s(
        "concept",
        "Why it matters: the research",
        {
          bullets: [
            "Google's Project Aristotle studied what makes teams effective and found five key dynamics",
            "Psychological safety was the most important of the five; the others were dependability, structure and clarity, meaning, and impact",
            "Amy Edmondson's research links safety to how openly teams report and learn from errors",
            "In complex work, problems surface only if people feel safe enough to report them early",
            "For Scrum, inspection and adaptation depend directly on honest information",
          ],
          callout: "No safety, no honest inspection — so the events run but nothing is really adapted.",
        },
        "Be careful not to overstate the evidence: say 'research suggests' and point people to the sources on the last slide.",
      ),
      s(
        "concept",
        "Four stages of safety",
        {
          table: {
            headers: ["Stage", "What people feel safe to do", "Warning sign when missing"],
            rows: [
              ["1. Inclusion", "Belong; be accepted as a person", "New joiners stay silent and unseen"],
              ["2. Learner", "Ask questions, make mistakes, get feedback", "People pretend to understand"],
              ["3. Contributor", "Use skills and make real contributions", "Only seniors' ideas are acted on"],
              ["4. Challenger", "Question decisions and suggest change", "Nobody disagrees with leaders — before things go wrong"],
            ],
            colWidths: [1.3, 3.3, 2.7],
          },
          callout: "Framework from Timothy R. Clark's 'The 4 Stages of Psychological Safety'.",
        },
      ),
      s(
        "concept",
        "Behaviours that build vs. erode safety",
        {
          columns: [
            {
              heading: "Builds safety",
              bullets: [
                "Leader admits their own mistakes and says 'I don't know'",
                "Responds to bad news with curiosity: 'tell me more'",
                "Thanks the messenger; explicitly invites dissent",
                "Blameless reviews: focus on the system, not the person",
                "Equal airtime: everyone speaks before the loudest voice",
              ],
            },
            {
              heading: "Erodes safety",
              bullets: [
                "Blame, sarcasm or eye-rolling in response to a mistake",
                "Interrupting or dismissing questions as 'obvious'",
                "Punishing the person who reports a problem late",
                "Public shaming in stand-ups or code review",
                "Leaders who never say 'I was wrong'",
              ],
            },
          ],
        },
      ),
      s(
        "example",
        "Live example: one bug confession, two responses",
        {
          columns: [
            {
              heading: "Response A — blame",
              bullets: [
                "Dev: 'I pushed a change that broke the discount rule.'",
                "Lead: 'How did you miss that? This is the second time.'",
                "Result: next time, the dev fixes it quietly and says nothing",
                "The team learns that admitting mistakes costs reputation",
              ],
            },
            {
              heading: "Response B — curiosity",
              bullets: [
                "Dev: 'I pushed a change that broke the discount rule.'",
                "Lead: 'Thanks for flagging it. What made it easy to miss? Let's fix it and improve the check.'",
                "Result: a missing automated test is added; two more bugs are reported early",
                "The team learns speaking up improves the system",
              ],
            },
          ],
          callout: "Illustrative scenario. The same words from a leader can grow or shrink safety for months.",
        },
      ),
      s(
        "concept",
        "Measuring it without a heavy survey",
        {
          bullets: [
            "Ask anonymously, on a 1–5 scale, statements like: 'It is safe to take a risk on this team'",
            "Or: 'If I make a mistake, it is not held against me'",
            "Or: 'People on this team can bring up problems and tough issues'",
            "Look at the spread as well as the average, and track trends every quarter",
            "Use observable signals too: how early are risks raised, and who speaks in meetings?",
          ],
          callout: "Items paraphrased from the kind of questions Edmondson's research uses — not a validated instrument.",
        },
      ),
      s(
        "usage",
        "Where safety shows up in day-to-day Scrum",
        {
          bullets: [
            "Retrospectives: honest topics only surface when people are not afraid of consequences",
            "Daily Scrum: blockers get raised on day two instead of day nine",
            "Sprint Review: a team can show unfinished work and get real feedback",
            "Incident reviews: blameless post-mortems find system fixes, not scapegoats",
            "Code review and pairing: questions and corrections feel like help, not judgement",
          ],
        },
      ),
      s(
        "pitfalls",
        "Common mistakes when working on safety",
        {
          bullets: [
            "Declaring 'this is a safe space' — safety is shown by how we react, not by announcing it",
            "Confusing safety with lack of accountability or lower standards",
            "One bad reaction by a leader undoing months of trust-building",
            "Asking for honesty but visibly disliking what people say",
            "Treating it as the Scrum Master's job alone — it is shaped by everyone, especially those with authority",
          ],
        },
      ),
      s(
        "activity",
        "Try it: our safety behaviours",
        {
          steps: [
            { label: "Brainstorm builders and erosions (10 min)", detail: "Two colours of stickies: behaviours that make speaking up easier, and ones that make it harder." },
            { label: "Reflect on our recent history (10 min)", detail: "Carefully and without naming people: when did speaking up recently feel risky?" },
            { label: "Name the leaders' role (10 min)", detail: "What should the Scrum Master, Product Owner and seniors do differently?" },
            { label: "Agree one checkable norm (5 min)", detail: "For example: 'We thank whoever raises a problem, before discussing it.'" },
          ],
        },
      ),
      takeaways(
        [
          "Psychological safety is a shared belief that speaking up is safe — it is not niceness",
          "High safety plus high standards creates the learning zone",
          "Leaders' reactions to mistakes and dissent shape safety more than any statement",
          "Safety is built through repeated small behaviours; start with one norm",
        ],
        "Your reaction the first time someone takes a real risk decides whether they do it again.",
      ),
      sourcesSlide([
        src("Research", "Psychological Safety and Learning Behavior in Work Teams", "Amy C. Edmondson, Administrative Science Quarterly (1999)", "The foundational academic paper."),
        src("Book", "The Fearless Organization", "Amy C. Edmondson", "Practical guidance for leaders on building psychologically safe teams."),
        src("Website", "Google re:Work — Understand team effectiveness", "Google", "The Project Aristotle findings and the five dynamics of effective teams.", "https://rework.withgoogle.com"),
        src("Book", "The 4 Stages of Psychological Safety", "Timothy R. Clark", "The inclusion, learner, contributor and challenger stages."),
        src("Book", "The Field Guide to Understanding 'Human Error'", "Sidney Dekker", "Why blame-free reviews find better fixes."),
      ]),
    ],
  },

  // ───────────────────────────────────────── High Performance Team
  {
    workshopSlug: "high-performance-team",
    title: "High Performance Team",
    subtitle: "What great teams do differently — and how to grow toward it",
    slides: [
      titleSlide("High Performance Team", "What great teams do differently — and how to grow toward it"),
      objectives([
        "Describe the stages of team development and what each needs from a Scrum Master",
        "Explain the difference between a working group and a real team",
        "List the markers research and practice associate with high-performing teams",
        "Assess our own team honestly against those markers",
        "Choose one gap to close over the next quarter",
      ]),
      icebreaker(
        {
          name: "Best team, in three words",
          time: "5 min",
          steps: [
            "Each person names the best team they were ever part of",
            "Then describes it in exactly three words",
            "Write the words on a wall and cluster the themes",
            "Compare the wall with our team as it is today",
          ],
        },
        {
          name: "Tower challenge",
          time: "18 min",
          steps: [
            "Small teams get spaghetti, tape, string and a marshmallow",
            "Goal: build the tallest free-standing tower with the marshmallow on top, in 18 minutes",
            "Debrief: who led, who prototyped early, how did the team handle failure?",
            "Link findings to iteration, feedback and roles in a team",
          ],
        },
        "Options A and B both make the point that team performance comes from how people work together, not only from individual skill.",
      ),
      s(
        "concept",
        "Working group vs. real team",
        {
          columns: [
            {
              heading: "Working group",
              bullets: [
                "Individuals with separate tasks and goals",
                "Accountable individually to a manager",
                "Meetings share information and decisions made elsewhere",
                "Performance = sum of individual output",
              ],
            },
            {
              heading: "Real team",
              bullets: [
                "Complementary skills committed to a shared purpose and goals",
                "Agreed approach to how they work together",
                "Mutual accountability — peers hold each other to account",
                "Performance greater than the sum of individual contributions",
              ],
            },
          ],
          callout: "Distinction from Katzenbach and Smith's 'The Wisdom of Teams'.",
        },
      ),
      s(
        "concept",
        "Stages of team development",
        {
          table: {
            headers: ["Stage", "What you see", "What the Scrum Master does"],
            rows: [
              ["Forming", "Polite, unsure, dependent on direction", "Provide clarity: purpose, roles, working agreement"],
              ["Storming", "Conflict over approach, roles and influence", "Facilitate healthy conflict; keep safety high"],
              ["Norming", "Agreed norms, growing trust and cohesion", "Reinforce norms; start stepping back"],
              ["Performing", "Self-managing, high trust, results focus", "Coach lightly; remove obstacles; protect focus"],
              ["Adjourning", "Team disbands or membership changes", "Recognise the work; capture learning"],
            ],
            colWidths: [1.3, 3, 3.1],
          },
          callout: "From Bruce Tuckman's model (1965; adjourning added 1977). Teams can regress when membership changes.",
        },
      ),
      s(
        "concept",
        "Five dynamics of effective teams (Project Aristotle)",
        {
          table: {
            headers: ["Dynamic", "What it means"],
            rows: [
              ["Psychological safety", "Team members feel safe to take risks and be vulnerable in front of each other"],
              ["Dependability", "Members get things done on time and meet a high bar of excellence"],
              ["Structure & clarity", "Clear roles, plans and goals — people know what is expected"],
              ["Meaning", "Work is personally important to each member"],
              ["Impact", "Members believe their work matters and creates change"],
            ],
            colWidths: [1.6, 4.4],
          },
          callout: "Google's research found psychological safety the most important dynamic, but all five interact.",
        },
      ),
      s(
        "concept",
        "Observable markers of a high-performing team",
        {
          columns: [
            {
              heading: "How they work",
              bullets: [
                "Clear, shared purpose and Sprint Goals everyone can state",
                "Fast feedback loops and small, frequent releases",
                "Sustainable pace — they can keep going for years",
                "Continuous learning: experiments after every retro",
              ],
            },
            {
              heading: "How they relate",
              bullets: [
                "High trust and productive conflict",
                "Shared ownership: people help finish the most valuable item",
                "Skills spread across the team (T-shaped people)",
                "Results measured by team outcomes, not individual output",
              ],
            },
          ],
        },
      ),
      s(
        "concept",
        "Measure health, not just output",
        {
          bullets: [
            "Delivery numbers alone (velocity, ticket counts) tell you little about team health",
            "A regular health check asks the team to rate dimensions such as mission, fun, learning, support and speed",
            "Traffic-light self-assessments (green, amber, red) with a trend arrow are quick and honest",
            "The most useful part is the conversation about each amber or red — and one action each",
            "Repeat every quarter and compare against the team's own past, never against other teams",
          ],
          callout: "Inspired by Spotify's 'squad health check' — a lightweight, self-assessed model many teams adapt.",
        },
      ),
      s(
        "example",
        "Live example: from storming to performing in five months",
        {
          steps: [
            { label: "Month 1 — Forming", detail: "New team of seven; the Scrum Master gets a Team Canvas and working agreement agreed." },
            { label: "Month 2 — Storming", detail: "Disagreements over code style and review rules; two people stop speaking up." },
            { label: "Month 3 — Norming", detail: "Retro focuses on the conflict; team agrees review rules and a 'disagree openly' norm." },
            { label: "Month 4–5 — Performing", detail: "Team runs its own Daily Scrum and refinement; the Scrum Master steps back and coaches." },
          ],
          callout: "Illustrative scenario. The storming phase was normal — the difference was addressing it openly.",
        },
      ),
      s(
        "usage",
        "Using this in real life",
        {
          bullets: [
            "Match your coaching to the stage — direction for forming, facilitation for storming, coaching for performing",
            "Run a quarterly health check and use it as the retrospective's starting data",
            "Use the Aristotle five dynamics as a checklist when a team feels 'off' but cannot say why",
            "When membership changes, expect a step back and revisit the team canvas and agreement",
            "Explain to leaders that a 'storming' phase is normal and not a sign the team is failing",
          ],
        },
      ),
      s(
        "pitfalls",
        "What derails high performance",
        {
          bullets: [
            "A 'hero' culture where one or two individuals carry the team",
            "Using velocity as the measure of performance — it invites gaming",
            "Comparing teams with each other, which damages cooperation",
            "Overloading the team, so there is no slack for learning or improvement",
            "Constantly reshuffling people, so teams never get past storming",
          ],
        },
      ),
      s(
        "activity",
        "Try it: assess ourselves against the markers",
        {
          steps: [
            { label: "Introduce the markers (10 min)", detail: "Purpose, trust, clarity, dependability, meaning, impact, learning, sustainable pace." },
            { label: "Rate individually and anonymously (10 min)", detail: "Red, amber or green for each marker, plus a comment." },
            { label: "Discuss reds and ambers (20 min)", detail: "What is behind each? What evidence do we have?" },
            { label: "Choose one gap (10 min)", detail: "Pick the marker with the most leverage, not the easiest one." },
            { label: "Commit and set a review date (5 min)", detail: "One or two specific actions, an owner and a check in a future retro." },
          ],
        },
      ),
      takeaways(
        [
          "A real team is more than a working group: shared purpose, complementary skills, mutual accountability",
          "Teams move through stages; storming is normal and the Scrum Master's approach should adapt",
          "Psychological safety, dependability, clarity, meaning and impact are strong markers to watch",
          "Measure health regularly and improve one gap at a time",
        ],
      ),
      sourcesSlide([
        src("Book", "The Wisdom of Teams", "Jon R. Katzenbach & Douglas K. Smith", "The classic distinction between working groups and real teams."),
        src("Website", "Google re:Work — Understand team effectiveness", "Google", "Project Aristotle findings and a guide to team dynamics.", "https://rework.withgoogle.com"),
        src("Research", "Developmental sequence in small groups", "Bruce W. Tuckman, Psychological Bulletin (1965)", "The forming–storming–norming–performing model."),
        src("Book", "Drive", "Daniel H. Pink", "Autonomy, mastery and purpose — the motivation behind meaning and impact."),
        src("Book", "Accelerate", "Nicole Forsgren, Jez Humble & Gene Kim", "Evidence on the practices and culture of high-performing technology teams."),
      ]),
    ],
  },

  // ───────────────────────────────────────── Emotional Intelligence
  {
    workshopSlug: "emotional-intelligence-for-agile-teams",
    title: "Emotional Intelligence for Agile Teams",
    subtitle: "Working with emotions — ours and others' — to collaborate better",
    slides: [
      titleSlide("Emotional Intelligence for Agile Teams", "Working with emotions — ours and others' — to collaborate better"),
      objectives([
        "Describe the main components of emotional intelligence and why they matter in Agile work",
        "Name our own emotions more precisely and notice their effect on how we act",
        "Practise pausing before reacting when a conversation heats up",
        "Use active listening and the Situation–Behaviour–Impact model to give feedback",
        "Agree a simple team signal for pausing a tense moment",
      ]),
      icebreaker(
        {
          name: "Beyond 'fine' check-in",
          time: "6 min",
          steps: [
            "Show a feelings wheel or list of emotion words",
            "Each person names their current state with a more precise word than 'fine' or 'tired'",
            "No explanation required — just the word",
            "Notice how much richer the picture of the room becomes",
          ],
        },
        {
          name: "My internal weather report",
          time: "5 min",
          steps: [
            "Each person describes their current state as a weather forecast",
            "Example: 'Sunny with a chance of deadline storms this afternoon'",
            "Others simply listen and thank them",
            "Debrief: what changes when we know each other's forecast?",
          ],
        },
        "Naming an emotion out loud is itself a self-awareness skill — and it lowers the temperature for everyone.",
      ),
      s(
        "concept",
        "What emotional intelligence is",
        {
          bullets: [
            "The ability to recognise, understand and manage our own emotions — and recognise and influence those of others",
            "The term was introduced by Salovey and Mayer (1990) and popularised by Daniel Goleman (1995)",
            "It is a set of learnable skills, not a fixed trait — and not the opposite of thinking",
            "In Agile teams, it supports the constant feedback, negotiation and ambiguity of daily work",
            "It includes managing emotions productively — not suppressing them",
          ],
          callout: "EI does not mean being nice. It means noticing what is happening and choosing a helpful response.",
        },
      ),
      s(
        "concept",
        "The five components (Goleman)",
        {
          table: {
            headers: ["Component", "What it is", "What it looks like in a team"],
            rows: [
              ["Self-awareness", "Knowing your emotions and their effect on others", "'I'm frustrated; I need a minute before I respond'"],
              ["Self-regulation", "Managing impulses and disruptive emotions", "Pausing before replying to a critical comment"],
              ["Motivation", "Drive to achieve beyond money or status", "Persistence on a hard problem; learning from setbacks"],
              ["Empathy", "Understanding others' emotions and perspectives", "Noticing a quiet teammate is struggling"],
              ["Social skill", "Managing relationships and building rapport", "Giving feedback that lands; resolving conflict"],
            ],
            colWidths: [1.4, 3, 3],
          },
        },
      ),
      s(
        "concept",
        "When emotion takes over",
        {
          columns: [
            {
              heading: "What happens",
              bullets: [
                "Strong emotion can trigger a fast, defensive reaction before we have thought ('amygdala hijack', Goleman's term)",
                "We hear less, attack or withdraw, and say things we regret",
                "It is common in estimation debates, retros and review feedback",
              ],
            },
            {
              heading: "What helps",
              bullets: [
                "Notice the body signals: heat, tight chest, faster speech",
                "Name it: 'I'm getting frustrated'",
                "Pause and breathe before responding",
                "Ask a question instead of making a statement",
                "Come back to the topic when calmer",
              ],
            },
          ],
        },
      ),
      s(
        "concept",
        "Empathy and active listening",
        {
          bullets: [
            "Cognitive empathy: understanding how someone sees the situation; emotional empathy: sharing how they feel",
            "Listen to understand, not to reply — put your own answer aside until they finish",
            "Paraphrase: 'So what I hear is that the deadline feels unrealistic — is that right?'",
            "Ask open questions: 'What worries you most about this?'",
            "Text hides tone — in chat, assume good intent and move to a call when it gets tense",
          ],
        },
      ),
      s(
        "concept",
        "Feedback with Situation–Behaviour–Impact (SBI)",
        {
          table: {
            headers: ["Step", "What to say", "Example"],
            rows: [
              ["Situation", "When and where it happened", "'In yesterday's Sprint Review…'"],
              ["Behaviour", "What you observed, factually", "'…you answered the stakeholder's question before she finished.'"],
              ["Impact", "The effect on you or the team", "'She stopped asking; we lost feedback we needed.'"],
              ["Then ask", "Invite their view", "'How did it look from your side?'"],
            ],
            colWidths: [1.2, 2.6, 3.6],
          },
          callout: "SBI is a model from the Center for Creative Leadership. Describe what you saw, not your judgement of the person.",
        },
      ),
      s(
        "example",
        "Live example: a heated moment in Sprint Planning",
        {
          columns: [
            {
              heading: "Reactive response",
              bullets: [
                "Product Owner: 'We need all of this. Why is it always so slow?'",
                "Developer, stung: 'If you spent an hour reading the tickets, you'd know why.'",
                "Room goes silent; both leave planning frustrated",
                "The real issue — unclear scope — is never discussed",
              ],
            },
            {
              heading: "Regulated response",
              bullets: [
                "Developer notices irritation, pauses, and says: 'I'm getting frustrated — let me check I understand.'",
                "Scrum Master: 'Can we pause and list what is unclear?'",
                "Team finds two ambiguous stories and splits them",
                "PO gets a realistic plan; trust survives",
              ],
            },
          ],
          callout: "Illustrative scenario. The Scrum Master's job is to restore safety, then return to the content.",
        },
      ),
      s(
        "usage",
        "Where EI shows up in real Agile work",
        {
          bullets: [
            "Conflict in refinement, estimation and code review — the moments where feelings run high",
            "Delivering hard news to stakeholders without triggering defensiveness",
            "Leading change: recognising loss, fear and excitement in a team at the same time",
            "Remote work, where tone and body language are easy to miss",
            "Coaching individuals: noticing burnout, disengagement or stress early",
          ],
        },
      ),
      s(
        "pitfalls",
        "What to avoid",
        {
          bullets: [
            "Suppressing feelings and calling it professionalism",
            "Using EI skills to manipulate rather than to understand",
            "Turning the workshop into therapy — stay practical and work-focused",
            "Assuming you know how someone feels instead of asking",
            "Expecting a one-off session to change habits — practise in small, repeated moments",
          ],
        },
      ),
      s(
        "activity",
        "Try it: practise a pause-and-repair, and SBI feedback",
        {
          steps: [
            { label: "Choose a scenario (5 min)", detail: "Use a realistic tense moment from our work — anonymised." },
            { label: "Practise pause-and-repair in pairs (15 min)", detail: "One person plays the tense moment; the other practises naming the feeling and resetting." },
            { label: "Practise SBI feedback (15 min)", detail: "Give feedback on a small, real behaviour using Situation–Behaviour–Impact." },
            { label: "Agree a team signal (5 min)", detail: "A simple phrase such as 'let's pause and reset' that anyone can use without blame." },
          ],
        },
      ),
      takeaways(
        [
          "Emotional intelligence is a set of learnable skills: awareness, regulation, motivation, empathy and social skill",
          "Naming an emotion and pausing before reacting prevents many avoidable conflicts",
          "Active listening and SBI feedback make hard conversations safer and clearer",
          "A shared team signal to pause helps everyone reset without blame",
        ],
      ),
      sourcesSlide([
        src("Book", "Emotional Intelligence", "Daniel Goleman", "The book that popularised the concept and its five components."),
        src("Book", "Crucial Conversations", "Patterson, Grenny, McMillan & Switzler", "Staying safe and honest when stakes and emotions are high."),
        src("Book", "Nonviolent Communication", "Marshall B. Rosenberg", "A method for expressing feelings and needs without blame."),
        src("Book", "Feedback That Works", "Sloan R. Weitzel, Center for Creative Leadership", "The SBI feedback model in practice."),
        src("Book", "Radical Candor", "Kim Scott", "Caring personally while challenging directly.", undefined),
      ]),
    ],
  },
];
