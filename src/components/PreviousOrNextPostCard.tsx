import clsx from 'clsx';
import { Link } from 'gatsby';
import { ellipsis } from 'polished';
import React, { useMemo } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import styled from 'styled-components';
import { IPostFrontmatter } from '../interface';
import colors from '../lib/colors';
import shadow from '../lib/shadow';
import spacing from '../lib/spacing';

const PreviousOrNextPostCardLink = styled(Link)`
  display: flex;
  align-items: center;
  background-color: ${colors.white};
  border-radius: 2px;
  padding: ${spacing[2]};
  ${shadow};

  &:hover {
    text-decoration: underline;
  }

  &.previous {
    justify-content: flex-start;
    margin-right: auto;
  }

  &:not(.previous) {
    justify-content: flex-end;
    margin-left: auto;
  }

  p.title {
    margin: 0;
    line-height: 1rem;
    ${ellipsis()};
    font-size: 0.875rem;
  }

  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;

    &-left {
      order: -1;
      margin-right: ${spacing[1]};
    }

    &-right {
      order: 100;
      margin-left: ${spacing[1]};
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
    <PreviousOrNextPostCardLink to={data.slug} className={clsx('link', isPrevious && 'previous')}>
      <div className={clsx('arrow', isPrevious && 'arrow-left', !isPrevious && 'arrow-right')}>
        {isPrevious ? <FiArrowLeft /> : <FiArrowRight />}
      </div>
      <p className="title">{data.title}</p>
    </PreviousOrNextPostCardLink>
  );
});

PreviousOrNextPostCard.displayName = 'PreviousOrNextPostCard';

export default PreviousOrNextPostCard;
