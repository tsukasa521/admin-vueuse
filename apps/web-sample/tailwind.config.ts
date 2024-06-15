import type { Config } from 'tailwindcss'

export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

