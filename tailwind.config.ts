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
        edu: {
          navy: "#102D4D",
          "navy-dark": "#0A1E35",
          "navy-hover": "#0C233C",
          green: "#16A36A",
          "green-hover": "#138858",
          "green-light": "#EAF6EF",
          "light-grey": "#F4F7FA",
          "blue-light": "#EAF0F7",
          charcoal: "#202B38",
          muted: "#64748B",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        heading: [
          "Manrope",
          "Plus Jakarta Sans",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      borderRadius: {
        btn: "8px",
        card: "12px",
        panel: "16px",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(16, 45, 77, 0.05), 0 1px 2px 0 rgba(16, 45, 77, 0.03)",
        card: "0 2px 8px 0 rgba(16, 45, 77, 0.04), 0 1px 2px 0 rgba(16, 45, 77, 0.02)",
        "card-hover": "0 8px 24px 0 rgba(16, 45, 77, 0.08), 0 2px 6px 0 rgba(16, 45, 77, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
