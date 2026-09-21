import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    text: {
      primary: '#111111',
      secondary: '#666666',
    },
  },

  typography: {
    fontFamily: [
      'Inter',
      'Arial',
      'Helvetica',
      'sans-serif',
    ].join(','),

    h1: {
      fontWeight: 700,
    },

    h4: {
      fontWeight: 700,
    },

    body1: {
      lineHeight: 1.6,
    },
  },

  shape: {
    borderRadius: 14,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
  },
});