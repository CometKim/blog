import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import oc from 'open-color';

const ResumeCardBlock = styled(Card)`
    > header {
        display: flex;
        align-items: baseline;

        > time {
            display: inline-block;
            margin-left: 0.5em;
            color: ${oc.gray[7]};
        }
    }
`;

export interface IResumeCardProps {
    title: string;
    time: string;
}

const ResumeCard: React.FC<IResumeCardProps> = React.memo(({ title, time, children }) => {
    return (
        <ResumeCardBlock>
            <header>
                <h2>{title}</h2>
                <time>{time}</time>
            </header>
            <section>{children}</section>
        </ResumeCardBlock>
    );
});

ResumeCard.displayName = 'ResumeCard';

export default ResumeCard;
