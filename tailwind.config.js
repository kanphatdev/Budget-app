/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ca00ff",
          "secondary": "#55c600",
          "accent": "#009b00",
          "neutral": "#2a2129",
          "base-100": "#262d2e",
          "info": "#00edff",
          "success": "#009e00",
          "warning": "#d81400",
          "error": "#ed494e",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
