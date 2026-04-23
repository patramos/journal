"use client";

import { useTheme } from "./ThemeProvider";

/**
 * Toggle — sliding sun/moon theme switch. The handle is rendered as a
 * circle that is on the right in light mode and on the left in dark mode,
 * mirroring the Figma design.
 */
export default function Toggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={[
        "relative inline-flex h-8 w-[68px] items-center rounded-full border px-1",
        "transition-colors duration-500 ease-out",
        "shadow-toggle dark:shadow-toggle-dark",
        isDark
          ? "border-stone-400 bg-stone-400"
          : "border-sand-500 bg-sand-400",
      ].join(" ")}
    >
      {/* Sun icon — visible area on the left in light mode */}
      <span
        aria-hidden
        className={[
          "flex h-6 w-6 items-center justify-center transition-opacity duration-300",
          isDark ? "opacity-0" : "opacity-100",
        ].join(" ")}
      >
        <SunIcon />
      </span>

      {/* Moon icon — visible on the right in dark mode */}
      <span
        aria-hidden
        className={[
          "ml-auto flex h-6 w-6 items-center justify-center transition-opacity duration-300",
          isDark ? "opacity-100" : "opacity-0",
        ].join(" ")}
      >
        <MoonIcon />
      </span>

      {/* Sliding handle */}
      <span
        aria-hidden
        className={[
          "absolute top-[3px] h-6 w-6 rounded-full",
          "transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
          isDark ? "bg-stone-200 opacity-80" : "bg-sand-600",
        ].join(" ")}
        style={{
          transform: isDark ? "translateX(4px)" : "translateX(36px)",
        }}
      />
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-stone-500"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v1.5M12 19.5V21M4.2 4.2l1.1 1.1M18.7 18.7l1.1 1.1M3 12h1.5M19.5 12H21M4.2 19.8l1.1-1.1M18.7 5.3l1.1-1.1" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
    >
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
      <path d="M16 4.5l.7 1.4 1.4.7-1.4.7-.7 1.4-.7-1.4-1.4-.7 1.4-.7z" />
    </svg>
  );
}
