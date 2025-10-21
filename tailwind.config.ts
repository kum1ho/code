import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        tea: {
          50: '#f4fff3',
          100: '#e0f6dc',
          200: '#c1edbb',
          300: '#9de396',
          400: '#7edb76',
          500: '#53c94a',
          600: '#38aa33',
          700: '#2b8528',
          800: '#236b22',
          900: '#1c561d'
        },
        coffee: '#3b1f1a'
      }
    }
  },
  plugins: []
};

export default config;
