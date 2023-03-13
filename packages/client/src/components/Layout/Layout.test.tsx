import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Layout from './index';
import { LayoutProps } from './index';
import React, { ReactNode } from 'react';


test('loads and displays greeting', () => {
    // ARRANGE

    const layoutprops: LayoutProps = {
        children: ReactNode
    }

    const getByDataCy = render(<Layout {...layoutprops} />)
})

test('use jsdom in this test file', () => {
    const element = document.createElement('Layout')
    expect(element).not.toBeNull()
})