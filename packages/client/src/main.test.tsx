import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from '../../material-ui/src/Foundation/Theme/index';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';

describe('App', () => {
    it('renders the App component', () => {
        render(
            <ThemeProvider theme={Theme}>
                <Provider store={store}>
                    <App />
                </Provider>
            </ThemeProvider>
        );

        // const appElement = screen.getByTestId('app');
        // expect(appElement).toBeInTheDocument();
    });
});