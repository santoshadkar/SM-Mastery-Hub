import type { Deck } from "./types";
import { icebreaker, objectives, s, sourcesSlide, src, takeaways, titleSlide } from "./builders";

export const assessmentContinuousImprovementDecks: Deck[] = [
  // ───────────────────────────────────────── Agile Assessment for team members
  {
    workshopSlug: "agile-assessment-for-team-members",
    title: "Agile Assessment for All the Team Members",
    subtitle: "A shared, honest picture of how we work — and where to improve",
    slides: [
      titleSlide("Agile Assessment for All the Team Members", "A shared, honest picture of how we work — and where to improve"),
      objectives([
        "Explain why a team assesses itself — and how that differs from an audit or appraisal",
        "Choose dimensions and write behaviour-based statements to rate",
        "Run an anonymous assessment and read the spread, not only the average",
        "Turn the results into one focused improvement experiment",
        "Set a rhythm for repeating the assessment and tracking trends",
      ]),
      icebreaker(
        {
          name: "Fist to five",
          time: "5 min",
          steps: [
            "Ask: 'How healthy is our teamwork right now?' — show 0 to 5 fingers at the same time",
            "Note the spread aloud: 'I see a two, a three, and several fours'",
            "Invite one low and one high voice to say what is behind their number",
            "Point out: the differences are more interesting than the average",
          ],
        },
        {
          name: "Traffic-light check-in",
          time: "6 min",
          steps: [
            "Put three areas on the wall: how we plan, how we deliver, how we work together",
            "Each person places a red, amber or green dot on each area, silently",
            "Look at the pattern: where are dots clustered, and where are they scattered?",
            "Ask what each colour tells us — and what we do not yet know",
          ],
        },
        "Either one demonstrates the assessment idea in miniature: individual views, made visible, then discussed.",
      ),
      s(
        "concept",
        "Why a team assesses itself",
        {
          bullets: [
            "To get a shared baseline: where are we today, in our own words?",
            "To reveal where team members see things differently — often the most useful finding",
            "To focus improvement on one area at a time instead of guessing",
            "To track progress: repeat regularly and watch the trend",
            "To start a conversation, not to award a grade",
          ],
          callout: "The goal is learning and improvement. If people fear the result, the data will be unreliable.",
        },
      ),
      s(
        "concept",
        "Assessment, audit and appraisal are different things",
        {
          table: {
            headers: ["", "Team self-assessment", "Audit / compliance check", "Performance appraisal"],
            rows: [
              ["Purpose", "Learn and improve", "Check against a standard", "Evaluate an individual"],
              ["Who does it", "The team itself", "An outside party", "A manager"],
              ["Consequence", "Improvement experiment", "Pass / fail or findings", "Rating, pay or promotion"],
              ["Data handling", "Anonymous, shared with the team", "Reported to auditors", "Confidential HR record"],
            ],
            colWidths: [1.3, 2.3, 2.2, 2.2],
          },
          callout: "Never use team assessment data to judge individuals — it kills honesty.",
        },
      ),
      s(
        "concept",
        "What to assess: choose dimensions",
        {
          columns: [
            {
              heading: "Practising Scrum",
              bullets: [
                "Events run with purpose and produce decisions",
                "Product Backlog is ordered and refined",
                "Definition of Done is used and respected",
                "Sprint Goal is clear and used",
              ],
            },
            {
              heading: "Working together",
              bullets: [
                "Trust and psychological safety",
                "Collaboration with stakeholders and feedback",
                "Technical practices and quality",
                "Flow and use of metrics",
                "Learning and continuous improvement",
              ],
            },
          ],
          callout: "This site's Maturity Self-Assessment uses seven dimensions for the Scrum Master role — a good model to adapt.",
        },
      ),
      s(
        "concept",
        "Writing statements people can rate honestly",
        {
          table: {
            headers: ["Weak statement", "Better statement (behaviour you could observe)"],
            rows: [
              ["We are good at Scrum", "We usually meet our Sprint Goal"],
              ["Our retros are effective", "We complete most actions we agree in retrospectives"],
              ["We collaborate well with stakeholders", "Stakeholders give us feedback on working software every Sprint"],
              ["Our quality is high", "We rarely find defects after an item is called Done"],
            ],
            colWidths: [2.5, 4.5],
          },
          callout: "Use a 1–5 scale from 'rarely' to 'always'. One idea per statement; 3–5 statements per dimension is plenty.",
        },
      ),
      s(
        "concept",
        "Existing models to borrow from",
        {
          table: {
            headers: ["Model", "What it is", "Good for"],
            rows: [
              ["Squad health check (Spotify)", "Team rates cards such as easy to release, fun, learning, mission, support, speed with traffic lights and trend arrows", "A quick, visual team-health conversation"],
              ["Scrum.org open assessments", "Free online quizzes on Scrum knowledge", "Checking shared understanding of the framework"],
              ["Maturity Self-Assessment on this site", "35 statements across 7 dimensions with a radar chart and next steps", "An individual Scrum Master's growth plan"],
            ],
            colWidths: [2.2, 3.2, 2],
          },
        },
      ),
      s(
        "concept",
        "Reading results: spread beats average",
        {
          bullets: [
            "An average can hide a split: ratings of 1, 1, 5, 5 average 3 — but nobody thinks '3'",
            "Look at min, max and how many people are on each side",
            "Wide spread often means people experience the team differently — ask why",
            "Read the comments and look for themes",
            "Compare against our own past results, never against other teams",
          ],
          callout: "Discuss where we disagree first: that is where the learning is.",
        },
      ),
      s(
        "example",
        "Live example: six people rate three statements",
        {
          table: {
            headers: ["Statement", "Ratings (1–5)", "Average", "What it suggests"],
            rows: [
              ["We get timely feedback from stakeholders", "2, 2, 3, 5, 5, 4", "3.5", "Split: some get feedback, some do not — find out why"],
              ["Our Definition of Done is followed", "4, 4, 5, 4, 4, 4", "4.2", "Broad agreement — a strength to protect"],
              ["Retro actions get done", "2, 2, 2, 3, 2, 1", "2.0", "Consistently low — a clear improvement target"],
            ],
            colWidths: [2.6, 1.6, 0.9, 2.6],
          },
          callout: "Illustrative data. The 'split' row is the most interesting: an average of 3.5 hides two different realities.",
        },
      ),
      s(
        "usage",
        "How teams use assessments in real life",
        {
          bullets: [
            "Quarterly team health check that feeds the next retrospective's topics",
            "Baseline when a new Scrum Master or coach joins a team",
            "Before and after an improvement initiative to see if it made a difference",
            "Only aggregated, team-level results are shared with leadership — never individual answers",
            "Coaching plans: choose the one dimension with the most leverage for the next quarter",
          ],
        },
      ),
      s(
        "pitfalls",
        "Ways assessments go wrong",
        {
          bullets: [
            "Not anonymous, so answers are safe rather than honest",
            "Using scores to compare teams or rank people",
            "Trying to fix everything at once instead of choosing one focus",
            "Doing the survey but never acting on it, so people stop bothering",
            "Statements too vague to answer with any real meaning",
          ],
        },
      ),
      s(
        "activity",
        "Try it: assess ourselves",
        {
          steps: [
            { label: "Agree the dimensions and statements (10 min)", detail: "Pick 4–6 dimensions with 3 statements each, using observable behaviours." },
            { label: "Rate anonymously (10 min)", detail: "Individual, on a 1–5 scale, using a poll or paper slips." },
            { label: "Reveal and look at the spread (15 min)", detail: "Show distribution per statement, not just the average." },
            { label: "Discuss the widest gap (15 min)", detail: "Why do people see this differently? What evidence is there?" },
            { label: "Choose one improvement experiment (10 min)", detail: "An owner, a change, a date and how we will know it worked." },
          ],
        },
      ),
      takeaways(
        [
          "A team self-assessment is for learning, not judging — keep it anonymous and behaviour-based",
          "Spread and comments matter more than the average",
          "Choose one focus area and turn it into an experiment",
          "Repeat regularly and compare against our own past",
        ],
      ),
      sourcesSlide([
        src("Website", "Scrum.org — open assessments", "Scrum.org", "Free online assessments for checking Scrum knowledge.", "https://www.scrum.org"),
        src("Article", "Squad Health Check model", "Spotify Engineering (Spotify Labs blog)", "The visual, traffic-light approach to team health checks."),
        src("Article", "Maturity Self-Assessment", "ScrumMaster Hub", "A 35-question, seven-dimension self-assessment with recommendations.", "https://scrummaster-hub.vercel.app/assessment"),
        src("Book", "Agile Coaching", "Rachel Davies & Liz Sedley", "Practical coaching techniques, including reviewing how a team is doing."),
        src("Book", "Agile Retrospectives: Making Good Teams Great", "Esther Derby & Diana Larsen", "How to turn assessment findings into retrospective discussions."),
      ]),
    ],
  },

  // ───────────────────────────────────────── Root Cause Analysis
  {
    workshopSlug: "root-cause-analysis",
    title: "Root Cause Analysis",
    subtitle: "From recurring symptoms to causes we can actually fix",
    slides: [
      titleSlide("Root Cause Analysis", "From recurring symptoms to causes we can actually fix"),
      objectives([
        "Tell a symptom apart from a root cause",
        "Run a 5 Whys analysis using facts rather than opinions",
        "Use a fishbone diagram when several causes may contribute",
        "Prioritise causes with data and choose strong corrective actions",
        "Apply a blameless, system-focused approach to problems and incidents",
      ]),
      icebreaker(
        {
          name: "The 'why' game",
          time: "6 min",
          steps: [
            "In pairs: person A states a simple fact, e.g. 'I was late this morning'",
            "Person B asks 'why?' after every answer, like a curious child, five times",
            "Swap roles with a new statement",
            "Discuss: how far below the first answer did you get?",
          ],
        },
        {
          name: "The cake that did not rise",
          time: "8 min",
          steps: [
            "Present the problem: a cake did not rise",
            "Groups list every possible cause: ingredients, oven, method, timing, tools",
            "Cluster the causes into categories on the board",
            "Ask: which would you check first, and how would you know?",
          ],
        },
        "Option A previews the 5 Whys; option B previews the fishbone. Both show that the first answer is rarely the last.",
      ),
      s(
        "concept",
        "Symptoms vs. root causes",
        {
          bullets: [
            "A symptom is what we see: missed Sprint Goal, bugs in production, late releases",
            "A root cause is the underlying reason which, if fixed, would prevent the problem returning",
            "Fixing symptoms brings temporary relief; the same problem soon reappears in another form",
            "Most root causes sit in the system — processes, tooling, information flow — not in individuals",
            "Recurring issues in retrospectives are the best candidates for analysis",
          ],
          callout: "If the same problem appears three times, we are treating a symptom.",
        },
      ),
      s(
        "concept",
        "The 5 Whys",
        {
          steps: [
            { label: "State the problem specifically", detail: "'The Sprint Goal was missed by two stories' — not 'quality is bad'." },
            { label: "Ask why, and answer with facts", detail: "Use evidence: dates, logs, board history — not guesses." },
            { label: "Ask why of that answer", detail: "Repeat about five times — the number is a guide, not a rule." },
            { label: "Stop at a cause you can act on", detail: "Usually a process or system condition the team can change." },
            { label: "Check backwards", detail: "Read from the root to the symptom with 'therefore' — does the chain hold?" },
          ],
          callout: "Originated in the Toyota Production System (Taiichi Ohno) as a simple way to dig beneath surface causes.",
        },
      ),
      s(
        "concept",
        "5 Whys: strengths and limits",
        {
          columns: [
            {
              heading: "Strengths",
              bullets: [
                "Simple: needs no special tools or training",
                "Fast: fits inside a retrospective",
                "Forces us to go beyond the first, obvious answer",
                "Works well for a single, clear chain of causes",
              ],
            },
            {
              heading: "Limits and cautions",
              bullets: [
                "Assumes one chain of causes; complex problems have several",
                "Stops early at 'human error' if we do not push on",
                "Depends on who is in the room and what they know",
                "Leading questions can steer the answer",
              ],
            },
          ],
        },
      ),
      s(
        "concept",
        "Fishbone (Ishikawa) diagram",
        {
          table: {
            headers: ["Category", "Questions to ask (software example)"],
            rows: [
              ["People", "Skills, knowledge, workload, availability — who was affected?"],
              ["Process", "Steps, handoffs, approvals, reviews — where did the process fail?"],
              ["Code and product", "Design, complexity, tech debt, test coverage"],
              ["Tools and environment", "Build, test environments, monitoring, access"],
              ["Requirements and communication", "Clarity, changes, decisions, information flow"],
              ["External", "Vendors, regulations, third-party services"],
            ],
            colWidths: [2.2, 5.2],
          },
          callout: "Kaoru Ishikawa's cause-and-effect diagram: write the problem at the head, causes as bones by category.",
        },
      ),
      s(
        "concept",
        "Prioritise causes with data",
        {
          bullets: [
            "Not every cause matters equally — find the few that produce most of the effect",
            "Pareto principle (roughly 80/20): a small number of causes often account for most problems",
            "Count occurrences: defects by type, delays by cause, incidents by component",
            "Focus on the top one or two — fixing everything at once fixes nothing",
            "Use data where you can; use the team's judgement where you cannot, and say so",
          ],
        },
      ),
      s(
        "concept",
        "Blameless, system-focused analysis",
        {
          bullets: [
            "'Human error' is where the investigation begins, not where it ends",
            "Ask 'how did the system make this mistake easy, and how do we make it harder?'",
            "Blameless post-mortems (a well-known practice in site reliability engineering) encourage honest reporting",
            "Assume everyone acted with good intentions using the information they had",
            "End with clear actions, an owner and a date — then follow up",
          ],
          callout: "Psychological safety is the precondition for finding real causes.",
        },
      ),
      s(
        "concept",
        "Actions that actually stick",
        {
          table: {
            headers: ["Strength", "Type of action", "Example"],
            rows: [
              ["Strongest", "Remove the possibility or automate", "Pipeline blocks deploys when tests fail"],
              ["Stronger", "Make the right way the easy way", "A pull-request template with a required checklist"],
              ["Weaker", "Add a review or reminder", "A manual pre-release checklist"],
              ["Weakest", "Train or 'be more careful'", "'Remember to run the tests'"],
            ],
            colWidths: [1.3, 2.9, 3.2],
          },
          callout: "Prefer actions that change the system over actions that depend on people remembering.",
        },
      ),
      s(
        "example",
        "Live example: 5 Whys on a missed Sprint Goal",
        {
          steps: [
            { label: "Problem", detail: "We missed the Sprint Goal: two stories were unfinished at the Review." },
            { label: "Why? Testing started on day 8", detail: "Evidence: the board shows both stories in 'In test' only on day 8." },
            { label: "Why so late? The test environment was broken for three days", detail: "Evidence: chat log and deployment history." },
            { label: "Why broken? Manual setup drifted from the real configuration", detail: "Evidence: the environment was built by hand months ago." },
            { label: "Why still manual? Nobody owns the environment and there is no automation", detail: "Root cause: no owner and no automated provisioning." },
          ],
          callout: "Illustrative scenario. Action: assign an owner and automate environment setup; check next Sprint.",
        },
      ),
      s(
        "usage",
        "Where root cause analysis is used in real life",
        {
          bullets: [
            "Retrospectives: the 'generate insights' phase, for recurring issues",
            "Production incidents: blameless post-mortems that lead to system fixes",
            "Quality: tracing escaped defects to a gap in tests, requirements or reviews",
            "Delivery delays: finding the recurring wait or handoff",
            "Manufacturing and healthcare: the original fields for these techniques",
          ],
        },
      ),
      s(
        "pitfalls",
        "Where root cause analysis goes wrong",
        {
          bullets: [
            "Stopping at 'someone made a mistake' and moving on",
            "Using the analysis to find who to blame",
            "Leaping to solutions before the cause is understood",
            "Producing a long list of actions nobody owns",
            "No follow-up to check whether the action fixed the problem",
          ],
        },
      ),
      s(
        "activity",
        "Try it: analyse one of our recurring problems",
        {
          steps: [
            { label: "Choose a recurring issue (5 min)", detail: "From recent retros — something that came up more than once." },
            { label: "Write the problem statement (5 min)", detail: "Specific, factual, with numbers or examples." },
            { label: "Run the 5 Whys (20 min)", detail: "Answer each 'why' with evidence; capture branches for later." },
            { label: "Separate root from contributing causes (10 min)", detail: "Which cause, if fixed, would prevent recurrence?" },
            { label: "Choose one strong action (10 min)", detail: "Assign an owner and a date and add it to our board." },
          ],
        },
      ),
      takeaways(
        [
          "Fix root causes, not symptoms — recurring problems are the clue",
          "5 Whys is fast; a fishbone diagram helps when several causes contribute",
          "Use data to prioritise and blameless analysis to find system causes",
          "Prefer strong, system-level actions and follow up to check they worked",
        ],
      ),
      sourcesSlide([
        src("Book", "Toyota Production System: Beyond Large-Scale Production", "Taiichi Ohno", "The origin of the 5 Whys in lean manufacturing."),
        src("Book", "Guide to Quality Control", "Kaoru Ishikawa", "The cause-and-effect (fishbone) diagram and other quality tools."),
        src("Book", "The Field Guide to Understanding 'Human Error'", "Sidney Dekker", "Why looking beyond individual error leads to better fixes."),
        src("Book", "Site Reliability Engineering — postmortem culture", "Google", "Free online book with practical guidance on blameless post-mortems.", "https://sre.google"),
        src("Book", "Agile Retrospectives: Making Good Teams Great", "Esther Derby & Diana Larsen", "Where root cause techniques fit inside the retrospective."),
      ]),
    ],
  },

  // ───────────────────────────────────────── Value Stream Mapping
  {
    workshopSlug: "value-stream-mapping",
    title: "Value Stream Mapping",
    subtitle: "Seeing where time and value are actually lost from idea to customer",
    slides: [
      titleSlide("Value Stream Mapping", "Seeing where time and value are actually lost from idea to customer"),
      objectives([
        "Explain what a value stream map shows and where it comes from",
        "Define process time, wait time, lead time and flow efficiency",
        "Map a real end-to-end flow of work with real timings",
        "Identify waste and the biggest single delay",
        "Design a realistic future state and a first improvement step",
      ]),
      icebreaker(
        {
          name: "Pizza value stream",
          time: "8 min",
          steps: [
            "Map the journey of a pizza from 'I am hungry' to 'first bite'",
            "Mark each step as work being done, or waiting",
            "Add rough times and total them up",
            "Ask: how much of the total was real work?",
          ],
        },
        {
          name: "Longest wait",
          time: "6 min",
          steps: [
            "Each person shares the longest they have waited for an approval or a handoff at work",
            "Note what the wait was for and what was actually done once it arrived",
            "Ask: how long did the real work take, compared to the wait?",
            "Keep the stories: we will look for similar waits in our own flow",
          ],
        },
        "The pizza (or a waiting story) makes the central idea visible: most elapsed time is waiting, not working.",
      ),
      s(
        "concept",
        "What a value stream map is",
        {
          bullets: [
            "A visual map of every step from a customer request to value delivered, with timings",
            "Comes from Lean thinking and the Toyota Production System; described by Rother and Shook in 'Learning to See'",
            "Shows both the flow of work and the flow of information and approvals",
            "Highlights waiting, handoffs and rework — usually invisible from inside a single team",
            "Used in manufacturing, healthcare, services and software delivery",
          ],
          callout: "A map makes delay visible so it can be discussed — it is a conversation tool, not just a diagram.",
        },
      ),
      s(
        "concept",
        "Key terms and formulas",
        {
          table: {
            headers: ["Term", "Meaning", "Example"],
            rows: [
              ["Process time (touch time)", "Time actually spent working on the item", "Development: 3 days"],
              ["Wait time (queue time)", "Time the item sits idle between steps", "Waiting for review: 2 days"],
              ["Lead time", "Total elapsed time from request to delivery", "Process time + wait time"],
              ["Flow efficiency", "Share of lead time spent on real work", "Process time ÷ lead time × 100%"],
              ["% complete & accurate", "Share of work passed on with nothing needing rework", "9 of 10 items = 90%"],
            ],
            colWidths: [2.2, 3.4, 2.2],
          },
        },
      ),
      s(
        "concept",
        "How to run a mapping session",
        {
          steps: [
            { label: "Choose the stream and its boundaries", detail: "From 'idea proposed' to 'live and used' — or your own start and end." },
            { label: "Walk the real flow", detail: "Follow actual items, not the documented process; include every handoff and approval." },
            { label: "Capture each step", detail: "Who does it, process time, wait time, and how often rework is needed." },
            { label: "Use data where possible", detail: "Timestamps from the tracker or pipeline beat memory." },
            { label: "Total it up and find the biggest delay", detail: "Calculate lead time and flow efficiency; circle the largest waits." },
            { label: "Design a future state", detail: "Pick the highest-impact improvements and agree first experiments." },
          ],
        },
      ),
      s(
        "concept",
        "Seven kinds of waste in software (Poppendieck)",
        {
          table: {
            headers: ["Waste", "What it looks like"],
            rows: [
              ["Partially done work", "Code written but not tested, integrated or released"],
              ["Extra features", "Functionality nobody asked for or uses"],
              ["Relearning", "Knowledge lost and rediscovered by another person"],
              ["Handoffs", "Context lost between people or teams"],
              ["Task switching", "Time lost moving between many tasks"],
              ["Delays", "Waiting for approvals, environments, decisions"],
              ["Defects", "Rework caused by bugs found late"],
            ],
            colWidths: [2, 5],
          },
          callout: "Adapted from Mary and Tom Poppendieck's 'Lean Software Development'.",
        },
      ),
      s(
        "concept",
        "What mapping usually reveals",
        {
          bullets: [
            "Most elapsed time is usually waiting, not working — flow efficiency is commonly far lower than people expect",
            "The biggest waits are frequently approvals, environment availability and handoffs",
            "Batching (weekly review meetings, monthly releases) creates long, hidden queues",
            "Rework loops (bugs found late) multiply delay",
            "The team's own work is often only a small part of the whole stream",
          ],
          callout: "Every organisation's numbers differ — map our own stream and use our own data.",
        },
      ),
      s(
        "example",
        "Live example: idea to production, current state",
        {
          table: {
            headers: ["Step", "Process time (days)", "Wait time (days)"],
            rows: [
              ["Idea triage", "0.1", "5"],
              ["Refinement", "0.4", "4"],
              ["Development", "3", "0.5"],
              ["Code review", "0.25", "2"],
              ["QA testing", "1", "3"],
              ["Release approval", "0.1", "5"],
              ["Deploy", "0.1", "2"],
              ["Total", "4.95", "21.5"],
            ],
            colWidths: [3, 2, 2],
          },
          callout: "Lead time 26.45 days; flow efficiency 4.95 ÷ 26.45 ≈ 19%. Triage and approval waits are 10 of 21.5 days.",
        },
        "Illustrative numbers in working days. Ask the group: what surprises you? Where would you look first?",
      ),
      s(
        "example",
        "Live example: a future state",
        {
          columns: [
            {
              heading: "Changes we try",
              bullets: [
                "Triage daily instead of weekly: wait 5 → 1 day",
                "Agree a standing approval for low-risk changes, backed by automated checks: wait 5 → 0.5 day",
                "Leave development, review, QA and deploy as they are for now",
                "Measure again after two Sprints",
              ],
            },
            {
              heading: "Result on paper",
              bullets: [
                "Wait time falls by 8.5 days: 21.5 → 13",
                "Lead time falls from 26.45 to about 18 days",
                "Flow efficiency rises from about 19% to about 28%",
                "No one worked faster — the work simply waited less",
              ],
            },
          ],
          callout: "Illustrative. The biggest gain came from the two largest waits, not from pushing people harder.",
        },
      ),
      s(
        "usage",
        "Where value stream mapping is used in real life",
        {
          bullets: [
            "Finding delivery delays across teams, approvals and environments",
            "Making a case to leadership for automating a manual, slow step",
            "Compliance-heavy work, where approvals dominate lead time",
            "Non-software flows: hiring, onboarding, procurement, customer support",
            "Before a DevOps or process-improvement initiative, as a baseline",
          ],
        },
      ),
      s(
        "pitfalls",
        "Common mapping mistakes",
        {
          bullets: [
            "Mapping the ideal process instead of what really happens",
            "Mapping only our own team's slice and missing the largest delays elsewhere",
            "Relying on memory rather than timestamps",
            "Analysis without action — a beautiful map on the wall and no experiment",
            "Blaming a team or person for a wait that is caused by the system",
          ],
        },
      ),
      s(
        "activity",
        "Try it: map one of our value streams",
        {
          steps: [
            { label: "Define start and end (15 min)", detail: "For example: 'feature request received' to 'in production and used'." },
            { label: "Map the steps (40 min)", detail: "Every step and handoff, including those outside our team." },
            { label: "Add process and wait times (30 min)", detail: "Use tracker or pipeline data where we can; mark estimates clearly." },
            { label: "Calculate lead time and flow efficiency (15 min)", detail: "Total process time ÷ total lead time." },
            { label: "Choose the biggest wait and one experiment (20 min)", detail: "An owner, a change and how we will measure it." },
          ],
        },
      ),
      takeaways(
        [
          "A value stream map shows process time, wait time and handoffs from idea to customer",
          "Flow efficiency (process time ÷ lead time) is usually much lower than expected",
          "The biggest gains come from removing the largest waits, not from working harder",
          "Map reality with data, and always finish with one improvement experiment",
        ],
      ),
      sourcesSlide([
        src("Book", "Learning to See", "Mike Rother & John Shook", "The classic guide to value stream mapping."),
        src("Book", "Value Stream Mapping", "Karen Martin & Mike Osterling", "A practical guide to mapping and improving service and knowledge work."),
        src("Book", "Lean Software Development", "Mary & Tom Poppendieck", "Lean waste and flow applied to software."),
        src("Book", "Making Work Visible", "Dominica DeGrandis", "Finding and reducing the hidden delays in work."),
        src("Book", "The Principles of Product Development Flow", "Donald G. Reinertsen", "Why queues and batch size drive delay."),
      ]),
    ],
  },

  // ───────────────────────────────────────── Design Thinking
  {
    workshopSlug: "design-thinking-principles",
    title: "Design Thinking Principles",
    subtitle: "Understanding people first, then solving the right problem",
    slides: [
      titleSlide("Design Thinking Principles", "Understanding people first, then solving the right problem"),
      objectives([
        "Describe design thinking and its core principles",
        "Walk through the five modes: empathise, define, ideate, prototype, test",
        "Use simple techniques: interviews, empathy maps, 'how might we', Crazy 8s",
        "Explain how design thinking complements Scrum and Lean UX",
        "Apply the modes to a real problem our product faces",
      ]),
      icebreaker(
        {
          name: "Design a better wallet",
          time: "12 min",
          steps: [
            "Pairs interview each other for 3 minutes: how do you use your wallet or bag? What is annoying?",
            "Sketch a better solution for your partner for 3 minutes",
            "Show your sketch and get feedback for 3 minutes",
            "Refine the sketch for 3 minutes — notice how listening changed your design",
          ],
        },
        {
          name: "How might we…?",
          time: "8 min",
          steps: [
            "Each person writes a common complaint about our product or process",
            "Rewrite it as 'How might we…?' — open, optimistic and solution-free",
            "Share the best rewrite from each pair",
            "Ask: what changed when a complaint became a question?",
          ],
        },
        "Option A demonstrates the whole cycle in miniature; option B demonstrates reframing problems as opportunities.",
      ),
      s(
        "concept",
        "What design thinking is",
        {
          bullets: [
            "A human-centred, iterative approach to solving problems that are ambiguous or poorly understood",
            "Starts with people's real needs, not with a solution or a technology",
            "Alternates between exploring widely (diverging) and choosing (converging)",
            "Prefers cheap prototypes and real feedback over long analysis",
            "Associated with Stanford's d.school and the design firm IDEO",
          ],
          callout: "It slows down the first step — understanding the problem — to speed up everything after.",
        },
      ),
      s(
        "concept",
        "Core principles",
        {
          columns: [
            {
              heading: "Mindset",
              bullets: [
                "Empathy: understand real people and their context",
                "Curiosity: ask questions and stay open to being wrong",
                "Bias to action: build something rough to learn",
                "Embrace ambiguity and iterate",
              ],
            },
            {
              heading: "Practice",
              bullets: [
                "Define the problem before solving it",
                "Generate many ideas before choosing",
                "Prototype cheaply and test with real users",
                "Work as a diverse, collaborative team",
              ],
            },
          ],
        },
      ),
      s(
        "concept",
        "The five modes",
        {
          table: {
            headers: ["Mode", "Key question", "Typical techniques"],
            rows: [
              ["Empathise", "What do people actually need and experience?", "Interviews, observation, empathy maps"],
              ["Define", "What is the real problem to solve?", "Point-of-view statement, 'how might we'"],
              ["Ideate", "What are many possible solutions?", "Brainstorming, Crazy 8s, sketching"],
              ["Prototype", "How can we make an idea tangible cheaply?", "Paper sketches, clickable mock-ups, role-play"],
              ["Test", "Does it work for real people?", "User tests, observation, feedback sessions"],
            ],
            colWidths: [1.2, 3, 3],
          },
          callout: "Stanford d.school's model. The modes are not a straight line — teams loop back as they learn.",
        },
      ),
      s(
        "concept",
        "Diverge and converge: the double diamond",
        {
          columns: [
            {
              heading: "First diamond: the right problem",
              bullets: [
                "Discover (diverge): research widely and listen",
                "Define (converge): choose what to solve",
              ],
            },
            {
              heading: "Second diamond: the right solution",
              bullets: [
                "Develop (diverge): explore many solutions and prototype",
                "Deliver (converge): refine, test and release the best one",
              ],
            },
          ],
          callout: "The 'Double Diamond' is a model from the British Design Council. Both diamonds diverge, then converge.",
        },
      ),
      s(
        "concept",
        "Empathise: understanding people",
        {
          bullets: [
            "Interview with open questions: 'Tell me about the last time you…' and 'What happened next?'",
            "Listen more than you talk; ask 'why' and follow the story, not your hypothesis",
            "Observe people in context — what they do often differs from what they say",
            "Empathy map: capture what a user says, thinks, does and feels, and look for contradictions",
            "Even five or so interviews often reveal patterns worth acting on",
          ],
        },
      ),
      s(
        "concept",
        "Define, ideate, prototype and test",
        {
          table: {
            headers: ["Step", "How it works", "Tip"],
            rows: [
              ["Define", "Write: '[User] needs [need] because [insight]', then turn it into 'How might we…?'", "Keep it free of solutions"],
              ["Ideate", "Defer judgement, go for quantity, build on others' ideas; try Crazy 8s (eight sketches in eight minutes)", "Diverge before you converge"],
              ["Prototype", "Build the cheapest thing that tests your riskiest assumption", "Paper beats code at this stage"],
              ["Test", "Watch real users try it; observe rather than defend", "Small tests, many times"],
            ],
            colWidths: [1.1, 4.2, 2],
          },
        },
      ),
      s(
        "example",
        "Live example: 'Where is my order?' tickets",
        {
          steps: [
            { label: "Empathise", detail: "Team shadows support and interviews five customers. Finding: people feel anxious when they cannot see a parcel's progress." },
            { label: "Define", detail: "'Customers who have ordered need to know where their parcel is without contacting us, because uncertainty makes them anxious.'" },
            { label: "Ideate", detail: "How might we…? Ideas: tracking page, proactive text messages, delay alerts, a chat bot." },
            { label: "Prototype", detail: "Write three versions of the text message and mock a tracking screen on paper." },
            { label: "Test", detail: "Five customers react: they want delay reasons, not just dates. Backlog items follow." },
          ],
          callout: "Illustrative scenario. The prototype cost hours and produced insight that a build would have cost weeks to reveal.",
        },
      ),
      s(
        "usage",
        "Where design thinking helps in real life",
        {
          bullets: [
            "Product discovery: the Product Owner uses it to decide what is worth building",
            "Hackathons and design sprints for tackling a fuzzy problem quickly",
            "Internal tools and HR processes: designing for employees as users",
            "Service design: improving customer journeys across teams",
            "Dual-track Agile: discovery runs alongside delivery, feeding validated ideas into the backlog",
          ],
        },
      ),
      s(
        "concept",
        "How it fits with Scrum and Lean UX",
        {
          bullets: [
            "Scrum organises delivery; design thinking helps decide what is worth delivering",
            "Lean UX and dual-track Agile run continuous discovery next to the Sprint",
            "Outputs (insights, validated ideas) become Product Backlog items and refinement input",
            "Sprint Reviews are real user-feedback moments — keep them honest",
            "Scrum Masters can help by making discovery work visible and protecting time for it",
          ],
        },
      ),
      s(
        "pitfalls",
        "Design thinking traps",
        {
          bullets: [
            "Skipping empathise and going straight to brainstorming ideas",
            "Sticky-note theatre: a workshop with no follow-through into the backlog",
            "Designing for stakeholders' opinions instead of real users' needs",
            "Falling in love with the first idea and treating tests as a formality",
            "Treating it as a one-off event instead of a continuous habit",
          ],
        },
      ),
      s(
        "activity",
        "Try it: apply the modes to a real problem",
        {
          steps: [
            { label: "Choose a real user problem (10 min)", detail: "Something our data or support tickets suggest is painful." },
            { label: "Empathise (20 min)", detail: "Review existing research or role-play an interview; fill in an empathy map." },
            { label: "Define (15 min)", detail: "Write a point-of-view statement and 3 'how might we' questions." },
            { label: "Ideate (20 min)", detail: "Crazy 8s individually, then cluster and vote quietly." },
            { label: "Sketch a prototype and a test (25 min)", detail: "Choose the riskiest assumption and design the cheapest way to test it." },
          ],
        },
      ),
      takeaways(
        [
          "Design thinking helps us understand people and define the right problem before building",
          "Five modes — empathise, define, ideate, prototype, test — used iteratively",
          "Prototype cheaply and test with real users to learn quickly",
          "It complements Scrum: discovery decides what to build, Scrum delivers it",
        ],
      ),
      sourcesSlide([
        src("Website", "Stanford d.school — design thinking resources (e.g. the Bootcamp Bootleg)", "Stanford d.school", "Free, practical guides to each mode and its methods.", "https://dschool.stanford.edu"),
        src("Guide", "The Field Guide to Human-Centered Design", "IDEO.org", "A free, illustrated guide to human-centred design methods."),
        src("Book", "Sprint", "Jake Knapp with John Zeratsky & Braden Kowitz", "A five-day design sprint process, including Crazy 8s."),
        src("Book", "Lean UX", "Jeff Gothelf & Josh Seiden", "Working with hypotheses and outcomes alongside Agile delivery."),
        src("Book", "The Design of Everyday Things", "Don Norman", "Why human-centred design matters, with classic examples."),
      ]),
    ],
  },
];
