import { down, up } from 'styled-breakpoints';
import styled from 'styled-components';
import { BP_LG, BP_MD, BP_SM, BP_XL, BP_XS } from '../lib/breakpoint';

export default styled.div`
    margin: auto;
    width: 100%;

    ${down('xs')} {
        max-width: calc(${BP_XS} - 2rem);
    }

    ${up('sm')} {
        max-width: calc(${BP_SM} - 2rem);
    }

    ${up('md')} {
        max-width: calc(${BP_MD} - 2rem);
    }

    ${up('lg')} {
        max-width: calc(${BP_LG} - 2rem);
    }

    ${up('xl')} {
        max-width: calc(${BP_XL} - 2rem);
    }
`;
