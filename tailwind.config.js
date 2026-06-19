/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f6f8fb",
          100: "#eef2f7",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#0a1120",
        },
        brand: {
          // night blue
          DEFAULT: "#0b2545",
          dark: "#081a33",
          deep: "#051023",
        },
        cyan: {
          tech: "#0ea5b7",
          glow: "#22d3ee",
          700: "#0e7490",
        },
        ops: {
          // operational green
          DEFAULT: "#10b981",
          dark: "#0f766e",
        },
        warn: "#f59e0b",
        alert: "#ef4444",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,23,42,0.04), 0 4px 16px rgba(15,23,42,0.06)",
        card: "0 1px 2px rgba(15,23,42,0.05), 0 8px 24px rgba(15,23,42,0.08)",
        lift: "0 2px 4px rgba(15,23,42,0.06), 0 18px 40px rgba(15,23,42,0.12)",
        ring: "0 0 0 1px rgba(15,23,42,0.06), 0 8px 24px rgba(15,23,42,0.08)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.125rem",
        "3xl": "1.5rem",
      },
      maxWidth: {
        page: "1200px",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.18)" },
        },
        "ping-slow": {
          "0%": { transform: "scale(1)", opacity: "0.5" },
          "70%, 100%": { transform: "scale(2.4)", opacity: "0" },
        },
        dash: {
          to: { strokeDashoffset: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "pulse-soft": "pulse-soft 3.2s ease-in-out infinite",
        "ping-slow": "ping-slow 3.5s cubic-bezier(0,0,0.2,1) infinite",
        dash: "dash 4s linear forwards",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
