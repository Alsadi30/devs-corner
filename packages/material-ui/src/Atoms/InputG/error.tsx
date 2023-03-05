import React from 'react'
import { Divider } from '@mui/material';
import { ErrorStyle } from './Input.style';

type Props = {
    message?: string
}

const Error = ({ message }: Props) => {
    return (
        <> <Divider color={'#F44D41'} /><small style={ErrorStyle}>{message}</small></>
    )
}

export default Error