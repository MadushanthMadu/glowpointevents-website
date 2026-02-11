import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      dark: "#010F2B",
      main: "#021945",
      light: "#1A3470",
      contrastText: "#ffffff"
    },
    secondary: {
      dark: "#252F36",
      main: "#36454F",
      light: "#4B5C66",
      contrastText: "#ffffff"
    },
    background: {
      default: "#ffffff",
      paper: "#f0f0f0"
    },
    text: {
      primary: '#1E1E1E',
      secondary: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: [
      'Playfair Display','Inter'
    ].join(',')
  }
});

export default lightTheme;