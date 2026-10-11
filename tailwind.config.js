/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orox: {
          dark: '#0A0B0E',
          surface: '#111317',
          card: '#16181F',
          border: '#252833',
          orange: {
            DEFAULT: '#FF7A00',
            light: '#FFA033',
            dark: '#D95E00',
            glow: '#FF8800',
          },
          amber: '#FFB340',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        pixel: ['"Silkscreen"', '"DotGothic16"', 'monospace'],
        ndot: ['"Silkscreen"', '"DotGothic16"', 'monospace'],
      },
      boxShadow: {
        'glow-orange': '0 0 25px -5px rgba(255, 122, 0, 0.45)',
        'glow-orange-lg': '0 0 45px -8px rgba(255, 122, 0, 0.55)',
        'eye-glow': '0 0 16px 4px rgba(255, 149, 0, 0.75)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-delayed': 'floatSlow 6s ease-in-out 3s infinite',
        'blink': 'blink 4s infinite',
        'wave': 'wave 1.2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        blink: {
          '0%, 92%, 100%': { transform: 'scaleY(1)' },
          '95%': { transform: 'scaleY(0.08)' },
        },
        wave: {
          '0%, 100%': { height: '8px' },
          '50%': { height: '28px' },
        }
      }
    },
  },
  plugins: [],
}
