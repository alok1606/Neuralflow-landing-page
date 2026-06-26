import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        forsythia:     '#FFC801',
        'deep-saffron':'#FF9932',
        nocturnal:     '#114C5A',
        'oceanic-noir':'#172B36',
        'arctic-powder':'#F1F6F4',
        'mystic-mint': '#D9E8E2',
      },
      fontFamily: {
        mono: ['var(--font-jetbrains)', 'monospace'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
