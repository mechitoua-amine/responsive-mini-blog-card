/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: ['@tailwindcss/typography'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['"Sora"', 'sans-serif']
      },
      colors: {
        accent: '#883AE1',
        secondary: '#E6D6FC',
        lightGreen: '#E5EAF0',
        lightyellow: '#FAFAF9',
        darkGray: '#20293A',
        lightGray: '#6C727F'
      },
      fontSize: {
        title: '1.125rem',
        body: ' 0.875rem',
        small: '0.75rem',
        tag: '0.625rem'
      },
      width: {
        img: '336px'
      },
      height: {
        img: '152px'
      },
      boxShadow: {
        custom: '0px 30px 100px 0px rgba(17, 23, 41, 0.05)'
      }
    }
  }
}
