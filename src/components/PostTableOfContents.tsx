/* Inspired from Velog */

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { fromEvent } from 'rxjs';
import { map, scan, tap } from 'rxjs/operators';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';
import spacing from '../lib/spacing';

const PostTableOfContentsBlock = styled.div`
  position: absolute;
  top: 0;
  right: -${spacing[4]};
  z-index: 50;

  ${down('lg')} {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    & {
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  > ul {
    position: absolute;
    width: 18rem;
    padding: ${spacing[2]};
  }

  li {
    font-size: 0.875rem;
  }

  li ul li {
    margin-left: ${spacing[2]};
  }

  &.fixed {
    > ul {
      position: fixed;
      top: 4rem;
    }
  }

  p {
    margin: 0;
  }

  a {
    line-height: 2;
  }
`;

export interface IPostTableOfContentsProps {
  raw: string;
  slug: string;
}

const PostTableOfContents: React.FC<IPostTableOfContentsProps> = React.memo(({ slug, raw }) => {
  const [fixed, setFixed] = useState();

  const containerRef = useRef<HTMLDivElement>();

  const tableOfContents = useMemo(() => {
    return raw.replace(new RegExp(slug + '/', 'g'), '');
  }, [raw, slug]);

  useEffect(() => {
    const top = containerRef.current.getBoundingClientRect().top + window.pageYOffset;
    const subscription = fromEvent(window, 'scroll')
      .pipe(
        map(() => window.scrollY),
        scan((acc, scrollY) => scrollY > top, false),
        tap(_fixed => setFixed(_fixed)),
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <PostTableOfContentsBlock
      ref={containerRef}
      className={fixed && 'fixed'}
      dangerouslySetInnerHTML={{ __html: tableOfContents }}
    />
  );
});

PostTableOfContents.displayName = 'PostTableOfContents';

export default PostTableOfContents;
