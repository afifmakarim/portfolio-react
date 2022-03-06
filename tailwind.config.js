module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      orange: "#E9813D",
      gray: "#3A3A3A",
      white: "#FFFFFF",
      transparent: "transparent",
      black: "#111111",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    screens: {
      sm: { min: "0px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right bottom, rgba(35 33 41 / 50%), rgba(35, 33, 41 , 0.9)),  url('../images/projects/pexels-negative-space-34153.jpg')",
        "github-pattern":
          "linear-gradient(to right bottom, rgba(35 33 41 / 50%), rgba(35, 33, 41 , 0.9)),  url('../images/projects/pexels-bich-tran-669996.jpg')",
        "trakteer-pattern":
          "linear-gradient(to right bottom, rgba(35 33 41 / 50%), rgba(35, 33, 41 , 0.9)),  url('../images/projects/pexels-miguel-á-padriñán-932261.jpg')",
      },
    },
  },
  plugins: [],
};
