"use client";

/**
 * Chip — pill-shaped mood selector.
 *
 * Variants:
 *  - default  → muted outline, fills with sand/stone when active
 *  - gradient → reserved for the special "Give me anything" chip; when
 *               active, uses a vivid pink → orange → blue gradient with
 *               italic white text (same in both light and dark mode).
 *
 * The gradient variant uses a 1×1 CSS grid with a hidden italic "ghost"
 * sibling so the chip always reserves space for the wider italic version
 * — the visible label can switch between roman and italic without
 * causing the chip to grow or shrink.
 *
 * The Figma uses Instrument Serif Regular 24px for chip text.
 */
const GRADIENT_BG =
  "linear-gradient(91deg, #FF56A5 0.59%, #FF7935 54.54%, #6D88FF 100.93%)";

export default function Chip({
  label,
  active = false,
  onClick,
  variant = "default",
}) {
  const isGradient = variant === "gradient";
  const isGradientActive = active && isGradient;

  const renderLabel = () => {
    if (!isGradient) return label;
    // Stack a hidden italic ghost on top of the visible label so the
    // chip's width is always sized for the italic version.
    return (
      <span className="grid">
        <span
          aria-hidden="true"
          className="invisible italic [grid-area:1/1]"
        >
          {label}
        </span>
        <span
          className={`[grid-area:1/1] ${active ? "italic" : "not-italic"}`}
        >
          {label}
        </span>
      </span>
    );
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      style={isGradientActive ? { background: GRADIENT_BG } : undefined}
      className={[
        "rounded-full px-4 py-2 font-serif text-2xl leading-none tracking-label",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-[1px] active:translate-y-0",
        isGradientActive
          ? [
              // gradient active — overrides theme-driven active styles
              "text-white border border-transparent",
              "shadow-[0_6px_22px_-6px_rgba(255,121,53,0.55)]",
            ].join(" ")
          : active
          ? [
              // standard active — filled pill
              "bg-[var(--chip-active-bg)] text-[var(--chip-active-text)]",
              "shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08)]",
            ].join(" ")
          : [
              // default — outlined pill, slightly dim so the active one pops
              "border border-[var(--chip-border)] bg-transparent text-[var(--ink)]",
              "opacity-70 hover:opacity-100",
            ].join(" "),
      ].join(" ")}
    >
      {renderLabel()}
    </button>
  );
}
