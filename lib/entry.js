const APIUtil = require('./api_util.js');
const DOMUtil = require('./dom_util.js');

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const SearchBar = new Search(root);
  SearchBar.render(root);
});

class Search {
  constructor(root) {
    this.$root = root;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const fetch = APIUtil.fetchSearch('ballalal');
  }

  attachListeners() {
    document.getElementById('submit')
      .addEventListener('click', this.handleSubmit);
  }

  genSearchBar() {
    const type = 'input';
    const attrs = {
      'class':'searchbar',
      'type': 'text',
      'placeHolder': 'Type to search'
    };

    return DOMUtil.generateElement(type, attrs);
  }

  genSubmit() {
    const type = 'input';
    const attrs = {
      'id': 'submit',
      'class': 'submit-button',
      'value': 'Search',
      'type': 'button',
    };

    return DOMUtil.generateElement(type, attrs);
  }

  genSearchBox() {
    const $searchBox = DOMUtil.generateElement('div');
    DOMUtil.addElement($searchBox, this.genSearchBar(), this.genSubmit());

    return $searchBox;
  }

  render() {
    DOMUtil.addElement(this.$root, this.genSearchBox());
    this.attachListeners();
    // renderStats();
    // renderResults();
  }
}
