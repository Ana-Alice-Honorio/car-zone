/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors: {
       white: '#ffffff',
       lightgray: '#f3f5f8',
       gray: '#acacac',
       black: '#2E2D37',
       red: '#f3123c',
       aquagray: '#d6d6dc'
     }
    },
  },
  plugins: [],
};
