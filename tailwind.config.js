/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1F2858',
        secondary: '#3E4A86',
        tertiary: '#07CCB9',
        quaternary: '#FFA300',
        color: '#E0E0E0',
      },
    },
  },
  plugins: [],
};
