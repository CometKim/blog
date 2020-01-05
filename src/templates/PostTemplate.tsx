import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { JsonLd } from 'react-schemaorg';
import { BlogPosting } from 'schema-dts';
import PostHeader from '../presentations/PostHeader';
import PreviousOrNextPostCard from '../presentations/PreviousOrNextPostCard';
import Utterances from '../components/Utterances';
import { IPostTemplateContext, ITemplateProps } from '../interface';
import HtmlRenderer from '../presentations/HtmlRenderer';
import ProfileCard from '../presentations/ProfileCard';
import SEO from '../presentations/SEO';

const previousOrNextBlockCss = css`
  margin-left: -1rem;
  margin-right: -1rem;
`;

type IPostTemplateProps = ITemplateProps<IPostTemplateContext>;

const PostTemplate: React.FC<IPostTemplateProps> = React.memo(props => {
  const { title, date, html, excerpt, next, previous, slug, wordCount, thumbnailUrl } = props.pageContext;

  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  return (
    <article className="p-4">
      <SEO title={title} description={excerpt} url={slug} isBlogPost imageUrl={siteUrl + thumbnailUrl} />

      {/* Article JSON-LD */}
      <JsonLd<BlogPosting>
        item={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': siteUrl + slug,
          },
          headline: title,
          author: {
            '@type': 'Person',
            name: 'iamchanii',
          },
          datePublished: date,
          dateModified: date,
          wordCount,
          image: siteUrl + thumbnailUrl,
          publisher: {
            '@type': 'Organization',
            name: 'iamchanii',
            logo: {
              '@type': 'ImageObject',
              url: 'https://imch.dev/images/default.png',
            },
          },
        }}
      />

      <header>
        <PostHeader title={title} date={date} />
      </header>

      <HtmlRenderer html={html} />

      <ProfileCard />

      <div css={previousOrNextBlockCss} className="mb-8 flex justify-between">
        <PreviousOrNextPostCard previous={previous} />
        <PreviousOrNextPostCard next={next} />
      </div>

      <Utterances repo="iamchanii/blog" />
    </article>
  );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
