/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { SeoQuery } from '../graphql-types';

export interface ISEOProps {
  description?: string;
  lang?: string;
  meta?: any[];
  title: string;
}

const SEO: React.FC<ISEOProps> = React.memo(({ description, lang = 'ko', meta = [], title }) => {
  const { site } = useStaticQuery<SeoQuery>(
    graphql`
      query SEO {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        // {
        //     name: 'image',
        //     content: profileImage.childImageSharp.fixed.src,
        // },
        // {
        //     property: 'og:image',
        //     content: profileImage.childImageSharp.fixed.src,
        // },
        // {
        //     name: 'twitter:image',
        //     content: profileImage.childImageSharp.fixed.src,
        // }
      ].concat(meta)}
    />
  );
});

export default SEO;
