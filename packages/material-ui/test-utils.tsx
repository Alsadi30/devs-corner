import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { Theme } from './src/Foundation/Theme/index';
import { ReactElement } from 'react';
import { RenderOptions, render } from '@testing-library/react';


const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={Theme} >
            {children}
        </ThemeProvider>

    )
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }