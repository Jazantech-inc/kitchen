/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens:{
        mm:'375px',
        lm:'425px',
        lxl:'1240px'
      },
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}