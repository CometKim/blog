import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';
import { AboutCareers } from '../features/about/AboutCareers';
import { AboutProfileCard } from '../features/about/AboutProfileCard';
import { AboutProfileImage } from '../features/about/AboutProfileImage';
import { Layout } from '../features/layout/Layout';
import { SEO } from '../features/seo/SEO';

const AboutPage: FC<PageProps<any>> = ({ data }) => (
  <Layout>
    <SEO title="About" url="about" />
    <AboutProfileImage />
    <AboutProfileCard />
    <AboutCareers />
  </Layout>
);

AboutPage.displayName = 'AboutPage';

export default AboutPage;

export const query = graphql`
  query About {
    prismicAbout {
      data {
        careers {
          company_name
          description {
            html
          }
          end_date
          from_date
        }
      }
    }
  }
`;
