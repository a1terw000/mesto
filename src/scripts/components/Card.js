export default class Card {
  constructor(cardData, templateSelector, openPopupFunc, deletePopupFunc, likeFunc) {
    this._cardData = cardData;  
    // console.log(this._cardData)
    this._templateSelector = templateSelector;
    this._openImagePopup = openPopupFunc;
    this._deletePopupFunc = deletePopupFunc;
    this._likeFunc = likeFunc;
    this._cloneELement = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
    this._imageElement = this._cloneELement.querySelector('.card__image');
    this._aliesElement = this._cloneELement.querySelector('.card__alies');
    this._likeElement = this._cloneELement.querySelector('.card__like-button');
    this._trashElement = this._cloneELement.querySelector('.card__trash');
    this._likeCounter = this._cloneELement.querySelector('.card__like-counter');
    this._cardId = this._cardData._id;
    this._myId = this._cardData.myId;
    this._ownerId = this._cardData.owner._id;
    this._likes = this._cardData.likes;
    this._likesLength = this._cardData.likes.length;
  }

  _likeEffect = () => {
    this._likeFunc(this._likeElement, this._cardId);
  }

  _deleteCard = () => {
    this._deletePopupFunc({item: this, cardId: this._cardId});
  }

  removeCard(){
    this._cloneELement.remove();
    this._cloneELement = null;
  }

  _openImagePopupFunction = () => {
    this._openImagePopup(this._cardData);
  }

  _setEventListener() {
    this._likeElement.addEventListener('click', this._likeEffect);
    this._trashElement.addEventListener('click', this._deleteCard);
    this._imageElement.addEventListener('click', this._openImagePopupFunction);
  }

  _seeTrashButton() {
    this._myId === this._ownerId ? this._trashElement : this._trashElement.remove();
  }

  _checkLike() {
    this._likes.forEach((user) => {
      if (user._id === this._myId) {
        this._likeElement.classList.add('card__like-button_active');
        return
      }
    })
    this._likeCounter.textContent = this._likesLength
  }

  toggleLike(likes) {
    this._likeElement.classList.toggle('card__like-button_active');
    this._likeCounter.textContent = likes.length;
  }

  createCard() {
    this._imageElement.src = this._cardData.link;
    this._imageElement.alt = this._cardData.name;
    this._aliesElement.textContent = this._cardData.name;
    this._checkLike();
    this._seeTrashButton();
    this._setEventListener();
    return this._cloneELement
  }
}