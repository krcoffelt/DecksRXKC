/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#161513',
        ink: '#25221e',
        timber: '#9a6235',
        bronze: '#b37a3f',
        moss: '#233f63',
        cream: '#f7f3ec',
        stone: '#e8dfd2'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Arial Black', 'Impact', 'Haettenschweiler', 'Arial Narrow Bold', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 24px 70px rgba(22, 21, 19, 0.12)'
      }
    }
  },
  plugins: []
};
