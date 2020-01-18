import React from 'react';
import { IPostListTemplateContext, ITemplateProps } from '../interface';
import PostCategory from '../presentations/PostCategory';
import PostList from '../presentations/PostList';
import SEO from '../presentations/SEO';

type IPostListTemplateProps = ITemplateProps<IPostListTemplateContext>;

const PostListTemplate: React.FC<IPostListTemplateProps> = React.memo(props => {
  const { title, pagePath, nodes } = props.pageContext;

  return (
    <>
      <SEO title={title} url={pagePath} />
      <PostCategory />
      <PostList nodes={nodes} />
    </>
  );
});

PostListTemplate.displayName = 'PostListTemplate';

export default PostListTemplate;
