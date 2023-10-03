/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: { 
        primary: 'var(--color-bg-primary)', 
      }, 
      textColor: { 
        accent: 'var(--color-text-accent)', 
        primary: 'var(--color-text-primary)',
      }
    },
  },
  plugins: [],
}

