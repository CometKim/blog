import React from 'react';
import { css } from '@emotion/core';
import tw from 'tailwind.macro';

const htmlRendererCss = css`
  ${tw`text-gray-800`}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${tw`font-bold text-gray-900 my-4`}
  }

  h1 {
    ${tw`text-3xl mt-8`}
  }

  h2 {
    ${tw`text-2xl`}
  }

  h3 {
    ${tw`text-lg`}
  }

  hr {
    ${tw`block my-8 w-3/4 mx-auto`}
  }

  figure {
    ${tw`my-8`}
  }

  figcaption {
    ${tw`text-center text-sm text-gray-600 mt-4`}
  }

  .gatsby-highlight {
    ${tw`my-4`}
  }

  ul {
    ${tw`px-4 mb-4`}

    li {
      ${tw`relative pl-4`}

      :before {
        content: '•';
        ${tw`absolute left-0`}
      }
    }
  }

  p {
    ${tw`mb-4`}
  }
`;

export interface IHtmlRendererProps {
  html: string;
}

const HtmlRenderer: React.FC<IHtmlRendererProps> = React.memo(({ html }) => {
  return <section css={htmlRendererCss} className="leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: html }} />;
});

HtmlRenderer.displayName = 'HtmlRenderer';

export default HtmlRenderer;
