/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#101522',
        ink: '#202437',
        timber: '#8f653d',
        bronze: '#c18a45',
        moss: '#263268',
        navy: '#1b244f',
        cream: '#f6f3ee',
        stone: '#e7ded1'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'Cambria', 'Times New Roman', 'serif']
      },
      boxShadow: {
        soft: '0 24px 70px rgba(17, 22, 42, 0.16)',
        glow: '0 32px 90px rgba(48, 72, 145, 0.38)'
      }
    }
  },
  plugins: []
};
