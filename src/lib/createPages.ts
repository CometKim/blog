import { CreatePagesArgs } from 'gatsby';
import path from 'path';
import { Query } from '../graphql-types';
import { IPostTemplateContext } from '../interface';

export async function createPages({ actions, graphql }: CreatePagesArgs) {
    const { createPage } = actions;

    const { data, errors } = await graphql<Query>(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        html
                        excerpt(truncate: true, pruneLength: 200)
                        frontmatter {
                            title
                            path
                            date(formatString: "YYYY-MM-DD HH:mm:ss")
                        }
                    }
                }
            }
        }
    `);

    if (errors) {
        throw errors;
    }

    data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage<IPostTemplateContext>({
            path: node.frontmatter.path,
            context: {
                html: node.html,
                title: node.frontmatter.title,
                date: node.frontmatter.date,
                excerpt: node.excerpt,
            },
            component: path.resolve(__dirname, '../templates/PostTemplate.tsx'),
        });
    });
}
