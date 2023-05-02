export default class Card {
  constructor(cardData, templateElement, openPopupFunc) {
    this._cardData = cardData;
    this._templateElement = templateElement;
    this._openImagePopup = openPopupFunc;
  }

  _templateClone() {
    return document.querySelector(this._templateElement).content.querySelector('.card').cloneNode(true);
  }

  _likeEffect(evt) {
    evt.target.classList.toggle('card__like-button_active');
  }

  _deleteCard(evt) {
    evt.target.closest('.card').remove();
  }

  _openImagePopupFunction = () => {
    this._openImagePopup(this._cardData);
  }

  _setEventListener() {
    this._likeElement.addEventListener('click', this._likeEffect);
    this._trashElement.addEventListener('click', this._deleteCard);
    this._imageElement.addEventListener('click', this._openImagePopupFunction);
  }

  createCard() {
    this._templateCloneElement = this._templateClone();
    this._imageElement = this._templateCloneElement.querySelector('.card__image');
    this._aliesElement = this._templateCloneElement.querySelector('.card__alies');
    this._likeElement = this._templateCloneElement.querySelector('.card__like-button');
    this._trashElement = this._templateCloneElement.querySelector('.card__trash');
    this._imageElement.src = this._cardData.link;
    this._imageElement.alt = this._cardData.name;
    this._aliesElement.textContent = this._cardData.name;
    this._setEventListener();
    return this._templateCloneElement
  }
}