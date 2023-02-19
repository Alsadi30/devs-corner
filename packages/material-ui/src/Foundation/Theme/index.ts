import { createTheme } from '@mui/material/styles'




export const Theme = createTheme( {
    palette: {
        primary: {
            main: '#5b598b',
            light: '#1E1E23',
            dark: '#1E1E23',

        },
        secondary: {
            main: '#252537',
        },
        error: {
            main: '#F44336',
            light: '#E57373',
            dark: '#D32F2F',
            contrastText: '#fff',

        },
        info: {
            main: '#FFFFFF',
            light: '#CECECE',
            dark: '#A19FDC',
            contrastText: '#fff',
        },
        text: {
            primary: '#252537',
            secondary: '#6663a5',
        },
        background: {
            default: '#ffffff',
            paper:'#252537'
        },


    },
    typography: {
        fontFamily: [
            'Inter',
            'sans-serif'
            ].join(','),
        h1: {
            fontSize: '2rem',
            fontWeight: 700,
            color:'#ffffff',
            lineHeight: 1.2,
            letterSpacing: '-0.01562em',
        },
        h2: {
            fontSize: '1.75rem',
            fontWeight: 700,
            color:'#ffffff',
            lineHeight: 1.2,
            letterSpacing: '-0.00833em',
        },
        h3: {
            fontSize: '1.4rem',
            fontWeight: 500,
            lineHeight: 1.2,
            color:'#ffffff',
            letterSpacing: '0em',
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '0.00735em',
        },
        h5: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: '0em',
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '0.0075em',
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: '0.00938em',
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: '0.00714em',
        },
        body1: {
            fontSize: '.950rem',
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: '0.00938em',
        },
        body2: {
            fontSize: '0.85rem',
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: '0.01071em',
        },


    },
 


})



