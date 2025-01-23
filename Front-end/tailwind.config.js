/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // If you have an index.html
    "./src/**/*.{vue,js,ts,jsx,tsx}", // If you're using a framework like Vue or React
    "./components/**/*.{vue,js,ts,jsx,tsx}", // For components
    "./pages/**/*.{vue,js,ts,jsx,tsx}", // For pages
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // For Next.js app directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}