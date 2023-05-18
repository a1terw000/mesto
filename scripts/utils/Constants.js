export const initialCards = [
  {
    title: 'Dota 2',
    link: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg'
  },
  {
    title: 'Cybersport',
    link: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    title: 'Блуждающий',
    link: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
  },
  {
    title: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const profileEditButtonElement = document.querySelector('.profile').querySelector('.profile__edit-button');
export const profileEditFormElement = document.querySelector('.popup_edit-profile').querySelector('.form');
export const popupProfileSelector = '.popup_edit-profile';

export const profileAddButtonElement = document.querySelector('.profile').querySelector('.profile__add-button');
export const profileAddFormElement = document.querySelector('.popup_cards').querySelector('.form');
export const popupAddCardSelector = '.popup_cards';

export const popupImageSelector = '#popup_image';

export const listSelector = '.cards';

export const templateSelector = '#template';

export const validationCfg = {
  inputSelector: '.form__input',
  submitButtonSelector: '.popup__submit-button',
  spanErrorClass: '.form__error_type_',
  errorClass: 'form__error_visible',
  disabledButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'form__input_type_error'
}

export const initialInfoObject = {
  profileName: '.profile__alias',
  profileInfo: '.profile__caption'
}