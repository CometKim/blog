// https://matthewlein.com/tools/ceaser
export default (target = 'all') => `
-webkit-transition: ${target} 100ms cubic-bezier(0.550, 0.085, 0.680, 0.530);
   -moz-transition: ${target} 100ms cubic-bezier(0.550, 0.085, 0.680, 0.530);
     -o-transition: ${target} 100ms cubic-bezier(0.550, 0.085, 0.680, 0.530);
        transition: ${target} 100ms cubic-bezier(0.550, 0.085, 0.680, 0.530); /* easeInQuad */
`;
