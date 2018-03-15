const exports = module.exports;

exports.fetchSearch = (query) => {
  return fetch('/search/' + query)
    .then(res => res.json());
}
