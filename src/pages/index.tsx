import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Query } from '../graphql-types';
import PostCategory from '../presentations/PostCategory';
import PostList from '../presentations/PostList';
import SEO from '../presentations/SEO';

const LatestPostListQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      nodes {
        frontmatter {
          title
          slug
          date
        }
        excerpt(truncate: true, pruneLength: 150)
        id
      }
    }
  }
`;

const IndexPage: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery<Query>(LatestPostListQuery);

  return (
    <>
      <SEO title="Home" url="" />
      <PostCategory />
      <PostList nodes={allMarkdownRemark.nodes} />
    </>
  );
};

export default IndexPage;
