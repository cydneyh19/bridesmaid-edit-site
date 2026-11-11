/** @type {import('tailwindcss').Config} */
const c = (name) => `rgb(var(--c-${name}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: c('burgundy'),
        rose: c('rose'),
        champagne: c('champagne'),
        ivory: c('ivory'),
        espresso: c('espresso'),
        frame: c('frame'),
      },
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-sans)'],
      },
      fontSize: {
        mega: ['var(--fs-mega)', { lineHeight: '0.82', letterSpacing: '-0.02em' }],
        display: ['var(--fs-display)', { lineHeight: '0.9', letterSpacing: '-0.015em' }],
        h2: ['var(--fs-h2)', { lineHeight: '0.95', letterSpacing: '-0.01em' }],
        lede: ['var(--fs-lede)', { lineHeight: '1.3' }],
        statement: ['var(--fs-statement)', { lineHeight: '1.05' }],
        marquee: ['var(--fs-marquee)', { lineHeight: '1' }],
        h3: ['var(--fs-h3)', { lineHeight: '1.15' }],
        numeral: ['var(--fs-numeral)', { lineHeight: '0.85', letterSpacing: '-0.04em' }],
        stat: ['var(--fs-stat)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        body: ['var(--fs-body)', { lineHeight: '1.7' }],
        label: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.2em' }],
      },
      spacing: {
        gutter: 'var(--gutter)',
        section: 'var(--section-pad)',
      },
      transitionTimingFunction: {
        editorial: 'var(--ease-out)',
      },
    },
  },
  plugins: [],
}
