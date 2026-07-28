/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0A0F1A',
        surface: '#111827',
        'surface-light': '#1F2937',
        esmeralda: '#10B981',
        'esmeralda-dark': '#064E3B',
        alert: '#EF4444',
        warning: '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
