import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: 'rgba(0, 48, 46, 1)',
        customFooterColor: 'rgba(11, 13, 23, 1)',
        customYellow: 'rgba(251, 221, 187, 1)'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],  // Use Poppins as the default sans font
      },
    },
  },
  plugins: [
    daisyui,
  ],
}
