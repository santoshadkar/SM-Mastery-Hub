"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { dimensions, questionsForDimension, likertLabels } from "@/lib/assessment/questions";
import {
  computeDimensionScores,
  computeOverallPercentage,
  getMaturityLevel,
  type Answers,
} from "@/lib/assessment/scoring";
import { DimensionBarChart } from "./DimensionBarChart";

type Phase = "intro" | number | "results";

export function AssessmentApp() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [answers, setAnswers] = useState<Answers>({});

  const currentDimension =
    typeof phase === "number" ? dimensions[phase] : null;
  const currentQuestions = currentDimension ? questionsForDimension(currentDimension.id) : [];
  const currentAnswered =
    currentDimension &&
    currentQuestions.every((q) => typeof answers[q.id] === "number");

  const dimensionScores = useMemo(() => computeDimensionScores(answers), [answers]);
  const overallPercentage = useMemo(
    () => computeOverallPercentage(dimensionScores),
    [dimensionScores],
  );
  const overallLevel = getMaturityLevel(overallPercentage);

  const weakestDimensions = useMemo(() => {
    return [...dimensionScores]
      .sort((a, b) => a.percentage - b.percentage)
      .slice(0, 3)
      .filter((d) => d.percentage < 80);
  }, [dimensionScores]);

  function setAnswer(questionId: string, value: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  function startAssessment() {
    setAnswers({});
    setPhase(0);
  }

  function goNext() {
    if (typeof phase !== "number") return;
    if (phase >= dimensions.length - 1) {
      setPhase("results");
    } else {
      setPhase(phase + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function goBack() {
    if (typeof phase !== "number") return;
    if (phase === 0) {
      setPhase("intro");
    } else {
      setPhase(phase - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function retake() {
    setAnswers({});
    setPhase("intro");
  }

  if (phase === "intro") {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Before you start</h2>
        <p className="mt-3 text-slate-600">
          This is 35 statements across 7 dimensions of the Scrum Master / Agile Coach role. For
          each, rate how often it's true for you right now, from &quot;Rarely / Never&quot; to
          &quot;Consistently.&quot; There are no right answers — this is for your own growth
          planning. Nothing is sent anywhere or saved; if you refresh the page, your answers are
          gone.
        </p>
        <p className="mt-3 text-sm text-slate-500">Takes about 5-8 minutes.</p>
        <button
          type="button"
          onClick={startAssessment}
          className="mt-6 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
        >
          Start the assessment
        </button>
      </div>
    );
  }

  if (phase === "results") {
    return (
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Overall maturity level
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">{overallLevel.name}</h2>
          <p className="mt-1 text-slate-500">{overallPercentage}% overall</p>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">{overallLevel.description}</p>
          <div className="no-print mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Print / Save as PDF
            </button>
            <button
              type="button"
              onClick={retake}
              className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Retake assessment
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900">Scores by dimension</h3>
          <div className="mt-6">
            <DimensionBarChart scores={dimensionScores} />
          </div>
        </div>

        {weakestDimensions.length > 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">Where to focus next</h3>
            <p className="mt-2 text-sm text-slate-600">
              Based on your lowest-scoring dimensions, here's where growth would move the needle
              most:
            </p>
            <div className="mt-6 space-y-5">
              {weakestDimensions.map((score) => {
                const dim = dimensions.find((d) => d.id === score.dimensionId)!;
                return (
                  <div key={dim.id} className="rounded-xl border border-slate-200 p-5">
                    <div className="flex items-baseline justify-between">
                      <h4 className="font-semibold text-slate-900">{dim.name}</h4>
                      <span className="text-sm text-slate-500">{score.percentage}%</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{dim.description}</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {dim.recommendationLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-sm font-medium text-brand-600 underline underline-offset-2 hover:text-brand-700"
                        >
                          {link.label} &rarr;
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  // Question phase
  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>
            Dimension {(phase as number) + 1} of {dimensions.length}
          </span>
          <span>{currentDimension?.name}</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-brand-600 transition-all"
            style={{ width: `${(((phase as number) + 1) / dimensions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold text-slate-900">{currentDimension?.name}</h2>
        <p className="mt-1 text-sm text-slate-500">{currentDimension?.description}</p>

        <fieldset className="mt-8 space-y-8">
          <legend className="sr-only">{currentDimension?.name} questions</legend>
          {currentQuestions.map((q, idx) => (
            <div key={q.id}>
              <p className="font-medium text-slate-800">
                {idx + 1}. {q.text}
              </p>
              <div
                role="radiogroup"
                aria-label={q.text}
                className="mt-3 grid grid-cols-5 gap-2"
              >
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    role="radio"
                    aria-checked={answers[q.id] === value}
                    onClick={() => setAnswer(q.id, value)}
                    className={`rounded-lg border px-2 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${
                      answers[q.id] === value
                        ? "border-brand-600 bg-brand-600 text-white"
                        : "border-slate-300 bg-white text-slate-700 hover:border-brand-300"
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
              <div className="mt-1 flex justify-between text-xs text-slate-400">
                <span>{likertLabels[1]}</span>
                <span>{likertLabels[5]}</span>
              </div>
            </div>
          ))}
        </fieldset>
      </div>

      <div className="no-print mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={goBack}
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
        >
          Back
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={!currentAnswered}
          className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {(phase as number) >= dimensions.length - 1 ? "See results" : "Next"}
        </button>
      </div>
    </div>
  );
}
