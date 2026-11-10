/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          light: '#F8F8F6',
          DEFAULT: '#F3F3F0',
          dark: '#EBEBE6',
          card: '#FFFFFF'
        },
        ink: {
          DEFAULT: '#111113',
          muted: '#66666E',
          faint: '#9E9EA8',
          border: '#E2E2DC'
        },
        electric: {
          blue: '#1D4ED8',
          cyan: '#06B6D4',
          orange: '#FF5722',
          lime: '#D8F827',
          pink: '#FF2A6D'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'Syne', 'sans-serif'],
        editorial: ['"Syne"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #111113',
        'brutal-sm': '2px 2px 0px 0px #111113',
        'brutal-lg': '8px 8px 0px 0px #111113',
        'brutal-blue': '4px 4px 0px 0px #1D4ED8',
        'brutal-orange': '4px 4px 0px 0px #FF5722',
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}
