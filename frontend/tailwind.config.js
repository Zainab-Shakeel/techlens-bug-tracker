/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 20s infinite linear',
        'slide-up': 'slideUp 0.5s ease-out',
        'shake': 'shake 0.3s ease-in-out',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50px, 50px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-10px)' },
          '75%': { transform: 'translateX(10px)' },
        },
      },
    },
  },
  plugins: [],
}

