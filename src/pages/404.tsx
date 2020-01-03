import { navigate } from 'gatsby';
import React from 'react';
import SEO from '../components/SEO';

const handleClickBack = () => {
  navigate('/posts');
};

const NotFound: React.FC = React.memo(() => {
  return (
    <>
      <SEO title="404: Not found" />
      <div>
        <h2>404</h2>
        <p>음, 잘못 입력 하신거 같은데요?</p>
        <button onClick={handleClickBack}>돌아가기</button>
      </div>
    </>
  );
});

NotFound.displayName = 'NotFound';

export default NotFound;
