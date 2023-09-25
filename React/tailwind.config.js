/** @type {import('tailwindcss').Config} */
export default {
    content: [
     "./index.html",
     "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        maxWidth:{
          '5/6':'90%'
        }
      },
    },
    plugins: [require('@tailwindcss/forms')],
}

