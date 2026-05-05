"use client";

import { useCallback, useState } from "react";
import LandingView from "./components/LandingView";
import PromptView from "./components/PromptView";
import Toggle from "./components/Toggle";
import { getRandomPrompt } from "@/lib/prompts";

/**
 * Page — top-level state machine.
 *
 * Two views ("landing" and "prompt") are mounted with a small opacity +
 * translateY crossfade. The Toggle and noise overlay are always present.
 *
 * `history` stores every prompt the user has seen for the current mood, so
 * the left arrow can revisit them; `index` points at the currently shown
 * prompt within that history.
 */
export default function Page() {
  const [view, setView] = useState("landing");
  const [mood, setMood] = useState(null);
  const [history, setHistory] = useState([]);
  const [index, setIndex] = useState(0);

  const handleGenerate = useCallback((moodId) => {
    const first = getRandomPrompt(moodId, null);
    setMood(moodId);
    setHistory([first]);
    setIndex(0);
    setView("prompt");
  }, []);

  const handleNext = useCallback(() => {
    setHistory((prev) => {
      // If we're already at the end of history, generate a fresh prompt.
      if (index >= prev.length - 1) {
        const current = prev[index];
        const next = getRandomPrompt(mood, current);
        const updated = [...prev, next];
        setIndex(updated.length - 1);
        return updated;
      }
      // Otherwise step forward through previously seen prompts.
      setIndex(index + 1);
      return prev;
    });
  }, [index, mood]);

  const handlePrev = useCallback(() => {
    if (index > 0) setIndex(index - 1);
  }, [index]);

  const handleHome = useCallback(() => {
    setView("landing");
    // Defer state cleanup until after the fade so we don't see a flash.
    setTimeout(() => {
      setMood(null);
      setHistory([]);
      setIndex(0);
    }, 500);
  }, []);

  const isLanding = view === "landing";
  const currentPrompt = history[index] ?? "";
  const canGoBack = index > 0;

  return (
    <main className="relative min-h-[100dvh] overflow-hidden">
      {/* Persistent noise texture overlay */}
      <div className="noise-layer" />

      {/* Persistent theme toggle, fixed top-right */}
      <div className="fixed right-5 top-5 z-30 sm:right-8 sm:top-8">
        <Toggle />
      </div>

      {/* Landing layer */}
      <div
        className={[
          "absolute inset-0 overflow-y-auto overflow-x-hidden transition-all duration-500 ease-out",
          isLanding
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none",
        ].join(" ")}
        aria-hidden={!isLanding}
      >
        {isLanding && <LandingView onGenerate={handleGenerate} />}
      </div>

      {/* Prompt layer */}
      <div
        className={[
          "absolute inset-0 overflow-y-auto overflow-x-hidden transition-all duration-500 ease-out",
          !isLanding
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none",
        ].join(" ")}
        aria-hidden={isLanding}
      >
        {!isLanding && (
          <PromptView
            moodId={mood}
            prompt={currentPrompt}
            onNext={handleNext}
            onPrev={handlePrev}
            onHome={handleHome}
            canGoBack={canGoBack}
          />
        )}
      </div>
    </main>
  );
}
