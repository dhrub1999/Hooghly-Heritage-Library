/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
        dmSans: ["var(--font-dm-sans)", ...defaultTheme.fontFamily.sans],
        jost: ["var(--font-jost)", ...defaultTheme.fontFamily.sans],
        kalam: ["var(--font-kalam)", ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        "lg-h1": ["2.875rem", "139%"],
        "lg-h2": ["2.5625rem", "3.625rem"],
        "lg-h3": ["2.25rem", "144%"],
        "lg-h4": ["2rem", "138%"],
        "lg-h5": ["1.8125rem", "138%"],
        "lg-h6": ["1.625rem", "146%"],
        "lg-body-lg": ["1.4375rem", "157%"],
        "lg-body-md": ["1.25rem", "160%"],
        "lg-body-sm": ["1.125rem", "156%"],
        "lg-caption-lg": ["1rem", "150%"],
        "lg-caption-md": ["0.875rem", "157%"],
        "lg-caption-sm": ["0.8125rem", "154%"],

        "md-h1": ["2.5625rem", "3.625rem"],
        "md-h2": ["2.25rem", "144%"],
        "md-h3": ["2rem", "138%"],
        "md-h4": ["1.8125rem", "138%"],
        "md-h5": ["1.625rem", "146%"],
        "md-h6": ["1.4375rem", "157%"],
        "md-body-lg": ["1.25rem", "160%"],
        "md-body-md": ["1.125rem", "156%"],
        "md-body-sm": ["1rem", "150%"],
        "md-caption-lg": ["0.875rem", "157%"],
        "md-caption-md": ["0.8125rem", "154%"],
        "md-caption-sm": ["0.6875rem", "145%"],

        "sm-h1": ["2.25rem", "144%"],
        "sm-h2": ["2rem", "138%"],
        "sm-h3": ["1.75rem", "129%"],
        "sm-h4": ["1.5625rem", "120%"],
        "sm-body-lg": ["1.125rem", "156%"],
        "sm-body-md": ["1rem", "150%"],
        "sm-body-sm": ["0.875rem", "157%"],
        "sm-caption-lg": ["0.75rem", "167%"],
        "sm-caption-md": ["0.6875rem", "145%"],
        "sm-caption-sm": ["0.625rem", "140%"],

        "jost-lg": ["4rem", "139%"],
        "jost-md": ["3.5rem", "139%"],
        "jost-sm": ["2.5rem", "139%"],
      },
      colors: {
        neutral: {
          cream: {
            300: "#FDFBF2",
            400: "#FAF4E1",
            500: "#F2E6C9",
          },
          "warm-grey": {
            300: "#CED4DA",
            400: "#ADB5BD",
            500: "#6C757D",
            600: "#495057",
            700: "#343A40",
            800: "#212529",
          },
          "off-white": {
            300: "#FBFBFB",
            400: "#F5F5F5",
            500: "#E0E0E0",
          },
        },
        primary: {
          300: "#8A5F51",
          400: "#5D4037",
          500: "#30211C",
        },
        accent: {
          300: "#F0D175",
          400: "#FFC107",
          500: "#AD8200",
        },
        success: {
          300: "#72FE88",
          400: "#00E024",
          500: "#007012",
        },
        error: {
          300: "#F19A7E",
          400: "#F24E1A",
          500: "#AE2D04",
        },
      },
      backgroundImage: {
        "hero-gradiant":
          "radial-gradient(circle, rgba(253,251,242,1) 30%, rgba(242,230,201,1) 85%)",
      },
    },
  },
  plugins: [],
};
