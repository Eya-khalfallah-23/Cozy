/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
     "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors : {
        beige : "#f1eaea",
        customPink : "#e5b5ad",
        customGreen: "#87c38f",
        'custom-light': 'rgb(241, 234, 234)',
        'custom-dark': 'rgba(234, 177, 178, 0.50)',
      },
      boxShadow: {
        'custom': '0 4px 10px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}

