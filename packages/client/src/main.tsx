import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from '../../material-ui/src/Foundation/Theme/index';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>;
  </React.StrictMode>,
)
