// tailwind.config.ts
import type { Config } from "tailwindcss"

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: false, // Disable dark mode completely
  safelist: [
    // Gradient from classes
    "from-orange-400",
    // Background opacity classes
    "bg-black/80",
    "hover:bg-white",
    "hover:text-darkGreen",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#00A651",
        darkGreen: "#1F4D2B",
        charcoal: "#111111",
        lightGray: "#F4F4F4",
        pureWhite: "#FFFFFF",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "serif"],
      },
    },
  },
  plugins: [],
}

export default config
