/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#c29032',
        'secondary': '#262626',
        'tertiaty': '#d0d0d0',
        'text-strong': '#555555',
        'white': '#fff',
        'black': '#000'
      },
    },
  },
  plugins: [],
}

