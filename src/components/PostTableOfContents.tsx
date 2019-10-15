/* Inspired from Velog */

import clsx from 'clsx';
import { css } from 'linaria';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { fromEvent } from 'rxjs';
import { map, scan, tap } from 'rxjs/operators';
import oc from 'open-color';

const PostTableOfContentsBlock = css`
    position: absolute;
    top: 8rem;
    right: -2rem;

    @media screen and (max-width: 1024px) {
        & {
            display: none;
        }
    }

    ul {
        font-size: 0.875rem;
        list-style: none;
        margin: 0 0 0 1rem;
    }

    > ul {
        position: absolute;
        width: 18.75rem;
    }

    li {
        margin: 0.5rem 0;
        font-size: 1em;

        a {
            color: ${oc.gray[6]};
            text-decoration: none;
            font-weight: normal;

            &:hover {
                color: ${oc.gray[9]};
                text-decoration: underline;
            }
        }
    }

    &.fixed {
        > ul {
            position: fixed;
            top: 1rem;
        }
    }

    p {
        margin: 0;
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
        <div
            ref={containerRef}
            className={clsx(PostTableOfContentsBlock, fixed && 'fixed')}
            dangerouslySetInnerHTML={{ __html: tableOfContents }}
        />
    );
});

PostTableOfContents.displayName = 'PostTableOfContents';

export default PostTableOfContents;
