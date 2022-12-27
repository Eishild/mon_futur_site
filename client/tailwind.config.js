/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Quicksand: ["Quicksand", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      backgroundImage: {
        "header-bg-0": "url('/public/assets/BG_0.jpg')",
        "header-bg-1": "url('/public/assets/BG_1.jpg')",
        "header-bg-2": "url('/public/assets/BG_2.jpg')",
        "header-bg-3": "url('/public/assets/BG_3.jpg')",
        "header-bg-4": "url('/public/assets/BG_4.jpg')",
      },
    },
  },
  plugins: [],
}
