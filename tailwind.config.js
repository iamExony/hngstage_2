/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'primary':['DM Sans']
      },
      backgroundImage:{
        'banner-img':"url('/Poster.png')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

