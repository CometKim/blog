import { CreatePagesArgs } from 'gatsby';
import path from 'path';
import { Query, MarkdownRemark } from '../graphql-types';
import { IPostFrontmatter, IPostTemplateContext } from '../interface';

const getNextOrPreviousData = (data: MarkdownRemark | null): IPostFrontmatter | null =>
    data ? { title: data.frontmatter.title, path: data.frontmatter.path, date: data.frontmatter.date } : null;

export async function createPages({ actions, graphql }: CreatePagesArgs) {
    const { createPage } = actions;

    const { data, errors } = await graphql<Query>(`
        {
            allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
                edges {
                    node {
                        html
                        excerpt(truncate: true, pruneLength: 200)
                        frontmatter {
                            title
                            path
                            date
                        }
                    }
                    next {
                        frontmatter {
                            title
                            path
                            date
                        }
                    }
                    previous {
                        frontmatter {
                            title
                            path
                            date
                        }
                    }
                }
            }
        }
    `);

    if (errors) {
        throw errors;
    }

    data.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
        createPage<IPostTemplateContext>({
            path: '/posts' + node.frontmatter.path,
            context: {
                html: node.html,
                title: node.frontmatter.title,
                date: node.frontmatter.date,
                excerpt: node.excerpt,
                next: getNextOrPreviousData(next),
                previous: getNextOrPreviousData(previous),
            },
            component: path.resolve(__dirname, '../templates/PostTemplate.tsx'),
        });
    });
}
