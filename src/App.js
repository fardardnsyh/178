import React from 'react';
import 'react-chatbot-kit/build/main.css';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { themeColors } from './theme';
import { router } from './routes';
import './configs/firebaseConfigs';

function App() {
  return (
    <ThemeProvider theme={createTheme(themeColors)}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
