import { ThemeProvider } from "@emotion/react";
import Router from "./routes/router";
import { BrowserRouter } from 'react-router-dom';
import theme from "./theme/theme";
import { useEffect } from "react";
import AOS from 'aos';
import { SnackbarProvider } from 'notistack';
import { CssBaseline } from "@mui/material";

function App() {
  // Animation configurations
  useEffect(() => {
    AOS.init({ 
      duration: 500,
      easing: 'ease',
      once: true
    });
  }, []);

  return (
    <BrowserRouter>
      <SnackbarProvider 
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }} 
        autoHideDuration={3000} 
        preventDuplicate
        style={{
          fontWeight: 600,
          fontFamily: 'Playfair Display'
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router />
        </ThemeProvider>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
