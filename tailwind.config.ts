import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: { max: "500px" },
      md: { max: "720px" },
      lg: { max: "1024px" },
      xl: { max: "1300px" },
    },
    extend: {
      colors: {
        dark: "#282828",
        darker: "#181818",
        bglight: "#dae1d8",
        darkAccent: "#03a9f4",
        lightAccent: "#096dbe",
      },
      textIndent: {
        h1: "10px",
        h2: "10px",
        h3: "10px",
        h4: "10px",
        h5: "10px",
        h6: "10px",
        h7: "10px",
        h8: "10px",
        h9: "10px",
        h10: "10px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
