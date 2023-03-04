import React from 'react'
import { Button } from '@mui/material';

type Props = {}

const FormButton = (props: Props) => {
    return (
        <Button
            variant='contained'
            fullWidth={true}
            sx={{
                margin: '10px 0px',
                bgcolor: 'primary.main',
                color: 'white',
            }}
            type='submit'
        >
            Submit
        </Button>
    )
}

export default FormButton