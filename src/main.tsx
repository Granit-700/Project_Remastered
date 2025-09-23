import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: "Nunito, Arial, sans-serif",
  },
  palette: {
    background: {
      default: "#F9F9F9",
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
