/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  important: '#__next',
  plugins: [],
};
