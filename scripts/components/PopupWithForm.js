import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallbackFunc) {
    super(popupSelector);
    this._submitCallbackFunc = submitCallbackFunc;
    this._form = this._popup.querySelector('.form');
    this._inputList = this._form.querySelectorAll('.form__input');
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

  setEventListener() {
    super.setEventListener();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitCallbackFunc(this._getInputValues());
      this.close(); 
    });
  }
}