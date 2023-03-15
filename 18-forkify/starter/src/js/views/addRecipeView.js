import View from './view.js';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _windowElement = document.querySelector('.add-recipe-window');
  _overlayElement = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  _message = 'Recipe was successfully uploaded 👍';

  constructor() {
    super();
    this._addHandlerShowModal();
    this._addHandlerHideModal();
  }

  toggleAddRecipeModal() {
    this._overlayElement.classList.toggle('hidden');
    this._windowElement.classList.toggle('hidden');
  }

  toggleAddRecipeModalOnKeyboard(e) {
    if (
      e.key === 'Escape' &&
      !this._windowElement.classList.contains('hidden')
    ) {
      this.toggleAddRecipeModal();
    }
  }

  _addHandlerShowModal() {
    this._btnOpen.addEventListener(
      'click',
      this.toggleAddRecipeModal.bind(this)
    );
  }

  _addHandlerHideModal() {
    this._btnClose.addEventListener(
      'click',
      this.toggleAddRecipeModal.bind(this)
    );
    this._overlayElement.addEventListener(
      'click',
      this.toggleAddRecipeModal.bind(this)
    );
    document.addEventListener(
      'keydown',
      this.toggleAddRecipeModalOnKeyboard.bind(this)
    );
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = Object.fromEntries([...new FormData(this)]);
      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
