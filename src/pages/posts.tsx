import { graphql, navigate, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import PostHeader from '../components/PostHeader';
import SEO from '../components/SEO';
import { Query } from '../graphql-types';
import colors from '../lib/colors';
import formatDatetime from '../lib/formatDatetime';
import shadow from '../lib/shadow';
import spacing from '../lib/spacing';
import transition from '../lib/transition';

const PostListBlock = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    li {
        background-color: ${colors.white};
        padding: ${spacing[4]};
        border-radius: 2px;
        color: ${colors.content};
        cursor: pointer;
        ${shadow};

        :not(:last-child) {
            margin-bottom: ${spacing[2]};
        }

        :hover {
            h2 {
                color: ${colors.primary};
                ${transition('color')}
            }
        }

        .excerpt {
            margin: ${spacing[2]} 0 0;
            line-height: 1.5;
        }
    }
`;

const LatestPostListQuery = graphql`
    query LatestPostListQuery {
        allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
            edges {
                node {
                    excerpt(truncate: true, pruneLength: 150)
                    frontmatter {
                        title
                        slug
                        date
                    }
                    id
                }
            }
        }
    }
`;

const handleClickPost = (e: React.MouseEvent<HTMLLIElement>) => {
    navigate(e.currentTarget.dataset.to);
};

const PostListPage: React.FC = React.memo(() => {
    const data = useStaticQuery<Query>(LatestPostListQuery);

    return (
        <Layout>
            <SEO title="blog" />
            <PostListBlock>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <li key={node.id} data-to={node.frontmatter.slug} onClick={handleClickPost}>
                        <PostHeader title={node.frontmatter.title} date={node.frontmatter.date} />
                        <p className="excerpt">{node.excerpt}</p>
                    </li>
                ))}
            </PostListBlock>
        </Layout>
    );
});

PostListPage.displayName = 'PostListPage';

export default PostListPage;
