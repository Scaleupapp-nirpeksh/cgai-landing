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
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;