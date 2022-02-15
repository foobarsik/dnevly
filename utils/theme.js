import {createBox, createText, createTheme} from '@shopify/restyle'

const palette = {
    purple: '#5A31F4',
    white: '#FFF',
    black: '#021702',
    darkGray: '#111',
    lightGray: '#6a6a6a',
    gray: 'rgb(42, 42, 45)'
};

export const theme = createTheme({
    colors: {
        mainBackground: palette.lightGray,
        mainForeground: palette.gray,

        primaryCardBackground: palette.purple,
        secondaryCardBackground: palette.white,
        primaryCardText: palette.white,
        secondaryCardText: palette.black,
        border: palette.lightGray
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
    textVariants: {
        body: {
            fontSize: 16,
            lineHeight: 24,
            color: 'mainForeground',
        },
    },
    cardVariants: {
        primary: {
            backgroundColor: 'primaryCardBackground',
            shadowOpacity: 0.3,
        },
        secondary: {
            backgroundColor: 'secondaryCardBackground',
            shadowOpacity: 0.1,
        },
    },
});

export const darkTheme = {
    ...theme,
    colors: {
        ...theme.colors,
        mainBackground: palette.darkGray,
        mainForeground: palette.gray,

        secondaryCardBackground: palette.darkGray,
        secondaryCardText: palette.white,
    },
};

export const Box = createBox();

export const Text = createText();
