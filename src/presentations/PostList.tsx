import React, { memo } from 'react';
import { Link } from 'gatsby';
import PostHeader from './PostHeader';
import { IPostListTemplateContext } from '../interface';
import css from '@emotion/css';

const postListCss = css`
  margin-left: -1rem;
  margin-right: -1rem;
`;

type IPostListProps = Pick<IPostListTemplateContext, 'nodes'>;

const PostList: React.FC<IPostListProps> = memo(({ nodes }) => {
  return (
    <ul css={postListCss}>
      {nodes.map(({ id, excerpt, frontmatter: { title, slug, date } }) => (
        <li key={id} className="mb-4">
          <Link
            className="block rounded p-4 cursor-pointer outline-none hover:bg-gray-100 focus:bg-gray-100 focus:shadow-outline active:shadow-outline"
            to={slug}
            title={title}
          >
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
