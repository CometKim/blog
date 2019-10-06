import { css } from 'linaria';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';

const ResumePageBlock = css``;

const ResumePage: React.FC = React.memo(() => {
    return (
        <Layout>
            <SEO title="resume" />
            <div className={ResumePageBlock}>준비중</div>
        </Layout>
    );
});

ResumePage.displayName = 'ResumePage';

export default ResumePage;
