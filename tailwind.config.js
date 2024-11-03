/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customTeal: {
          900: '#006D5B',  // Adding your hex color as a custom teal
        },
      },
    },
  },
  plugins: [],
};
