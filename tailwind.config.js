/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        nav: "#1976D2",
        page: "#EFEFEF",
        card: "#BFC8CA",
        "card-accent": "#FFFFFF",
        "card-accent-hover":"#BBDEFB",
        "default-text": "black",
        "blue-accent": "#BBDEFB",
        "blue-accent-hover": "#1976D2",
      },
    },
  },
  plugins: [],
}
