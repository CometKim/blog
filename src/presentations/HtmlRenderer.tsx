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
    ${tw`font-bold text-gray-900 my-4 leading-tight`}
  }

  h1 {
    ${tw`text-2xl md:text-3xl mt-8`}
  }

  h2 {
    ${tw`text-lg md:text-2xl`}
  }

  h3 {
    ${tw`text-normal md:text-lg`}
  }

  hr {
    ${tw`block my-8 w-3/4 mx-auto`}
  }

  figure {
    ${tw`my-8`}
  }

  figcaption {
    ${tw`text-center text-sm text-gray-700 mt-4`}
  }

  .gatsby-highlight {
    ${tw`my-4`}
  }

  :not(li) {
    > ul,
    > ol {
      ${tw`mb-4`}
    }
  }

  ul {
    li {
      ${tw`relative pl-4 my-1`}

      :before {
        content: '•';
        ${tw`absolute left-0`}
      }
    }
  }

  ol {
    list-style: decimal;
    ${tw`ml-4`}

    li {
      ${tw`pl-1 my-1`}
    }
  }

  :not(li) > p {
    ${tw`mb-4`}
  }

  p > img {
    ${tw`my-8`}
  }

  .gatsby-resp-image-wrapper {
    ${tw`rounded overflow-hidden`}
  }
`;

export interface IHtmlRendererProps {
  html: string;
}

const HtmlRenderer: React.FC<IHtmlRendererProps> = React.memo(({ html }) => {
  return (
    <section
      css={htmlRendererCss}
      className="leading-relaxed mb-8"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
});

HtmlRenderer.displayName = 'HtmlRenderer';

export default HtmlRenderer;
