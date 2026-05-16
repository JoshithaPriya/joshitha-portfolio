import type { Config } from "tailwindcss";

// NOTE: In Tailwind v4, theme customization is done in globals.css using @theme {}
// This file is kept minimal. Custom colors/fonts are defined in app/globals.css
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;