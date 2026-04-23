"use client";

/**
 * Button — three visual variants matching the Figma design.
 *
 *  - variant="solid"  → dark pill with white italic serif text. Used for
 *                        "Give me a prompt" and "Back to home".
 *  - variant="circle" → 64px hollow circle with a single italic arrow.
 *                        Used for prev/next prompt navigation.
 */
export default function Button({
  variant = "solid",
  size = "lg",
  children,
  onClick,
  disabled = false,
  ariaLabel,
  className = "",
}) {
  if (variant === "circle") {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel}
        className={[
          "flex h-16 w-16 items-center justify-center rounded-full",
          "border border-[var(--btn-circle-border)] bg-transparent",
          "text-[var(--btn-circle-text)] font-serif italic text-4xl leading-none",
          "opacity-80 transition-all duration-200 ease-out",
          "hover:opacity-100 hover:scale-105 active:scale-95",
          "disabled:opacity-30 disabled:pointer-events-none",
          className,
        ].join(" ")}
      >
        {children}
      </button>
    );
  }

  // solid
  const sizeClasses =
  size === "lg"
    ? "px-6 py-3 text-[26px] sm:px-8 sm:py-4 sm:text-[40px]"
    : "px-5 py-3 text-[22px] sm:px-6 sm:text-[32px]";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={[
        "inline-flex items-center justify-center rounded-full",
        "bg-[var(--btn-solid-bg)] text-[var(--btn-solid-text)]",
        "font-serif italic leading-none tracking-[0.02em]",
        "opacity-90 transition-all duration-200 ease-out",
        "hover:opacity-100 hover:shadow-lg active:scale-[0.98]",
        "disabled:opacity-40 disabled:pointer-events-none",
        sizeClasses,
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}
