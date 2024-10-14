import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-green": "#ccffcc",
        "dark-green": "#006400",
        "light-red": "#ffcccc",
        "dark-red": "#8b0000",
        "light-blue": "#add8e6",
        "dark-blue": "#00008b",
        "light-orange": "#ffcc99",
        "dark-orange": "#ff8c00",
        "light-purple": "#e6e6fa",
        "dark-purple": "#800080",
      },
    },
  },
  plugins: [],
};
export default config;
