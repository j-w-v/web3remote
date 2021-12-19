module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        normal: ['Encode Sans Condensed'],
        headers: ['Encode Sans Expanded']
      },
      colors: {
        'bg-main':'#f6f5f8',
        'job-main' : '#fff',
        'cta': '#ff4343'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
