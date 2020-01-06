import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';
import tw from 'tailwind.macro';

const headerCss = css`
  background-color: rgba(255, 255, 255, 0.75);

  @supports (backdrop-filter: blur(4px)) {
    backdrop-filter: blur(4px);
    ${tw`border-b border-gray-300`}
  }
`;

const Layout: React.FC = React.memo(({ children }) => {
  return (
    <>
      <header
        css={headerCss}
        className="flex justify-between items-center fixed top-0 left-0 right-0 z-10 md:px-8 md:py-4 md:h-16 px-8 h-12"
      >
        <Link className="font-bold text-base md:text-lg" to="/" title="게시글 목록으로 이동">
          imch.dev
        </Link>
        <Link className="text-base md:text-lg" to="/about" title="소개 페이지로 이동">
          about
        </Link>
      </header>
      <main className="container mt-16 md:mt-24">{children}</main>
    </>
  );
});

Layout.displayName = 'Layout';

export default Layout;
