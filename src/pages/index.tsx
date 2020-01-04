import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import PostHeader from '../components/PostHeader';
import SEO from '../presentations/SEO';
import { Query } from '../graphql-types';

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
          description
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
      <SEO title="Home" url=""  />
      <ul>
        {allMarkdownRemark.nodes.map(({ id, excerpt, frontmatter: { title, slug, date, description } }) => (
          <li key={id} className="rounded hover:bg-gray-100 p-4 cursor-pointer mb-4">
            <Link to={slug} title={title}>
              <PostHeader title={title} date={date} />
              <p className="text-gray-800 leading-relaxed">{excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IndexPage;
