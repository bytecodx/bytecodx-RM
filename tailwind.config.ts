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
        background: "#020407",
        "electric-blue": "#00BFFF",
        cyan: "#00E5FF",
        "neon-green": "#00FF88",
        "dark-card": "#0A0F1A",
        "dark-border": "#1A2535",
        "text-muted": "#6B7A99",
        "text-secondary": "#94A3B8",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-fira-code)", "monospace"],
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #00BFFF 0%, #00E5FF 50%, #00FF88 100%)",
        "gradient-card":
          "linear-gradient(135deg, rgba(0,191,255,0.05) 0%, rgba(0,255,136,0.05) 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "spin-reverse": "spin-reverse 15s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-delayed-2": "float 6s ease-in-out 4s infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        wave: "wave 8s linear infinite",
        glow: "glow 3s ease-in-out infinite",
        "particle-float": "particle-float 15s ease-in-out infinite",
      },
      keyframes: {
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        wave: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "particle-float": {
          "0%": { transform: "translateY(0px) translateX(0px)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": {
            transform: "translateY(-100px) translateX(30px)",
            opacity: "0",
          },
        },
      },
      boxShadow: {
        "neon-blue": "0 0 20px rgba(0, 191, 255, 0.4)",
        "neon-green": "0 0 20px rgba(0, 255, 136, 0.4)",
        "neon-cyan": "0 0 20px rgba(0, 229, 255, 0.4)",
        card: "0 4px 32px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 8px 48px rgba(0, 191, 255, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
