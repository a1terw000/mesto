import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
  constructor(PopupSelector, submitCallbackFunc) {
    super(PopupSelector);
    this._submitCallbackFunc = submitCallbackFunc;
  }

  setEventListener() {
    super.setEventListener();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitCallbackFunc({ item: this._item, cardId: this._cardId });
    })
  }
  open = ({ item, cardId }) => {
    super.open();
    this._item = item;
    this._cardId = cardId;
  }
} 