import { css } from 'linaria';
import oc from 'open-color';
import React from 'react';
import { FiArrowLeft } from 'react-icons/all';
import { navigate } from '../../.cache/gatsby-browser-entry';
import Layout from '../components/Layout';
import PreviousOrNextPostCard from '../components/PreviousOrNextPostCard';
import SEO from '../components/seo';
import Utterances from '../components/Utterances';
import { IPostTemplateContext, ITemplateProps } from '../interface';
import { easeInQuad } from '../lib/constants';

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

const PreviousAndNextBlock = css`
    border-top: 1px solid ${oc.gray[2]};
    padding-top: 2rem;

    display: flex;
    justify-content: space-between;
    margin-top: 8rem;

    @media screen and (max-width: 420px) {
        margin-top: 4rem;
    }
`;

type IPostTemplateProps = ITemplateProps<IPostTemplateContext>;

const handleClickBack = () => {
    navigate('/posts');
};

const PostTemplate: React.FC<IPostTemplateProps> = React.memo(props => {
    const { title, date, html, excerpt, next, previous } = props.pageContext;
    return (
        <Layout>
            <SEO title={title} description={excerpt} />
            <div className={PostTitleAndDateBlock}>
                <h2>{title}</h2>
                <p className="date">{date}</p>
                <div className="back-arrow">
                    <button onClick={handleClickBack}>
                        <FiArrowLeft />
                    </button>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <div className={PreviousAndNextBlock}>
                <PreviousOrNextPostCard previous={previous} />
                <PreviousOrNextPostCard next={next} />
            </div>
            <Utterances repo="iamchanii/blog" />
        </Layout>
    );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
