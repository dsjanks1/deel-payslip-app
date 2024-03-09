import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';
import PayslipList from './components/screens/PayslipList';
import PayslipDetails from './components/screens/PayslipDetails';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Bagoss Condensed',
        'sans-serif',
      ].join(','),
    },
  });
  useEffect(() => {
    // Cater for mobile status bar if on mobile
    async function initializeStatusBar() {
      if (Capacitor.isPluginAvailable('StatusBar')) {
        try {
          await StatusBar.setStyle({ style: Style.Dark });

          await StatusBar.setBackgroundColor({ color: '#FF5733' });
        } catch (err) {
          console.error('StatusBar plugin not available:', err);
        }
      }
    }

    initializeStatusBar();
  }, []);
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<PayslipList />} />
        <Route path="/payslip/:id" element={<PayslipDetails />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
