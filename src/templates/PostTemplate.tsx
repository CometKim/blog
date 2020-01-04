import React from 'react';
import PostHeader from '../components/PostHeader';
import PreviousOrNextPostCard from '../components/PreviousOrNextPostCard';
import SEO from '../presentations/SEO';
import Utterances from '../components/Utterances';
import { IPostTemplateContext, ITemplateProps } from '../interface';
import HtmlRenderer from '../presentations/HtmlRenderer';

type IPostTemplateProps = ITemplateProps<IPostTemplateContext>;

const PostTemplate: React.FC<IPostTemplateProps> = React.memo(props => {
  const { title, date, html, excerpt, next, previous, slug } = props.pageContext;

  return (
    <article className="p-4">
      <SEO title={title} description={excerpt} url={slug} isBlogPost />

      <header>
        <PostHeader title={title} date={date} />
      </header>

      <HtmlRenderer html={html} />

      <div className="mb-8 flex justify-between">
        <PreviousOrNextPostCard previous={previous} />
        <PreviousOrNextPostCard next={next} />
      </div>

      <Utterances repo="iamchanii/blog" />
    </article>
  );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
