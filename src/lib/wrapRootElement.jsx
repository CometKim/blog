import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BP_LG, BP_MD, BP_SM, BP_XL, BP_XS } from './breakpoint';

const theme = {
  breakpoints: {
    xs: BP_XS,
    sm: BP_SM,
    md: BP_MD,
    lg: BP_LG,
    xl: BP_XL,
  },
};

export default ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};
