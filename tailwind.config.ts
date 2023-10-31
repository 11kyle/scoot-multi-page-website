import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'yellow': 'hsl(40,97%,58%)',
        'dark-navy': 'hsl(216,17%,35%)',
        'dim-grey': 'hsl(217,12%,62%)',
        'light-grey': 'hsl(212,41%,93%)',
        'snow': 'hsl(214,37%,96%)',
        'light-yellow': 'hsl(39,100%,94%)',
      },
      fontFamily: {
        'heading': ['var(--font-space-mono)'],
        'body': ['var(--font-lexend-deca)'],
      },
      screens: {
        'xs': '376px',
      }
    },
  },
  plugins: [],
}
export default config
