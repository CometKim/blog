import React from 'react';
import styled from 'styled-components';
import formatDatetime from '../lib/formatDatetime';
import spacing from '../lib/spacing';

const PostHeaderBlock = styled.div`
    h2 {
        font-size: 1.75rem;
        margin: 0 0 ${spacing[0.5]} 0;
        line-height: 1em;
    }

    p {
        margin: 0;

        &.date {
            opacity: 0.75;
            font-size: 1rem;
        }
    }
`;

export interface IPostHeaderProps {
    title: string;
    date: string;
}

const PostHeader: React.FC<IPostHeaderProps> = React.memo(({ title, date }) => {
    return (
        <PostHeaderBlock>
            <h2>{title}</h2>
            <p className="date">{formatDatetime(date)}</p>
        </PostHeaderBlock>
    );
});

PostHeader.displayName = 'PostHeader';

export default PostHeader;
