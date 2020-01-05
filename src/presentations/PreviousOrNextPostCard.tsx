import clsx from 'clsx';
import { Link } from 'gatsby';
import React, { useMemo } from 'react';
import { IPostFrontmatter } from '../interface';

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
    <Link
      to={data.slug}
      className={clsx(
        'rounded hover:bg-gray-100 p-4 cursor-pointer text-gray-900 hover:text-gray-900',
        isPrevious ? 'text-left mr-auto' : 'text-right ml-auto',
      )}
    >
      <p className="text-sm">{isPrevious ? '이전글' : '다음글'}</p>
      <p className="font-bold">{data.title}</p>
    </Link>
  );
});

PreviousOrNextPostCard.displayName = 'PreviousOrNextPostCard';

export default PreviousOrNextPostCard;
