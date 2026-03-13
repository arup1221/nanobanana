import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        cream: {
          50: "#FAFAF7",
          100: "#F5F4EF",
          200: "#EAE8E0",
          300: "#D8D5C8",
        },
        ink: {
          900: "#0A0A08",
          800: "#1A1A16",
          700: "#2C2C26",
          500: "#5A5A52",
          300: "#8A8A80",
        },
      },
      letterSpacing: {
        widest: "0.25em",
        wider: "0.15em",
      },
    },
  },
  plugins: [],
};

export default config;
