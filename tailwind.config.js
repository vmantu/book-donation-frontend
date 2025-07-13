// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1.5s ease-in-out infinite',
        bubble: 'bubble 15s linear infinite',
        bounce: 'bounce 1s infinite',
        'logo-shrink': 'logoShrink 0.3s ease-in-out forwards',
        'logo-wiggle': 'logoWiggle 1s ease-in-out infinite',
        'gradient-pulse': 'gradientPulse 8s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        bubble: {
          '0%': {
            transform: 'translateY(0)',
            opacity: '0.3',
          },
          '100%': {
            transform: 'translateY(-800px)',
            opacity: '0',
          },
        },
        logoShrink: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.85)' },
        },
        logoWiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        gradientPulse: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },

      // 🔤 Add font families here
      fontFamily: {
        heading: ['"Comic Neue"', 'cursive'],
        body: ['"Comic Sans MS"', 'cursive'],
      },
    },
  },
  plugins: [],
};
