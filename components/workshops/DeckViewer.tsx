"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { Deck } from "@/lib/content/workshops/decks/types";
import { KIND_META } from "@/lib/content/workshops/decks/layout";
import { SlideView, SLIDE_H, SLIDE_W } from "./SlideView";

const noopSubscribe = () => () => {};
const subscribeFullscreen = (cb: () => void) => {
  document.addEventListener("fullscreenchange", cb);
  return () => document.removeEventListener("fullscreenchange", cb);
};

const btn =
  "inline-flex items-center justify-center rounded-lg border px-3 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 disabled:cursor-not-allowed disabled:opacity-40";

export function DeckViewer({ deck }: { deck: Deck }) {
  const total = deck.slides.length;
  const [index, setIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [box, setBox] = useState({ w: 0, h: 0 });
  const rootRef = useRef<HTMLDivElement>(null);
  const canFs = useSyncExternalStore(noopSubscribe, () => document.fullscreenEnabled, () => false);
  const isFs = useSyncExternalStore(subscribeFullscreen, () => document.fullscreenElement === rootRef.current, () => false);
  const stageRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  const slide = deck.slides[index];
  const meta = KIND_META[slide.kind];

  const goTo = useCallback((n: number) => setIndex(Math.min(total - 1, Math.max(0, n))), [total]);
  const next = useCallback(() => setIndex((i) => Math.min(total - 1, i + 1)), [total]);
  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);

  // Scale the fixed 1280x720 slide to whatever space the stage has.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    // ResizeObserver reports the initial size as soon as observation starts.
    const ro = new ResizeObserver(() => setBox({ w: el.clientWidth, h: el.clientHeight }));
    ro.observe(el);
    return () => ro.disconnect();
  }, [isFs]);

  const toggleFs = useCallback(() => {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void rootRef.current?.requestFullscreen?.();
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const tag = (e.target as HTMLElement).tagName;
    if (tag === "SELECT" && (e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "ArrowDown")) return;
    switch (e.key) {
      case "ArrowRight":
      case "PageDown":
        e.preventDefault();
        next();
        break;
      case " ":
        if (tag === "BUTTON" || tag === "SELECT" || tag === "A") return;
        e.preventDefault();
        next();
        break;
      case "ArrowLeft":
      case "PageUp":
        e.preventDefault();
        prev();
        break;
      case "Home":
        e.preventDefault();
        goTo(0);
        break;
      case "End":
        e.preventDefault();
        goTo(total - 1);
        break;
      case "f":
      case "F":
        if (canFs) toggleFs();
        break;
      case "n":
      case "N":
        setShowNotes((v) => !v);
        break;
    }
  };

  const scale = box.w && box.h ? Math.min(box.w / SLIDE_W, box.h / SLIDE_H) : 0;
  const dark = isFs;

  return (
    <div
      ref={rootRef}
      tabIndex={0}
      onKeyDown={onKeyDown}
      role="region"
      aria-roledescription="slide deck"
      aria-label={`${deck.title} presentation`}
      className={
        dark
          ? "flex h-screen flex-col bg-slate-950 text-white outline-none"
          : "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
      }
    >
      <div
        ref={stageRef}
        className={dark ? "relative min-h-0 flex-1 bg-black" : "relative w-full bg-slate-100"}
        style={dark ? undefined : { aspectRatio: "16 / 9" }}
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
        }}
      >
        <div
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${index + 1} of ${total}`}
          style={{
            position: "absolute",
            width: SLIDE_W,
            height: SLIDE_H,
            left: (box.w - SLIDE_W * scale) / 2,
            top: (box.h - SLIDE_H * scale) / 2,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            visibility: scale ? "visible" : "hidden",
          }}
        >
          <SlideView deck={deck} slide={slide} index={index} total={total} />
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Slide {index + 1} of {total}: {slide.title}
      </p>

      <div className={`h-1 w-full ${dark ? "bg-slate-800" : "bg-slate-100"}`} aria-hidden="true">
        <div className="h-full bg-brand-600 transition-all" style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>

      {showNotes ? (
        <div
          className={`max-h-40 overflow-y-auto border-t px-4 py-3 text-sm leading-6 ${
            dark ? "border-slate-800 bg-slate-900 text-slate-200" : "border-slate-200 bg-amber-50 text-slate-800"
          }`}
        >
          <span className="font-semibold">Speaker notes: </span>
          {slide.notes ?? <span className="italic opacity-70">No speaker notes for this slide.</span>}
        </div>
      ) : null}

      <div className={`flex flex-wrap items-center gap-2 px-3 py-3 ${dark ? "bg-slate-900" : "bg-white"}`}>
        <button
          type="button"
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous slide"
          className={`${btn} ${dark ? "border-slate-600 text-white hover:bg-slate-800" : "border-slate-300 text-slate-800 hover:bg-slate-50"}`}
        >
          &larr; Prev
        </button>
        <button
          type="button"
          onClick={next}
          disabled={index === total - 1}
          aria-label="Next slide"
          className={`${btn} border-brand-600 bg-brand-600 text-white hover:bg-brand-700`}
        >
          Next &rarr;
        </button>

        <span className={`px-2 text-sm ${dark ? "text-slate-300" : "text-slate-600"}`} aria-hidden="true">
          {index + 1} / {total}
          <span className="ml-2 font-semibold" style={{ color: dark ? "#C7D2FE" : `#${meta.color}` }}>
            {slide.kind === "title" ? "TITLE" : meta.label}
          </span>
        </span>

        <div className="ml-auto flex flex-wrap items-center gap-2">
          <label className="sr-only" htmlFor={`jump-${deck.workshopSlug}`}>
            Jump to slide
          </label>
          <select
            id={`jump-${deck.workshopSlug}`}
            value={index}
            onChange={(e) => goTo(Number(e.target.value))}
            className={`max-w-[15rem] rounded-lg border px-2 py-2 text-sm ${
              dark ? "border-slate-600 bg-slate-800 text-white" : "border-slate-300 bg-white text-slate-800"
            }`}
          >
            {deck.slides.map((s, i) => (
              <option key={i} value={i}>
                {i + 1}. {s.title}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => setShowNotes((v) => !v)}
            aria-pressed={showNotes}
            className={`${btn} ${
              showNotes
                ? "border-brand-600 bg-brand-50 text-brand-700"
                : dark
                  ? "border-slate-600 text-white hover:bg-slate-800"
                  : "border-slate-300 text-slate-800 hover:bg-slate-50"
            }`}
          >
            Notes
          </button>
          {canFs ? (
            <button
              type="button"
              onClick={toggleFs}
              className={`${btn} ${dark ? "border-slate-600 text-white hover:bg-slate-800" : "border-slate-300 text-slate-800 hover:bg-slate-50"}`}
            >
              {isFs ? "Exit full screen" : "Full screen"}
            </button>
          ) : null}
        </div>
      </div>

      {!dark ? (
        <p className="border-t border-slate-100 px-4 py-2 text-xs text-slate-500">
          Keyboard: ← → to move, Home/End to jump, F for full screen, N for speaker notes. Click the deck first so it has focus.
        </p>
      ) : null}
    </div>
  );
}
