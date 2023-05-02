import { initialCards } from './initialCards.js';
import Card from './card.js';
import FormValidator from './FormValidator.js';

const popupItems = document.querySelectorAll('.popup');
const popupEditProfile = document.querySelector('#popup_edit-profile');
const popupAddCard = document.querySelector('#popup_cards');
const popupImage = document.querySelector('#popup_image');
const figureImage = popupImage.querySelector('.figure__image');
const figureCaption = popupImage.querySelector('.figure__caption');
const popupEditCloseButtonElement = popupEditProfile.querySelector('.popup__close-button');
const popupAddCardButtonElement = popupAddCard.querySelector('.popup__close-button');
const popupImageCloseButton = popupImage.querySelector('.popup__close-button');
const profileElement = document.querySelector('.profile');
const profileEditButtonElement = profileElement.querySelector('.profile__edit-button');
const profileAddButtonElement = profileElement.querySelector('.profile__add-button');
const profileAliasElement = profileElement.querySelector('.profile__alias');
const profileCaptionElement = profileElement.querySelector('.profile__caption');

const profileAddFormElement = popupAddCard.querySelector('.form');
const buttonSubmitAddForm =  profileAddFormElement.querySelector('.popup__submit-button');
const inputListInAddForm = profileAddFormElement.querySelectorAll('.form__input');
const inputTitle = popupAddCard.querySelector('#title');
const inputUrl = popupAddCard.querySelector('#url');
const profileEditFormElement = popupEditProfile.querySelector('.form');
const inputName = profileEditFormElement.querySelector('#name');
const inputJob = profileEditFormElement.querySelector('#job');

const templateElement = '#template';
const list = document.querySelector('.cards');

const validationCfg = {
  inputSelector: '.form__input',
  submitButtonSelector: '.popup__submit-button',
  spanErrorClass: '.form__error_type_',
  errorClass: 'form__error_visible',
  disabledButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'form__input_type_error'
};

/* функция открытия для любого попапа */
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupWhenClickOnEscape);
}

/* функция открытия попапа с картинкой */
function openImagePopup(cardData) {
  figureImage.src = cardData.link;
  figureImage.alt = cardData.name;
  figureCaption.textContent = cardData.name;
  openPopup(popupImage);
}

/* функция закрытия для любого попапа */
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupWhenClickOnEscape);
}

/* функция для закрытия попапа при нажатии кнопки Escape */
function closePopupWhenClickOnEscape(evt) {
  if (evt.key === 'Escape') {
    const popupOpen = document.querySelector('.popup_opened');
    closePopup(popupOpen);
  }
}

/* функция для закрытия попапа при клике на оверлей */
function closePopupWhenClickOnOverlay(evt) {
  if (evt.currentTarget === evt.target) {
    closePopup(evt.currentTarget);
  }
}

/* добавление функции закрытия для каждого попапа кликом на оверлей */
popupItems.forEach((item) => item.addEventListener('click', closePopupWhenClickOnOverlay))

/* добавление функции закрытия попапа для всех кнопок с нужным классом */
document.querySelectorAll('.popup__close-button').forEach(button => {
  const buttonsPopup = button.closest('.popup'); // нашли родителя с нужным классом
  button.addEventListener('click', () => closePopup(buttonsPopup)); // закрыли попап
}); 

/* закрытие попапа при сохранении формы */
function handleFormSubmit(evt) {
  evt.preventDefault();

  profileAliasElement.textContent = inputName.value;
  profileCaptionElement.textContent = inputJob.value;

  closePopup(popupEditProfile);
}

/* загрузка на страницу первоначальных карточек */
initialCards.forEach((element) => {
  const newCard = new Card(element, templateElement, openImagePopup);
  list.append(newCard.createCard());
});

/* работа submit формы при добавлении карточки */
profileAddFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const userObject = { name: inputTitle.value, link: inputUrl.value };
  const card = new Card (userObject, templateElement, openImagePopup);
  list.prepend(card.createCard());
  closePopup(popupAddCard);
  evt.target.reset();
});

/* открытие попапа для редактирования данных */
profileEditButtonElement.addEventListener('click', () => {
  enableEditFormValidation.deleteTextSpanWhenOpenForm();
  inputName.value = profileAliasElement.textContent;
  inputJob.value = profileCaptionElement.textContent;
  openPopup(popupEditProfile);
});

/* работа кнопки открытия попапа с добавлением карточки */
profileAddButtonElement.addEventListener('click', () => {
  profileAddFormElement.reset();
  enableAddFormValidation.deleteTextSpanWhenOpenForm();
  openPopup(popupAddCard);
  // enableAddFormValidation._toggleButtonState();
  // toggleButtonState(inputListInAddForm, buttonSubmitAddForm, validationCfg.disabledButtonClass);
});

/* работа submit формы при сохранении введенных данных в попапе редактирования */
profileEditFormElement.addEventListener('submit', handleFormSubmit);

/* работа валидации для формы Edit попапа */
const enableEditFormValidation = new FormValidator(validationCfg, profileEditFormElement);
enableEditFormValidation.enableValidation();

/* работа валидации для формы Add попапа */
const enableAddFormValidation = new FormValidator(validationCfg, profileAddFormElement);
enableAddFormValidation.enableValidation();
