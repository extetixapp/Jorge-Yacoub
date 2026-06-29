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
        // Paleta de colores Pie Sano basada en el logo
        verde: {
          oscuro: '#2E7D56',
          claro: '#4ADE80',
        },
        gris: {
          carbon: '#374151',
          fondo: '#F3F4F6',
        },
      },
    },
  },
  plugins: [],
}