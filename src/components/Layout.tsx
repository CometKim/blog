import { graphql, useStaticQuery } from 'gatsby';
import { css } from 'linaria';
import React, { useLayoutEffect } from 'react';
import { Query } from '../graphql-types';
import Footer from './Footer';
import Header from './Header';
import typography from './typography';

const LayoutBlock = css`
    display: flex;
    flex-direction: column;
    min-height: 100%;

    main {
        margin: 0 auto;
        max-width: 960px;
        padding: 1rem;
        width: 100%;
    }
`;

const SiteTitleQuery = graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;

const Layout: React.FC = React.memo(({ children }) => {
    const {
        site: { siteMetadata },
    } = useStaticQuery<Query>(SiteTitleQuery);

    useLayoutEffect(() => {
        typography.injectStyles();
    }, []);

    return (
        <div className={LayoutBlock}>
            <Header siteTitle={siteMetadata.title} />
            <main children={children} />
            <Footer />
        </div>
    );
});

Layout.displayName = 'Layout';

export default Layout;
