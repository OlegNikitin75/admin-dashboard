const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#e9ecfb'
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out'
      },
      transitionDuration: {
        DEFAULT: '300ms'
      }
    }
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.flex-center-between': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        '.flex-center-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      })
    })
  ]
}
