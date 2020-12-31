import { WrapRootElementNodeArgs } from 'gatsby';
import * as React from 'react';
import { PreviewStoreProvider } from 'gatsby-source-prismic';

export const wrapRootElement = ({ element }: WrapRootElementNodeArgs) => (
  <PreviewStoreProvider>{element}</PreviewStoreProvider>
);
