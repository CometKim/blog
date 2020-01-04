import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import SEO from '../presentations/SEO';
import HtmlRenderer from '../presentations/HtmlRenderer';
import Layout from '../presentations/Layout';

const ResumePage: React.FC = React.memo(() => {
  const { markdownRemark } = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { type: { eq: "about" } }) {
        html
      }
    }
  `);

  return (
    <Layout>
      <SEO title="About" url="/about" />
      <HtmlRenderer html={markdownRemark.html} />
    </Layout>
  );
});

ResumePage.displayName = 'ResumePage';

export default ResumePage;
