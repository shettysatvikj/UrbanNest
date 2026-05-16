/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A", // Deep Navy
        accent: "#C6A75E",  // Warm Gold
      },
    },
  },
  plugins: [],
}