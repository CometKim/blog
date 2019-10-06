import React, { AnchorHTMLAttributes } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';

const A: React.FC<Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>> = React.memo(({ href, children }) => {
    return <a href={href} target="_blank" rel="noopener noreferer" children={children} />;
});

const LicensePage: React.FC = React.memo(() => {
    return (
        <Layout>
            <SEO title="License" />
            <h2>License 정보</h2>
            <p>이 블로그는 아래 서비스를 이용해서 만들었습니다.</p>
            <ul>
                <li>
                    Powered by <A href="https://gatsbyjs.org">GastbyJS</A>
                </li>
                <li>
                    Hosted by <A href="https://www.netlify.com">Netlify</A>
                </li>
            </ul>
            <p>또한, 아래 오픈소스 라이브러리를 사용했습니다. 감사합니다.</p>
            <ul>
                <li>
                    <A href="https://kyleamathews.github.io/typography.js/">typography.js</A>
                </li>
                <li>
                    <A href="https://github.com/callstack/linaria">linaria</A>
                </li>
                <li>
                    <A href="https://github.com/yeun/open-color">open-color</A>
                </li>
            </ul>
        </Layout>
    );
});

LicensePage.displayName = 'LicensePage';

export default LicensePage;
