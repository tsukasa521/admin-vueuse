import type { Config } from 'tailwindcss'

export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  theme: {
    colors: {
      primary: 'var(--td-brand-color-7)',
    },
    extend: {
      textColor: {
        regular: '#333333',
        secondary: 'rgb(0,0,0,0.6)',
      },
      backgroundColor: {
        base: '#f3f3f3'
      },
      borderColor: {
        base: '#e6e6e6',
      }
    }
  },
  plugins: [],
} satisfies Config

