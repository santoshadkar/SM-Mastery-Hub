import type { Metadata } from "next";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { Callout } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "AI for Scrum Masters",
  description: "Concrete, practical ways AI/LLMs help Scrum Masters in day-to-day work.",
};

const uses = [
  {
    title: "Drafting retro formats",
    detail:
      "Describe your team's current mood and recent history in a prompt (e.g. \"team just finished a rough sprint with two production incidents, energy is low\") and ask for 2-3 retro format options suited to that context, each with the specific prompts/questions you'd put on each board column. Faster than reaching for the same format every time, and useful when you sense the usual format has gone stale.",
  },
  {
    title: "Summarizing standup notes",
    detail:
      "Paste raw, unedited notes from the last few Daily Scrums and ask for a summary grouped by: blockers still open, work completed since last summary, and anything mentioned more than once (a repeated blocker is often the real signal). Keep this as an internal aid, not a replacement for the team's own conversation.",
  },
  {
    title: "Generating a first draft of a sprint report",
    detail:
      "Give it the raw numbers (committed vs. completed points, carryover items, notable blockers, Sprint Goal met yes/no) and ask for a stakeholder-facing summary in plain language. Always review before sending — an LLM will confidently smooth over a bad Sprint if you let it, and the honest framing is your job, not the model's.",
  },
  {
    title: "Backlog refinement prep",
    detail:
      "For a batch of upcoming backlog items, ask for a list of clarifying questions a Product Owner should be ready to answer for each one (edge cases, dependencies, acceptance criteria gaps) before the refinement session, so the session itself moves faster.",
  },
  {
    title: "Facilitation prompts and difficult conversations",
    detail:
      "Describe a specific facilitation challenge (\"one person dominates every discussion,\" \"the team goes quiet whenever I ask for feedback on me\") and ask for 2-3 concrete phrasings or techniques to try, rather than generic advice. Rehearsing an opening line for a hard conversation with an AI first, before having it with a real person, is a legitimate and low-cost use.",
  },
  {
    title: "Coaching conversation prep",
    detail:
      "Before a 1:1 or a coaching conversation about a specific behavior (missed commitments, conflict with a teammate), describe the situation and ask for open-ended coaching questions you could ask — not a script to read verbatim, but a way to prepare your own thinking before the conversation.",
  },
];

export default function AIForScrumMastersPage() {
  return (
    <ArticleLayout
      eyebrow="Tools Hub"
      title="AI for Scrum Masters"
      description="Specific, practical ways to use AI/LLMs in the actual day-to-day work of the role — not the generic hype version."
      backHref="/tools"
      backLabel="Back to Tools Hub"
    >
      <p>
        AI tools are useful to a Scrum Master mainly as a drafting and preparation aid — they
        speed up the writing and thinking that happens around the team&apos;s work, not the work
        itself. The uses below are deliberately narrow and specific rather than aspirational.
      </p>

      <div className="not-prose mt-8 space-y-6">
        {uses.map((u) => (
          <div key={u.title} className="rounded-xl border border-slate-200 p-5">
            <h3 className="text-lg font-semibold text-slate-900">{u.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{u.detail}</p>
          </div>
        ))}
      </div>

      <h2>Where to be careful</h2>
      <ul>
        <li>
          <strong>Don&apos;t paste sensitive or confidential information</strong> (personal
          performance details, unreleased business plans, client data) into a public AI tool
          unless your organization has explicitly approved that tool for that purpose.
        </li>
        <li>
          <strong>Treat generated status reports and summaries as a first draft, not a final
          answer.</strong> An LLM has no way to know if a number is wrong or a nuance was lost in
          summarization — that verification is still the Scrum Master&apos;s job.
        </li>
        <li>
          <strong>Don&apos;t let AI replace the actual conversation.</strong> Using it to prepare
          for a coaching conversation or a facilitation challenge is different from using its
          output as a substitute for having that conversation yourself.
        </li>
      </ul>

      <Callout title="Try it now">
        The <a href="/chat" className="text-brand-600 underline">Scrum Master Assistant</a> on
        this site is built for exactly these kinds of prompts — try asking it to draft a retro
        format for a specific situation your team is in right now.
      </Callout>
    </ArticleLayout>
  );
}
