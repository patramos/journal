"use client";

import { useState } from "react";
import { MOODS, RANDOM_MOOD } from "@/lib/prompts";
import Chip from "./Chip";
import Button from "./Button";
import PaperStack from "./PaperStack";

/**
 * LandingView — the first screen the visitor sees.
 *
 * Left column: title + the two mood-picker sections.
 * Right column: a paper stack containing the "Give me a prompt" button.
 *
 * Only one chip can be active at a time across both groups. The button is
 * disabled until a mood is chosen.
 */
export default function LandingView({ onGenerate }) {
  const [activeMood, setActiveMood] = useState("creative");

  const handleGenerate = () => {
    if (!activeMood) return;
    onGenerate(activeMood);
  };

  return (
    <section className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-16 sm:px-10 sm:py-20 md:pt-48 md:pb-28">  
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20 lg:gap-32 xl:gap-40">
        {/* ---------------- Left column ---------------- */}
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="flex flex-col gap-6">
            <h1 className="font-serif text-[72px] leading-[0.95] tracking-tight md:text-[96px] lg:text-[120px]">
              The Daily Prompt<span className="italic text-[var(--ink-soft)]">.</span>
            </h1>
            <p className="font-sans font-medium text-[16px] md:text-[20px] leading-snug text-[var(--ink-soft)] max-w-md">
              Choose a mood and let the perfect journal prompt come to you . ݁₊ ⊹ . ݁ ⟡ ݁ . ⊹ ₊ ݁.
            </p>
          </div>

          {/* Section: I'm feeling... */}
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[14px] font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              I&rsquo;m feeling&hellip;
            </p>
            <div className="flex flex-wrap gap-3">
              {MOODS.map((m) => (
                <Chip
                  key={m.id}
                  label={m.label}
                  active={activeMood === m.id}
                  onClick={() => setActiveMood(m.id)}
                />
              ))}
            </div>
          </div>

          {/* Section: Not feeling anything particular? */}
          <div className="flex flex-col gap-5">
            <p className="font-sans text-[14px] font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              Not feeling anything particular?
            </p>
            <div className="flex flex-wrap gap-3">
              <Chip
                label={RANDOM_MOOD.label}
                active={activeMood === RANDOM_MOOD.id}
                onClick={() => setActiveMood(RANDOM_MOOD.id)}
                variant="gradient"
              />
            </div>
          </div>
        </div>

        {/* ---------------- Right column ---------------- */}
        <div className="flex items-center justify-center md:justify-end">
          <PaperStack interactive={false}>
            <Button
              variant="solid"
              size="lg"
              onClick={handleGenerate}
              disabled={!activeMood}
              ariaLabel="Generate a journal prompt"
            >
              Give me a prompt
            </Button>
          </PaperStack>
        </div>
      </div>
    </section>
  );
}
