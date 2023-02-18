import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
// import './index.css'
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from '../../material-ui/src/Foundation/Theme/index';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={Theme}>
			<CssBaseline />
			<Provider store={store}>
				<App />
			</Provider>
		</ThemeProvider>
		;
	</React.StrictMode>
);
