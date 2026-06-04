import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0a2a56",
          "navy-dark": "#061d3d",
          "navy-light": "#0e325e",
          blue: "#4a9aca",
          "blue-light": "#6eb5d9",
          "blue-dark": "#2e6a9a",
          accent: "#4a9aca",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(10,42,86,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,42,86,0.04) 1px, transparent 1px)",
        "hero-gradient":
          "linear-gradient(135deg, #061d3d 0%, #0a2a56 45%, #2e6a9a 100%)",
        "card-gradient":
          "linear-gradient(180deg, rgba(74,154,202,0.08) 0%, transparent 100%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      boxShadow: {
        brand: "0 4px 24px -4px rgba(10, 42, 86, 0.15)",
        "brand-lg": "0 12px 40px -8px rgba(10, 42, 86, 0.2)",
        glow: "0 0 40px rgba(74, 154, 202, 0.25)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        pulse-slow: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
