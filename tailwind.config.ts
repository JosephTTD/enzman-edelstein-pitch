import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        "surface-light": "var(--surface-light)",
        border: "var(--border-color)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.1" }],
        "heading-1": ["clamp(2rem, 3.5vw, 3rem)", { lineHeight: "1.15" }],
        "heading-2": ["clamp(1.5rem, 2.5vw, 2.25rem)", { lineHeight: "1.2" }],
        "heading-3": ["1.25rem", { lineHeight: "1.3" }],
        "body-lg": ["1.0625rem", { lineHeight: "1.7" }],
      },
      maxWidth: {
        container: "1340px",
      },
      transitionDuration: {
        fast: "150ms",
        normal: "200ms",
      },
    },
  },
  plugins: [],
};
export default config;
