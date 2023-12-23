import { extendTheme } from '@chakra-ui/react';

// export the component theme
const theme = extendTheme({
    radii: {
        commonRadius: '0.5rem',
    },
    colors: {
        primaryFont: '#334155',
        secondaryFont: '#64748B',
        background: '#F9FAFB',
        activeColor: '#5330F7',
        darkActiveColor: '#3918BF',
        slateGray: '#F1F5F9',
        switchScheme: { 
            500: '#5330F7'
        }
    },
    styles: {
        global: {
            body: {
                color: 'secondaryFont',
                bg: 'background',
            },
            h2: {
                color: 'primaryFont',
            },
            ".App": {
                bg: 'background',
            }
        },
    },
});

export default theme;
