import clsx from 'clsx';
import { navigate } from 'gatsby';
import { css } from 'linaria';
import oc from 'open-color';
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import Layout from '../components/Layout';
import PostTableOfContents from '../components/PostTableOfContents';
import PreviousOrNextPostCard from '../components/PreviousOrNextPostCard';
import SEO from '../components/SEO';
import Utterances from '../components/Utterances';
import { IPostTemplateContext, ITemplateProps } from '../interface';
import { easeInQuad } from '../lib/constants';
import formatDatetime from '../lib/formatDatetime';

const PostTitleAndDateBlock = css`
    border-bottom: 1px solid ${oc.gray[2]};
    margin-bottom: 2rem;
    padding-bottom: 2rem;

    position: relative;

    .back-arrow {
        position: absolute;
        top: 50%;
        transform: translate(calc(-100% + -1rem), -50%);
        height: 100%;

        button {
            appearance: none;
            padding: 0;
            margin: 0;
            height: 100%;
            border: none;
            outline: none;
            cursor: pointer;
            ${easeInQuad};
            width: 3rem;

            &:hover {
                background-color: ${oc.gray[0]};
            }
        }

        svg {
            font-size: 1.5rem;
        }

        @media screen and (max-width: 960px) {
            display: none;
        }
    }

    h2 {
        font-size: 1.5rem;
        color: inherit;
        margin: 0;
    }

    p {
        margin: 0;

        &.date {
            font-size: 1rem;
            color: ${oc.gray[6]};
        }
    }
`;

const PostContentBlock = css`
    position: relative;

    .gatsby-highlight[data-language] {
        margin-bottom: 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        &:not(:first-child) {
            margin-top: 2em;
        }
    }

    blockquote {
        font-style: italic;
        padding: 1rem 0 1rem 1.5rem;
        border-left: 4px solid ${oc.gray[4]};
        background-color: ${oc.gray[1]};
    }
`;

const PreviousAndNextBlock = css`
    border-top: 1px solid ${oc.gray[2]};
    padding-top: 2rem;

    display: flex;
    justify-content: space-between;
    margin-top: 8rem;

    &.only-child {
        &.previous {
            justify-content: flex-start;
        }

        &.next {
            justify-content: flex-end;
        }
    }

    @media screen and (max-width: 420px) {
        margin-top: 4rem;
    }
`;

type IPostTemplateProps = ITemplateProps<IPostTemplateContext>;

const handleClickBack = () => {
    navigate('/posts');
};

const PostTemplate: React.FC<IPostTemplateProps> = React.memo(props => {
    const { title, date, html, excerpt, next, previous, tableOfContents, slug } = props.pageContext;

    return (
        <Layout>
            <SEO title={title} description={excerpt} />
            <div className={PostTitleAndDateBlock}>
                <h2>{title}</h2>
                <p className="date">{formatDatetime(date)}</p>
                <div className="back-arrow">
                    <button onClick={handleClickBack}>
                        <FiArrowLeft />
                    </button>
                </div>
            </div>
            <div className={PostContentBlock} dangerouslySetInnerHTML={{ __html: html }} />
            <PostTableOfContents raw={tableOfContents} slug={slug} />
            <div
                className={clsx(
                    PreviousAndNextBlock,
                    !!previous !== !!next && 'only-child',
                    previous && 'previous',
                    next && 'next',
                )}
            >
                <PreviousOrNextPostCard previous={previous} />
                <PreviousOrNextPostCard next={next} />
            </div>
            <Utterances repo="iamchanii/blog" />
        </Layout>
    );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
