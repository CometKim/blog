import React, { createRef, useLayoutEffect, useRef } from 'react';

const src = 'https://utteranc.es/client.js';

export interface IUtterancesProps {
  repo: string;
}

const Utterances: React.FC<IUtterancesProps> = React.memo(({ repo }) => {
  const containerRef = createRef<HTMLDivElement>();
  const initialized = useRef(false);

  useLayoutEffect(() => {
    if (initialized.current) {
      return;
    }

    const utterances = document.createElement('script');

    const attributes = {
      src,
      repo,
      'issue-term': 'og:title',
      label: 'comments 🙌',
      theme: 'github-light',
      crossOrigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    containerRef.current.appendChild(utterances);

    initialized.current = true;
  }, [repo]);

  return <div ref={containerRef} />;
});

Utterances.displayName = 'Utterances';

export default Utterances;
