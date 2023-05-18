/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        ruby: {
          500: '#E32636',
        },
        charcoal:'#333333',
      }
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'bangers':['Bangers', 'cursive'],
      'kanit':['Kanit', 'sans-serif']
    },
    
  },
  plugins: [require("daisyui")],
}