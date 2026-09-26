import type { Deck } from "./types";
import { icebreaker, objectives, s, sourcesSlide, src, takeaways, titleSlide } from "./builders";

export const agileScrumFoundationsDecks: Deck[] = [
  // ───────────────────────────────────────── Introduction to Agile
  {
    workshopSlug: "introduction-to-agile",
    title: "Introduction to Agile",
    subtitle: "Why it exists, what it asks of us, and what changes on Monday",
    slides: [
      titleSlide("Introduction to Agile", "Why it exists, what it asks of us, and what changes on Monday"),
      objectives(
        [
          "Explain, in your own words, the problem Agile was created to solve",
          "Describe the four Agile values and what each looks like as team behaviour",
          "Tell an Agile mindset apart from a method such as Scrum, Kanban or XP",
          "Spot the common myths about Agile before they shape your team's habits",
          "Name two concrete things that will work differently for us starting next sprint",
        ],
        "Read the objectives out loud, then ask the room which one they're most sceptical about. Note their answer; return to it in the recap.",
      ),
      icebreaker(
        {
          name: "Project horror story",
          time: "5 min",
          steps: [
            "Each person shares one sentence: the worst late surprise they ever hit on a project",
            "Capture each story as a sticky note — no discussion yet",
            "Cluster the notes into themes (late feedback, changing needs, hidden risk)",
            "Keep the board visible: we'll map it to Agile values later",
          ],
        },
        {
          name: "Paper-plane iterations",
          time: "10 min",
          steps: [
            "Round 1: plan one perfect plane for 3 minutes, build it, fly it once",
            "Round 2: three 1-minute cycles — build, test-fly, adjust the design",
            "Measure the distance flown in each approach and compare",
            "Ask: what did the short cycles let you learn that the long plan could not?",
          ],
        },
        "Both options surface the same insight: the earlier you get real feedback, the cheaper being wrong becomes.",
        "Option A is better for sceptical or senior groups; Option B is better for energy. Debrief before moving on — the point is the feedback loop, not the planes.",
      ),
      s(
        "concept",
        "The problem Agile answers",
        {
          bullets: [
            "Needs change while we build: customers, markets and even our own understanding move",
            "Big-batch plans assume we know everything upfront — and problems surface only at the end",
            "The strictly sequential 'waterfall' picture is usually traced to a 1970 paper by Winston Royce, who himself warned that the pure form was risky",
            "Sequential plans still fit stable, well-understood work (think: a bridge with fixed specs)",
            "Software product work is different: we learn what to build by building and showing it",
          ],
          callout: "Agile is a response to uncertainty: shorten the distance between an assumption and real feedback.",
        },
        "Do not bash waterfall — it is a good fit for some problems. The argument is that product development is mostly learning work.",
      ),
      s(
        "concept",
        "Complicated vs. complex work",
        {
          columns: [
            {
              heading: "Complicated (analysis finds the answer)",
              bullets: [
                "Cause and effect can be worked out by experts in advance",
                "Approach: sense → analyse → respond",
                "Example: tuning a database index, planning a cabling job",
                "Detailed upfront planning works well here",
              ],
            },
            {
              heading: "Complex (you learn by trying)",
              bullets: [
                "Cause and effect only visible in hindsight; users surprise us",
                "Approach: probe → sense → respond (small safe experiments)",
                "Example: what will make customers actually adopt a new feature",
                "Short cycles and fast feedback beat long plans here",
              ],
            },
          ],
          callout: "Distinction from Snowden's Cynefin framework: most product work is complex, so we need to learn as we go.",
        },
      ),
      s(
        "concept",
        "The four values, as team behaviour",
        {
          table: {
            headers: ["Agile values this more…", "…than this", "What it looks like on a team"],
            rows: [
              ["Individuals and interactions", "Processes and tools", "Walk over and talk before opening a ticket or starting a long thread"],
              ["Working software", "Comprehensive documentation", "Demo the running product; document what genuinely helps the next person"],
              ["Customer collaboration", "Contract negotiation", "Show customers work early and adjust scope together as we learn"],
              ["Responding to change", "Following a plan", "Re-order the backlog every sprint instead of defending a fixed plan"],
            ],
            colWidths: [2, 2, 3.4],
          },
          callout: "There is value in the items on the right — the values simply say what to favour when the two conflict.",
        },
        "Emphasise that this is a preference, not a ban. Ask the team for one recent example of each value being violated.",
      ),
      s(
        "concept",
        "Twelve principles in four themes",
        {
          columns: [
            {
              heading: "Deliver value & welcome change",
              bullets: [
                "Satisfy the customer with early, continuous delivery",
                "Deliver working results frequently — weeks, not months",
                "Working product is the primary measure of progress",
                "Welcome changing requirements, even late",
                "Keep a sustainable pace we can hold indefinitely",
              ],
            },
            {
              heading: "People, craft & reflection",
              bullets: [
                "Business people and developers work together daily",
                "Trust motivated individuals and give them what they need",
                "Face-to-face conversation is the richest channel",
                "Attention to technical excellence; simplicity — maximise work not done",
                "Self-organising teams; reflect and adjust regularly",
              ],
            },
          ],
        },
        "You do not need to memorise all twelve. Pick the two the team finds hardest and return to them in the activity.",
      ),
      s(
        "concept",
        "Agile is a mindset; frameworks are how we practise it",
        {
          table: {
            headers: ["Approach", "Core idea", "What it gives a team"],
            rows: [
              ["Scrum", "Fixed-length sprints with defined roles and events", "A cadence for inspecting and adapting product and process"],
              ["Kanban", "Visualise work, limit work in progress, manage flow", "Focus on finishing and steady, predictable delivery"],
              ["Extreme Programming (XP)", "Engineering practices: TDD, pair programming, CI", "Code that stays easy to change and safe to release"],
              ["Lean thinking", "Eliminate waste, optimise the whole flow of value", "A lens for finding delays and non-value-adding work"],
            ],
            colWidths: [1.6, 2.6, 3.2],
          },
          callout: "Frameworks change; the values underneath — transparency, feedback, adaptation — stay the same.",
        },
      ),
      s(
        "concept",
        "Four myths — and the reality",
        {
          table: {
            headers: ["Myth", "Reality"],
            rows: [
              ["Agile means no documentation", "Documentation is valued when it helps; it just is not a substitute for a working product"],
              ["Agile means no planning", "We plan constantly, in smaller pieces, and revise as we learn"],
              ["Agile means no commitments", "Teams commit to a Sprint Goal and are accountable for it — they just re-plan honestly"],
              ["Agile means going faster", "Speed is a by-product of short feedback loops catching problems early"],
            ],
            colWidths: [1.5, 3.5],
          },
        },
        "Ask which myth the room has heard from a colleague or manager. Myths held by stakeholders quietly undermine adoption.",
      ),
      s(
        "example",
        "Live example: one feature, two approaches",
        {
          columns: [
            {
              heading: "Plan-everything approach",
              bullets: [
                "Feature: 'Save for later' on an online shop",
                "3 months of specification, build and test, then a big launch",
                "Launch shows shoppers use it to compare prices, not to buy later",
                "Rework needed — but the budget and the team are already spent",
              ],
            },
            {
              heading: "Learn-as-we-go approach",
              bullets: [
                "Week 1: ship a plain 'Save' button to 10% of users",
                "Week 2: usage data shows people revisit saved items to compare prices",
                "Week 3: add a comparison view — the feature people actually wanted",
                "Same team and skills; the difference is when we learned we were wrong",
              ],
            },
          ],
          callout: "Illustrative scenario. Agile does not prevent being wrong — it makes being wrong cheap and early.",
        },
      ),
      s(
        "usage",
        "Where you already see this in real life",
        {
          bullets: [
            "Marketing teams test a campaign on a small audience before spending the full budget",
            "Hardware and product teams build cheap prototypes to learn before tooling up",
            "Operations teams run short weekly improvement cycles instead of yearly reorganisations",
            "Public-sector and HR teams pilot a new service with one group, then expand",
            "For us: the first release will be small and imperfect on purpose, so we can learn from real use",
          ],
          callout: "Agile is a way of working with uncertainty — software is just where it was first written down.",
        },
      ),
      s(
        "pitfalls",
        "How teams misread Agile in week one",
        {
          bullets: [
            "Treating ceremonies as the point — running meetings without changing any behaviour",
            "Skipping all documentation and then losing knowledge when people leave",
            "Adopting a tool (a board, a new ticketing system) before adopting the habit",
            "Using 'we're Agile' to avoid making commitments or estimating honestly",
            "Expecting speed immediately — the first sprints will feel slower while we learn",
          ],
        },
      ),
      s(
        "activity",
        "Try it: from our pain to Agile values",
        {
          steps: [
            { label: "Revisit the horror stories (5 min)", detail: "Read the stickies from the ice breaker or write 3 recent examples from our own work." },
            { label: "Map each to a value or principle (10 min)", detail: "Which value would have prevented or softened it? Which principle would we have needed to follow?" },
            { label: "Choose two behaviours to try (5 min)", detail: "Pick two specific, small changes for our first sprint — e.g. show work at mid-sprint, talk before ticketing." },
            { label: "Write them down (2 min)", detail: "Add them to the team board; we will inspect them at the first retrospective." },
          ],
          callout: "Aim for behaviours we can observe, not attitudes we hope for.",
        },
      ),
      takeaways(
        [
          "Agile exists because product work is complex — we learn by getting feedback early",
          "The four values state a preference; they do not ban documentation, plans or contracts",
          "Scrum, Kanban and XP are ways of practising the mindset, not the mindset itself",
          "The fastest way to learn Agile is to run a small, real experiment and inspect it",
        ],
        "Next: 'Scrum in a Nutshell' — the framework we will use to practise this.",
      ),
      sourcesSlide([
        src("Website", "Manifesto for Agile Software Development and its Principles", "The Manifesto authors", "The primary source — read the four values and twelve principles in five minutes.", "https://agilemanifesto.org"),
        src("Guide", "The Scrum Guide", "Ken Schwaber & Jeff Sutherland", "The official, free definition of Scrum — short enough to read in one sitting.", "https://scrumguides.org"),
        src("Article", "A Leader's Framework for Decision Making", "David Snowden & Mary Boone, Harvard Business Review (2007)", "Introduces Cynefin — why complex problems call for probing and learning."),
        src("Website", "Agile Alliance — Agile glossary and introductions", "Agile Alliance", "A nonprofit's free, well-organised reference on Agile ideas and terms.", "https://www.agilealliance.org"),
        src("Book", "Agile Software Development: The Cooperative Game", "Alistair Cockburn", "Frames software as a cooperative, communication-driven activity — the thinking behind the people-first values."),
      ]),
    ],
  },

  // ───────────────────────────────────────── Scrum in a Nutshell
  {
    workshopSlug: "scrum-in-a-nutshell",
    title: "Scrum in a Nutshell",
    subtitle: "One shared mental model of roles, events and artifacts",
    slides: [
      titleSlide("Scrum in a Nutshell", "One shared mental model of roles, events and artifacts"),
      objectives(
        [
          "Explain what Scrum is, and why it is built on empiricism",
          "Name the three accountabilities and what each one owns",
          "Describe the five events, their timeboxes and their purpose in one sentence each",
          "Connect each artifact to its commitment (Product Goal, Sprint Goal, Definition of Done)",
          "Walk through one Sprint from planning to retrospective using our own project",
        ],
      ),
      icebreaker(
        {
          name: "Scrum myth or fact?",
          time: "5 min",
          steps: [
            "Read out 5 statements, e.g. 'The Scrum Master assigns tasks' or 'Sprints can be any length'",
            "People stand on the 'myth' or 'fact' side of the room (or vote in chat)",
            "Do not reveal answers — note the split for later",
            "Come back to each statement as the concept slides answer it",
          ],
        },
        {
          name: "Scrum in six words",
          time: "5 min",
          steps: [
            "Each person writes a six-word description of what they think Scrum is",
            "Share round-robin; the facilitator writes the words on a board",
            "Look for recurring words — 'meetings', 'sprints', 'stand-up'",
            "Ask what is missing from the board: goals? feedback? learning?",
          ],
        },
        "Revisit the board at the end — the six-word descriptions should shift from mechanics (meetings) to outcomes (learning, feedback, goals).",
      ),
      s(
        "concept",
        "What Scrum is — and is not",
        {
          bullets: [
            "A lightweight framework that helps people generate value through adaptive solutions for complex problems",
            "Deliberately incomplete: it defines a small structure and leaves practices to the team",
            "Built on empiricism: knowledge comes from experience, decisions from what is observed",
            "Uses short, fixed-length iterations (Sprints) so we inspect real output often",
            "It is not a project-management method, a set of meetings, or a guarantee of speed",
          ],
          callout: "Scrum's power comes from frequent inspection of real results — not from the meetings themselves.",
        },
      ),
      s(
        "concept",
        "Empiricism and the five values",
        {
          columns: [
            {
              heading: "Three pillars of empiricism",
              bullets: [
                "Transparency — the work and its state are visible to everyone who needs them",
                "Inspection — we check progress toward goals often enough to catch problems",
                "Adaptation — when something drifts, we adjust as soon as possible",
              ],
            },
            {
              heading: "Five values that make it work",
              bullets: [
                "Commitment — to the goals of the team",
                "Focus — on the work of the Sprint",
                "Openness — about the work and challenges",
                "Respect — for each other as capable, independent people",
                "Courage — to do the right thing and tackle tough problems",
              ],
            },
          ],
        },
        "When Scrum feels broken, check the values first. A Daily Scrum without openness is theatre.",
      ),
      s(
        "concept",
        "The Scrum Team: three accountabilities",
        {
          table: {
            headers: ["Accountability", "Accountable for", "It is NOT"],
            rows: [
              ["Product Owner", "Maximising the value of the product; ordering and clarity of the Product Backlog", "A requirements scribe or a proxy with no authority"],
              ["Scrum Master", "Team effectiveness and Scrum being understood and enacted; coaching, facilitating, removing impediments", "A project manager, task-assigner or status collector"],
              ["Developers", "Creating a usable Increment each Sprint: planning it, quality, adapting daily", "A group waiting to be told what to do"],
            ],
            colWidths: [1.4, 3.2, 2.4],
          },
          callout: "One team, one product focus, typically ten or fewer people — no sub-teams or hierarchies inside it.",
        },
      ),
      s(
        "concept",
        "The five events and their timeboxes",
        {
          table: {
            headers: ["Event", "Purpose in one sentence", "Timebox (1-month Sprint)"],
            rows: [
              ["The Sprint", "The container: a fixed-length period in which all the work happens", "One month or less"],
              ["Sprint Planning", "Agree why this Sprint matters, what we can do, and how", "Max 8 hours"],
              ["Daily Scrum", "Inspect progress toward the Sprint Goal and adapt the plan", "15 minutes"],
              ["Sprint Review", "Inspect the outcome with stakeholders and adapt the backlog", "Max 4 hours"],
              ["Sprint Retrospective", "Inspect how we worked and plan improvements", "Max 3 hours"],
            ],
            colWidths: [1.5, 4.2, 1.7],
          },
          callout: "Shorter Sprints get shorter events — a 2-week Sprint's Planning is usually about 4 hours at most.",
        },
      ),
      s(
        "concept",
        "The three artifacts and their commitments",
        {
          table: {
            headers: ["Artifact", "What it is", "Its commitment"],
            rows: [
              ["Product Backlog", "Ordered, evolving list of what the product needs", "Product Goal — the long-term objective"],
              ["Sprint Backlog", "Sprint Goal + selected items + a plan to deliver them", "Sprint Goal — the single objective for the Sprint"],
              ["Increment", "A usable step toward the Product Goal", "Definition of Done — the shared standard for 'complete'"],
            ],
            colWidths: [1.4, 3.4, 3],
          },
        },
        "Each commitment gives its artifact a target to measure progress against — that is what makes the artifact transparent.",
      ),
      s(
        "example",
        "Live example: one two-week Sprint",
        {
          steps: [
            { label: "Product Goal (set once)", detail: "'Help busy families plan a week of dinners in 10 minutes' — a meal-planning app." },
            { label: "Day 1 · Sprint Planning", detail: "Sprint Goal: 'A user can generate a 3-day plan from saved preferences.' Team pulls 5 backlog items and plans the first tasks." },
            { label: "Days 1–9 · Build + Daily Scrum", detail: "15 minutes each day: are we on track for the Sprint Goal? A blocked API is raised and fixed on day 3. Refinement continues for next Sprint." },
            { label: "Day 10 · Sprint Review", detail: "Stakeholders try the working plan generator; feedback: 'we need allergy filters.' The Product Owner re-orders the backlog." },
            { label: "Day 10 · Retrospective", detail: "Finding: pull requests waited two days for review. Action: first review within one working day, checked at the next retro." },
          ],
          callout: "Illustrative scenario — notice every event produces a decision that changes what happens next.",
        },
      ),
      s(
        "usage",
        "Using Scrum beyond code — and on our team",
        {
          bullets: [
            "Marketing, HR, legal and education teams run Scrum for campaigns, policy changes and projects",
            "Fit test: is the work complex, changing and dependent on feedback? Then Scrum is worth trying",
            "Our Sprint length: ______ ; our Daily Scrum time: ______ ; our Definition of Done lives at: ______",
            "Our Product Owner: ______ ; our Scrum Master: ______ ; Developers: everyone else who builds the product",
            "Fill in the blanks together before we leave — anything left blank is a risk to fix this week",
          ],
        },
      ),
      s(
        "pitfalls",
        "Common ways Scrum goes wrong early",
        {
          bullets: [
            "Treating Scrum as a meeting schedule rather than a feedback loop",
            "No real Sprint Goal — just a list of tickets with a sentence on top",
            "Scrum Master acting as project manager, assigning work and chasing status",
            "No shared Definition of Done, so 'done' means something different to every person",
            "Product Owner unavailable, so the team guesses and Sprint Reviews find surprises",
          ],
        },
      ),
      s(
        "activity",
        "Try it: draw our Sprint on one wall",
        {
          steps: [
            { label: "Draw the Sprint (10 min)", detail: "A big circle for the Sprint with the four events placed around it, with the timeboxes we chose." },
            { label: "Place people and artifacts (10 min)", detail: "Who owns the Product Backlog? Where is the Sprint Backlog visible? Where does the Increment show up?" },
            { label: "Mark the questions (5 min)", detail: "Put a red dot on anything nobody can explain or agree on." },
            { label: "Assign follow-ups (5 min)", detail: "Each red dot gets an owner and a date." },
          ],
        },
      ),
      takeaways(
        [
          "Scrum is a small framework for complex work, built on transparency, inspection and adaptation",
          "Three accountabilities, five events and three artifacts — each artifact has a commitment",
          "The Sprint Goal and Definition of Done are what keep the mechanics honest",
          "Nothing here is magic: value comes from what we decide at each inspection",
        ],
        "Read the Scrum Guide together next week — it is short, free and the authoritative source.",
      ),
      sourcesSlide([
        src("Guide", "The Scrum Guide (2020)", "Ken Schwaber & Jeff Sutherland", "The authoritative definition of roles, events, artifacts and values.", "https://scrumguides.org"),
        src("Website", "Scrum.org — resources and open assessments", "Scrum.org", "Free learning paths, forums and a Scrum Open assessment to check understanding.", "https://www.scrum.org"),
        src("Book", "Scrum: The Art of Doing Twice the Work in Half the Time", "Jeff Sutherland", "A co-creator's account of why the mechanics exist and where the ideas came from."),
        src("Book", "The Zombie Scrum Survival Guide", "Christiaan Verwijs & Johannes Schartau", "What Scrum looks like when the mechanics run but the values are missing — and how to fix it."),
        src("Website", "Agile Alliance — Scrum glossary", "Agile Alliance", "Plain-language definitions of Scrum terms.", "https://www.agilealliance.org"),
      ]),
    ],
  },

  // ───────────────────────────────────────── Importance of Scrum Events
  {
    workshopSlug: "importance-of-scrum-events",
    title: "Importance of All the Events of Scrum",
    subtitle: "Reconnecting each event to the problem it exists to solve",
    slides: [
      titleSlide("Importance of All the Events of Scrum", "Reconnecting each event to the problem it exists to solve"),
      objectives(
        [
          "State the specific problem each Scrum event exists to solve",
          "Explain what each event inspects: the product, the plan, or the way of working",
          "Predict what breaks when a team skips or hollows out an event",
          "Diagnose which of our own events has drifted from its purpose",
          "Agree one concrete improvement for our weakest event",
        ],
      ),
      icebreaker(
        {
          name: "Best and worst meeting",
          time: "5 min",
          steps: [
            "In pairs: describe the best meeting you ever attended — what made it useful?",
            "Then describe the worst — what made it a waste?",
            "Each pair shares one trait of each on the board",
            "Keep the lists: we will judge our events against them",
          ],
        },
        {
          name: "Meeting bingo",
          time: "8 min",
          steps: [
            "Hand out cards with squares like 'no agenda', 'ran over time', 'no decision made'",
            "Each person marks squares based on our last week of events",
            "First to complete a row shouts 'Bingo' — and explains their squares",
            "Count the marks per event to see where we hurt",
          ],
        },
        "The point is to name what a valuable event feels like before judging ours. Events exist to create regularity and reduce the need for other meetings.",
      ),
      s(
        "concept",
        "Why events exist at all",
        {
          bullets: [
            "Scrum events create regularity — a predictable rhythm for inspecting and adapting",
            "Each event is a formal chance to inspect one thing and adapt something as a result",
            "They minimise the need for other, undefined meetings that steal focus",
            "All events are timeboxed so they cannot expand to fill the time available",
            "The Sprint is the container: events only work if the Sprint is respected as a whole",
          ],
          callout: "An event without an inspection and a resulting decision is just a meeting.",
        },
      ),
      s(
        "concept",
        "Each event: problem solved and decision produced",
        {
          table: {
            headers: ["Event", "Problem it solves", "Decision it produces"],
            rows: [
              ["Sprint Planning", "Team starts without a shared purpose or plan", "Sprint Goal, selected items and a first plan"],
              ["Daily Scrum", "Drift from the goal is discovered too late", "Adjusted plan for the next 24 hours"],
              ["Sprint Review", "We keep building without real feedback", "Backlog changes based on stakeholder input"],
              ["Retrospective", "The same problems repeat every Sprint", "One or two improvements to try next Sprint"],
            ],
            colWidths: [1.4, 3, 3],
          },
        },
        "Ask the team to name a real recent example for each row. If they cannot, that event is a candidate for repair.",
      ),
      s(
        "concept",
        "What each event inspects — three feedback loops",
        {
          columns: [
            {
              heading: "Inspect the plan (short loop)",
              bullets: [
                "Daily Scrum: are we still on track for the Sprint Goal?",
                "Adapt: re-plan the next day's work",
                "Frequency: every day, 15 minutes",
              ],
            },
            {
              heading: "Inspect the product (medium loop)",
              bullets: [
                "Sprint Review: does the Increment solve the right problem?",
                "Adapt: re-order and reshape the Product Backlog",
                "Frequency: every Sprint, with stakeholders",
              ],
            },
            {
              heading: "Inspect the process (improvement loop)",
              bullets: [
                "Retrospective: how did we work together?",
                "Adapt: try one process improvement",
                "Frequency: every Sprint, team only",
              ],
            },
          ],
          callout: "Planning sets the direction that all three loops then inspect.",
        },
      ),
      s(
        "concept",
        "What a healthy version looks like",
        {
          table: {
            headers: ["Event", "Healthy signs", "Warning signs"],
            rows: [
              ["Sprint Planning", "A goal people can repeat; capacity honestly discussed", "A list of tickets; the Product Owner picks alone"],
              ["Daily Scrum", "Developers talk to each other about the goal", "Updates addressed to the Scrum Master; runs over"],
              ["Sprint Review", "Stakeholders touch the product and change the backlog", "One-way demo; nobody senior attends"],
              ["Retrospective", "Actions from last time are reviewed first", "Same complaints each time; no follow-up"],
            ],
            colWidths: [1.5, 3, 3],
          },
        },
      ),
      s(
        "example",
        "Live example: repairing a Daily Scrum",
        {
          columns: [
            {
              heading: "Before",
              bullets: [
                "Everyone reports 'yesterday / today / blockers' to the manager",
                "Ten minutes of status, five of silence; problems found only at the Review",
                "Team rates the event 2 out of 5 for usefulness",
              ],
            },
            {
              heading: "After (4 sprints later)",
              bullets: [
                "Board is walked right-to-left: which item is closest to done?",
                "Developers ask each other for help; blockers get an owner immediately",
                "Two Sprint Goal risks flagged and resolved mid-Sprint; rating rises to 4",
              ],
            },
          ],
          callout: "Illustrative scenario. The fix was not a new format — it was reconnecting the event to the Sprint Goal.",
        },
      ),
      s(
        "usage",
        "What happens when an event is skipped",
        {
          table: {
            headers: ["Skipped event", "What we lose", "How it shows up later"],
            rows: [
              ["Sprint Planning", "Shared goal and plan", "Team works on unrelated items; nothing coherent to demo"],
              ["Daily Scrum", "Early drift detection", "Blockers found on day 9; Sprint Goal missed"],
              ["Sprint Review", "Real feedback", "We ship what was asked, not what was needed"],
              ["Retrospective", "Learning about how we work", "Same delays and friction, sprint after sprint"],
            ],
            colWidths: [1.4, 2.4, 3.6],
          },
        },
        "Use this slide with sceptical managers who ask 'can we cut a meeting?'",
      ),
      s(
        "pitfalls",
        "Zombie events: going through the motions",
        {
          bullets: [
            "Running events because the calendar says so, not because anyone expects a decision",
            "Treating timeboxes as targets — using the whole time regardless of need",
            "Letting the Scrum Master or a manager run every event; the team owns them",
            "Skipping the Retrospective under pressure — exactly when the team most needs it",
            "Combining events or dropping stakeholders from Reviews to save time",
          ],
        },
      ),
      s(
        "activity",
        "Try it: rate our own events",
        {
          steps: [
            { label: "Rate anonymously (5 min)", detail: "1–5 on usefulness for each event, on sticky notes or a poll; nobody puts their name on it." },
            { label: "Compare with the purpose (10 min)", detail: "Put the ratings next to the 'problem solved' table; where are the biggest gaps?" },
            { label: "Diagnose the lowest (10 min)", detail: "Is the purpose not being met, or has the event become habit? The fix differs for each." },
            { label: "Commit to one change (5 min)", detail: "One concrete change, an owner, and a retro date to check it worked." },
          ],
        },
      ),
      takeaways(
        [
          "Every event has a specific problem to solve and a decision to produce",
          "Together the events form three feedback loops: plan, product and process",
          "Skipping an event removes the feedback — the problem simply appears later and costs more",
          "Diagnose our own events with data before changing formats",
        ],
        "If you remember one thing: an event without a decision is just a meeting.",
      ),
      sourcesSlide([
        src("Guide", "The Scrum Guide — Scrum Events", "Ken Schwaber & Jeff Sutherland", "The official purpose and timebox of each event.", "https://scrumguides.org"),
        src("Book", "The Zombie Scrum Survival Guide", "Christiaan Verwijs & Johannes Schartau", "Symptoms and remedies when the events run but nobody expects change."),
        src("Book", "Agile Retrospectives: Making Good Teams Great", "Esther Derby & Diana Larsen", "A structure for retrospectives that produce decisions."),
        src("Website", "Retromat", "Corinna Baldauf", "A free catalogue of activities to vary retrospectives and other events.", "https://retromat.org"),
        src("Website", "Liberating Structures", "Henri Lipmanowicz & Keith McCandless", "Free facilitation methods to include every voice in events.", "https://liberatingstructures.com"),
      ]),
    ],
  },

  // ───────────────────────────────────────── Agile Mindset
  {
    workshopSlug: "agile-mindset-doing-vs-being",
    title: "Agile Mindset — From Doing Agile to Being Agile",
    subtitle: "Moving beyond ceremonies to the values underneath",
    slides: [
      titleSlide("Agile Mindset — From Doing Agile to Being Agile", "Moving beyond ceremonies to the values underneath"),
      objectives(
        [
          "Distinguish practising Agile ceremonies from operating with an Agile mindset",
          "Recognise 'cargo cult' Agile and the behaviours that signal it",
          "Connect growth-mindset thinking to inspection and adaptation",
          "Spot where our own team is 'doing' rather than 'being'",
          "Make one personal, observable behaviour commitment",
        ],
        "This session needs psychological safety. If the team is guarded, run the Psychological Safety workshop first.",
      ),
      icebreaker(
        {
          name: "Changed my mind",
          time: "5 min",
          steps: [
            "In pairs: tell about a time you changed your mind at work because of new evidence",
            "What made it possible — or hard — to say 'I was wrong'?",
            "Each pair shares one condition that made changing your mind easier",
            "Facilitator goes first to model it",
          ],
        },
        {
          name: "Fixed-to-growth phrase flip",
          time: "8 min",
          steps: [
            "Show statements: 'That will never work here', 'I'm just not a numbers person'",
            "Small groups rewrite each in a growth form: 'What would it take to make this work?'",
            "Share the best rewrite from each group",
            "Ask which fixed phrase we hear most on our team",
          ],
        },
        "Notice how much of Agile behaviour is about how we react to being wrong, feedback and change.",
      ),
      s(
        "concept",
        "Doing Agile vs. being Agile",
        {
          table: {
            headers: ["Doing Agile", "Being Agile"],
            rows: [
              ["Holding a retrospective every Sprint", "Changing how we work because of what the retro revealed"],
              ["Having a Sprint Goal on the board", "Making real trade-offs to protect the goal under pressure"],
              ["Demoing to stakeholders", "Changing direction when stakeholder feedback says we should"],
              ["Tracking velocity", "Using data to ask better questions, not to judge people"],
              ["Following the Scrum Guide's events", "Living transparency, inspection and adaptation in every decision"],
            ],
            colWidths: [2.2, 3.2],
          },
          callout: "Doing is visible behaviour. Being is why we choose that behaviour — especially when it is inconvenient.",
        },
      ),
      s(
        "concept",
        "Cargo-cult Agile: copying the rituals, missing the reasons",
        {
          bullets: [
            "The term borrows from 'cargo cults': imitating the outward form of something while missing what makes it work",
            "Signs: stand-ups nobody learns from, sprints that never change, boards updated only for managers",
            "Teams often get here by adopting a framework quickly under a mandate",
            "Root cause is usually values missing (courage, openness), not a mechanics error",
            "Fix by asking of every practice: what decision does this help us make?",
          ],
        },
      ),
      s(
        "concept",
        "Growth mindset and inspect-and-adapt",
        {
          columns: [
            {
              heading: "Fixed mindset thinking",
              bullets: [
                "Mistakes prove someone is not good enough",
                "Feedback is criticism to defend against",
                "Change is a threat to my expertise",
                "Retro is where we find who to blame",
              ],
            },
            {
              heading: "Growth mindset thinking",
              bullets: [
                "Mistakes are information about the system",
                "Feedback is data that makes the next attempt better",
                "Change is a chance to learn something new",
                "Retro is where we learn how to improve the system",
              ],
            },
          ],
          callout: "Carol Dweck's research on mindset explains why teams that fear being wrong cannot truly inspect and adapt.",
        },
      ),
      s(
        "concept",
        "Values become behaviours",
        {
          table: {
            headers: ["Value", "What it looks like when we are being Agile"],
            rows: [
              ["Courage", "We raise the risk on day 2, not day 9; we say no to scope that breaks the Sprint Goal"],
              ["Openness", "We show unfinished work and admit what we do not know"],
              ["Respect", "We assume good intent and trust the team's expertise"],
              ["Focus", "We finish before starting; we protect the Sprint Goal from interruption"],
              ["Commitment", "We follow through on retro actions instead of quietly dropping them"],
            ],
            colWidths: [1.2, 5],
          },
        },
      ),
      s(
        "example",
        "Live example: same retro, two outcomes",
        {
          columns: [
            {
              heading: "Doing a retro",
              bullets: [
                "Format runs perfectly; six action items are written down",
                "Nobody reviews them next Sprint",
                "'Unclear requirements' appears a third time in a row",
                "Team quietly concludes retros do not change anything",
              ],
            },
            {
              heading: "Being Agile in the retro",
              bullets: [
                "Opens by checking last retro's one action — was it done?",
                "Asks what stops requirements being clear before Sprint Planning",
                "Picks one experiment: a 30-minute clarity check two days before planning",
                "Next retro reviews whether it worked — and adapts",
              ],
            },
          ],
          callout: "Illustrative scenario. The mechanics were identical; the difference was follow-through and honesty.",
        },
      ),
      s(
        "usage",
        "Where mindset shows up in daily work",
        {
          bullets: [
            "How leaders respond to bad news decides whether the team reports it early",
            "Whether a team tries a two-week experiment or debates it for two months",
            "How a Product Owner reacts when a demo contradicts their assumption",
            "Whether estimates are treated as learning tools or promises to be defended",
            "How we treat production incidents: find who caused it, or how the system allowed it",
          ],
        },
      ),
      s(
        "pitfalls",
        "Traps when working on mindset",
        {
          bullets: [
            "Turning 'mindset' into a slogan or poster with no behaviour change behind it",
            "Blaming individuals for 'not having the right mindset' — mindset is shaped by the system",
            "Becoming the 'Agile police' who correct others' vocabulary instead of coaching",
            "Expecting a mindset shift from one workshop; it changes through repeated small experiences",
          ],
        },
      ),
      s(
        "activity",
        "Try it: doing-vs-being self-assessment",
        {
          steps: [
            { label: "Choose 4 practices (3 min)", detail: "For example: retros, Daily Scrum, Definition of Done, stakeholder feedback." },
            { label: "Vote privately (7 min)", detail: "For each, mark 'doing' or 'being' on a card. No names." },
            { label: "Reveal the spread (10 min)", detail: "Where did we disagree most? Where did most mark 'doing'? Discuss why." },
            { label: "Trace to a value (10 min)", detail: "For the weakest area, which value is thin — courage, openness, respect?" },
            { label: "One personal commitment each (5 min)", detail: "An individual behaviour, not a team action item — write it and share it." },
          ],
        },
      ),
      takeaways(
        [
          "Being Agile is about how we respond to feedback, change and being wrong",
          "Cargo-cult Agile copies rituals; the cure is asking what decision each practice supports",
          "A growth mindset is what makes inspect-and-adapt genuinely possible",
          "Mindset changes through small, repeated experiences — start with one behaviour",
        ],
        "Model it yourself: name one place where you are still 'doing' rather than 'being'.",
      ),
      sourcesSlide([
        src("Book", "Mindset: The New Psychology of Success", "Carol S. Dweck", "The research and language of fixed vs. growth mindset."),
        src("Website", "Manifesto for Agile Software Development", "The Manifesto authors", "The values behind the practices.", "https://agilemanifesto.org"),
        src("Book", "The Zombie Scrum Survival Guide", "Christiaan Verwijs & Johannes Schartau", "A field guide to teams that 'do' Scrum without benefit."),
        src("Book", "The Fifth Discipline", "Peter M. Senge", "Learning organisations and the habit of questioning our mental models."),
        src("Guide", "The Scrum Guide — Scrum Values", "Ken Schwaber & Jeff Sutherland", "How commitment, focus, openness, respect and courage underpin Scrum.", "https://scrumguides.org"),
      ]),
    ],
  },

  // ───────────────────────────────────────── Shu Ha Ri
  {
    workshopSlug: "shu-ha-ri",
    title: "Shu Ha Ri",
    subtitle: "When to follow the rules, when to bend them, and when to move beyond them",
    slides: [
      titleSlide("Shu Ha Ri", "When to follow the rules, when to bend them, and when to move beyond them"),
      objectives(
        [
          "Describe the three stages of Shu-Ha-Ri and what learning looks like in each",
          "Place our team — and each of our practices — honestly on the spectrum",
          "Use the model to settle 'follow the rules or adapt them' debates",
          "Choose the right coaching style for each stage",
        ],
      ),
      icebreaker(
        {
          name: "How I learned a skill",
          time: "5 min",
          steps: [
            "Think of a skill you learned well: cooking, driving, an instrument",
            "In pairs: did you begin by following instructions exactly? When did you start improvising?",
            "Each pair shares one moment where they moved beyond the recipe",
            "Notice how nearly everyone started by following rules",
          ],
        },
        {
          name: "Three-round paper fold",
          time: "10 min",
          steps: [
            "Shu (3 min): fold a paper boat or plane following exact written instructions",
            "Ha (3 min): change one thing on purpose and predict the effect",
            "Ri (3 min): design your own version from scratch",
            "Debrief: what did each round need from you — and from an instructor?",
          ],
        },
        "The pattern to notice: rules first provide safety, then understanding earns the right to adapt.",
      ),
      s(
        "concept",
        "What Shu-Ha-Ri means",
        {
          bullets: [
            "A model of learning from Japanese martial arts and traditional arts, brought to Agile by Alistair Cockburn",
            "Shu (守) — protect or obey: follow the rules and forms exactly, to build a foundation",
            "Ha (破) — detach or break: understand the reasons well enough to adapt deliberately",
            "Ri (離) — leave or transcend: act fluently from principle, creating your own way",
            "The stages describe mastery of a practice, not a person's worth or seniority",
          ],
          callout: "It is not a ladder to climb quickly — each stage needs time and repeated practice.",
        },
      ),
      s(
        "concept",
        "Shu-Ha-Ri applied to Scrum",
        {
          table: {
            headers: ["Stage", "How the team behaves", "Example with Scrum"],
            rows: [
              ["Shu", "Follows the Scrum Guide faithfully; asks 'how do we do this?'", "Runs all five events as described for at least several Sprints"],
              ["Ha", "Understands why each part exists; adapts with evidence", "Changes retro formats, event timing or estimation approach deliberately"],
              ["Ri", "Acts from principle; creates or drops practices fluently", "Runs a Scrumban flow while still honouring inspection and adaptation"],
            ],
            colWidths: [0.8, 3, 3.4],
          },
        },
      ),
      s(
        "concept",
        "Coaching style changes by stage",
        {
          table: {
            headers: ["Stage", "Learner needs", "Scrum Master leans toward"],
            rows: [
              ["Shu", "Clear rules, examples and quick feedback", "Teaching and showing — be direct about the how"],
              ["Ha", "Reasons, options and safe experiments", "Mentoring and facilitating — explain trade-offs and options"],
              ["Ri", "Challenge, autonomy and a sounding board", "Coaching — ask questions and step back"],
            ],
            colWidths: [0.8, 3, 3.4],
          },
          callout: "Coaching a Shu-stage team with only questions is frustrating; teaching a Ri-stage team is disempowering.",
        },
      ),
      s(
        "concept",
        "Stages are per practice — and they can slip",
        {
          bullets: [
            "A team can be Ha in retrospectives but Shu in estimation — assess each practice separately",
            "Individuals differ: a newcomer may be Shu in a team that is Ha",
            "Under stress or change (new members, reorgs), teams often fall back a stage — that is normal",
            "Being Ri in one area does not mean skipping Shu in a new one",
            "The check before deviating: 'Do we understand this well enough to change it safely?'",
          ],
        },
      ),
      s(
        "example",
        "Live example: 'Can we drop the Daily Scrum?'",
        {
          columns: [
            {
              heading: "A Shu-stage team (week 3)",
              bullets: [
                "Asks to skip the Daily Scrum because it 'takes too long'",
                "Cannot yet explain what it is for or what a good one looks like",
                "Response: run it as described for four more Sprints and measure what it catches",
                "Revisit with data at the retrospective",
              ],
            },
            {
              heading: "A Ha-stage team (month 8)",
              bullets: [
                "Shows that two days a week async updates catch the same blockers",
                "Explains the purpose and how it will still inspect Sprint Goal progress",
                "Response: try the change for two Sprints as an experiment",
                "Agree a measure and a review date",
              ],
            },
          ],
          callout: "Illustrative scenario. The same request gets different answers depending on the stage — and the evidence.",
        },
      ),
      s(
        "usage",
        "Using Shu-Ha-Ri in real life",
        {
          bullets: [
            "Onboarding: give new members a clear starting way of working before inviting changes",
            "Coaching plans: decide whether to teach, mentor or coach based on the stage",
            "Settling debates: 'strictly by the book' vs. 'adapt' becomes an assessment, not an argument",
            "Career growth: it applies to a Scrum Master's own craft — from doing it well to shaping it",
            "Hiring and mentoring: match expectations to where someone is on each skill",
          ],
        },
      ),
      s(
        "pitfalls",
        "Misusing the model",
        {
          bullets: [
            "Declaring 'we're Ri' to skip fundamentals nobody has really practised",
            "Gatekeeping — telling people they are 'not ready' to shut down valid ideas",
            "Treating it as a linear checklist rather than a per-practice learning path",
            "Judging people instead of describing where a practice currently stands",
          ],
        },
      ),
      s(
        "activity",
        "Try it: place our practices on the grid",
        {
          steps: [
            { label: "List our practices (5 min)", detail: "Daily Scrum, refinement, estimation, retrospectives, Definition of Done, Sprint Review." },
            { label: "Place each one (10 min)", detail: "Put a sticky on Shu, Ha or Ri for each. Note disagreements." },
            { label: "Discuss the gaps (10 min)", detail: "For any practice we want to change, are we in Ha yet — or skipping a step?" },
            { label: "Agree the check question (5 min)", detail: "We ask 'do we understand this well enough to adapt it?' before deviating from a practice." },
          ],
        },
      ),
      takeaways(
        [
          "Shu (follow), Ha (adapt with understanding), Ri (act from principle)",
          "Stage is per practice and per person — and can slip back under stress",
          "Match the coaching style to the stage: teach, mentor, then coach",
          "Ask 'do we understand this well enough to change it?' before deviating",
        ],
        "Be honest about which stage you are in on your own craft as well.",
      ),
      sourcesSlide([
        src("Website", "Shu-Ha-Ri", "Alistair Cockburn (alistair.cockburn.us)", "Cockburn's own writing on applying Shu-Ha-Ri to learning and software craft."),
        src("Book", "Coaching Agile Teams", "Lyssa Adkins", "Teaching, mentoring, facilitating and coaching — the stances to match stages."),
        src("Guide", "The Scrum Guide", "Ken Schwaber & Jeff Sutherland", "The 'Shu' baseline — read it before adapting.", "https://scrumguides.org"),
        src("Book", "Agile Software Development: The Cooperative Game", "Alistair Cockburn", "Where Cockburn discusses Shu-Ha-Ri in the context of software teams."),
        src("Book", "Turn the Ship Around!", "L. David Marquet", "Moving from following orders to leading with intent — the Ri end of the spectrum."),
      ]),
    ],
  },

  // ───────────────────────────────────────── Working Agreement
  {
    workshopSlug: "agile-ways-of-working-working-agreement",
    title: "Agile Ways of Working — Working Agreement",
    subtitle: "A team-authored set of norms people will actually follow",
    slides: [
      titleSlide("Agile Ways of Working — Working Agreement", "A team-authored set of norms people will actually follow"),
      objectives(
        [
          "Explain what a working agreement is — and how it differs from a Definition of Done",
          "Identify the categories of norms a team needs to make explicit",
          "Write norms that are specific, behavioural and checkable",
          "Build our own working agreement together in this session",
          "Set a rhythm for reviewing and enforcing it",
        ],
      ),
      icebreaker(
        {
          name: "Best team ever",
          time: "5 min",
          steps: [
            "In pairs: describe the best team you were ever on",
            "What working habits made it feel good — not just the people?",
            "Each pair shares one habit on a sticky note",
            "We will mine these for our agreement later",
          ],
        },
        {
          name: "Superpower and energy drain",
          time: "6 min",
          steps: [
            "Each person writes one working habit that helps them at their best",
            "And one that drains their energy on a team (e.g. late-night messages)",
            "Post them anonymously on a wall",
            "Read a few aloud and note themes",
          ],
        },
        "Habits and norms are usually unspoken until someone violates them. This exercise brings them into the open safely.",
      ),
      s(
        "concept",
        "What a working agreement is",
        {
          bullets: [
            "A short set of norms the team defines for how it works together day to day",
            "Written by the team, for the team — not handed down by a manager or Scrum Master",
            "Covers behaviours (how we communicate, decide, review) — not the definition of finished work",
            "Makes tacit expectations explicit so conflict is about the norm, not the person",
            "A living document: it changes when the team, the work or the context changes",
          ],
          callout: "Working agreement = how we work together. Definition of Done = what 'finished' means for the product.",
        },
      ),
      s(
        "concept",
        "Categories of norms to cover",
        {
          columns: [
            {
              heading: "Time and communication",
              bullets: [
                "Core hours and availability, including time zones",
                "Which channel for what: urgent, everyday, decisions",
                "Response-time expectations for messages",
                "Meeting norms: on time, camera, no multitasking",
              ],
            },
            {
              heading: "Work and decisions",
              bullets: [
                "How pull requests are reviewed and how fast",
                "How we make decisions and when we escalate",
                "How we raise disagreement and handle conflict",
                "Focus time and how we protect it",
              ],
            },
          ],
        },
      ),
      s(
        "concept",
        "What good norms look like",
        {
          table: {
            headers: ["Vague (will be ignored)", "Specific (can be followed and checked)"],
            rows: [
              ["Be respectful in meetings", "We let people finish speaking; we do not multitask during team meetings"],
              ["Communicate well", "Blockers go in the team channel the same day; we reply to direct questions within 4 working hours"],
              ["Review code quickly", "First review of every pull request within one working day"],
              ["Deal with conflict maturely", "We disagree in the open channel; if no decision in 24h, we discuss it at the next huddle"],
            ],
            colWidths: [1.6, 3.6],
          },
          callout: "Test every norm: could an outsider tell whether we followed it today?",
        },
      ),
      s(
        "concept",
        "How to build it — and keep it alive",
        {
          steps: [
            { label: "1. Silent brainstorm per category", detail: "Everyone writes candidate norms alone first, so quieter voices are heard." },
            { label: "2. Cluster and surface conflicts", detail: "Group similar notes; highlight norms that contradict each other — those disagreements are the value." },
            { label: "3. Agree by consent, not perfection", detail: "Test: 'Is this safe enough to try and good enough for now?' If yes, adopt it." },
            { label: "4. Keep it short and visible", detail: "Aim for roughly ten norms or fewer; pin it where the team works and onboard new people with it." },
            { label: "5. Review it in retrospectives", detail: "Check whether norms are followed and still right. Update or retire them." },
          ],
        },
      ),
      s(
        "example",
        "Live example: a working agreement excerpt",
        {
          columns: [
            {
              heading: "Communication and meetings",
              bullets: [
                "Core hours 10:00–15:00 local time for meetings",
                "Urgent = phone or call; everything else in the team channel",
                "No meetings on Wednesday afternoons (focus time)",
                "Cameras optional; agenda and notes posted for every meeting",
              ],
            },
            {
              heading: "Working and deciding",
              bullets: [
                "Pull request reviewed within one working day; author pings after that",
                "Decisions logged in the team wiki with an owner and date",
                "Disagree openly; if unresolved in 24 hours, take it to the huddle",
                "Retro actions have one owner; we review them first next retro",
              ],
            },
          ],
          callout: "Illustrative example — your agreement should reflect your team's own context and needs.",
        },
      ),
      s(
        "usage",
        "Where working agreements earn their keep",
        {
          bullets: [
            "Onboarding: new joiners learn 'how we work here' in an hour instead of by trial and error",
            "Remote and hybrid teams: response times and meeting norms prevent silent frustration",
            "Cross-team work: sharing norms lets two teams agree how they will collaborate",
            "Retrospectives: a concrete reference point when tension arises — 'we agreed X'",
            "Conflict: shifts the conversation from 'you are rude' to 'we have a norm we are not following'",
          ],
        },
      ),
      s(
        "pitfalls",
        "Why working agreements fail",
        {
          bullets: [
            "Written by the Scrum Master or manager, so nobody feels ownership",
            "Too long — no one can remember 30 rules, so none are followed",
            "Vague wording that cannot be checked or breached",
            "Never revisited, so it slowly stops describing reality",
            "Used as a weapon to blame people instead of a tool to fix the system",
          ],
        },
      ),
      s(
        "activity",
        "Try it: build our working agreement",
        {
          steps: [
            { label: "Set the frame (5 min)", detail: "State that the team is the author; the facilitator only guides." },
            { label: "Brainstorm by category (20 min)", detail: "Silent, one category at a time, sticky per norm." },
            { label: "Cluster and resolve (20 min)", detail: "Merge duplicates; discuss any two norms that conflict." },
            { label: "Write it in plain language (15 min)", detail: "A checklist of around ten items. Post it in our shared space." },
            { label: "Set the review rhythm (5 min)", detail: "Pick a retro date to review whether it still fits." },
          ],
        },
      ),
      takeaways(
        [
          "A working agreement makes how we work together explicit and team-owned",
          "Specific, behavioural, checkable norms beat broad values statements",
          "Fewer norms, kept visible and reviewed, beat a long document nobody remembers",
          "Use it to fix the system, not to blame people",
        ],
      ),
      sourcesSlide([
        src("Guide", "The Scrum Guide — self-managing teams", "Ken Schwaber & Jeff Sutherland", "Why teams decide how to work together themselves.", "https://scrumguides.org"),
        src("Website", "Liberating Structures — e.g. 1-2-4-All", "Henri Lipmanowicz & Keith McCandless", "Free methods for getting every voice into a group decision.", "https://liberatingstructures.com"),
        src("Book", "The Culture Code", "Daniel Coyle", "How small, repeated signals and habits build a team's culture."),
        src("Book", "Agile Retrospectives: Making Good Teams Great", "Esther Derby & Diana Larsen", "How to review and refresh working agreements in retrospectives."),
        src("Article", "Team Canvas workshop on this site", "ScrumMaster Hub", "Pair this with the Team Canvas workshop to define purpose before norms.", "https://scrummaster-hub.vercel.app/workshops/team-health-culture/team-canvas"),
      ]),
    ],
  },
];
