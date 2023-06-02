import './index.css';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupDeleteCard from '../scripts/components/PopupDeleteCard.js';
import Api from '../scripts/components/Api.js'
import {
  profileEditButtonElement,
  popupProfileSelector,
  profileAddButtonElement,
  popupAddCardSelector,
  popupImageSelector,
  listSelector,
  templateSelector,
  validationCfg,
  initialInfoObject,
  popupAvatarSelector,
  popupDeleteCardSelector
} from '../scripts/utils/Constants.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '393bdb26-0a49-44b5-92b2-a59ca9dd3b0e',
    'Content-Type': 'application/json'
  }
}); 

const userInfo = new UserInfo(initialInfoObject);
// попап с картинкой
const popupImage = new PopupWithImage(popupImageSelector);

const popupDelete = new PopupDeleteCard(popupDeleteCardSelector, ({item, cardId}) => {
  api.deleteCard(cardId)
    .then(() => {
      item.removeCard()
      popupDelete.close()
    })
    .catch((error) => console.error(`Ошибка при удалении карточки: ${error}`))
    .finally()  
})

function createNewCards(item) {
  const newCard = new Card(item, templateSelector, popupImage.open, popupDelete.open, (likeElement, cardId) => {
    if (likeElement.classList.contains('card__like-button_active')) {
      api.deleteLike(cardId)
        .then(res => {
          newCard.toggleLike(res.likes)
        })
        .catch((error) => console.error(`Ошибка лайка: ${error}`))
    } else {
      api.setLike(cardId)
        .then(res => {
          newCard.toggleLike(res.likes)
        })
        .catch((error) => console.error(`Ошибка лайка: ${error}`))
    }
  });
  return newCard.createCard()
}

// работа создания секции с начальными карточками, а также функция колбэк которая имеет слабую связь
const section = new Section((item) => {
    section.addItemAppend(createNewCards(item));
  }, listSelector)

const popupProfile = new PopupWithForm(popupProfileSelector, (userData) => {
  api.setUserInfo(userData)
    .then(res => {
      userInfo.setUserInfo({name: res.name, info: res.about, avatar: res.avatar})
      popupProfile.close()
    })
    .catch((error) => console.error(`Ошибка обновления данных профиля: ${error}`))
    .finally(() => popupEditAvatar.setupDefaultText())
})  

const popupAddCard = new PopupWithForm(popupAddCardSelector, (userData) => {
  Promise.all([api.getUserInfo(), api.addCard(userData)])
    .then(([userData, cardData]) => {
      cardData.myId = userData._id;
      section.addItemPrepend(createNewCards(cardData));
      popupAddCard.close();
    })
    .catch((error) => console.error(`Ошибка создания новой карточки: ${error}`))
    .finally(() => popupEditAvatar.setupDefaultText())
})

const popupEditAvatar = new PopupWithForm(popupAvatarSelector, (userData) => {
  api.setAvatar(userData)
    .then(res => {
      userInfo.setUserInfo({name: res.name, info: res.about, avatar: res.avatar})
      popupEditAvatar.close()
    })
    .catch((error) => console.error(`Ошибка при обновлении аватарки: ${error}`))
    .finally(() => popupEditAvatar.setupDefaultText())
})

const forms = {};
Array.from(document.forms).forEach((item) => {
  const form = new FormValidator(validationCfg, item);
  const name = item.getAttribute('name');
  forms[name] = form;
  form.enableValidation();
})

// работа кнопки открытия попапа с редактированием данных пользователя
profileEditButtonElement.addEventListener('click', () => {
  popupProfile.open();
  forms.editForm.deleteTextSpanWhenOpenForm();
  popupProfile.setInputValues(userInfo.getUserInfo());
});

// работа кнопки открытия попапа с добавлением карточки
profileAddButtonElement.addEventListener('click', () => {
  forms.addCardForm.deleteTextSpanWhenOpenForm();
  forms.addCardForm._toggleButtonState();
  popupAddCard.open();
});

document.querySelector('.profile__button-avatar').addEventListener('click', () => {
  forms.avatarForm.deleteTextSpanWhenOpenForm();
  popupEditAvatar.open();
})

popupDelete.setEventListener();
popupEditAvatar.setEventListener();
popupProfile.setEventListener();
popupAddCard.setEventListener();
popupImage.setEventListener();

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardData]) => {
    cardData.forEach(element => element.myId = userData._id)
    userInfo.setUserInfo({name: userData.name, info: userData.about, avatar: userData.avatar})
    section.renderItems(cardData);  
  })
  .catch((error) => console.error(`Ошибка загрузки начальных данных: ${error}`))
  .finally()