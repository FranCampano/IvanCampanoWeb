/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand:{
          amarillo: "#daa509",
          negro: "#161616",
          rojo: "#B22222",
          gris: "#333333",
          dorado: "#a1781c"
        }
      }
    },
  },
  plugins: [require("daisyui")],
}

