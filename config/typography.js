const colors = require('./colors'),
  palette = colors.palette

module.exports = {
  fontSources: ['Google Fonts'],

  fontStack: [
    {
      name: 'Cinzel',
      cssClass: 'text-serif',
      link: 'https://fonts.google.com/specimen/Cinzel',
    },
    {
      name: 'Inter',
      cssClass: 'text-sans',
      link: 'https://fonts.google.com/specimen/Inter',
    },
    {
      name: 'IBM Plex Mono',
      cssClass: 'text-mono',
      link: 'https://fonts.google.com/specimen/IBM+Plex+Mono',
    },
  ],

  fontFamily: {
    sans: ['"Inter"', 'sans-serif'],
    serif: ['"Cinzel"', 'serif'],
    heading: ['"Cinzel"', 'serif'],
    display: ['"Cinzel"', 'serif'],
    mono: ['"IBM Plex Mono"', 'monospace'],
    code: ['"IBM Plex Mono"', 'monospace'],
  },

  headings: {
    fontFamily: '"Cinzel", serif',

    fontSize: {
      'display-xl': [
        '60px',
        {
          label: 'Display XL',
          lineHeight: '112px',
          letterSpacing: '-1px',
        },
      ],
      'display-lg': [
        '56px',
        {
          label: 'Display LG',
          lineHeight: '112px',
          letterSpacing: '-1.25px',
        },
      ],
      'display-md': [
        '52px',
        {
          label: 'Display MD',
          lineHeight: '100px',
          letterSpacing: '-1.25px',
        },
      ],
      'display-sm': [
        '40px',
        {
          label: 'Display SM',
          lineHeight: '80px',
          letterSpacing: '-1.25px',
        },
      ],
      'h1': [
        '52px',
        {
          label: 'H1',
          lineHeight: '72px',
          letterSpacing: '-1.25px',
        },
      ],
      'h2': [
        '40px',
        {
          label: 'H2',
          lineHeight: '58px',
          letterSpacing: '-0.74px',
        },
      ],
      'h3': [
        '32px',
        {
          label: 'H3',
          lineHeight: '48px',
          letterSpacing: '-0.64px',
        },
      ],
      'h4': [
        '24px',
        {
          label: 'H4',
          lineHeight: '36px',
          letterSpacing: '-0.33px',
        },
      ],
      'h5': [
        '20px',
        {
          label: 'H5',
          lineHeight: '32px',
          letterSpacing: '-0.26px',
        },
      ],
      'h6': [
        '18px',
        {
          label: 'H6',
          lineHeight: '26px',
          letterSpacing: '-0.26px',
        },
      ],
      'overline': [
        '14px',
        {
          label: 'Overline',
          lineHeight: '24px',
          letterSpacing: '3.5px',
        },
      ],
    },

    fontWeight: {
      display: 700,
      h1: 700,
      h2: 700,
      h3: 700,
      h4: 500,
      h5: 400,
      h6: 400,
      overline: 600,
    },
  },

  body: {
    fontFamily: ['"Inter", sans-serif', '"IBM Plex Mono", monospace'],
    fontSize: {
      base: [
        '16px',
        {
          label: 'Base',
          lineHeight: '28px',
          letterSpacing: '-0.18px',
        },
      ],
      xl: [
        '28px',
        {
          label: 'Text Extra Large',
          lineHeight: '44px',
          letterSpacing: '-0.2px',
        },
      ],
      lg: [
        '20px',
        {
          label: 'Text Large',
          lineHeight: '32px',
          letterSpacing: '-0.26px',
        },
      ],
      md: [
        '14px',
        {
          label: 'Text Medium',
          lineHeight: '24px',
          letterSpacing: '-0.18px',
        },
      ],
      sm: [
        '12px',
        {
          label: 'Text Small',
          lineHeight: '20px',
          letterSpacing: '-0.01px',
        },
      ],
      xs: [
        '10px',
        {
          label: 'Text Extra Small',
          lineHeight: '20px',
          letterSpacing: '-0.01px',
        },
      ],
    },
    fontWeight: {
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
      800: 800,
      900: 900,
    },
  },
}
