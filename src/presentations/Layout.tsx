import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React, { useEffect, useRef } from 'react';
import tw from 'tailwind.macro';

const headerCss = css`
  background-color: rgba(255, 255, 255, 0.75);

  @supports (backdrop-filter: blur(5px)) {
    backdrop-filter: blur(5px);
    ${tw`border-b border-gray-300`}
  }

  transition: transform 250ms ease;

  &.header-scroll-up {
    transform: none;
  }

  &.header-scroll-down {
    transform: translate3d(0, -100%, 0);
  }
`;

const removeClass = (element: HTMLElement, className: string) => {
  element.classList.remove(className);
};

const addClass = (element: HTMLElement, className: string) => {
  element.classList.add(className);
};

const isContainClass = (element: HTMLElement, className: string) => {
  return element.classList.contains(className);
};

const headerScrollUp = 'header-scroll-up';
const headerScrollDown = 'header-scroll-down';
const headerHideOffset = 128;

const Layout: React.FC = React.memo(({ children }) => {
  const headerRef = useRef<HTMLElement>();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    let lastYOffset = 0;

    const onWindowScroll = () => {
      if (!headerRef.current) {
        return;
      }

      const currentYOffset = window.pageYOffset;
      const el = headerRef.current;

      if (currentYOffset === 0) {
        removeClass(el, headerScrollUp);
        return;
      }

      if (currentYOffset > lastYOffset && currentYOffset >= headerHideOffset && !isContainClass(el, headerScrollDown)) {
        addClass(el, headerScrollDown);
        removeClass(el, headerScrollUp);
      } else if (currentYOffset < lastYOffset && isContainClass(el, headerScrollDown)) {
        addClass(el, headerScrollUp);
        removeClass(el, headerScrollDown);
      }

      lastYOffset = currentYOffset;
    };

    window.addEventListener('scroll', onWindowScroll);

    return () => {
      window.removeEventListener('scroll', onWindowScroll);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
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
