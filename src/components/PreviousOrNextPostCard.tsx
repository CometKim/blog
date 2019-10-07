import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import oc from 'open-color';
import React, { useMemo } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { IPostFrontmatter } from '../interface';
import { easeInQuad } from '../lib/constants';

const PreviousOrNextPostCardBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 2px;
    border: 1px solid ${oc.gray[1]};
    position: relative;
    ${easeInQuad};
    padding: 2rem;
    text-decoration: none !important;

    &:hover {
        background-color: ${oc.gray[0]};
    }
    
    p {
        margin: 0;

        &.title {
            font-size: 1.25rem;
            color: ${oc.gray[8]};
        }

        &.date {
            font-size: 0.75rem;
            color: ${oc.gray[6]};
        }
    }

    .arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        > svg {
            font-size: 1.5rem;
            color: ${oc.gray[7]};
        }

        &-right {
            right: 1em;
        }

        &-left {
            left: 1em;
        }
    }
`;

export interface IPreviousOrNextPostCardProps {
    previous?: IPostFrontmatter;
    next?: IPostFrontmatter;
}

const PreviousOrNextPostCard: React.FC<IPreviousOrNextPostCardProps> = React.memo(({ previous, next }) => {
    const data = useMemo(() => previous || next, [previous, next]);
    const isPrevious = useMemo(() => !!(data && previous), [data, previous]);

    if (!data) {
        return <div />;
    }

    return (
        <Link to={'/posts' + data.path}>
            <PreviousOrNextPostCardBlock>
                {isPrevious && (
                    <div className="arrow arrow-left">
                        <FiArrowLeft />
                    </div>
                )}
                <p className="title">{data.title}</p>
                <p className="date">{data.date}</p>
                {!isPrevious && (
                    <div className="arrow arrow-right">
                        <FiArrowRight />
                    </div>
                )}
            </PreviousOrNextPostCardBlock>
        </Link>
    );
});

PreviousOrNextPostCard.displayName = 'PreviousOrNextPostCard';

export default PreviousOrNextPostCard;
