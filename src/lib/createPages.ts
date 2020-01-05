import { CreatePagesArgs } from 'gatsby';
import path from 'path';
import { IPostFrontmatter, IPostTemplateContext } from '../interface';

const getNextOrPreviousData = (data: any): IPostFrontmatter | null =>
  data ? { title: data.frontmatter.title, slug: data.frontmatter.slug } : null;

export async function createPages({ actions, graphql }: CreatePagesArgs) {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        filter: { frontmatter: { type: { eq: "post" } } }
      ) {
        edges {
          node {
            html
            excerpt
            frontmatter {
              title
              slug
              date
              type
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 1280) {
                    src
                  }
                }
              }
            }
            tableOfContents(pathToSlugField: "frontmatter.slug", heading: null)
            wordCount {
              words
            }
          }
          next {
            frontmatter {
              title
              slug
            }
          }
          previous {
            frontmatter {
              title
              slug
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
      path: node.frontmatter.slug,
      context: {
        html: node.html,
        slug: node.frontmatter.slug,
        title: node.frontmatter.title,
        date: node.frontmatter.date,
        excerpt: node.excerpt,
        next: getNextOrPreviousData(next),
        previous: getNextOrPreviousData(previous),
        tableOfContents: node.tableOfContents,
        wordCount: node.wordCount.words,
        thumbnailUrl: node.frontmatter.thumbnail.childImageSharp.fluid.src,
      },
      component: path.resolve(__dirname, '../templates/PostTemplate.tsx'),
    });
  });
}
