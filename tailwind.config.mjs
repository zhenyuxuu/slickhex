/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#161925",
        primary: "#0A5C30",
        secondary: "#325D80",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
