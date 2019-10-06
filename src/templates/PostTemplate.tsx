import { css } from 'linaria';
import oc from 'open-color';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Utterances from '../components/Utterances';
import { IPostTemplateContext, ITemplateProps } from '../interface';

const PostTitleAndDateBlock = css`
    border-bottom: 1px solid ${oc.gray[2]};
    margin-bottom: 2rem;
    padding-bottom: 2rem;

    h2 {
        font-size: 2.25rem;
        color: inherit;
        margin: 0 0 0.25em 0;
    }

    p {
        margin: 0;

        &.date {
            font-size: 1rem;
            color: ${oc.gray[6]};
        }
    }
`;

type IPostTemplateProps = ITemplateProps<IPostTemplateContext>;

const PostTemplate: React.FC<IPostTemplateProps> = React.memo(props => {
    const { title, date, html, excerpt } = props.pageContext;
    return (
        <Layout>
            <SEO title={title} description={excerpt} />
            <div className={PostTitleAndDateBlock}>
                <h2>{title}</h2>
                <p className="date">{date}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <Utterances repo="iamchanii/blog" />
        </Layout>
    );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
