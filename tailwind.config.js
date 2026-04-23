/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          10: "#F8F4EC",
          200: "#ACABAA",
          300: "#868584",
          400: "#6E6D6C",
          500: "#4A4947",
          600: "#434241",
          900: "#1F1F1E",
        },
        sand: {
          400: "#FFEFD5",
          500: "#FFEBCB",
          600: "#E8D6B9",
          700: "#B5A790",
        },
        dune: {
          400: "#F6D172",
          500: "#F4C64F",
          600: "#DEB448",
        },
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "serif"],
        sans: ["var(--font-instrument-sans)", "sans-serif"],
      },
      letterSpacing: {
        label: "0.02em",
      },
      boxShadow: {
        paper: "0 4px 50px 0 rgba(0, 0, 0, 0.10)",
        "paper-dark": "0 4px 50px 0 rgba(0, 0, 0, 0.45)",
        toggle: "0 4px 40px 0 rgba(0, 0, 0, 0.20)",
        "toggle-dark": "0 4px 40px 0 rgba(255, 255, 255, 0.15)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-slow": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 500ms cubic-bezier(0.2, 0.8, 0.2, 1) both",
        "fade-in-slow": "fade-in-slow 700ms ease-out both",
      },
    },
  },
  plugins: [],
};
