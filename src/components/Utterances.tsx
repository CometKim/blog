import React, { createRef, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import colors from '../lib/colors';
import shadow from '../lib/shadow';
import spacing from '../lib/spacing';

const UtterancesBlock = styled.div`
  margin-top: ${spacing[2]};
  background-color: ${colors.white};
  padding: ${spacing[2]};
  border-radius: 2px;
  ${shadow};

  .utterances {
    max-width: 100%;
  }
`;

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
      label: 'comment',
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

  return <UtterancesBlock ref={containerRef} />;
});

Utterances.displayName = 'Utterances';

export default Utterances;
