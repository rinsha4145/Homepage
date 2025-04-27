/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
        },
        keyframes: {
          'slide-left': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-100%)' },
          },
        },
        animation: {
          'slide-left': 'slide-left 8s linear infinite',
        },
      },
    },
    plugins: [],
  }
  