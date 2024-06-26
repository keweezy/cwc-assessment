/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#7d7f8d",
        "users-bg": "rgb(249, 53, 169)",
        "male-users-bg": "rgb(48, 187, 181)",
        "female-users-bg": "rgb(121, 70, 193)",
        "input-text": "rgba(0,0,0,.87)",
        "almost-black": "rgb(48, 52, 74)",
        "light-gray": "rgba(0,0,0,.06)",
        "almost-white": "rgb(247, 247, 255)",
        "icon-bg": "rgb(186, 189, 209)",
        "light-green": "rgb(117, 214, 209)",
        "search-input": "rgba(0, 0, 0, 0.54)",
        "semi-dark-gray": "rgba(0,0,0,.12)",
        "light-pink": "rgb(247, 217, 242)",
        "semi-dark-pink": "rgb(225 185 218)",
      },
      fontFamily: {
        body: ["Poppins, sans-serif"],
      },
      boxShadow: {
        "arrow-button":
          "0 11px 15px -7px rgba(0, 0, 0, .2), 0 24px 38px 3px rgba(0, 0, 0, .14), 0 9px 46px 8px rgba(0, 0, 0, .12)",
        "info-card":
          "0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInLeft: {
          "0%": {
            opacity: "0.2",
            transform: "translateX(-700px)", // Move from left to right
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)", // Move to initial position
          },
        },
        fadeOutRight: {
          "0%": {
            opacity: "1",
            transform: "translateX(0)",
          },
          "100%": {
            opacity: "0,2",
            transform: "translateX(700px)",
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out",
        fadeInLeft: "fadeInLeft 0.5s ease-in",
        fadeOutRight: "fadeOutRight 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
