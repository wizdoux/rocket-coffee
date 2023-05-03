module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'terciary': '#27272a',
        'secondary': '#18181b',
        'primary': '#8257E5',
        'backgrond': '#000',
        'text-color': '#FFFFFF',
        'button': '#8257E5',
        'border': '#29292E',
        'border-menu-mobile': '#A8A8B3',
        'text-color-menu-mobile': '#E1E1E6',
      },
      fontSize: {
        '8xl': ['80px', {
          letterSpacing: '-3%',
          lineHeight: '90px',
        }],
      },
      gridTemplateColumns: {
        'menu': 'repeat( auto-fit, minmax(250px, 1fr))',
      }
    },
  },
  plugins: [],
}
