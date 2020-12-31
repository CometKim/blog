import { graphql, PageProps } from 'gatsby';
import { capitalize } from 'lodash-es';
import React, { FC } from 'react';
import { HomePostListTemplateQuery } from '../../../graphql-types';
import { Layout } from '../layout/Layout';
import { SEO } from '../seo/SEO';
import { HomePostList } from './HomePostList';

type HomePostListTemplateContext = {
  category?: string;
  tag?: string;
};

const HomePostListTemplate: FC<PageProps<
  HomePostListTemplateQuery,
  HomePostListTemplateContext
>> = ({ data, path, pageContext }) => {
  const title = capitalize(
    path.startsWith('/category') ? pageContext.category! : pageContext.tag!
  );
  const url = new URL(path, data?.site?.siteMetadata?.siteUrl!).href;

  return (
    <Layout>
      <SEO title={title} url={url} />
      <HomePostList
        postTotalCount={data.info.totalCount}
        categories={data.info.group}
        currentCategory={pageContext.category}
        posts={data.allPrismicPost.nodes}
      />
    </Layout>
  );
};

HomePostListTemplate.displayName = 'HomePostListTemplate';

export default HomePostListTemplate;

export const query = graphql`
  query HomePostListTemplate($category: String, $tag: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
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
      filter: { data: { category: { eq: $category } }, tags: { eq: $tag } }
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
