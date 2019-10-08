import { Link } from 'gatsby';
import { css, cx } from 'linaria';
import { ellipsis } from 'polished';
import React, { useMemo } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { IPostFrontmatter } from '../interface';
import oc from 'open-color';
import { easeInQuad } from '../lib/constants';

const PreviousOrNextPostCardBlock = css`
    flex: calc(50% - 1rem);
    max-width: calc(50% - 1rem);

    text-decoration: none;
    display: flex;
    align-items: center;
    color: ${oc.gray[8]};

    padding: 1rem;
    border-radius: 2px;
    ${easeInQuad};

    &:hover {
        background-color: ${oc.gray[0]};
        color: ${oc.gray[9]};
    }

    &:hover {
        text-decoration: underline;
    }

    &.previous {
        justify-content: flex-start;

        &:only-child {
            margin-right: calc(50% + 1rem);
        }
    }

    &:not(.previous) {
        justify-content: flex-end;

        &:only-child {
            margin-left: calc(50% + 1rem);
        }
    }

    p.title {
        margin: 0;
        line-height: 1;
        ${ellipsis()};
    }

    .arrow {
        display: flex;
        align-items: center;
        justify-content: center;

        &-left {
            order: -1;
            margin-right: 0.5rem;
        }

        &-right {
            order: 100;
            margin-left: 0.5rem;
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
        return null;
    }

    return (
        <Link to={'/posts' + data.path} className={cx(PreviousOrNextPostCardBlock, isPrevious && 'previous')}>
            <div className={cx('arrow', isPrevious && 'arrow-left', !isPrevious && 'arrow-right')}>
                {isPrevious ? <FiArrowLeft /> : <FiArrowRight />}
            </div>
            <p className="title">{data.title}</p>
        </Link>
    );
});

PreviousOrNextPostCard.displayName = 'PreviousOrNextPostCard';

export default PreviousOrNextPostCard;
