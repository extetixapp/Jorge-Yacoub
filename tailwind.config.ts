/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Vinculamos las variables que creamos en el layout
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        // Dejamos nuestra paleta médica premium grabada a fuego
        medicoAzul: '#1B4D8F',
        medicoTeal: '#5ACACF',
        medicoGris: '#F2F4F7',
      },
    },
  },
  plugins: [],
};
