/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#4c4444",
        secondary: "#976a6a",
        tertiary: "#513838",
        quaternary: "#c31d1d",
        quinary: "#c31d1d",
        senary: "#c31d1d",
        septenary: "#c31d1d",
        octonary: "#c31d1d",
        nonary: "#c31d1d",
        denary: "#c31d1d",

      },
    },
  },
  plugins: [],
}



