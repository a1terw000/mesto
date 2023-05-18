export default class FormValidator {
  constructor(cfg, form) {
    this._form = form;
    this._inputSelector = cfg.inputSelector;
    this._submitButtonSelector = cfg.submitButtonSelector;
    this._spanErrorClass = cfg.spanErrorClass;
    this._errorClass = cfg.errorClass;
    this._disabledButtonClass = cfg.disabledButtonClass;
    this._inputErrorClass = cfg.inputErrorClass;
    this._inputList = this._form.querySelectorAll(this._inputSelector);
    this._button = this._form.querySelector(this._submitButtonSelector);
  }

  _showInputError(input, textNoValid) {
    input.classList.add(this._inputErrorClass);
    textNoValid.textContent = input.validationMessage;
    textNoValid.classList.add(this._errorClass);
  }

  _hideInputError(input, textNoValid) {
    input.classList.remove(this._inputErrorClass);
    textNoValid.textContent = "";
    textNoValid.classList.remove(this._errorClass);
  }

  _checkValidation(input) {
    const textNoValid = document.querySelector(`${this._spanErrorClass}${input.id}`);
    if (!input.validity.valid) {
      this._showInputError(input, textNoValid);
    } else {
      this._hideInputError(input, textNoValid);
    }
  }

  _enableButtonSubmit() {
    this._button.classList.remove(this._disabledButtonClass);
    this._button.removeAttribute("disabled", "true");
  }

  _disabledButtonSubmit() {
    this._button.classList.add(this._disabledButtonClass);
    this._button.setAttribute("disabled", "false");
  }

  _hasInvalidInput () {
    return Array.from(this._inputList).some((input) => { return !input.validity.valid });
  }

  _toggleButtonState() {
    if (!this._hasInvalidInput()) {
          this._enableButtonSubmit();
        } else {
          this._disabledButtonSubmit();
        }
  }

  _setEventListener() {
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkValidation(input);
        this._toggleButtonState();
      });
    })
  }

  deleteTextSpanWhenOpenForm() {
    this._inputList.forEach((input) => {
      const textNoValid = this._form.querySelector(`${this._spanErrorClass}${input.id}`)
      if (!input.validity.valid) {
        this._hideInputError(input, textNoValid);
      }
    });
    this._disabledButtonSubmit();
  }
  
  enableValidation() {
    this._setEventListener();
  }
}