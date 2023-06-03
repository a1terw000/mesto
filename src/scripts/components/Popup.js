export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseButtonElement = this._popup.querySelector('.popup__close-button');
    
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }
  
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleClosePopup = () => {
    this.close();
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _closePopupClickOverlay = (evt) => {
    if (evt.currentTarget === evt.target) {
      this.close();
    }
  }

  setEventListener() {
    this._popupCloseButtonElement.addEventListener('click', this._handleClosePopup);
    this._popup.addEventListener('click', this._closePopupClickOverlay);
  }

}