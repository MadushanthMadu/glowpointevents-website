import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      dark: "#021945",
      main: "#021945",
      light: "#021945",
      contrastText: "#ffffff"
    },
    secondary: {
      dark: "#36454F",
      main: "#36454F",
      light: "#36454F",
      contrastText: "#ffffff"
    },
    background: {
      default: "#ffffff",
      paper: "#f0f0f0"
    },
    text: {
      primary: '#341010',
      secondary: '#D3AF37'
    }
  },
  typography: {
    fontFamily: [
      'Playfair Display', 'Inter'
    ].join(','),
  }
});

export default lightTheme;