import React from 'react';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';
import Layout from '../components/Layout';
import PostHeader from '../components/PostHeader';
import PreviousOrNextPostCard from '../components/PreviousOrNextPostCard';
import SEO from '../components/SEO';
import Utterances from '../components/Utterances';
import { IPostTemplateContext, ITemplateProps } from '../interface';
import colors from '../lib/colors';
import shadow from '../lib/shadow';
import spacing from '../lib/spacing';

type IPostTemplateProps = ITemplateProps<IPostTemplateContext>;

const PostTemplateBlock = styled.section`
    position: relative;
    background-color: ${colors.white};
    padding: ${spacing[4]};
    border-radius: 2px;
    color: ${colors.content};
    ${shadow};

    header {
        padding-bottom: ${spacing[4]};
        margin-bottom: ${spacing[4]};
        border-bottom: 1px solid ${colors.border};
    }

    img {
        display: block;
        width: 100%;
        max-width: 960px;
        margin: auto;
    }
`;

const PreviousAndNextBlock = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: ${spacing[2]};

    ${down('md')} {
        display: block;

        .link:last-child:not(:only-child) {
            margin-top: ${spacing[1]};
        }
    }
`;

const PostTemplate: React.FC<IPostTemplateProps> = React.memo(props => {
    const { title, date, html, excerpt, next, previous, tableOfContents, slug } = props.pageContext;

    return (
        <Layout>
            <SEO title={title} description={excerpt} />

            <PostTemplateBlock>
                <header>
                    <PostHeader title={title} date={date} />
                </header>
                <section dangerouslySetInnerHTML={{ __html: html }} />

                {/*<PostTableOfContents raw={tableOfContents} slug={slug} />*/}
            </PostTemplateBlock>

            <PreviousAndNextBlock>
                <PreviousOrNextPostCard previous={previous} />
                <PreviousOrNextPostCard next={next} />
            </PreviousAndNextBlock>

            <Utterances repo="iamchanii/blog" />
        </Layout>
    );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
