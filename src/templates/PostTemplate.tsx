import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Utterances from '../components/Utterances';
import { IPostTemplateContext, ITemplateProps } from '../interface';

type IPostTemplateProps = ITemplateProps<IPostTemplateContext>;

const PostTemplate: React.FC<IPostTemplateProps> = React.memo(props => {
    const { title, date, html, excerpt } = props.pageContext;
    return (
        <Layout>
            <SEO title={title} description={excerpt} />
            <h2>{title}</h2>
            <h4>{date}</h4>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <Utterances repo="iamchanii/blog" />
        </Layout>
    );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
