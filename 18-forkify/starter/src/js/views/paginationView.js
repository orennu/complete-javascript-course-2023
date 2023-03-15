import View from './view.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const btnNextPageMarkup = this._generatePageBtnMarkup('next', currentPage);
    const btnPrevPageMarkup = this._generatePageBtnMarkup('prev', currentPage);
    // page 1 and there are other pages
    if (currentPage === 1 && numPages > 1) {
      return btnNextPageMarkup;
    }

    // last page
    if (currentPage === numPages && numPages > 1) {
      return btnPrevPageMarkup;
    }

    // other page
    if (currentPage < numPages) {
      return `
        ${btnPrevPageMarkup}
        ${btnNextPageMarkup}
      `;
    }

    // page 1 and there are NO other pages
    return '';
  }

  _generatePageBtnMarkup(direction, currentPage) {
    return `
    <button class="btn--inline pagination__btn--${
      direction === 'next' ? 'next' : 'prev'
    }" data-goto="${direction === 'next' ? currentPage + 1 : currentPage - 1}">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-${
      direction === 'next' ? 'right' : 'left'
    }"></use>
        </svg>
        <span>Page ${
          direction === 'next' ? currentPage + 1 : currentPage - 1
        }</span>
    </button>
    `;
  }
}

export default new PaginationView();
