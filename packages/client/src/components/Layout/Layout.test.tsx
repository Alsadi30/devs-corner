import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Layout from './index';
import { LayoutProps } from './index';
import React from 'react';
import { ReactElement } from 'react';


test('loads and displays greeting', () => {
    // ARRANGE

    const layoutprops: LayoutProps = {
        children: <div></div>
    }

    const getByDataCy = render(<Layout {...layoutprops} />)
})

test('use jsdom in this test file', () => {
    const element = document.createElement('Layout')
    expect(element).not.toBeNull()
})