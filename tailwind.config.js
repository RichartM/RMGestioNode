/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        papel: '#f6f5f1',
        tinta: '#16181d',
        gris: '#5d616b',
        linea: '#e2dfd7',
        acento: '#1d6b57',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: { contenido: '72rem' },
    },
  },
  plugins: [],
};
