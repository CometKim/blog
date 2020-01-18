import React, { memo } from 'react';
import startCase from 'lodash.startcase';
import { Link } from 'gatsby';

interface IPostCategoryItemProps {
  name: string;
  count: number;
  link: string;
}

const PostCategoryItem: React.FC<IPostCategoryItemProps> = memo(
  ({ count, link, name }) => (
    <li className="mr-2 last:mr-0">
      <Link
        to={link}
        className="rounded px-2 py-1 text-sm"
        activeClassName="bg-purple-800 text-white hover:text-white"
      >
        {startCase(name)} ({count})
      </Link>
    </li>
  ),
);

PostCategoryItem.displayName = 'PostCategoryItem';

export default PostCategoryItem;
