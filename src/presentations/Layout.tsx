import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';

const headerCss = css`
  background-color: rgba(255, 255, 255, 0.75);

  @supports (backdrop-filter: blur(4px)) {
    backdrop-filter: blur(4px);
  }
`;

const Layout: React.FC = React.memo(({ children }) => {
  return (
    <>
      <header
        css={headerCss}
        className="flex justify-between items-center px-8 py-4 fixed top-0 left-0 right-0 h-16 z-10"
      >
        <Link className="font-bold text-lg" to="/" title="게시글 목록으로 이동">
          imch.dev
        </Link>
        <Link className="text-lg" to="/about" title="소개 페이지로 이동">
          about
        </Link>
      </header>
      <main className="container mt-24">{children}</main>
    </>
  );
});

Layout.displayName = 'Layout';

export default Layout;
