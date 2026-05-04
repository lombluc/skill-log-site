import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Brand */
        'brand-primary':   '#EA4D58',
        'brand-secondary': '#FFA028',

        /* Parchment family */
        'parchment-light': '#F2DDB0',
        'parchment-mid':   '#D4A96A',
        'parchment-dark':  '#C8945A',

        /* Corkboard */
        'cork-primary':    '#DEB67E',
        'cork-secondary':  '#B48766',

        /* Paper family */
        'paper-light':     '#FFF8E7',
        'paper-mid':       '#E3D9C1',
        'paper-dark':      '#B5AC97',

        /* Text */
        'text-parchment':  '#4E453A',
        'text-paper':      '#4E4133',
        'dark-ink':        '#3D2B1F',

        /* Wood */
        'wood-brown':      '#5C3D1E',
        'wood-dark':       '#3A2210',

        /* Sky / clouds */
        'sky-blue':        '#7EC8D8',
        'cloud-light':     '#FFE7B5',
        'cloud-mid':       '#FED09C',
        'cloud-dark':      '#FF916F',

        /* Pins / coral */
        'terracotta':      '#EB5D45',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body:    ['var(--font-body)',    'Georgia', 'serif'],
      },
      maxWidth: {
        section: '1100px',
      },
    },
  },
  plugins: [],
};

export default config;
