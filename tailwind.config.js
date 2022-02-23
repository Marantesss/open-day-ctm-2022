const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Decima Mono Pro', ...defaultTheme.fontFamily.sans],
      serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
      title: ['Decima Mono Pro Bold', 'sans-serif'],
      lt: ['Decima Mono Pro Light', 'sans-serif'],
      'section-title': ['Do4', 'title'],
    },
    extend: {
      colors: {
        'ctm-dark-blue': '#0091BE',
        'ctm-gradient-light-blue': '#64C8EB',
        'ctm-light-blue': '#EEF8FB',
        'ctm-grey': '#999999',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
