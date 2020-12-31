module.exports = {
  getPrismicPostBodyTextExcerpt: data => {
    let result = data.find(node => node.__typename === 'PrismicPostBodyText');
    result = result ? result.primary.content.text.substring(0, 140) : null;

    return result ? result + (result.length >= 140 ? '...' : '') : '';
  },
};
