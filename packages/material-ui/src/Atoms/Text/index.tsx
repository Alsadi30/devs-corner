import { Typography } from '@mui/material'


type Props = {}

const Text = (props: Props) => {
    return (
        <>
            <Typography variant='h2' >Hello JS</Typography>
            <Typography variant='h3' >Section Header</Typography>
            <Typography variant='h5' color={'info.light'}  >Paragraph</Typography>
            <Typography variant='body1' color={'secondary'}  >Title</Typography>
            <Typography variant='body2' color={'secondary'}  >Value</Typography>
        </>)
}

export default Text