import React, { memo } from 'react';
import { Link } from 'gatsby';
import PostHeader from './PostHeader';
import { IPostListTemplateContext } from '../interface';
import css from '@emotion/css';

type IPostListProps = Pick<IPostListTemplateContext, 'nodes'>;

const PostList: React.FC<IPostListProps> = memo(({ nodes }) => {
  return (
    <ul>
      {nodes.map(({ id, excerpt, frontmatter: { title, slug, date } }) => (
        <li
          key={id}
          className="rounded hover:bg-gray-100 p-4 cursor-pointer mb-4"
        >
          <Link to={slug} title={title}>
            <PostHeader title={title} date={date} />
            <p className="text-gray-800 leading-relaxed">{excerpt}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
});

PostList.displayName = 'PostList';

export default PostList;
