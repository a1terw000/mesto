import './index.css';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import {
  initialCards,
  profileEditButtonElement,
  profileEditFormElement,
  popupProfileSelector,
  profileAddButtonElement,
  profileAddFormElement,
  popupAddCardSelector,
  popupImageSelector,
  listSelector,
  templateSelector,
  validationCfg,
  initialInfoObject
} from '../scripts/utils/Constants.js';

const userInfo = new UserInfo(initialInfoObject);

// попап с картинкой
const popupImage = new PopupWithImage(popupImageSelector);

// работа создания секции с начальными карточками, а также функция колбэк которая имеет слабую связь
const section = new Section({
  items: initialCards,
  renderer: (item) => {
    const newCard = new Card(item, templateSelector, popupImage.open);
    const cardElement = newCard.createCard();
    return cardElement
  }
}, listSelector)

section.renderItems();

const popupProfile = new PopupWithForm(popupProfileSelector, (userData) => {
  userInfo.setUserInfo(userData);
})

const popupAddCard = new PopupWithForm(popupAddCardSelector, (userData) => {
  section.addItem(userData);
})

// работа кнопки открытия попапа с редактированием данных пользователя
profileEditButtonElement.addEventListener('click', () => {
  popupProfile.open();
  enableEditFormValidation.deleteTextSpanWhenOpenForm();
  popupProfile.setInputValues(userInfo.getUserInfo());
});

// работа кнопки открытия попапа с добавлением карточки
profileAddButtonElement.addEventListener('click', () => {
  enableAddFormValidation.deleteTextSpanWhenOpenForm();
  enableAddFormValidation._toggleButtonState();
  popupAddCard.open();
});

// работа валидации для формы Edit попапа
const enableEditFormValidation = new FormValidator(validationCfg, profileEditFormElement);
enableEditFormValidation.enableValidation();

// работа валидации для формы Add попапа
const enableAddFormValidation = new FormValidator(validationCfg, profileAddFormElement);
enableAddFormValidation.enableValidation();

popupProfile.setEventListener();
popupAddCard.setEventListener();
popupImage.setEventListener();