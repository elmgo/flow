/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // primary: 'sans-serif',
        secondary: "Secondary",
      },

      spacing: {
        4: "4px",
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",

        red: "#e95444",
        green: "#29cb7f",
        blue: "#9FC2CC",
        primary: "#ffffff",
        primaryText: "#000000",
        primaryLight: "#ffffff",
        secondary: "#EEE0CB",
        secondaryDark: "#c9b392ff",

        crPrimary: "#F5EEE6",
        crBlue: "#4162C1",
        crPink: "#EE5A7E",
      },

      animation: {
        fadeUp: "fadeUp 0.7s ease-in-out",
        fadeDown: "fadeDown 0.7s ease-in-out",
      },
      keyframes: {
        fadeUp: {
          "0%": {
            transform: "translateY(10px)",
            opacity: "0",
          },
          "50%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        fadeDown: {
          "0%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          "50%": {
            transform: "translateY(10px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
