/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'uber': "url(/src/assets/bguber.png)",
        'city': "url(/src/assets/bg-city.png)",
      }
    },
  },
  plugins: [],
};

