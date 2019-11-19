import { navigate } from 'gatsby';
import styled from 'styled-components';
import oc from 'open-color';
import React from 'react';
import SEO from '../components/SEO';

const NotFoundBlock = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: ${oc.gray[8]};

    h2 {
        font-size: 4rem;
        margin: 0;
        color: inherit;
    }

    p {
        font-size: 1rem;
        color: inherit;
        margin: 0;
    }

    button {
        margin-top: 2rem;
        appearance: none;
        background: #fff;
        border: 1px solid currentColor;
        color: inherit;
        font-size: 1rem;
        padding: 0 2em;
        height: 2rem;
        border-radius: 4px;
        outline: none;
    }
`;

const handleClickBack = () => {
    navigate('/posts');
};

const NotFound: React.FC = React.memo(() => {
    return (
        <>
            <SEO title="404: Not found" />
            <NotFoundBlock>
                <h2>404</h2>
                <p>음, 잘못 입력 하신거 같은데요?</p>
                <button onClick={handleClickBack}>돌아가기</button>
            </NotFoundBlock>
        </>
    );
});

NotFound.displayName = 'NotFound';

export default NotFound;
