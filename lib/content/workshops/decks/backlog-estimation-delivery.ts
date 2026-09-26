import type { Deck } from "./types";
import { icebreaker, objectives, s, sourcesSlide, src, takeaways, titleSlide } from "./builders";

export const backlogEstimationDeliveryDecks: Deck[] = [
  // ───────────────────────────────────────── User Story Slicing
  {
    workshopSlug: "user-story-slicing",
    title: "User Story Slicing",
    subtitle: "Turning big stories into thin, valuable, finishable slices",
    slides: [
      titleSlide("User Story Slicing", "Turning big stories into thin, valuable, finishable slices"),
      objectives([
        "Explain why small stories improve feedback, predictability and flow",
        "Apply the INVEST checklist to judge whether a story is well formed",
        "Tell vertical slices (end-to-end value) from horizontal slices (layers)",
        "Use concrete splitting patterns, including SPIDR, on a real backlog item",
        "Check each slice still delivers value or learning on its own",
      ]),
      icebreaker(
        {
          name: "How do you eat an elephant?",
          time: "6 min",
          steps: [
            "Pose a big task: 'Organise a wedding' or 'Move to a new city'",
            "Groups list as many ways as possible to break it into smaller pieces",
            "Share: did anyone split by phase, by person, or by 'first usable version'?",
            "Highlight the splits that leave you with something usable early",
          ],
        },
        {
          name: "Slice the layered cake",
          time: "6 min",
          steps: [
            "Show a picture of a layered cake (sponge, jam, cream, icing)",
            "Ask: what is a useful slice — one layer, or a thin wedge with all layers?",
            "Agree the wedge is the 'vertical' slice: every layer, small width",
            "Link to software layers: database, API, user interface",
          ],
        },
        "The cake makes the vertical-slice idea instantly obvious. Keep the picture for the concept slide.",
      ),
      s(
        "concept",
        "Why slice stories small",
        {
          bullets: [
            "Smaller batches finish sooner — we get real feedback earlier",
            "Small items are easier to understand, estimate and test",
            "Fewer half-done items mean less carry-over and more predictable Sprints",
            "Risk shrinks: if a slice is wrong, we lose days rather than weeks",
            "Thin slices let the Product Owner re-order and stop early when value is delivered",
          ],
          callout: "Small does not mean technical tasks — each slice should still be something a user can notice.",
        },
      ),
      s(
        "concept",
        "INVEST: what a good story looks like",
        {
          table: {
            headers: ["", "Meaning", "Test question"],
            rows: [
              ["I — Independent", "Can be built and released without relying on another story", "Can we do this one in any order?"],
              ["N — Negotiable", "A conversation, not a contract — details can change", "Is the how still open?"],
              ["V — Valuable", "Delivers value to a user or the business", "Who benefits and how?"],
              ["E — Estimable", "The team understands it well enough to size it", "Can we give a rough size?"],
              ["S — Small", "Fits comfortably within a Sprint — ideally a few days", "Can one or two people finish it soon?"],
              ["T — Testable", "We can tell when it is done", "What would we check?"],
            ],
            colWidths: [1.5, 3.2, 2.4],
          },
          callout: "INVEST is a checklist from Bill Wake for conversations — not a scoring system.",
        },
      ),
      s(
        "concept",
        "Vertical vs. horizontal slicing",
        {
          columns: [
            {
              heading: "Horizontal (by layer) — avoid",
              bullets: [
                "Story 1: database changes; Story 2: API; Story 3: user interface",
                "Nothing usable until all three finish",
                "Feedback arrives late; integration risk stacks up at the end",
                "Progress looks good on paper but delivers nothing to see",
              ],
            },
            {
              heading: "Vertical (end-to-end) — prefer",
              bullets: [
                "Each story touches every layer needed, but does a little",
                "Every slice can be demonstrated and used",
                "Feedback after the first slice; the rest can be reshaped",
                "Progress is real: user-visible capability grows each Sprint",
              ],
            },
          ],
          callout: "Slice the cake as a wedge with all layers, not layer by layer.",
        },
      ),
      s(
        "concept",
        "Common splitting patterns",
        {
          table: {
            headers: ["Pattern", "Idea", "Example"],
            rows: [
              ["Workflow steps", "Deliver a simple path first, add steps later", "Checkout: guest payment first, saved cards later"],
              ["Business rules", "One rule at a time", "Discounts: percentage codes, then free shipping, then bundles"],
              ["Data variations", "Support one data type first", "Import: CSV first, spreadsheet files later"],
              ["Operations", "Split create / read / update / delete", "Manage address: view, add, edit, delete"],
              ["Simple → complex", "Deliver the simplest version first", "Search: exact title match before fuzzy matching"],
              ["Defer performance", "Make it work, then make it fast", "Report: correct first, optimise for large data later"],
            ],
            colWidths: [1.5, 2.4, 3.6],
          },
        },
        "These patterns are widely taught, including in Richard Lawrence's story-splitting guidance. Pick the one that reveals the most value or learning first.",
      ),
      s(
        "concept",
        "SPIDR: five questions to split a story",
        {
          table: {
            headers: ["Letter", "Technique", "Ask yourself"],
            rows: [
              ["S", "Spikes", "Is there unknown work we should investigate first, with a timebox?"],
              ["P", "Paths", "Can we split by a user path or scenario through the feature?"],
              ["I", "Interfaces", "Can we deliver for one device, browser or interface first?"],
              ["D", "Data", "Can we support one kind or subset of data first?"],
              ["R", "Rules", "Can we relax a business rule initially and add it later?"],
            ],
            colWidths: [0.8, 1.4, 4.9],
          },
          callout: "SPIDR is a technique from Mike Cohn — try each letter until one produces a valuable, smaller slice.",
        },
      ),
      s(
        "concept",
        "Is this a good slice? A quick check",
        {
          bullets: [
            "Can a user (or the business) do something new after this slice ships?",
            "Can we demonstrate it at the Sprint Review and get real feedback?",
            "Can it be tested on its own — what would we check?",
            "Can it be finished in a few days by one or two people?",
            "If we stopped after this slice, would we still have delivered something worthwhile?",
          ],
          callout: "If the answer to the first question is no, it is probably a task, not a story.",
        },
      ),
      s(
        "example",
        "Live example: 'Users can manage their subscription'",
        {
          table: {
            headers: ["Slice", "What the user can do", "Pattern used"],
            rows: [
              ["1", "View current plan and renewal date (read only)", "Operations"],
              ["2", "Cancel the subscription with a confirmation", "Operations"],
              ["3", "Upgrade to a higher plan (pay the difference)", "Workflow"],
              ["4", "Downgrade a plan, effective at next renewal", "Business rules"],
              ["5", "Pause the subscription for up to a set period", "Business rules"],
              ["6", "Update payment method", "Workflow"],
            ],
            colWidths: [0.8, 4.6, 1.8],
          },
          callout: "Illustrative epic. The Product Owner can now order slices by value and stop when enough has shipped.",
        },
      ),
      s(
        "example",
        "Live example: 'Search products' — thin slices in order",
        {
          steps: [
            { label: "Slice 1 — basic keyword search", detail: "Type a word, see products whose title contains it. Ship, watch what people search for." },
            { label: "Slice 2 — filter by category", detail: "Added because Slice 1 showed people searching for broad terms." },
            { label: "Slice 3 — sort by price", detail: "Small and independent; can be built in parallel." },
            { label: "Slice 4 — tolerate typos", detail: "Only worth doing if search logs show frequent misspellings." },
            { label: "Slice 5 — saved searches", detail: "Deferred until we know whether people return to the same search." },
          ],
          callout: "Each slice was chosen using what the previous slice taught us — that is the point of slicing.",
        },
      ),
      s(
        "usage",
        "Where slicing pays off in real life",
        {
          bullets: [
            "Refinement: split anything too big to finish in a few days before it reaches Sprint Planning",
            "Sprint Planning: several small items give a clearer, more flexible plan than one large one",
            "Minimum viable product: the first slices across the journey are the MVP",
            "Forecasting: many similar-sized items make throughput-based forecasts more reliable",
            "Stakeholder conversations: 'we can ship this piece next week' beats 'it is 80% done'",
          ],
        },
      ),
      s(
        "pitfalls",
        "Slicing mistakes to watch for",
        {
          bullets: [
            "Splitting by technical layer (front end story, back end story) and calling it 'slicing'",
            "Slices so small they cannot be tested or demonstrated on their own",
            "Losing the bigger picture — keep the parent goal visible so slices stay coherent",
            "Slicing only in the technical team; the Product Owner must agree the value order",
            "Skipping the 'unknown' — if the risk is technical, use a timeboxed spike first",
          ],
        },
      ),
      s(
        "activity",
        "Try it: slice one of our real stories",
        {
          steps: [
            { label: "Pick a real, oversized story (5 min)", detail: "Choose something from our backlog that would take more than a Sprint." },
            { label: "Try three patterns (20 min)", detail: "In small groups, use workflow, rules and data variations — write each slice on a sticky." },
            { label: "Apply INVEST and the quick check (15 min)", detail: "Reject any slice that is a layer or that is not valuable on its own." },
            { label: "Agree the order (10 min)", detail: "Which slice gives the most value or learning first? Put it at the top of the backlog." },
          ],
        },
      ),
      takeaways(
        [
          "Small, vertical slices give faster feedback, lower risk and more predictable Sprints",
          "INVEST is a conversation checklist; SPIDR and splitting patterns give concrete moves",
          "Each slice must still deliver value or learning — otherwise it is just a task",
          "Order slices by what they teach us; stop when enough value has shipped",
        ],
      ),
      sourcesSlide([
        src("Article", "INVEST in Good Stories, and SMART Tasks", "Bill Wake", "The original INVEST checklist article (xp123.com)."),
        src("Book", "User Stories Applied", "Mike Cohn", "Writing, splitting and estimating user stories."),
        src("Article", "SPIDR: Five Simple Techniques for Splitting a User Story", "Mike Cohn, Mountain Goat Software", "The five SPIDR questions with examples."),
        src("Guide", "Patterns for Splitting User Stories", "Richard Lawrence, Humanizing Work", "A well-known catalogue of story-splitting patterns."),
        src("Book", "User Story Mapping", "Jeff Patton", "Where slicing fits into a whole-product view."),
      ]),
    ],
  },

  // ───────────────────────────────────────── Estimation & Yesterday's Weather
  {
    workshopSlug: "estimation-yesterdays-weather",
    title: "Estimation of User Stories, Yesterday's Weather",
    subtitle: "Relative sizing, honest forecasting, and using what we actually did",
    slides: [
      titleSlide("Estimation of User Stories, Yesterday's Weather", "Relative sizing, honest forecasting, and using what we actually did"),
      objectives([
        "Explain why we estimate — and what estimates are and are not for",
        "Size stories relatively using story points and reference stories",
        "Run a planning poker round and use disagreement productively",
        "Apply 'Yesterday's Weather' to set a realistic Sprint capacity",
        "Recognise when estimation effort stops paying for itself",
      ]),
      icebreaker(
        {
          name: "Guess the jar",
          time: "8 min",
          steps: [
            "Show a jar of sweets (or a picture). Everyone writes an individual guess of the count",
            "Calculate the group average and compare with the real count",
            "Discuss: was the group closer than most individuals?",
            "Link to planning poker: many independent views beat one loud one",
          ],
        },
        {
          name: "Size things relatively",
          time: "8 min",
          steps: [
            "Give cards: mouse, cat, dog, horse, elephant",
            "Order them from smallest to biggest without measuring",
            "Then ask: how many times bigger is the dog than the cat?",
            "Notice how easy relative comparison is, and how hard exact numbers are",
          ],
        },
        "The same instinct underlies story points: we are far better at comparing sizes than at predicting exact durations.",
      ),
      s(
        "concept",
        "Why we estimate at all",
        {
          bullets: [
            "To forecast: roughly how much can we take on, and when might this be done?",
            "To start a conversation: differing numbers reveal hidden assumptions and risks",
            "To help the Product Owner make trade-offs between value and cost",
            "Estimates are forecasts, not promises — accuracy has limits, especially early on",
            "The conversation is often worth more than the number",
          ],
          callout: "If estimating does not change a decision or reveal a risk, we are probably over-investing in it.",
        },
      ),
      s(
        "concept",
        "Absolute vs. relative estimation",
        {
          columns: [
            {
              heading: "Absolute (hours, days)",
              bullets: [
                "'This will take 3 days' — feels precise",
                "Depends heavily on who does the work",
                "Easy to turn into a commitment or a deadline",
                "People are consistently over-optimistic",
              ],
            },
            {
              heading: "Relative (story points)",
              bullets: [
                "'This is about twice as big as that one'",
                "Compares effort, complexity and uncertainty together",
                "Independent of individual speed — the team estimates",
                "Faster, and quality of discussion improves",
              ],
            },
          ],
        },
      ),
      s(
        "concept",
        "Story points and reference stories",
        {
          bullets: [
            "Points measure relative size: effort, complexity and uncertainty combined — not hours",
            "A common scale is 1, 2, 3, 5, 8, 13 — gaps grow because larger items are less certain",
            "Choose one or two reference stories the team knows well (for example, a '3' and a '5')",
            "Compare each new story to references: 'is it bigger or smaller than our 5?'",
            "Very large items (13 and above) are usually a signal to slice the story",
          ],
          callout: "Points belong to one team. Never compare one team's points with another's.",
        },
      ),
      s(
        "concept",
        "Planning poker in six steps",
        {
          steps: [
            { label: "Product Owner explains the story", detail: "A short description and the acceptance criteria." },
            { label: "Team asks questions", detail: "Clarify scope and unknowns before anyone estimates." },
            { label: "Everyone picks a card privately", detail: "So nobody is anchored by a senior voice." },
            { label: "Reveal together", detail: "Cards turned at the same time." },
            { label: "Discuss the highest and lowest", detail: "The outliers explain their reasoning — often a missed assumption." },
            { label: "Re-vote until the estimates converge", detail: "Or split the story if the disagreement is about scope." },
          ],
          callout: "Technique described by James Grenning (2002) and popularised by Mike Cohn.",
        },
      ),
      s(
        "concept",
        "Yesterday's Weather",
        {
          bullets: [
            "An Extreme Programming idea: the best predictor of what we can do next Sprint is what we actually did recently",
            "Look at completed work (Done items only) from the last 3–6 Sprints",
            "Use the average as a starting point and the min–max as the honest range",
            "Adjust for known changes: holidays, leave, new joiners, planned support duty",
            "It replaces optimistic re-estimation each Sprint with evidence",
          ],
          callout: "Named after weather forecasting: 'tomorrow will most likely be like today.'",
        },
      ),
      s(
        "concept",
        "Estimates get better as we learn",
        {
          bullets: [
            "The 'cone of uncertainty' (Barry Boehm): early estimates can be far off, and the range narrows as work progresses",
            "So give ranges early and refine them as unknowns are resolved",
            "Slicing and spikes reduce uncertainty; more meetings do not",
            "Alternatives exist: count items completed per week, or use cycle-time forecasts (see the metrics articles)",
            "Choose the lightest approach that still supports our decisions",
          ],
        },
      ),
      s(
        "example",
        "Live example: Yesterday's Weather in numbers",
        {
          table: {
            headers: ["Step", "Calculation", "Result"],
            rows: [
              ["Last three Sprints (Done points)", "21, 18, 24", "Average = (21 + 18 + 24) ÷ 3 = 21"],
              ["Honest range from history", "Lowest 18, highest 24", "18–24 points"],
              ["Adjust: two of ten people on leave (20%)", "21 × 0.8 = 16.8; 18 × 0.8 = 14.4; 24 × 0.8 = 19.2", "Plan about 17 (range 14–19)"],
              ["Plan the Sprint", "Pull items until roughly 17 points, leave slack for the unexpected", "Sprint Goal first, extras after"],
            ],
            colWidths: [2.4, 2.9, 2.2],
          },
          callout: "Illustrative numbers. Yesterday's Weather gives a starting point — the team still decides what it can commit to.",
        },
      ),
      s(
        "example",
        "Live example: an outlier that saved the Sprint",
        {
          steps: [
            { label: "Story", detail: "'Show order history on the profile page.'" },
            { label: "First reveal", detail: "Estimates: 3, 3, 5 and 13." },
            { label: "Outlier explains", detail: "The 13 says: 'Order data is in the old system — it needs a data migration nobody mentioned.'" },
            { label: "New information", detail: "The team splits it: read from the new system now (3), plan migration separately." },
            { label: "Second reveal", detail: "Estimates converge on 3, and the migration becomes its own backlog item with a proper estimate." },
          ],
          callout: "Illustrative scenario. The value of the round was the disagreement, not the average.",
        },
      ),
      s(
        "usage",
        "Using estimates in real life",
        {
          bullets: [
            "Sprint Planning: use Yesterday's Weather to check the forecast against a realistic capacity",
            "Release forecasting: 120 points remaining ÷ 21 average ≈ 5.7 Sprints; with 18–24 that is roughly 5–7 Sprints",
            "Communicating with stakeholders: give a range and what would change it, not a single date",
            "Capacity for holidays and support duty: scale the average by available people",
            "Deciding when to stop estimating: if items are similar size, counting them may be enough",
          ],
        },
      ),
      s(
        "pitfalls",
        "Estimation traps",
        {
          bullets: [
            "Converting points into hours — this undoes the reason for using points",
            "Comparing velocities between teams, or pushing a team to 'improve' its points",
            "False precision: arguing whether a story is 5 or 8 for ten minutes",
            "Re-estimating finished work to make the numbers look better",
            "Treating estimates as commitments and punishing variance",
          ],
        },
      ),
      s(
        "activity",
        "Try it: estimate real items and apply Yesterday's Weather",
        {
          steps: [
            { label: "Choose reference stories (10 min)", detail: "Agree one 'small' and one 'medium' story from our past work." },
            { label: "Estimate 5–6 upcoming items (25 min)", detail: "Planning poker; write down each discussion outlier's reason." },
            { label: "Calculate Yesterday's Weather (10 min)", detail: "Use our last 3 Sprints; adjust for planned leave; note the range." },
            { label: "Reflect (5 min)", detail: "Which items should be sliced or investigated before Sprint Planning?" },
          ],
        },
      ),
      takeaways(
        [
          "Estimates are forecasts that start a conversation — not promises",
          "Relative sizing with reference stories is quicker and often more reliable than hours",
          "Yesterday's Weather uses what we really delivered, as a range, adjusted for known changes",
          "Stop investing when extra estimating stops changing decisions",
        ],
      ),
      sourcesSlide([
        src("Book", "Agile Estimating and Planning", "Mike Cohn", "The standard reference on story points, planning poker and velocity."),
        src("Book", "Extreme Programming Explained", "Kent Beck", "The origin of Yesterday's Weather and other planning ideas in XP."),
        src("Article", "Planning Poker or How to Avoid Analysis Paralysis while Release Planning", "James Grenning (2002)", "The original planning poker write-up."),
        src("Book", "When Will It Be Done?", "Daniel Vacanti", "Probabilistic forecasting from historical flow data — an alternative to estimates."),
        src("Book", "Software Estimation: Demystifying the Black Art", "Steve McConnell", "Why estimates are uncertain, the cone of uncertainty and how to give ranges."),
      ]),
    ],
  },

  // ───────────────────────────────────────── DoR, DoD, AC
  {
    workshopSlug: "dor-dod-ac",
    title: "DoR, DoD, AC",
    subtitle: "Making 'ready', 'done' and 'accepted' explicit for our team",
    slides: [
      titleSlide("DoR, DoD, AC", "Making 'ready', 'done' and 'accepted' explicit for our team"),
      objectives([
        "Define Definition of Ready, Definition of Done and Acceptance Criteria — and how they differ",
        "Explain why the Definition of Done is a Scrum commitment while Definition of Ready is optional",
        "Write acceptance criteria that are specific, testable and cover edge cases",
        "Draft a first Definition of Done and Definition of Ready for our team",
        "Decide where they live and how they will be enforced",
      ]),
      icebreaker(
        {
          name: "What does 'done' mean?",
          time: "6 min",
          steps: [
            "Ask everyone to write what 'done' means for cleaning a kitchen",
            "Compare the answers: dishes? wiped surfaces? floor? bin taken out?",
            "Ask how it would feel if you thought you were done and your flatmate did not",
            "Link to software: work called done that is not done for someone else",
          ],
        },
        {
          name: "Order a vague coffee",
          time: "6 min",
          steps: [
            "One volunteer orders 'a good coffee' from another who has to deliver it",
            "Deliver something plausible but wrong; the customer says 'not what I meant'",
            "Repeat with clear acceptance criteria: size, milk, temperature, strength",
            "Debrief: what changed once the criteria were explicit?",
          ],
        },
        "Both exercises show the same problem: unspoken standards. These three definitions make them spoken.",
      ),
      s(
        "concept",
        "Three terms, three scopes",
        {
          table: {
            headers: ["Term", "Applies to", "Owned by", "Purpose"],
            rows: [
              ["Definition of Ready (DoR)", "A story before it enters a Sprint", "Team with the Product Owner", "Reduce risk from unclear work — an optional practice, not part of the Scrum Guide"],
              ["Definition of Done (DoD)", "Every Increment, all the time", "The Scrum Team (organisation may set a minimum)", "A formal commitment: the shared standard for 'complete'"],
              ["Acceptance Criteria (AC)", "One specific story", "Product Owner with the team", "Testable conditions for this story to be accepted"],
            ],
            colWidths: [1.7, 1.6, 1.8, 2.7],
          },
          callout: "AC says 'this story works'. DoD says 'this work is built to our quality standard'. Both must be true.",
        },
      ),
      s(
        "concept",
        "What goes into a Definition of Done",
        {
          columns: [
            {
              heading: "Built well",
              bullets: [
                "Code reviewed by a peer",
                "Automated tests written and passing",
                "No known critical defects",
                "Meets agreed non-functional needs (performance, security, accessibility)",
              ],
            },
            {
              heading: "Ready to use",
              bullets: [
                "Integrated with the main branch and built",
                "Deployed to an agreed environment (or releasable)",
                "Acceptance criteria verified against the running product",
                "Documentation or release notes updated where relevant",
              ],
            },
          ],
          callout: "An item that does not meet the DoD cannot be treated as done — it returns to the Product Backlog.",
        },
      ),
      s(
        "concept",
        "Writing good acceptance criteria",
        {
          columns: [
            {
              heading: "Qualities",
              bullets: [
                "Specific: no words like 'fast' or 'user-friendly' without a measure",
                "Testable: a person could check yes or no",
                "Include failure and edge cases, not only the happy path",
                "A handful per story — many criteria usually mean the story is too big",
              ],
            },
            {
              heading: "Two common formats",
              bullets: [
                "Checklist: 'Promo code field accepts up to 12 characters'",
                "Given–When–Then scenarios, from behaviour-driven development",
                "Choose the format that the team and Product Owner find clearest",
                "Write them during refinement, before the Sprint — not after coding",
              ],
            },
          ],
        },
      ),
      s(
        "concept",
        "Given–When–Then in practice",
        {
          table: {
            headers: ["Given (context)", "When (action)", "Then (outcome)"],
            rows: [
              ["A basket worth $50 and a valid 10% code", "The shopper applies the code", "The total shows $45 and the code is marked applied"],
              ["An expired code", "The shopper applies it", "An 'expired' message appears; the total is unchanged"],
              ["A code already used on this account", "The shopper applies it again", "The system rejects it with a clear message"],
              ["A code typed in lower case", "The shopper applies it", "It is accepted the same as upper case"],
            ],
            colWidths: [2.5, 2.2, 2.9],
          },
          callout: "Behaviour-driven development style popularised by Dan North. The value is shared understanding, not the syntax.",
        },
      ),
      s(
        "concept",
        "Definition of Ready: use with care",
        {
          bullets: [
            "A simple checklist for whether a story is clear enough to plan: value understood, acceptance criteria written, dependencies known, small enough",
            "INVEST is a good starting point for the checklist",
            "Treat it as a conversation guide, not a gate that blocks the Product Owner",
            "Keep it short and revisit it — a heavy DoR slows the team and hides ambiguity",
            "It is not part of the Scrum Guide; some teams do well without one",
          ],
          callout: "If the DoR becomes a reason to reject work, it has become bureaucracy.",
        },
      ),
      s(
        "example",
        "Live example: a story with its criteria and DoD",
        {
          columns: [
            {
              heading: "Story and acceptance criteria",
              bullets: [
                "As a shopper, I want to apply a promo code so that I pay less",
                "Valid code reduces the total and shows the discount",
                "Expired, used or unknown codes give a clear message",
                "Only one code per order; codes ignore letter case",
              ],
            },
            {
              heading: "Team Definition of Done (excerpt)",
              bullets: [
                "Peer-reviewed; unit and integration tests pass",
                "Deployed to test environment and demoed to the Product Owner",
                "No new accessibility or security warnings",
                "Support notes and release notes updated",
              ],
            },
          ],
          callout: "Illustrative example — your own criteria and standard should reflect your product and risks.",
        },
      ),
      s(
        "usage",
        "Where these definitions matter in real life",
        {
          bullets: [
            "Refinement: acceptance criteria uncover missing edge cases before we build",
            "Sprint Review: only work that meets the DoD is presented as done",
            "Outsourcing and vendors: an explicit DoD prevents disputes about 'finished' work",
            "Regulated industries: DoD items can include audit evidence and traceability",
            "Under deadline pressure: the DoD is what protects quality from quiet compromise",
          ],
        },
      ),
      s(
        "pitfalls",
        "Where these definitions go wrong",
        {
          bullets: [
            "A Definition of Done written as aspiration that nobody can meet — so it is quietly ignored",
            "Acceptance criteria written after the code, to match what was built",
            "Too many criteria on one story — a sign it needs slicing",
            "A Definition of Ready used to block the Product Owner",
            "Definitions living in a wiki nobody opens instead of on the board",
          ],
        },
      ),
      s(
        "activity",
        "Try it: build our three definitions",
        {
          steps: [
            { label: "Draft the Definition of Done (20 min)", detail: "Silent brainstorm, cluster, then agree a checklist we can actually meet today." },
            { label: "Draft a short Definition of Ready (15 min)", detail: "Five to seven items; mark any we would not enforce strictly." },
            { label: "Rewrite acceptance criteria (20 min)", detail: "Take a real vague story and rewrite its criteria as testable scenarios." },
            { label: "Decide visibility and enforcement (10 min)", detail: "Put both checklists on the board; can our tool enforce fields or reviews?" },
          ],
        },
      ),
      takeaways(
        [
          "AC: one story. DoD: every Increment. DoR: an optional check before planning",
          "The DoD is a Scrum commitment — work that does not meet it is not done",
          "Good acceptance criteria are specific, testable and cover edge cases",
          "Keep the definitions short, visible and revisited as the team improves",
        ],
      ),
      sourcesSlide([
        src("Guide", "The Scrum Guide — Definition of Done", "Ken Schwaber & Jeff Sutherland", "The official statement of the DoD as a commitment.", "https://scrumguides.org"),
        src("Book", "Specification by Example", "Gojko Adzic", "Using concrete examples as shared acceptance criteria."),
        src("Article", "Introducing BDD", "Dan North (2006)", "The origin of Given–When–Then style scenarios."),
        src("Book", "User Stories Applied", "Mike Cohn", "Writing stories and acceptance tests together."),
        src("Website", "Scrum.org — Definition of Done resources", "Scrum.org", "Articles and guidance on the DoD from Scrum.org.", "https://www.scrum.org"),
      ]),
    ],
  },

  // ───────────────────────────────────────── User Story Mapping
  {
    workshopSlug: "user-story-mapping",
    title: "User Story Mapping",
    subtitle: "Seeing the whole user journey — and slicing the smallest useful release",
    slides: [
      titleSlide("User Story Mapping", "Seeing the whole user journey — and slicing the smallest useful release"),
      objectives([
        "Explain what a story map is and why a flat backlog hides the user's journey",
        "Describe the parts of a map: activities, steps and details",
        "Build a simple map together from the user's point of view",
        "Slice a walking skeleton and release lines across the whole journey",
        "Keep the map alive alongside the team's backlog tool",
      ]),
      icebreaker(
        {
          name: "Map your morning",
          time: "8 min",
          steps: [
            "Everyone draws their morning, left to right, from waking to starting work",
            "Write big activities on top (get ready, travel, arrive) and detail steps underneath",
            "Compare maps in pairs: what did others include or skip?",
            "Ask: which steps could you drop and still have a usable morning?",
          ],
        },
        {
          name: "The smallest trip that counts",
          time: "6 min",
          steps: [
            "Plan a road trip: what is the smallest trip that would still count as a real holiday?",
            "Groups list what must be there and what can wait",
            "Share: was 'the smallest trip' shorter than a full plan — but still a whole trip?",
            "Link to a minimum viable release: complete journey, thin version",
          ],
        },
        "The morning map shows the structure; the road trip shows the idea of a thin end-to-end slice.",
      ),
      s(
        "concept",
        "Why a flat backlog is not enough",
        {
          bullets: [
            "A long, ordered list of stories hides the user's journey and how items relate",
            "Teams lose context: 'what is this story for?' and 'what else is missing?'",
            "Prioritising by item leads to building one area in depth and leaving gaps elsewhere",
            "Story mapping (from Jeff Patton) lays out the journey visually, so we see the whole",
            "Discussions shift from features to the user's goals and outcomes",
          ],
          callout: "A map keeps the big picture in front of us while we plan small slices.",
        },
      ),
      s(
        "concept",
        "Anatomy of a story map",
        {
          table: {
            headers: ["Layer", "What it holds", "Example (library app)"],
            rows: [
              ["Backbone — user activities", "Big things users do, in time order, left to right", "Find a book · Borrow it · Read and return · Get help"],
              ["Steps — user tasks", "What the user does within each activity", "Search by title, view availability, reserve"],
              ["Details — stories and variations", "Specific stories stacked below, most important on top", "Search by author; filter by language; voice search"],
              ["Release lines", "Horizontal slices across the whole map", "Release 1: a thin end-to-end version"],
            ],
            colWidths: [2, 2.8, 3],
          },
        },
      ),
      s(
        "concept",
        "How to build a map together",
        {
          steps: [
            { label: "Frame the goal and the users", detail: "Who is the user? What outcome do they want?" },
            { label: "Tell the story left to right", detail: "Write what the user does, one sticky per step, in time order." },
            { label: "Group into activities (the backbone)", detail: "Cluster similar steps under a higher-level activity." },
            { label: "Explore details and alternatives", detail: "Under each step, add variations, edge cases and different users." },
            { label: "Prioritise vertically, slice horizontally", detail: "Most important on top; draw release lines across the whole journey." },
          ],
        },
        "Encourage everyone to write stories simultaneously and to talk through the map aloud. The shared conversation is the real deliverable.",
      ),
      s(
        "concept",
        "Slicing a release: walking skeleton and thin slices",
        {
          bullets: [
            "A 'walking skeleton' is the thinnest end-to-end version that actually works across the whole journey",
            "Draw a release line across all activities, choosing one or two of the most important stories under each",
            "Slice by outcome and learning: what do we need to find out with the first release?",
            "Avoid building activity one in full before starting activity two",
            "Later release lines add depth, alternatives and polish based on real feedback",
          ],
          callout: "One thin slice across the journey beats a complete first activity and nothing else.",
        },
      ),
      s(
        "concept",
        "Keep the map alive",
        {
          bullets: [
            "Use it in refinement to find gaps and to split large stories into thin slices",
            "Update it as we learn — the map is a living picture, not a one-off artefact",
            "Link it to the backlog tool: epics for activities, stories for details, labels for release lines",
            "For remote teams, use a shared digital whiteboard and keep the map visible",
            "Bring stakeholders to it: a map explains scope and trade-offs better than a list",
          ],
        },
      ),
      s(
        "example",
        "Live example: a library app map and its first release",
        {
          table: {
            headers: ["Activity", "User tasks (steps)", "Release 1 — walking skeleton"],
            rows: [
              ["Find a book", "Search by title · Search by author · Browse categories", "Search by title only"],
              ["Borrow it", "Check availability · Borrow with library card · Reserve if out", "Borrow with existing card"],
              ["Read and return", "Read online · Return · Renew · Get reminders", "Return and see due date"],
              ["Get help", "Contact library · FAQ · Chat", "Email link"],
            ],
            colWidths: [1.4, 3.4, 2.6],
          },
          callout: "Illustrative map. Release 1 is a whole journey — thin but real — that we can put in front of readers.",
        },
      ),
      s(
        "usage",
        "Where story mapping helps in real life",
        {
          bullets: [
            "Starting a new product or a big new feature area",
            "Explaining scope to stakeholders and negotiating what goes in the first release",
            "Onboarding new team members: the map is the fastest way to understand the product",
            "Planning an MVP or a proof of concept across several teams",
            "Finding missing work early — gaps in the journey become visible",
          ],
        },
      ),
      s(
        "pitfalls",
        "Common story-mapping mistakes",
        {
          bullets: [
            "Mapping features and systems instead of the user's journey",
            "Going too deep too early, before the backbone is clear",
            "Treating the finished map as a plan that never changes",
            "Building the map without the Product Owner or without any user insight",
            "Building activity by activity instead of slicing thin across the whole journey",
          ],
        },
      ),
      s(
        "activity",
        "Try it: map a real journey",
        {
          steps: [
            { label: "Choose a user and a goal (10 min)", detail: "A real persona and the outcome they want from our product." },
            { label: "Tell the story left to right (30 min)", detail: "Write user steps on stickies in the order they happen; group into activities." },
            { label: "Add details and alternatives (30 min)", detail: "Stack variations and edge cases beneath each step, best on top." },
            { label: "Draw the first release line (30 min)", detail: "Pick a thin slice across the whole journey." },
            { label: "Discuss what is deferred (15 min)", detail: "Agree what is not in Release 1, and why." },
          ],
        },
      ),
      takeaways(
        [
          "A story map shows the user's journey; a flat backlog hides it",
          "Backbone → steps → details, with release lines drawn across the whole map",
          "The first release is a thin end-to-end walking skeleton",
          "Keep the map alive and use it in refinement and stakeholder conversations",
        ],
      ),
      sourcesSlide([
        src("Book", "User Story Mapping", "Jeff Patton with Peter Economy", "The definitive book on building and using story maps."),
        src("Article", "The New User Story Backlog is a Map", "Jeff Patton", "The original short article that introduced the idea."),
        src("Book", "Impact Mapping", "Gojko Adzic", "A complementary technique that ties features to business goals."),
        src("Book", "Lean UX", "Jeff Gothelf & Josh Seiden", "Working from hypotheses and outcomes rather than output."),
        src("Article", "User Story Slicing deck on this site", "ScrumMaster Hub", "Use slicing to split the details you place under each step.", "https://scrummaster-hub.vercel.app/workshops/backlog-estimation-delivery/user-story-slicing"),
      ]),
    ],
  },

  // ───────────────────────────────────────── Velocity
  {
    workshopSlug: "velocity-and-its-importance",
    title: "Velocity and Its Importance to the Team",
    subtitle: "A forecasting tool for the team — not a performance score",
    slides: [
      titleSlide("Velocity and Its Importance to the Team", "A forecasting tool for the team — not a performance score"),
      objectives([
        "Define velocity precisely and calculate it from Done work",
        "Use velocity as a range to forecast Sprints and release dates",
        "Explain what influences velocity and how to read a trend",
        "Explain why targets and cross-team comparisons backfire (Goodhart's law)",
        "Agree our team's ground rules for how velocity will and will not be used",
      ]),
      icebreaker(
        {
          name: "Commute-time forecast",
          time: "6 min",
          steps: [
            "Everyone writes down their commute (or a routine trip) for the last five days",
            "Compute the average and the fastest/slowest",
            "Ask: what time would you tell a friend to expect you — one number or a range?",
            "Link to velocity: recent history gives a range, not a promise",
          ],
        },
        {
          name: "Steps-per-day guess",
          time: "6 min",
          steps: [
            "Each person estimates how many steps they will walk tomorrow",
            "Compare with what their recent days actually looked like",
            "Discuss: is yesterday a better predictor than optimism?",
            "Link to Yesterday's Weather and velocity",
          ],
        },
        "Both games use the same logic as velocity: recent actuals beat wishful thinking as a forecast.",
      ),
      s(
        "concept",
        "What velocity is — and how it is calculated",
        {
          bullets: [
            "The amount of work (usually story points) a team completes in a Sprint",
            "Count only items that are fully Done — no partial credit for started work",
            "Specific to one team's own estimating scale; points are not a universal unit",
            "Plot it over time and look at the range, not just the last number",
            "It describes the past; it is not a target for the future",
          ],
          callout: "Velocity = sum of points of items that met the Definition of Done in the Sprint.",
        },
      ),
      s(
        "concept",
        "What velocity is for",
        {
          columns: [
            {
              heading: "Good uses",
              bullets: [
                "Forecasting how much we can take into the next Sprint",
                "Forecasting a release: remaining points ÷ velocity",
                "Spotting trends: something changed in how we work",
                "Conversations about capacity, leave and interruptions",
              ],
            },
            {
              heading: "Misuses",
              bullets: [
                "A target ('increase by 10% next quarter')",
                "Comparing teams or ranking them",
                "Judging individuals",
                "Reporting it to executives as productivity",
              ],
            },
          ],
        },
      ),
      s(
        "concept",
        "What moves velocity",
        {
          table: {
            headers: ["Factor", "How it shows up"],
            rows: [
              ["Team changes (people join, leave, leave on holiday)", "Available capacity rises or falls"],
              ["Unplanned work (incidents, support)", "Fewer planned items finish"],
              ["Technical debt and quality issues", "Work slows and rework grows"],
              ["Estimation drift", "Points quietly inflate or deflate over time"],
              ["Story size and clarity", "Big, unclear items finish late or partially"],
            ],
            colWidths: [3.2, 3],
          },
        },
      ),
      s(
        "concept",
        "Reading a velocity trend",
        {
          table: {
            headers: ["Pattern", "Possible meaning", "What to ask"],
            rows: [
              ["Stable within a range", "Predictable delivery", "Can we use the range for forecasting?"],
              ["Steadily rising", "Real improvement — or point inflation", "Did cycle time or stories completed change too?"],
              ["Sudden drop", "Absence, incident, tech debt, or new people", "What changed this Sprint?"],
              ["Volatile", "Large or unclear stories; interruptions", "Can we slice smaller and protect focus?"],
            ],
            colWidths: [1.7, 2.7, 3],
          },
        },
      ),
      s(
        "concept",
        "Goodhart's law: when the measure becomes the target",
        {
          bullets: [
            "'When a measure becomes a target, it ceases to be a good measure' — the idea usually credited to Charles Goodhart",
            "If velocity is rewarded, people adjust points, not delivery",
            "Points inflate; conversations about real value fade; trust in the number is lost",
            "Pair velocity with outcome measures: cycle time, quality, customer feedback",
            "Ask 'what decision does this number support?' before reporting it",
          ],
          callout: "Protect velocity by keeping it inside the team and only for forecasting.",
        },
      ),
      s(
        "example",
        "Live example: forecasting a release from history",
        {
          columns: [
            {
              heading: "Done points, last six Sprints",
              bullets: [
                "Sprint 1: 18  ·  Sprint 2: 22  ·  Sprint 3: 20",
                "Sprint 4: 25  ·  Sprint 5: 19  ·  Sprint 6: 21",
                "Average of all six ≈ 20.8; average of the last three ≈ 21.7",
                "Lowest 18, highest 25 — this is our honest range",
              ],
            },
            {
              heading: "Forecast: 130 points remaining",
              bullets: [
                "Best case: 130 ÷ 25 ≈ 5.2 Sprints",
                "Likely: 130 ÷ 21 ≈ 6.2 Sprints",
                "Cautious: 130 ÷ 18 ≈ 7.2 Sprints",
                "Round up, since only whole Sprints exist on the calendar",
              ],
            },
          ],
          callout: "Share with stakeholders: 'most likely 6–7 Sprints; 5–6 if all goes well; 7–8 if it does not.'",
        },
        "Illustrative numbers. Always give the range and what would move it, never a single date.",
      ),
      s(
        "example",
        "Live example: when a target inflated the number",
        {
          table: {
            headers: ["Measure", "Before target", "After target ('+20%')"],
            rows: [
              ["Velocity (points per Sprint)", "20", "24"],
              ["Stories completed per Sprint", "7", "7"],
              ["Average cycle time per story", "5 days", "5 days"],
              ["What people actually received", "7 finished stories per Sprint", "7 finished stories per Sprint"],
            ],
            colWidths: [2.8, 2, 2.4],
          },
          callout: "Illustrative scenario. The number rose 20% but delivery did not change: the team re-sized its stories.",
        },
      ),
      s(
        "usage",
        "Using velocity well in real life",
        {
          bullets: [
            "Sprint Planning: compare the plan against the range from the last 3–6 Sprints",
            "Release conversations: give a range and what would change it, not one date",
            "Leave and holidays: scale expected capacity by people available",
            "When leadership asks for velocity comparisons: explain points are team-specific and offer outcome measures instead",
            "Retrospectives: use a drop or rise as a question, not a verdict",
          ],
        },
      ),
      s(
        "pitfalls",
        "How velocity gets misused",
        {
          bullets: [
            "Setting a velocity target or celebrating an increase",
            "Comparing velocities across teams or showing them side by side",
            "Counting partially finished work",
            "Changing the estimation scale mid-way and comparing before and after",
            "Reporting velocity outside the team without context",
          ],
        },
      ),
      s(
        "activity",
        "Try it: forecast and agree our ground rules",
        {
          steps: [
            { label: "Chart our last 6 Sprints (10 min)", detail: "Plot Done points; note anything unusual for each Sprint." },
            { label: "Compute range and forecast (10 min)", detail: "Average, min, max; divide the remaining backlog by each." },
            { label: "Discuss the trend (10 min)", detail: "Is it stable, rising or volatile? What is behind it?" },
            { label: "Agree ground rules (10 min)", detail: "Velocity stays in the team, is never a target, and is never used to compare teams." },
            { label: "Prepare a shared reply (5 min)", detail: "What we say if someone asks to compare velocity across teams." },
          ],
        },
      ),
      takeaways(
        [
          "Velocity is Done points per Sprint, specific to one team, and useful for forecasting ranges",
          "Read trends as questions: what changed?",
          "Targets and comparisons make the number meaningless (Goodhart's law)",
          "Agree ground rules and pair velocity with outcome measures",
        ],
      ),
      sourcesSlide([
        src("Book", "Agile Estimating and Planning", "Mike Cohn", "The standard treatment of velocity and release forecasting."),
        src("Book", "Actionable Agile Metrics for Predictability", "Daniel Vacanti", "Flow metrics as an alternative to points-based velocity."),
        src("Article", "The Velocity Conversation", "ScrumMaster Hub", "How to respond when leadership asks why velocity has not gone up.", "https://scrummaster-hub.vercel.app/resources/articles/metrics/velocity-conversation-with-leadership"),
        src("Guide", "The Scrum Guide — forecasting in Sprint Planning", "Ken Schwaber & Jeff Sutherland", "How the team forecasts what it can complete.", "https://scrumguides.org"),
        src("Research", "Goodhart's law", "Charles Goodhart; phrased by Marilyn Strathern", "The origin of 'when a measure becomes a target, it ceases to be a good measure'."),
      ]),
    ],
  },

  // ───────────────────────────────────────── DevOps and Pair Programming
  {
    workshopSlug: "intro-to-devops-and-pair-programming",
    title: "Introduction to DevOps and Pair Programming",
    subtitle: "Shared ownership of delivery, and working side by side to build quality in",
    slides: [
      titleSlide("Introduction to DevOps and Pair Programming", "Shared ownership of delivery, and working side by side to build quality in"),
      objectives([
        "Explain DevOps as a culture and a set of practices, not a team or a tool",
        "Describe the stages of a delivery pipeline and why automation matters",
        "Name the commonly used delivery metrics and what they tell us",
        "Describe pair programming, ping-pong pairing and mob programming",
        "Decide when pairing helps — and design a small experiment for our team",
      ]),
      icebreaker(
        {
          name: "Over the wall",
          time: "6 min",
          steps: [
            "Each person shares a time work was 'thrown over the wall' to someone else and came back broken",
            "What was missing at the handoff: context, tests, access, time?",
            "Capture the causes on stickies",
            "Ask: who could have owned it end to end?",
          ],
        },
        {
          name: "Back-to-back drawing",
          time: "10 min",
          steps: [
            "Pairs sit back to back; one describes a simple drawing, the other draws without seeing it",
            "Round 1: the describer cannot see the drawing; round 2: they can, and can talk both ways",
            "Compare results",
            "Link to pairing: shared context and continuous feedback improve the result",
          ],
        },
        "The first shows why DevOps exists; the second shows why pairing works. Pick the one that fits your group.",
      ),
      s(
        "concept",
        "What DevOps is",
        {
          bullets: [
            "A culture and set of practices that bring development and operations together",
            "Shared ownership of the whole life of a product: build, release, run and improve",
            "Popularised by the idea 'you build it, you run it' (associated with Amazon's Werner Vogels)",
            "Goal: deliver value faster and more safely by shortening feedback loops",
            "It is not a job title, a team that receives handoffs, or a single tool",
          ],
          callout: "Connect to Scrum: a Definition of Done that includes 'deployable' and 'operable' is DevOps in action.",
        },
      ),
      s(
        "concept",
        "CALMS: the pillars of DevOps",
        {
          table: {
            headers: ["Pillar", "What it means", "Team example"],
            rows: [
              ["Culture", "Shared responsibility; blameless learning", "Developers join the on-call rotation"],
              ["Automation", "Automate build, test, deploy and infrastructure", "Every merge runs tests automatically"],
              ["Lean", "Small batches, limit work in progress, remove waste", "Deploy small changes daily instead of monthly"],
              ["Measurement", "Measure delivery and system health", "Track lead time and failures"],
              ["Sharing", "Share knowledge, tools and feedback", "Post-incident reviews shared openly"],
            ],
            colWidths: [1.3, 3, 3],
          },
          callout: "CALMS comes from Jez Humble, extending the CAMS model of Damon Edwards and John Willis.",
        },
      ),
      s(
        "concept",
        "The delivery pipeline",
        {
          steps: [
            { label: "Commit and integrate", detail: "Small changes merge frequently to a shared main branch (continuous integration)." },
            { label: "Build and test automatically", detail: "Unit, integration and acceptance tests run on every change." },
            { label: "Release candidate", detail: "A tested build is always ready to be released (continuous delivery)." },
            { label: "Deploy safely", detail: "Automated deploys with feature flags, canary releases and quick rollback." },
            { label: "Operate and monitor", detail: "Logs, metrics and alerts show what users experience." },
            { label: "Learn and feed back", detail: "Production insights flow back into the backlog and the Definition of Done." },
          ],
        },
      ),
      s(
        "concept",
        "Measuring delivery: the four key metrics",
        {
          table: {
            headers: ["Metric", "What it asks", "Direction"],
            rows: [
              ["Deployment frequency", "How often do we ship to production?", "More often is better"],
              ["Lead time for changes", "How long from commit to running in production?", "Shorter is better"],
              ["Change failure rate", "What share of changes cause a failure?", "Lower is better"],
              ["Time to restore service", "How quickly do we recover from a failure?", "Shorter is better"],
            ],
            colWidths: [2.2, 3.3, 1.8],
          },
          callout: "From the DORA research popularised in 'Accelerate'. Definitions evolve — check DORA's current guidance.",
        },
        "Use these as team-level measures for conversation, not as targets for individuals.",
      ),
      s(
        "concept",
        "Pair programming: styles",
        {
          columns: [
            {
              heading: "Driver–navigator",
              bullets: [
                "One types (driver); the other reviews and thinks ahead (navigator)",
                "Swap roles often, say every 15–30 minutes",
                "Talk continuously about intent, not just code",
              ],
            },
            {
              heading: "Ping-pong",
              bullets: [
                "One writes a failing test; the other makes it pass",
                "Then swap: the second writes the next failing test",
                "Works well with test-driven development",
              ],
            },
            {
              heading: "Mob programming",
              bullets: [
                "The whole team works on one thing, at one computer, at one time",
                "One driver; others navigate; rotate frequently",
                "Popularised by Woody Zuill; good for hard problems and shared learning",
              ],
            },
          ],
        },
      ),
      s(
        "concept",
        "When pairing helps — and when it does not",
        {
          columns: [
            {
              heading: "Often worth it",
              bullets: [
                "Complex, risky or unfamiliar code",
                "Onboarding new team members",
                "Spreading knowledge to remove single points of failure",
                "Tricky bugs where a second view speeds diagnosis",
              ],
            },
            {
              heading: "Often overkill",
              bullets: [
                "Simple, well-understood routine changes",
                "Work that needs deep solo thinking first",
                "When it is imposed as a rule for every task",
                "When people are physically or mentally drained",
              ],
            },
          ],
          callout: "Treat pairing as a tool for specific situations, not a universal mandate.",
        },
      ),
      s(
        "example",
        "Live example: from monthly release weekends to daily deploys",
        {
          columns: [
            {
              heading: "Before",
              bullets: [
                "One big release a month, run manually over a weekend",
                "Testing happens at the end; bugs found late",
                "Operations receives a package and a document",
                "Rollback is slow and stressful",
              ],
            },
            {
              heading: "After (six months)",
              bullets: [
                "Automated pipeline runs tests on every change",
                "Small changes deploy daily behind feature flags",
                "Developers share on-call and see production behaviour",
                "Failed deploys roll back in minutes",
              ],
            },
          ],
          callout: "Illustrative scenario. The team changed how it works together before it changed any tools.",
        },
      ),
      s(
        "usage",
        "Where this shows up in real life",
        {
          bullets: [
            "Definition of Done: includes automated tests, deployability and monitoring for new features",
            "Incident response: blameless reviews and shared on-call build learning",
            "Onboarding: a new developer pairs on real work in the first week",
            "Reducing risk: many small releases instead of one large, scary one",
            "Sprint Review: a working, deployed Increment rather than a demo from a laptop",
          ],
        },
      ),
      s(
        "pitfalls",
        "Common DevOps and pairing mistakes",
        {
          bullets: [
            "Creating a separate 'DevOps team' that becomes a new handoff",
            "Buying tools before improving collaboration and habits",
            "Automating a broken process instead of fixing it first",
            "Forcing pairing 100% of the time and burning people out",
            "Using delivery metrics to rank people or teams",
          ],
        },
      ),
      s(
        "activity",
        "Try it: design one small experiment",
        {
          steps: [
            { label: "Find our biggest delivery pain (10 min)", detail: "Manual deploys? Late testing? Knowledge held by one person?" },
            { label: "Pick one practice to try (10 min)", detail: "For example: automate one manual step, or pair on the next complex story." },
            { label: "Define how we will judge it (10 min)", detail: "What will we look at after two Sprints: lead time, defects, team feedback?" },
            { label: "Agree scope and safety (5 min)", detail: "Time-box it, agree who is involved, and how to stop if it is not working." },
          ],
        },
      ),
      takeaways(
        [
          "DevOps is shared ownership of delivery and operation, supported by automation and fast feedback",
          "A pipeline with automated tests and safe deploys turns big risky releases into small routine ones",
          "Pair programming, ping-pong and mob programming share knowledge and build quality in",
          "Adopt practices as small experiments driven by a real pain, not as mandates",
        ],
      ),
      sourcesSlide([
        src("Book", "The Phoenix Project", "Gene Kim, Kevin Behr & George Spafford", "A novel that introduces the ideas of DevOps and flow."),
        src("Book", "Accelerate", "Nicole Forsgren, Jez Humble & Gene Kim", "The research behind the delivery metrics and high-performing teams."),
        src("Book", "Continuous Delivery", "Jez Humble & David Farley", "The practices behind reliable, frequent releases."),
        src("Book", "Extreme Programming Explained", "Kent Beck", "Where pair programming and continuous integration were popularised."),
        src("Website", "DORA research programme", "DevOps Research and Assessment", "Research and guidance on software delivery performance.", "https://dora.dev"),
      ]),
    ],
  },
];
