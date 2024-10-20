/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        spin: {
          "0%": { transform: "rotateY(180deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        enter: {
          "0%": { transform: "translate(-100px)", opacity: "0%" },
          "100%": { transform: "translate(0%)" },
        },
        enterReverse: {
          "0%": { transform: "translate(100px)", opacity: "0%" },
          "100%": { transform: "translate(0%)" },
        },
      },
      animation: {
        spinY: "spin 5s linear infinite",
        enter: "enter 2s ease-in",
        reverse: "enterReverse 2s ease-in",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1025px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
