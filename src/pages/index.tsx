import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';
import { IndexQuery } from '../../graphql-types';
import { HomePostList } from '../features/home/HomePostList';
import { Layout } from '../features/layout/Layout';
import { SEO } from '../features/seo/SEO';

const IndexPage: FC<PageProps<IndexQuery>> = ({ data }) => (
  <Layout>
    <SEO title="Home" url="" />
    <HomePostList
      postTotalCount={data.info.totalCount}
      categories={data.info.group}
      posts={data.allPrismicPost.nodes as any}
    />
  </Layout>
);

IndexPage.displayName = 'IndexPage';

export default IndexPage;

export const query = graphql`
  query Index {
    info: allPrismicPost {
      totalCount
      group(field: data___category) {
        fieldValue
        totalCount
      }
    }
    allPrismicPost(
      sort: {
        fields: [data___migrated_date, first_publication_date, prismicId]
        order: [DESC, DESC, DESC]
      }
    ) {
      nodes {
        uid
        first_publication_date(formatString: "YYYY. MM. DD")
        first_publication_date_raw: first_publication_date
        data {
          migrated_date(formatString: "YYYY. MM. DD")
          migrated_date_raw: migrated_date
          title {
            text
          }
          body {
            __typename
            ... on PrismicPostBodyText {
              primary {
                content {
                  text
                  html
                }
              }
            }
          }
        }
      }
    }
  }
`;
