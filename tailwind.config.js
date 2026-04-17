/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#f9f9f9",
        // Warm, elegant accents (not neon)
        accent: {
          500: "#00b7ff", // amber – primary
          600: "#00ffee",
        },
        indigo: {
          500: "#042055", // deep indigo – secondary
        },
        
      },
      fontFamily: {
          mono: ["'Fira Code'", "'JetBrains Mono'", "monospace"],

        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};