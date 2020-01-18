import css from '@emotion/css';
import { graphql, useStaticQuery } from 'gatsby';
import React, { memo } from 'react';
import PostCategoryItem from './PostCategoryItem';
import * as R from 'remeda';

interface ICategoryCount {
  category: string;
  count: number;
}

const sortByCountDesc = (
  { count: aCount }: ICategoryCount,
  { count: bCount }: ICategoryCount,
): number => {
  return bCount - aCount;
};

const renderCategoryItem = (categories: ICategoryCount[]) =>
  R.pipe(
    categories,
    R.sort(sortByCountDesc),
    R.map(({ count, category }) => (
      <PostCategoryItem
        key={category}
        name={category}
        count={count}
        link={`/category/${category}`}
      />
    )),
  );

const PostCategory: React.FC = memo(() => {
  const {
    allMarkdownRemark: { totalCount, categories },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        totalCount
        categories: group(field: frontmatter___category) {
          category: fieldValue
          count: totalCount
        }
      }
    }
  `);

  return (
    <nav className="p-4">
      <ul className="flex mb-2">
        <PostCategoryItem name="All" count={totalCount} link="/" />
        {renderCategoryItem(categories)}
      </ul>
    </nav>
  );
});

PostCategory.displayName = 'PostCategory';

export default PostCategory;
