import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallbackFunc) {
    super(popupSelector);
    this._form = this._popup.querySelector('.form');
    this._submitCallbackFunc = submitCallbackFunc;
    this._inputList = this._form.querySelectorAll('.form__input');
    this._submitButton = this._form.querySelector('.popup__submit-button');
    this._defaultButtonText = this._submitButton.textContent;
  }

  _getInputValues() {
    this._values = {};
    this._inputList.forEach(input => {
      this._values[input.name] = input.value;
    })
    return this._values
  }

  setInputValues(userObject) {
    this._inputList.forEach(input => {    
      input.value = userObject[input.name];
    })
  }

  close() {
    super.close();
    this._form.reset();
  }

  open() {
    super.open();
  }

  setupDefaultText() {
    this._submitButton.textContent = this._defaultButtonText;
  }

  setEventListener() {
    super.setEventListener();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitButton.textContent = `Сохранение...`
      this._submitCallbackFunc(this._getInputValues());
    });
  }
}