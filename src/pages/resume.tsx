import oc from 'open-color';
import React from 'react';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';
import Card from '../components/Card';
import Layout from '../components/Layout';
import ResumeCard from '../components/ResumeCard';
import SEO from '../components/SEO';
import spacing from '../lib/spacing';

const ResumeBlock = styled.div`
    ${Card} {
        &:not(:last-child) {
            margin-bottom: 1rem;
        }

        h2 {
            margin: 0 0 1em;
        }

        ul {
            margin: 0;
            padding: 0 0 0 1em;
        }
    }

    section {
        &.experience {
            display: flex;

            > .image {
                min-width: 6.25rem;
                width: 6.25rem;
                height: 6.25rem;
                border-radius: 100%;
                border: 1px solid ${oc.gray[2]};
                margin-right: 2em;
                margin-bottom: 2em;
            }

            ${down('sm')} {
                flex-direction: column;
            }
        }

        p,
        h2,
        h3 {
            margin-top: 0;
        }

        ul {
            margin: 0;
            padding: 0 0 0 ${spacing[2]};
        }
    }
`;

const ResumePage: React.FC = React.memo(() => {
    return (
        <Layout>
            <SEO title="resume" />
            <ResumeBlock>
                <Card as="section">
                    <h2>소개</h2>
                    <p>
                        프론트엔드 엔지니어 이찬희 입니다. 최근에는 리액트와 타입스크립트를 사용하여 즐겁게 개발하고
                        있습니다. UX/UI에 관심이 있으며 현재 플러스티브이에서 웹 프론트엔드 엔지니어로 재직중입니다.
                    </p>
                </Card>
                <Card>
                    <h2>요약</h2>
                    <ul>
                        <li>리액트, 타입스크립트로 개발하는 것을 좋아합니다.</li>
                        <li>디자인 시스템에 관심이 있습니다.</li>
                        <li>UX/UI는 단순히 예쁘게 만드는게 전부가 아니라는 것을 알고 있습니다.</li>
                        <li>테스트 코드 작성을 통해 품질을 유지하고자 노력합니다.</li>
                    </ul>
                </Card>
                <ResumeCard title="플러스티브이" time="2018. 12 ~">
                    <ul>
                        <li>
                            디지털 사이니지 관리 도구(CMS)를 개발. 리액트와 타입스크립트를 사용하였습니다.
                        </li>
                        <li>
                            LinguiJS를 사용한 국제화(i18n) 작업 진행.{' '}
                            <a
                                target="_blank"
                                href="https://medium.com/plustv/linguijs-%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%95%B1-%EB%8B%A4%EA%B5%AD%EC%96%B4-%EC%A7%80%EC%9B%90%ED%95%98%EA%B8%B0-ef7ea234c6a8"
                            >
                                (관련글)
                            </a>
                        </li>
                    </ul>
                </ResumeCard>
                <ResumeCard title="타운컴퍼니" time="2018. 03 ~ 2018. 11">
                    <ul>
                        <li>Angular 기반의 타운어스 개발.</li>
                        <li>신규 사업 관련 프로토타입 개발.</li>
                    </ul>
                </ResumeCard>
                <ResumeCard title="타운컴퍼니" time="2017. 01 ~ 2018. 02">
                    <ul>
                        <li>AngularJS와 Express 기반의 테이블매니저 개발.</li>
                    </ul>
                </ResumeCard>
            </ResumeBlock>
        </Layout>
    );
});

ResumePage.displayName = 'ResumePage';

export default ResumePage;
