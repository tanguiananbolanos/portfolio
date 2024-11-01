/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      keyframes: {
        flydiag: {
          "0%": {
            transform: "translateY(70px)",
          },
          "100%": {
            transform: "translateY(-1000px) translateX(500px)",
          },
        },
      },
      animation: {
        flyZ: "flydiag 5s linear infinite",
        flyX: "flydiag 10s linear infinite",
        flyY: "flydiag 3s linear infinite",
      },
    },
  },
  plugins: [],
};
