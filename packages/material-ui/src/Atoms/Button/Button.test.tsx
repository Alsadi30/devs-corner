import { render, screen } from '@testing-library/react';
import OurButton, { ButtonProps } from './index';



describe('OurButton', () => {
    test('renders a button', () => {

        let BtnProps: ButtonProps = {
            children: React.ReactNode,
            handleClick?: () => void
        }

        render(<OurButton {...BtnProps} />)

    });
    test('calls the handleClick function when the button is clicked', () => {


    });
})

