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
        },
        gap: {
          '1': '1rem',
        }
      },
    },
    plugins: [require('@tailwindcss/forms')],
}

