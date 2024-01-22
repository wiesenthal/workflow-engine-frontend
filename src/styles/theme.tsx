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
        activeColor: '#e53e73',
        darkActiveColor: '#d20043',
        slateGray: '#F1F5F9',
        switchScheme: { 
            500: '#e53e73'
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
