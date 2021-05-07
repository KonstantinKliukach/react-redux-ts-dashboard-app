const theme = {
  colors: {
    fontColors: {
      white: '#FFFFFF',
      main: '#272D67',
      secondary: '#676DAA',
    },
    primary: {
      stat: '#5285FF',
      hover: '#3564D3',
      active: '#7BA2FF',
      disabled: '#E0E7F8',
    },
    secondary: {
      stat: '#91A0C9',
      hover: '#7E8DB6',
      active: '#B4C1E4',
    },
    disabled: '#E0E7F8',
    active: '#EEF1FA',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontWeights: {
    normal: 500,
    regular: 400,
  },
  fontSizes: {
    small: '0.75rem',
    medium: '1rem',
    large: '1.125rem',
  },
};

export type ThemeType = typeof theme;

export default theme;
