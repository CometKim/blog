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
            <h1>License 정보</h1>
            <p>이 블로그는 아래 서비스를 이용해서 만들었습니다.</p>
            <ul>
                <li>
                    Powered by <A href="https://gatsbyjs.org">GastbyJS</A>
                </li>
                <li>
                    Hosted by <A href="https://www.netlify.com">Netlify</A>
                </li>
            </ul>
            <p>아래 오픈소스 라이브러리를 사용했습니다. 감사합니다.</p>
            <ul>
                <li>
                    <A href="https://github.com/KyleAMathews/typography.js">typography.js</A>
                </li>
                <li>
                    <A href="https://github.com/callstack/linaria">linaria</A>
                </li>
                <li>
                    <A href="https://github.com/yeun/open-color">open-color</A>
                </li>
                <li>
                    <A href="https://github.com/react-icons/react-icons">react-icons</A>
                </li>
                <li>
                    <A href="https://matthewlein.com/tools/ceaser">Ceaser</A>
                </li>
                <li>
                    <A href="https://github.com/GalenWong/nord-prism-js">nord-prism-js</A>
                </li>
                <li>
                    <A href="https://github.com/styled-components/polished">polished</A>
                </li>
                <li>
                    <A href="https://github.com/SBoudrias/Inquirer.js/">inquirer</A>
                </li>
                <li>
                    <A href="https://github.com/normalize/mz">mz</A>
                </li>
                <li>
                    <A href="https://github.com/date-fns/date-fns">date-fns</A>
                </li>
            </ul>
            <p>아래 게시글을 참고하였습니다. 감사합니다.</p>
            <ul>
                <li>
                    <A href="https://spoqa.github.io/2016/06/03/localize-type-setting.html">
                        다국어 환경에 맞게 타이포그래피 세팅하기 - 다국어 반응형 타이포그래피
                    </A>
                </li>
            </ul>
        </Layout>
    );
});

LicensePage.displayName = 'LicensePage';

export default LicensePage;
