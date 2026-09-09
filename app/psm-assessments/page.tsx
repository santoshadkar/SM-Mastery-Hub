import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Professional Scrum Master (PSM I, II, III) Assessments | ScrumMaster Hub",
  description:
    "Practice authentic real-time exams for PSM 1, PSM 2, and PSM 3 certification prep. Features timer countdowns, situational scenario scoring, essay rubrics, and personalized learning recommendations.",
};

export default function PsmAssessmentsPage() {
  return (
    <Container className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <p className="rounded-full bg-brand-100 inline-block px-3 py-1 text-sm font-semibold text-brand-700 mb-3">
          Realtime Exam Prep Engine
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Professional Scrum Master Assessments
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Prepare for official Scrum.org certification with high-fidelity exam simulations covering PSM I, PSM II, and PSM III. Practice 5 unique, non-repeating exam sets per tier with instant grading and score-based portal recommendations.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* PSM I Card */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-brand-500 hover:shadow-md transition">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold text-slate-900">PSM I Assessment</h2>
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">Fundamental</span>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Focuses on fundamental Scrum framework rules, empiricism, values, events, artifacts, and team accountabilities.
            </p>
            <div className="mb-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-600 bg-slate-50 p-3 rounded-lg">
              <span>⏱️ 60 Mins</span>
              <span>•</span>
              <span>❓ 80 Questions</span>
              <span>•</span>
              <span>🎯 85% Passing Threshold</span>
            </div>
          </div>

          <div>
            <div className="font-bold text-sm text-slate-900 mb-2">Select Practice Exam Set:</div>
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((setId) => (
                <Link
                  key={setId}
                  href={`/psm-assessments/psm1/${setId}`}
                  className="flex items-center justify-between w-full rounded-lg border border-slate-200 p-3 text-sm font-semibold text-slate-800 hover:bg-brand-50 hover:border-brand-500 hover:text-brand-700 transition"
                >
                  <span>Set {setId}: PSM I Practice Exam</span>
                  <span>Start &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* PSM II Card */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-brand-500 hover:shadow-md transition">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold text-slate-900">PSM II Assessment</h2>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">Advanced</span>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Complex situational scenarios testing servant leadership judgment, product owner coaching, and partial-credit decisions.
            </p>
            <div className="mb-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-600 bg-slate-50 p-3 rounded-lg">
              <span>⏱️ 90 Mins</span>
              <span>•</span>
              <span>❓ 30 Scenarios</span>
              <span>•</span>
              <span>🎯 Partial-Credit Scoring</span>
            </div>
          </div>

          <div>
            <div className="font-bold text-sm text-slate-900 mb-2">Select Practice Exam Set:</div>
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((setId) => (
                <Link
                  key={setId}
                  href={`/psm-assessments/psm2/${setId}`}
                  className="flex items-center justify-between w-full rounded-lg border border-slate-200 p-3 text-sm font-semibold text-slate-800 hover:bg-brand-50 hover:border-brand-500 hover:text-brand-700 transition"
                >
                  <span>Set {setId}: PSM II Scenario Suite</span>
                  <span>Start &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* PSM III Card */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-brand-500 hover:shadow-md transition">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold text-slate-900">PSM III Assessment</h2>
              <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-bold text-pink-700">Mastery</span>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Open-ended essay prompts evaluated against Scrum.org expert rubrics with keyword matching and benchmark model answers.
            </p>
            <div className="mb-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-600 bg-slate-50 p-3 rounded-lg">
              <span>⏱️ 150 Mins</span>
              <span>•</span>
              <span>❓ 24 Essay Prompts</span>
              <span>•</span>
              <span>🎯 Rubric & AI Evaluator</span>
            </div>
          </div>

          <div>
            <div className="font-bold text-sm text-slate-900 mb-2">Select Practice Exam Set:</div>
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((setId) => (
                <Link
                  key={setId}
                  href={`/psm-assessments/psm3/${setId}`}
                  className="flex items-center justify-between w-full rounded-lg border border-slate-200 p-3 text-sm font-semibold text-slate-800 hover:bg-brand-50 hover:border-brand-500 hover:text-brand-700 transition"
                >
                  <span>Set {setId}: PSM III Essay Suite</span>
                  <span>Start &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
