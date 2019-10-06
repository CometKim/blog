import { css } from 'linaria';
import React from 'react';
import ExperienceLogo from '../components/ExperienceLogo';
import Layout from '../components/Layout';
import ProfileImage from '../components/ProfileImage';
import SEO from '../components/seo';
import oc from 'open-color';

const ResumeBlock = css`
    section {
        &:not(:last-child) {
            margin-bottom: 2rem;
        }

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

            @media screen and (max-width: 420px) {
                flex-direction: column;
            }
        }
    }
`;

const ProfileImageAndTextBlock = css`
    display: flex;

    .gatsby-image-wrapper {
        min-width: 6.25rem;
        margin-right: 2em;
        margin-bottom: 2em;
    }

    @media screen and (max-width: 420px) {
        flex-direction: column;
    }
`;

const ResumePage: React.FC = React.memo(() => {
    return (
        <Layout>
            <SEO title="resume" />
            <h1>resume</h1>
            <div className={ResumeBlock}>
                <section>
                    <h2>소개</h2>
                    <div className={ProfileImageAndTextBlock}>
                        <ProfileImage />
                        <p>
                            웹 프론트엔드 엔지니어 이찬희 입니다. 자바스크립트를 주로 사용하고, 프론트엔드 개발을
                            좋아합니다. 최근에는 리액트와 타입스크립트를 사용하여 즐겁게 개발하고 있습니다. 테스트 코드
                            작성을 통해 품질을 유지하고자 노력합니다. 현재 플러스티브이에서 웹 프론트엔드 엔지니어로
                            재직중입니다.
                            <br />
                            <br />
                            동료에게 도움이 되는 개발자가 되는 것이 제가 추구하는 개발자로서의 목표입니다. 제가 만든
                            코드가 다른 개발자들에게, 나아가 비즈니스에 도움이 될 때 가장 큰 보람을 느낍니다. 디자이너,
                            기획자와 제품에 대해서 생산성 있는 이야기를 나누는 것을 좋아합니다.
                            <br />
                            <br />
                            2016년 12월에 육군 현역으로 만기 제대했습니다.
                        </p>
                    </div>
                </section>
                <section>
                    <h2>사용 기술</h2>
                    <p>최근에 가장 많이 사용하여 익숙한 기술입니다:</p>
                    <ul>
                        <li>React</li>
                        <li>Typescript</li>
                        <li>Jest</li>
                        <li>react-testing-library</li>
                    </ul>
                    <p>예전에 사용해 본 경험이 있는 기술입니다:</p>
                    <ul>
                        <li>Angular</li>
                        <li>RxJS</li>
                        <li>Golang</li>
                        <li>Python</li>
                    </ul>
                </section>
                <section>
                    <h2>이력</h2>
                    <section className="experience">
                        <ExperienceLogo name="plustv" />
                        <div>
                            <h3>플러스티브이</h3>
                            <p className="date">2018. 12 ~ NOW / 프론트엔드 개발</p>
                            <p>
                                자사 디지털 사이니지 관리 솔루션의 신규 CMS 프로젝트 개발 및 유지보수를 담당하였습니다.
                                리액트와 타입스크립트를 사용하여 개발하였고, 테스트 주도 개발을 진행하였습니다.최근
                                프로젝트 폴더 구조 개선 작업을 진행했습니다.
                            </p>
                            <ul>
                                <li>자사 디지털 사이니지 솔루션의 신규 CMS 프로젝트 개발</li>
                            </ul>
                        </div>
                    </section>
                    <section className="experience">
                        <ExperienceLogo name="towncompany" />
                        <div>
                            <h3>타운컴퍼니</h3>
                            <p className="date">2018. 03 ~ 2018. 11 / 프론트엔드 개발</p>
                            <p>
                                단체 공동구매를 위한 e-커머스 플랫폼 ‘타운어스’ 신규 기능 개발 및 유지보수 담당을
                                맡았습니다. Angular 6 와 RxJS 를 경험해 볼 수 있었고, 테스트 주도 개발을 처음으로
                                접했습니다. 제품 개발 시 기획자, 디자이너, 개발자 간의 협업을 통해 업무를 진행, 역할
                                조직에 대해 알게되었습니다.
                            </p>
                            <ul>
                                <li>신규 플랫폼 오픈 후 발생한 이슈 및 크로스브라우징 대응</li>
                                <li>E2E 테스트 스크립트 작성</li>
                                <li>
                                    Sentry 로 보고되는 오류를 추적할 수 있도록 배포 시 sourcemap 을 생성하여 Sentry 에
                                    업로드 하도록 개선.
                                </li>
                                <li>역경매 신규 플랫폼 타운초이스 프로토타입 개발</li>
                                <li>공동구매방 프로세스 개선 (2.0.0 버전)</li>
                                <li>배포 자동화 스크립트 개선</li>
                                <li>업체 상세 정보 및 정보 공유 기능 개발</li>
                            </ul>
                        </div>
                    </section>
                    <section className="experience">
                        <ExperienceLogo name="tablemanager" />
                        <div>
                            <h3>테이블매니저</h3>
                            <p className="date">2017. 01 ~ 2018. 02 / 프론트엔드 및 백엔드 개발</p>
                            <p>
                                레스토랑 예약 관리 솔루션의 신규 기능 개발 및 유지보수를 담당했습니다. 기존에 개발 된
                                코드를 분석하며 업무를 진행했고, static 한 파일을 업로드 했던 기존 방식에 웹팩을
                                도입하여 브라우저 캐시 관련 문제를 해결했던 경험이 있습니다.
                            </p>
                            <ul>
                                <li>아임포트 모듈을 연동하여 솔루션 내 예약금 결제 기능 도입</li>
                                <li>
                                    매장에서 태블릿 PC를 활용, 전화번호를 입력하면 고객 포인트를 적립/사용 처리할 수
                                    있는 기능 개발
                                </li>
                                <li>매일 9시, 전체 고객사의 솔루션 사용 정보를 확인하여 리포트를 생성하는 기능 개발</li>
                                <li>SMS/LMS 기반의 문자 발송 시스템에서 카카오톡 알림톡을 발송하도록 개발</li>
                            </ul>
                        </div>
                    </section>
                </section>
            </div>
        </Layout>
    );
});

ResumePage.displayName = 'ResumePage';

export default ResumePage;
