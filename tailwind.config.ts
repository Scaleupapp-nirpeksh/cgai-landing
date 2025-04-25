import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandA: "#00B4D8",  // teal
        brandB: "#5A33FF",  // indigo
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse at top, rgba(90,51,255,0.25), transparent 60%)",
      },
      borderRadius: { glass: "1.75rem" },
      backdropBlur: { glass: "14px" },
      keyframes: {
        blob: {
          "0%,100%": { borderRadius: "42% 58% 35% 65% / 42% 33% 67% 58%" },
          "50%":      { borderRadius: "58% 42% 65% 35% / 33% 42% 58% 67%" },
        },
      },
      animation: { blob: "blob 20s ease-in-out infinite" },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
