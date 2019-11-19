import React from 'react';
import { ThemeProvider } from 'styled-components';
import './src/styles/prism-nord.css';
import './src/styles/styles.scss';
import { BP_LG, BP_MD, BP_SM, BP_XL, BP_XS } from './src/lib/breakpoint';

const theme = {
    breakpoints: {
        xs: BP_XS,
        sm: BP_SM,
        md: BP_MD,
        lg: BP_LG,
        xl: BP_XL,
    },
};

export const wrapRootElement = ({ element }) => {
    return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};
