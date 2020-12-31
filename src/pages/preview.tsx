import { withPreviewResolver } from 'gatsby-source-prismic';
import React from 'react';
import { Layout } from '../features/layout/Layout';
import { linkResolver } from '../utils/linkResolver';

const PreviewPage = ({ isPreview }: any) => {
  if (isPreview === false) {
    return <p>Not a preview</p>;
  }

  return (
    <Layout>
      <p>Loading...</p>
    </Layout>
  );
};

export default withPreviewResolver(PreviewPage, {
  // TODO: use environment variable
  repositoryName: 'imch-dev',
  linkResolver,
});
