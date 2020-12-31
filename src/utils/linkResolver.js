module.exports = {
  linkResolver: () => doc => {
    switch (doc.type) {
      case 'post':
        return `/posts/${doc.uid}`;
      case 'about':
        return '/about';
      default:
        return '/not-found';
    }
  },
};
