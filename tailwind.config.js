/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // These match the warm, earthy tones in your "FORME" screenshot
        'forme-brown': '#3D2B24',
        'forme-beige': '#F5E6E0',
        'forme-cream': '#FAF3F0',
        'forme-accent': '#C5A898',
      },
      borderRadius: {
        // These create those unique, extra-rounded organic shapes
        'forme-arch': '100px 100px 0 0',
        'forme-pill': '100px',
        'forme-card': '40px',
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'serif'],
        'body': ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
