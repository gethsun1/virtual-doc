import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E7D32', // Deep Green (Modern)
    },
    secondary: {
      main: '#1B5E20', // Darker Green
    },
    background: {
      default: '#F5F5F5', // Light Grey Background
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `url(${process.env.PUBLIC_URL}/background.svg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          // Optionally, remove any default margin/padding
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});

export default theme;
