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
        red: '#E30000',
        deepRed: '#C81432',
        vibrantGreen: '#34B53A',
        softTeal: '#C2D4D4',
        deepSeaGreen: '#295A5A',
        darkTeal: '#337070',
        skyBlue: '#3881FF',
        lightBlueGreen: '#C2D4D4',
        offBlack:"#222326",
        borderGray: "#CCCCCC",
        //primary colors shades
        primary: {
          100: "#f0fff3",
          200: "#b2d8d8",
          300: "#66b2b2",
          400: "#008080",
          450: "#5C8D8D",
          500: "#006666",
          550: "#709B9B",
          575: "#337070",
          600: "#004c4c",
        },
        grayish: "#666666",
        grayMedium:"#8C8C8C",
        light: "#f4f4f4",
        veryLightGray: "#EBF1F1",
        grayLighter: "#F1F1F1",

        primaryBlue: {
          100: "#7ABFFF",
          200: "#1456FC",
          300: "#303DBF",
        },
      },
      boxShadow: {
        'custom': '0px 4px 12px -2px #33707033',
      },
      borderRadius: {
        'custom': '20px',
      },
    },
  },
  plugins: [],
};
