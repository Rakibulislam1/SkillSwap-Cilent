/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  // plugins: [require('flowbite/plugin')],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
  },

}

