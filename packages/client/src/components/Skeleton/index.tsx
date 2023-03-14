import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

type Props = {}

const LoadingSkeletion = (props: Props) => {
    return (
        <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={1}>
            <Skeleton variant="rectangular" width={'80%'} height={200} />
            <Skeleton variant="circular" width={150} sx={{ margin: "10px 0px 10px 0px", position: 'relative', top: '-90px', zIndex: '99' }} height={150} />
            <Skeleton variant="rectangular" sx={{ position: 'relative', top: '-70px', zIndex: '99' }} width={'80%'} height={200} />
            <Skeleton sx={{ position: 'relative', top: '-70px', zIndex: '99' }} variant="rounded" width={'80%'} height={150} />
        </Stack>
    )
}

export default LoadingSkeletion