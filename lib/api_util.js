const fetchSearch = (query) => {
  return fetch('/search/' + query);
}

module.exports = { fetchSearch };
