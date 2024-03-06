/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  variants: {
    extend: {
      opacity: ["group-hover"],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"], // font-roboto
      },

      colors: {
        //new colors

        //primary colors shades
        primary: {
          100: "#f0fff3",
          200: "#b2d8d8",
          300: "#66b2b2",
          400: "#008080",
          500: "#006666",
          600: "#004c4c",
        },
        grayish: "#666666",
        light: "#f4f4f4",

        primaryBlue: {
          100: "#7ABFFF",
          200: "#1456FC",
          300: "#303DBF",
        },
      },
    },
  },
  plugins: [],
};
