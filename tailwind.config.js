/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'color-1':'#1f2b6c',
        'color-2':'#159be7',
        'color-3':'#bbcef3',
        'color-4':'#f7f9f9',
        'color-5':'#202023',
        'color-6':'#FE5F55',
        'color-7':'#35FF69',
        'color-8':'#f7f8fd',
        'color-9': '#25D366',
      },
    },
    fontFamily:{
      'Inter':'"Inter", sans-serif"'
    }
  },
  plugins: [],
}

