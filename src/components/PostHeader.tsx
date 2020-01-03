import React from 'react';
import formatDatetime from '../lib/formatDatetime';

export interface IPostHeaderProps {
  title: string;
  date: string;
}

const PostHeader: React.FC<IPostHeaderProps> = React.memo(({ title, date }) => {
  return (
    <>
      <h2 className="font-bold text-2xl text-gray-900">{title}</h2>
      <time dateTime={date} className="block mb-4 text-gray-600">
        {formatDatetime(date)}
      </time>
    </>
  );
});

PostHeader.displayName = 'PostHeader';

export default PostHeader;
