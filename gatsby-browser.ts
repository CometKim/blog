import './src/styles.css';
import './src/prism-node.css';
import './src/ignore.css';

import { resetHeaderScrollClasses } from './src/presentations/Layout';

export const onRouteUpdate = () => {
  const header = window.document.querySelector('#header');

  resetHeaderScrollClasses(header as any);
};
