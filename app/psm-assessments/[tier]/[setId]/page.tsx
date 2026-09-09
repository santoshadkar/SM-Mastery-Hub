"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

interface Question {
  id: string;
  set: number;
  number: number;
  domain?: string;
  category?: string;
  type: string;
  question?: string;
  scenario?: string;
  prompt?: string;
  options?: { id: string; text: string }[];
  correctAnswers?: string[];
  weights?: Record<string, number>;
  explanation?: string;
  modelAnswer?: string;
  minWordCount?: number;
  mandatoryKeywords?: string[];
}

interface ExamSet {
  setId: number;
  tier: string;
  title: string;
  description: string;
  totalQuestions: number;
  timeLimitMinutes: number;
  passingPercentage: number;
  questions: Question[];
}

export default function ExamRunnerPage({
  params,
}: {
  params: Promise<{ tier: string; setId: string }>;
}) {
  const { tier, setId } = use(params);

  const [examData, setExamData] = useState<ExamSet | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, any>>({});
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [remainingSeconds, setRemainingSeconds] = useState<number>(3600);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [report, setReport] = useState<any>(null);

  useEffect(() => {
    async function loadQuestions() {
      try {
        const res = await fetch(`/data/${tier}_questions.json`);
        const data = await res.json();
        const setObj = data.sets.find(
          (s: ExamSet) => s.setId === parseInt(setId)
        );
        if (setObj) {
          setExamData(setObj);
          setRemainingSeconds((setObj.timeLimitMinutes || 60) * 60);
        }
      } catch (err) {
        console.error("Error loading exam data", err);
      } finally {
        setLoading(false);
      }
    }
    loadQuestions();
  }, [tier, setId]);

  // Countdown timer hook
  useEffect(() => {
    if (loading || isSubmitted || remainingSeconds <= 0) return;
    const interval = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [loading, isSubmitted, remainingSeconds]);

  if (loading) {
    return (
      <Container className="py-20 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-brand-600 border-r-transparent"></div>
        <p className="mt-4 text-slate-600 font-semibold">
          Loading PSM Assessment Environment...
        </p>
      </Container>
    );
  }

  if (!examData) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900">
          Exam Set Not Found
        </h1>
        <p className="mt-2 text-slate-600">
          The requested practice set could not be located.
        </p>
        <Link
          href="/psm-assessments"
          className="mt-6 inline-block rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white"
        >
          &larr; Back to Assessments
        </Link>
      </Container>
    );
  }

  const currentQ = examData.questions[currentIndex];
  const total = examData.questions.length;

  const formatTime = (secs: number) => {
    const hrs = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    if (hrs > 0) {
      return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(
        2,
        "0"
      )}:${String(s).padStart(2, "0")}`;
    }
    return `${String(mins).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const handleOptionSelect = (qId: string, optId: string, isMulti: boolean) => {
    let current = userAnswers[qId] || [];
    if (!Array.isArray(current)) current = [current];

    if (isMulti) {
      if (current.includes(optId)) {
        current = current.filter((id: string) => id !== optId);
      } else {
        current.push(optId);
      }
    } else {
      current = [optId];
    }
    setUserAnswers({ ...userAnswers, [qId]: current });
  };

  const handleEssayInput = (qId: string, text: string) => {
    setUserAnswers({ ...userAnswers, [qId]: text });
  };

  const toggleFlag = (qId: string) => {
    const nextFlagged = new Set(flagged);
    if (nextFlagged.has(qId)) nextFlagged.delete(qId);
    else nextFlagged.add(qId);
    setFlagged(nextFlagged);
  };

  const getAnsweredCount = () => {
    return Object.keys(userAnswers).filter((k) => {
      const val = userAnswers[k];
      if (Array.isArray(val)) return val.length > 0;
      if (typeof val === "string") return val.trim().length > 0;
      return val !== null && val !== undefined;
    }).length;
  };

  const handleSubmit = () => {
    let totalPoints = 0;
    let earnedPoints = 0;
    const domainScores: Record<
      string,
      { earned: number; total: number; percentage: number }
    > = {};
    const questionResults: any[] = [];

    examData.questions.forEach((q, idx) => {
      const uAns = userAnswers[q.id];
      let itemEarned = 0;
      let itemMax = 1;
      let isCorrect = false;

      const domain = q.domain || q.category || "General Scrum";
      if (!domainScores[domain]) {
        domainScores[domain] = { earned: 0, total: 0, percentage: 0 };
      }

      if (tier === "psm1") {
        const correctSet = new Set(q.correctAnswers || []);
        const userSet = new Set(
          Array.isArray(uAns) ? uAns : uAns ? [uAns] : []
        );
        if (
          correctSet.size === userSet.size &&
          [...correctSet].every((val) => userSet.has(val))
        ) {
          itemEarned = 1;
          isCorrect = true;
        }
      } else if (tier === "psm2") {
        const weights = q.weights || {};
        const selected = Array.isArray(uAns) ? uAns[0] : uAns;
        const w = weights[selected] !== undefined ? weights[selected] : 0.0;
        itemEarned = w;
        isCorrect = w >= 0.85;
      } else if (tier === "psm3") {
        const text = typeof uAns === "string" ? uAns.trim().toLowerCase() : "";
        const words = text.length > 0 ? text.split(/\s+/).length : 0;
        const keywords = q.mandatoryKeywords || [];
        let hits = 0;
        keywords.forEach((kw) => {
          if (text.includes(kw.toLowerCase())) hits++;
        });
        const kwRatio = keywords.length > 0 ? hits / keywords.length : 1.0;
        const lenFactor = words >= (q.minWordCount || 80) ? 1.0 : 0.5;
        itemEarned = parseFloat((kwRatio * 0.6 + lenFactor * 0.4).toFixed(2));
        isCorrect = itemEarned >= 0.85;
      }

      earnedPoints += itemEarned;
      totalPoints += itemMax;

      domainScores[domain].earned += itemEarned;
      domainScores[domain].total += itemMax;

      questionResults.push({
        number: idx + 1,
        questionText: q.question || q.scenario || q.prompt,
        userAnswer: uAns,
        itemEarned,
        isCorrect,
        explanation: q.explanation,
        modelAnswer: q.modelAnswer,
      });
    });

    Object.keys(domainScores).forEach((d) => {
      const ds = domainScores[d];
      ds.percentage =
        ds.total > 0 ? Math.round((ds.earned / ds.total) * 100) : 0;
    });

    const scorePercentage =
      totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0;
    const passed = scorePercentage >= examData.passingPercentage;

    // Generate score-based recommendations
    let tierSummary: any = {};
    if (scorePercentage >= 90) {
      tierSummary = {
        badge: "🌟 Mastery",
        headline: "Exceptional Scrum Mastery Achieved!",
        message:
          "Outstanding performance! You are fully prepared for the official Scrum.org exam. Take your leadership to the next level by exploring advanced scaled frameworks and leading workshops.",
        primaryLink: "/knowledge",
        primaryText: "Explore Knowledge Hub →",
        secondaryLink: "/workshops",
        secondaryText: "Lead Team Workshops →",
      };
    } else if (scorePercentage >= 85) {
      tierSummary = {
        badge: "✅ Certification Ready",
        headline: "Exam-Ready Standard Met!",
        message:
          "Great job! You passed the official 85% threshold. We recommend fine-tuning any lower-scoring domain gaps below before scheduling your official exam.",
        primaryLink: "/knowledge/scrum-framework",
        primaryText: "Review Framework Deep Dive →",
        secondaryLink: "/tools",
        secondaryText: "Check Tools Hub →",
      };
    } else if (scorePercentage >= 70) {
      tierSummary = {
        badge: "📈 Targeted Review Needed",
        headline: "Good Foundation – Focused Review Recommended",
        message:
          "You are close to the 85% passing mark. Review your incorrect items and leverage our targeted portal modules below to bridge your gaps.",
        primaryLink: "/assessment",
        primaryText: "Take SM Maturity Assessment →",
        secondaryLink: "/chat",
        secondaryText: "Consult AI Assistant →",
      };
    } else {
      tierSummary = {
        badge: "📚 Study Plan Recommended",
        headline: "Foundation Building Required",
        message:
          "We recommend systematically reviewing the 2020 Scrum Guide fundamentals and leveraging our reference guides before retaking the mock exams.",
        primaryLink: "/resources",
        primaryText: "Free Templates & Resources →",
        secondaryLink: "/knowledge",
        secondaryText: "Read Knowledge Hub →",
      };
    }

    const domainActions = Object.keys(domainScores)
      .filter((d) => domainScores[d].percentage < 85)
      .map((d) => ({
        domain: d,
        scorePercentage: domainScores[d].percentage,
        action: `Focus on ${d} (${domainScores[d].percentage}% score): Review fundamental concepts and empirical feedback loops.`,
        portalLink: "/knowledge",
        portalLinkText: "Study Topic in Knowledge Hub →",
      }));

    setReport({
      earnedPoints,
      totalPoints,
      scorePercentage,
      passed,
      domainScores,
      tierSummary,
      domainActions,
      questionResults,
    });
    setIsSubmitted(true);
  };

  if (isSubmitted && report) {
    return (
      <Container className="py-12">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
          <div className="text-center mb-8">
            <div
              className={`mx-auto mb-4 flex h-32 w-32 flex-col items-center justify-center rounded-full border-4 ${
                report.passed
                  ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                  : "border-rose-600 bg-rose-50 text-rose-700"
              }`}
            >
              <span className="text-3xl font-extrabold">
                {report.scorePercentage}%
              </span>
              <span className="text-xs font-bold uppercase tracking-wide">
                {report.passed ? "PASSED" : "FAILED"}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              {examData.title} Score Report
            </h2>
            <p className="mt-1 text-slate-600">
              {report.passed
                ? "Congratulations! You passed the 85% Scrum.org standard."
                : "Keep practicing! Review your domain analysis and recommendations below."}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 rounded-xl bg-slate-50 p-4 text-center text-sm font-semibold text-slate-700 mb-8">
            <div>Score: {report.earnedPoints} / {report.totalPoints}</div>
            <div>Target: {examData.passingPercentage}%</div>
            <div>Answered: {getAnsweredCount()} / {total}</div>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mb-4">
            Domain & Competency Performance
          </h3>
          <div className="space-y-3 mb-8">
            {Object.keys(report.domainScores).map((d) => {
              const ds = report.domainScores[d];
              return (
                <div
                  key={d}
                  className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800"
                >
                  <span>{d}</span>
                  <div className="flex items-center gap-3">
                    <span>
                      {ds.earned}/{ds.total} ({ds.percentage}%)
                    </span>
                    <div className="h-2.5 w-28 rounded-full bg-slate-200 overflow-hidden">
                      <div
                        className="h-full bg-brand-600 rounded-full"
                        style={{ width: `${ds.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Score-Based Personalized Growth Plan */}
          <div className="rounded-2xl border-2 border-brand-500 bg-brand-50/60 p-6 mb-8">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-extrabold text-brand-800">
                {report.tierSummary.headline}
              </h3>
              <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-bold text-brand-700">
                {report.tierSummary.badge}
              </span>
            </div>
            <p className="text-slate-700 mb-4">{report.tierSummary.message}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={report.tierSummary.primaryLink}
                className="rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                {report.tierSummary.primaryText}
              </Link>
              <Link
                href={report.tierSummary.secondaryLink}
                className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                {report.tierSummary.secondaryText}
              </Link>
            </div>

            {report.domainActions.length > 0 && (
              <div className="mt-6 border-t border-slate-200 pt-4">
                <h4 className="text-sm font-bold text-slate-900 mb-3">
                  Recommended Priority Actions for Gaps (&lt;85%):
                </h4>
                <div className="space-y-2">
                  {report.domainActions.map((act: any) => (
                    <div
                      key={act.domain}
                      className="flex items-center justify-between rounded-lg bg-white p-3 border border-slate-200 text-xs font-medium"
                    >
                      <span className="text-slate-800">⚠️ {act.action}</span>
                      <Link
                        href={act.portalLink}
                        className="font-bold text-brand-600 hover:underline"
                      >
                        {act.portalLinkText}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="text-center">
            <Link
              href="/psm-assessments"
              className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              &larr; Return to Assessment Hub
            </Link>
          </div>
        </div>
      </Container>
    );
  }

  const isMulti = Boolean(
    currentQ.type === "multiple" ||
      (currentQ.correctAnswers && currentQ.correctAnswers.length > 1)
  );

  return (
    <Container className="py-8">
      {/* Top Bar */}
      <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm mb-6">
        <div>
          <h1 className="text-lg font-bold text-slate-900">{examData.title}</h1>
          <p className="text-xs text-slate-500">
            Question {currentIndex + 1} of {total} ({getAnsweredCount()} Answered)
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div
            className={`rounded-lg px-3 py-1.5 font-mono text-sm font-extrabold ${
              remainingSeconds < 120
                ? "bg-rose-100 text-rose-700 animate-pulse"
                : remainingSeconds < 600
                ? "bg-amber-100 text-amber-800"
                : "bg-indigo-100 text-indigo-700"
            }`}
          >
            ⏱️ {formatTime(remainingSeconds)}
          </div>
          <button
            onClick={() => toggleFlag(currentQ.id)}
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            {flagged.has(currentQ.id) ? "🚩 Flagged" : "🏳️ Flag for Review"}
          </button>
          <button
            onClick={() => {
              if (confirm("Are you sure you want to submit your assessment?")) {
                handleSubmit();
              }
            }}
            className="rounded-lg bg-brand-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-brand-700"
          >
            Submit Exam
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        {/* Question Area */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-bold text-brand-700 mb-3">
            {currentQ.domain || currentQ.category || "Scrum Knowledge"}
          </span>

          <h2 className="text-lg font-bold text-slate-900 mb-6 leading-relaxed">
            {currentQ.question || currentQ.scenario || currentQ.prompt}
          </h2>

          {/* Options / Essay area */}
          {tier === "psm3" || currentQ.type === "essay" ? (
            <div>
              <textarea
                value={userAnswers[currentQ.id] || ""}
                onChange={(e) => handleEssayInput(currentQ.id, e.target.value)}
                placeholder="Type your empirical response here..."
                rows={8}
                className="w-full rounded-xl border border-slate-300 p-4 text-sm focus:border-brand-600 focus:outline-none"
              />
              <p className="mt-2 text-right text-xs font-semibold text-slate-500">
                {(userAnswers[currentQ.id] || "").trim().length > 0
                  ? (userAnswers[currentQ.id] || "").trim().split(/\s+/).length
                  : 0}{" "}
                Words (Target: ~{currentQ.minWordCount || 80} words)
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {currentQ.options?.map((opt) => {
                const ansArr = userAnswers[currentQ.id] || [];
                const isChecked = Array.isArray(ansArr)
                  ? ansArr.includes(opt.id)
                  : ansArr === opt.id;
                return (
                  <label
                    key={opt.id}
                    onClick={() =>
                      handleOptionSelect(currentQ.id, opt.id, isMulti)
                    }
                    className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition ${
                      isChecked
                        ? "border-brand-600 bg-brand-50 text-brand-900"
                        : "border-slate-200 bg-slate-50 hover:bg-slate-100"
                    }`}
                  >
                    <input
                      type={isMulti ? "checkbox" : "radio"}
                      name={`q_${currentQ.id}`}
                      checked={isChecked}
                      onChange={() => {}}
                      className="mt-0.5 accent-brand-600"
                    />
                    <span className="text-sm font-medium">{opt.text}</span>
                  </label>
                );
              })}
            </div>
          )}

          {/* Pagination buttons */}
          <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-4">
            <button
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((prev) => prev - 1)}
              className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 disabled:opacity-40"
            >
              &larr; Previous
            </button>
            <button
              disabled={currentIndex === total - 1}
              onClick={() => setCurrentIndex((prev) => prev + 1)}
              className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-semibold text-white disabled:opacity-40 hover:bg-brand-700"
            >
              Next &rarr;
            </button>
          </div>
        </div>

        {/* Matrix Navigator Drawer */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm h-fit">
          <h3 className="text-sm font-bold text-slate-900 mb-3">
            Question Navigator
          </h3>
          <div className="grid grid-cols-5 gap-1.5">
            {examData.questions.map((q, idx) => {
              const ans = userAnswers[q.id];
              const isAns =
                ans &&
                (Array.isArray(ans)
                  ? ans.length > 0
                  : String(ans).trim().length > 0);
              const isFlag = flagged.has(q.id);
              const isActive = idx === currentIndex;

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`aspect-square rounded-lg text-xs font-bold transition ${
                    isActive
                      ? "ring-2 ring-brand-600 border-brand-600 scale-105"
                      : ""
                  } ${
                    isAns
                      ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                      : isFlag
                      ? "bg-amber-100 text-amber-800 border border-amber-300"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}
