/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "5.5": "1.375rem",
        "13": "3.25rem",
        "50": "12.5rem",
      }
    },
  },
  plugins: [],
}

