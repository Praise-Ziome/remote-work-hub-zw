/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dce8ff',
          200: '#b6cdff',
          300: '#84acff',
          400: '#4f7fff',
          500: '#3461f0',
          600: '#2848d6',
          700: '#2138ac',
          800: '#1f3187',
          900: '#1e2e6b',
        },
        surface: {
          // dark theme surfaces
          950: '#05070f',
          900: '#0a0e1a',
          850: '#0d1220',
          800: '#101627',
          700: '#161d33',
          600: '#1f2a48',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(79,127,255,0.15), 0 8px 24px -8px rgba(52,97,240,0.45)',
      },
    },
  },
  plugins: [],
}
