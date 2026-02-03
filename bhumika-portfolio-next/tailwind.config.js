/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0b0f12',
        accent: '#00ff99',
        neon: '#ff3399'
      },
      backgroundImage: {
        'radial-soft': 'radial-gradient(ellipse at center,var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
