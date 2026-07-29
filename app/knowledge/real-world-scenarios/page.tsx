import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { scenarios } from "@/lib/content/scenarios";

export const metadata: Metadata = {
  title: "Real-World Scenarios",
  description: "15 real organizational situations a Scrum Master runs into, and how to actually handle each one.",
};

export default function RealWorldScenariosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Knowledge Hub"
        title="Real-World Scenarios"
        description="Not process anti-patterns — real organizational situations (a reorg, a resignation, a mandated framework switch) and a concrete approach to each, not just a principle to keep in mind."
      />
      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-6">
          {scenarios.map((s, i) => (
            <div key={s.id} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">
                <span className="text-brand-600">{i + 1}. </span>
                {s.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                <span className="font-semibold text-slate-800">Situation: </span>
                {s.situation}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                <span className="font-semibold text-slate-800">Why it's tricky: </span>
                {s.whyTricky}
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                How to handle it
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
                {s.approach.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <a href="/knowledge" className="text-sm font-medium text-brand-600 hover:text-brand-700">
            &larr; Back to Knowledge Hub
          </a>
        </div>
      </Container>
    </>
  );
}
