module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      keyframes: {
        'enter-left': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
        'enter-right': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        'enter-left': 'enter-left 1s ease-in-out forwards',
        'enter-right': 'enter-left 1s ease-in-out forwards',
      },
    },
  },
};
