import { down } from 'styled-breakpoints';
import styled from 'styled-components';
import { BP_MD } from '../lib/breakpoint';

export default styled.div`
    margin: auto;
    width: 100%;
    max-width: ${BP_MD};

    ${down('md')} {
        max-width: calc(100% - 2rem);
    }
`;
