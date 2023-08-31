/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "manRope": ["Manrope", "sans-serif"]
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96",
        primaryDark: "#58E6D9",
    }
    },
    screens: {
      "2xl": { max: "1535px" },  
      "xl": { max: "1279px" },  
      "lg": { max: "1023px" },  
      "md": { max: "767px" },  
      "sm": { max: "639px" },  
      "xs": { max: "479px" },
    }
  },
  plugins: [],
}
