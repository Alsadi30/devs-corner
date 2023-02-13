import { Container } from '@mui/material'
import React from 'react'
import { ContStyle } from './Container.style';

type ContProps = {
    children: React.ReactNode,
    style?: object
}

const Cont = ({ children, style }: ContProps) => {
    return (
        <Container sx={{ ...style, ...ContStyle }} >
            {children}
        </Container>
    )
}

export default Cont