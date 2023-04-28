/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "portal-background": "url('/assets/background.png')",
      },
    },
  },
  plugins: [],
};
