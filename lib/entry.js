const APIUtil = require('./api_util.js');

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  debugger
  render(root);
});

function handleSubmit(e) {
  debugger
  const fetch = APIUtil.fetchSearch('ballalal');
  debugger
}

function addElement(parent, ...elements) {
  elements.forEach(el => parent.append(el));
}

function addAttributes(element, options) {
  Object.keys(options).forEach(key => {
    element.setAttribute(key, options[key]);
  });
}

function genSearchBar() {
  const $searchBar = document.createElement('input');
  addAttributes($searchBar, {
    'class':'searchbar',
    'type': 'text',
    'placeHolder': 'Type to search'
  });

  return $searchBar;
}

function genSubmit() {
  const $submitButton = document.createElement('input');
  addAttributes($submitButton, {
    'class': 'submit-button',
    'value': 'Search',
    'type': 'submit',
    'onclick': handleSubmit,
  });
debugger
  return $submitButton;
}

function genSearchBox() {
  const $searchBox = document.createElement('form');
  addElement($searchBox, genSearchBar(), genSubmit());
debugger
  return $searchBox;
}

function render(root) {
  debugger
  addElement(root, genSearchBox());
  // renderStats();
  // renderResults();
}
