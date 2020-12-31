import { withUnpublishedPreview } from 'gatsby-source-prismic';
import React, { FC } from 'react';
import { Layout } from '../features/layout/Layout';
import PostTemplate from '../features/post/PostTemplate';
import AboutPage from './about';

const NotFoundPage: FC = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

NotFoundPage.displayName = 'NotFoundPage';

export default withUnpublishedPreview(NotFoundPage, {
  templateMap: {
    post: PostTemplate,
    about: AboutPage,
  },
});
