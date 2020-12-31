import { WrapRootElementBrowserArgs } from 'gatsby';
import { PreviewStoreProvider } from 'gatsby-source-prismic';
import * as React from 'react';

export const wrapRootElement = ({ element }: WrapRootElementBrowserArgs) => (
  <PreviewStoreProvider>{element}</PreviewStoreProvider>
);
