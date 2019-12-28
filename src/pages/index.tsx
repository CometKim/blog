import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage: React.FC = () => {
  useEffect(() => {
    navigate('/posts');
  }, []);

  return <Layout />;
};

export default IndexPage;
