import React, { createRef, useEffect, useRef } from 'react';

const src = 'https://utteranc.es/client.js';

export interface PostCommentsProps {
  repo?: string;
  url: string;
}

export const PostComments: React.FC<PostCommentsProps> = React.memo(
  ({ repo = 'iamchanii/blog', url }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!containerRef.current) {
        return;
      }

      const utterances = document.createElement('script');

      const attributes = {
        src,
        repo,
        'issue-term': url,
        label: 'comments 🙌',
        theme: 'github-light',
        crossOrigin: 'anonymous',
        async: 'true',
      };

      Object.entries(attributes).forEach(([key, value]) => {
        utterances.setAttribute(key, value);
      });

      containerRef.current.appendChild(utterances);
    }, [repo]);

    return <div key={url} ref={containerRef} />;
  }
);

PostComments.displayName = 'PostComments';
