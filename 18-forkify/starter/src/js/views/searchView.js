class SearchView {
  #parentElement = document.querySelector('.search');
  #searchInput = this.#parentElement.querySelector('.search__field');

  #clearInput() {
    this.#searchInput.value = '';
  }

  getQuery() {
    const query = this.#searchInput.value;
    this.#clearInput();
    return query;
  }

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
