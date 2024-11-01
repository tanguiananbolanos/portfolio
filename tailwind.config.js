/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
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
        opacity: {
          "0%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        borderAnimate: {
          "0%": {
            borderLeft: "solid white 1px",
            borderBottom: "none",
            borderRight: "none",
            borderTop: "none",
          },
          "25%": {
            borderLeft: "solid white 1px",
            borderBottom: "none",
            borderRight: "none",
            borderTop: "none",
          },
          "50%": {
            borderLeft: "none",
            borderBottom: "solid white 1px",
            borderRight: "none",
            borderTop: "none",
          },
          "75%": {
            borderLeft: "none",
            borderBottom: "none",
            borderRight: "solid white 1px",
            borderTop: "none",
          },
          "100%": {
            borderLeft: "none",
            borderBottom: "none",
            borderRight: "none",
            borderTop: "solid white 1px",
          },
        },
      },
      animation: {
        spinY: "spin 5s linear infinite",
        enter: "enter 2s ease-in",
        reverse: "enterReverse 2s ease-in",
        opacity: "opacity 2s ease-in",
        borderAnimate: "borderAnimate 5s ease-in-out infinite",
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
