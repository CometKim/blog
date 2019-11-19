import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import colors from '../lib/colors';
import spacing from '../lib/spacing';
import Container from './Container';
import FaviconImage from './FaviconImage';

const LayoutBlock = styled.div`
    min-height: 100%;
    background-color: ${colors.layoutBackground};

    > header {
        background-color: ${colors.headerBackground};
        padding: ${spacing[1]};
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
    }

    .header-container {
        display: flex;
        align-items: center;

        .title {
            margin-right: auto;
            display: flex;
            align-items: center;

            a {
                color: ${colors.content};
            }

            .favicon-image {
                width: 2rem;
                margin-right: ${spacing[1]};
            }
        }

        .nav-links {
            margin-left: auto;

            a {
                display: inline-block;
                color: ${colors.content};
                opacity: 0.5;
                font-weight: normal;

                &:not(:first-child) {
                    margin-left: ${spacing[2]};
                }

                &:hover {
                    color: ${colors.primary};
                    text-decoration: none;
                }

                &.active {
                    color: ${colors.primary};
                    opacity: 1;
                }
            }
        }
    }

    > main {
        padding: 5rem 0;
    }
`;

const Layout: React.FC = React.memo(({ children }) => {
    return (
        <LayoutBlock>
            <header>
                <Container className="header-container">
                    <div className="title">
                        <FaviconImage />
                        <Link to="/">imch.dev</Link>
                    </div>
                    <div className="nav-links">
                        <Link to="/posts" partiallyActive activeClassName="active">
                            blog
                        </Link>
                        <Link to="/resume" partiallyActive activeClassName="active">
                            resume
                        </Link>
                    </div>
                </Container>
            </header>
            <main>
                <Container>{children}</Container>
            </main>
        </LayoutBlock>
    );
});

Layout.displayName = 'Layout';

export default Layout;
