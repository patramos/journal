"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { MOOD_HEADLINES } from "@/lib/prompts";
import PaperStack from "./PaperStack";
import Button from "./Button";

/**
 * PromptView — second screen, displayed once the user has picked a mood and
 * tapped "Give me a prompt".
 *
 * The current prompt is rendered as italic Instrument Serif inside the top
 * paper card. Swiping the card or tapping the arrow buttons fades to the
 * next prompt. A small history is kept so the left arrow can revisit
 * previously seen prompts.
 *
 * Vertical rhythm:
 *   headline ↓ 56–72px ↓ paper stack ↓ 64–80px ↓ arrow row ↓ 64–80px ↓ home button
 * Margins are used (rather than a single section gap) so each transition
 * can breathe at its own scale.
 */
export default function PromptView({
  moodId,
  prompt,
  onNext,
  onPrev,
  onHome,
  canGoBack,
}) {
  const stackRef = useRef(null);

  // Crossfade key — bumped every time the prompt changes so the inner
  // <span> remounts and re-runs its enter animation.
  const [renderKey, setRenderKey] = useState(0);
  useEffect(() => {
    setRenderKey((k) => k + 1);
  }, [prompt]);

  const handleSwipe = (direction) => {
    // Right swipe → previous, Left swipe → next (matches arrow direction).
    if (direction === "right") {
      if (canGoBack) onPrev();
      else onNext();
    } else {
      onNext();
    }
  };

  const handlePrevClick = () => {
    if (!canGoBack) return;
    if (stackRef.current) stackRef.current.swipeRight();
    else onPrev();
  };

  const handleNextClick = () => {
    if (stackRef.current) stackRef.current.swipeLeft();
    else onNext();
  };

  const headline = MOOD_HEADLINES[moodId] ?? MOOD_HEADLINES.random;

  return (
    <section className="relative z-10 mx-auto flex w-full max-w-[760px] flex-col items-center px-6 pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24">
      {/* Mood headline */}
      <p className="text-center font-sans text-[14px] font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)]">
        {headline}
      </p>

      {/* Paper stack with the current prompt */}
      <div className="mt-14 sm:mt-16 md:mt-20 w-full">
        <PaperStack ref={stackRef} interactive onSwipe={handleSwipe}>
          <span
            key={renderKey}
            className="block max-w-[88%] rotate-[-12deg] text-center font-serif italic leading-[1.05] text-[#4A4947] animate-fade-in text-[clamp(28px,5.6vw,56px)]"
          >
            {prompt}
          </span>
        </PaperStack>
      </div>

      {/* Arrow navigation row */}
      <div className="mt-16 sm:mt-20 md:mt-24 flex w-full items-center justify-center gap-6 sm:gap-10">
        <Button
          variant="circle"
          onClick={handlePrevClick}
          disabled={!canGoBack}
          ariaLabel="Previous prompt"
        >
          <ArrowLeft size={28} weight="regular" />
        </Button>

        <p className="max-w-[280px] text-center font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
          Swipe or use the buttons to switch prompts
        </p>

        <Button
          variant="circle"
          onClick={handleNextClick}
          ariaLabel="Next prompt"
        >
          <ArrowRight size={28} weight="regular" />
        </Button>
      </div>

      {/* Back to home */}
      <div className="mt-16 sm:mt-20 md:mt-24">
        <Button
          variant="solid"
          size="md"
          onClick={onHome}
          ariaLabel="Back to home"
        >
          Back to home
        </Button>
      </div>
    </section>
  );
}
