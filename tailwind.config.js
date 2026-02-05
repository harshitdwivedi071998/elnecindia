/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        zoomSlow: {
          "0%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1.2)" },
        },
      },
      animation: {
        zoomSlow: "zoomSlow 7s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
