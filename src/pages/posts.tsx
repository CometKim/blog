import { graphql, navigate, useStaticQuery } from 'gatsby';
import { css } from 'linaria';
import oc from 'open-color';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { Query } from '../graphql-types';

const PostListBlock = css`
    list-style: none;
    margin: 0;
    padding: 0;

    li {
        padding: 2rem 0;
        cursor: pointer;
        color: ${oc.gray[8]};

        &:not(:last-child) {
            border-bottom: 1px solid ${oc.gray[2]};
        }

        h2 {
            font-size: 1.5rem;
            color: inherit;
            margin: 0 0 0.25em 0;
        }

        p {
            margin: 0;

            &.excerpt {
                font-size: 0.875rem;
                margin-bottom: 1em;
            }

            &.date {
                font-size: 0.875rem;
                color: ${oc.gray[6]};
            }
        }

        &:hover > * {
            text-decoration: underline;
        }
    }
`;

const LatestPostListQuery = graphql`
    query LatestPostListQuery {
        allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
            edges {
                node {
                    excerpt(truncate: true, pruneLength: 100)
                    frontmatter {
                        title
                        path
                        date(formatString: "YYYY-MM-DD HH:mm:ss")
                    }
                    id
                }
            }
        }
    }
`;

const handleClickPost = (e: React.MouseEvent<HTMLLIElement>) => {
    navigate('/posts' + e.currentTarget.dataset.to);
};

const PostListPage: React.FC = React.memo(() => {
    const data = useStaticQuery<Query>(LatestPostListQuery);

    return (
        <Layout>
            <SEO title="blog" />
            <ul className={PostListBlock}>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <li key={node.id} data-to={node.frontmatter.path} onClick={handleClickPost}>
                        <h2>{node.frontmatter.title}</h2>
                        <p className="excerpt">{node.excerpt}</p>
                        <p className="date">{node.frontmatter.date}</p>
                    </li>
                ))}
            </ul>
        </Layout>
    );
});

PostListPage.displayName = 'PostListPage';

export default PostListPage;
