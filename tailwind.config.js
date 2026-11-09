/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // Preflight (Tailwind's CSS reset) is OFF so the UI stays exactly the same
  // as the old hand-written CSS. Do not turn it on unless you re-check every page.
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      keyframes: {
        // Home page intro
        moveAnimation: {
          from: { transform: 'translateX(-12%)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        // AnimatedWrapper (Education, Experience, Projects, Contact)
        moveInAnimation: {
          from: { transform: 'translateX(-12%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        move: 'moveAnimation 1s ease-out',
        'move-in': 'moveInAnimation 1s ease-in-out',
      },
    },
  },
  plugins: [],
};