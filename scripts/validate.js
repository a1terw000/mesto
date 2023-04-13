const validationCfg = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.popup__submit-button',
  spanErrorClass: '.form__error_type_',
  errorClass: 'form__error_visible',
  disabledButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'form__input_type_error'
};

function enableValidation(cfg) {
  const forms = Array.from(document.querySelectorAll(cfg.formSelector));
  forms.forEach((form) => {
    const inputList = form.querySelectorAll(cfg.inputSelector);
    const button = form.querySelector(cfg.submitButtonSelector);
    
    setEventListener(inputList, button, cfg.disabledButtonClass, cfg.spanErrorClass, cfg.errorClass, cfg.inputErrorClass);
  });
}

function setEventListener(inputList, button, disabledButtonClass, spanErrorClass, errorClass, inputErrorClass) {
  inputList.forEach((input) => {
    input.addEventListener('input', () => {
      checkValidationFunction(input, spanErrorClass, errorClass, inputErrorClass);
      toggleButtonState(inputList, button, disabledButtonClass);
    });
  });
}

function checkValidationFunction(input, spanErrorClass, errorClass, inputErrorClass) {
  const textNoValid = document.querySelector(`${spanErrorClass}${input.name}`);
  if (!input.validity.valid) {
    showInputError(input, textNoValid, spanErrorClass, errorClass, inputErrorClass);
  } else {
    hideInputError(input, textNoValid, spanErrorClass, errorClass, inputErrorClass);
  }
}

function showInputError(input, textNoValid, spanErrorClass, errorClass, inputErrorClass) {
  input.classList.add(inputErrorClass);
  textNoValid.textContent = input.validationMessage;
  textNoValid.classList.add(errorClass);
}

function hideInputError(input, textNoValid, spanErrorClass, errorClass, inputErrorClass) {
  input.classList.remove(inputErrorClass);
  textNoValid.textContent = "";
  textNoValid.classList.remove(errorClass);
}

function toggleButtonState(inputList, button, disabledButtonClass) {
  if (!hasInvalidInput(inputList)) {
    enableButtonSubmit(button, disabledButtonClass);
  } else {
    disableButtonSubmit(button, disabledButtonClass);
  }
}

function hasInvalidInput (inputList) {
  return Array.from(inputList).some((input) => {return !input.validity.valid});
}

function disableButtonSubmit(button, disabledButtonClass) {
  button.classList.add(disabledButtonClass);
  button.setAttribute("disabled", "true");
}

function enableButtonSubmit(button, disabledButtonClass) {
  button.classList.remove(disabledButtonClass);
  button.removeAttribute("disabled", "false");
}

enableValidation(validationCfg);