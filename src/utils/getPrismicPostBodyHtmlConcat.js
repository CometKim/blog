module.exports = {
  getPrismicPostBodyHtmlConcat: data => {
    return data
      .filter(node => node.__typename === 'PrismicPostBodyText')
      .map(node => node.primary.content.html)
      .join('');
  },
};
