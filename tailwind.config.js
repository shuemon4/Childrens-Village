/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',    // Soft Blue - trustworthy, calm
        secondary: '#F5A623',  // Warm Yellow - cheerful, energetic
        accent: '#7ED321',     // Fresh Green - growth, learning
        neutral: {
          light: '#F8F9FA',    // Off-white for backgrounds
          dark: '#4A4A4A',     // Dark gray for text
        },
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
