const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      inter: ["Inter"],
      monument: ["Monument"],
    },
    fontSize: {
      "1v": "4.167vw", //80px
      "7v": "3.125vw", //60px
      "8v": "5.104vw", //98px
      "7s": "4.28em",
      "6s": "2.57em",
      "5s": "1.42em", //20px
    },
    letterSpacing: {
      tightest: "-.08em",
    },
    lineHeight: {
      tight: "0.9em",
    },

    extend: {
      lineHeight: {
        heading: "1.1",
      },
      colors: {
        background: "#121212",
        light: "#F2F2F2",
        online: "#8CFB1C",
        grayColor: "#222222",
        borderColor: "#787878",
        endColor: "#CCFF04",
      },
      spacing: {
        "1s": "0.14em", // 2px
        "2s": "0.28em", // 4px
        "3s": "0.57em", // 8px
        "4s": "0.85em", //12px
        "5s": "1.42em", //20px
        "6s": "2.57em", //36px
        "7s": "3.7em", //52px
        "8s": "4.28em", //60px
        "9s": "7em ", //98px
        "10s": "11.42em", //160px
        "11s": "18.28em", //256px
      },
    },
  },

  //plugins: [require("tailwind-scrollbar")],
};

module.exports = config;
