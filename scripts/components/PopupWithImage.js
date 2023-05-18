import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._figureImage = this._popup.querySelector('.figure__image');
    this._figureCaption = this._popup.querySelector('.figure__caption');
  }

  open = (cardData) => {
    this._figureImage.src = cardData.link;
    this._figureImage.alt = cardData.title;
    this._figureCaption.textContent = cardData.title;
    super.open();
  }
}