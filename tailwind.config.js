/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.js" // si usas flowbite-react
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // aquí va Flowbite
  ],
};
