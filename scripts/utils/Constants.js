export const initialCards = [
  {
    title: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    title: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'まかなた',
    link: 'https://sun9-60.userapi.com/impg/Msu8Rb4kyjjxa62p7sUMtxoaqM-ZJe2sOzk47g/L0PmIDu00i0.jpg?size=750x750&quality=95&sign=d7f8fb80f959818f92bae01351207fa6&type=album'
  },
  {
    title: 'マハたらたはた',
    link: 'https://i.pinimg.com/originals/29/b3/b5/29b3b5a4faba282f53d3e6f0f459796f.jpg'
  },
  {
    title: '山佐',
    link: 'https://sun9-78.userapi.com/impg/CuQALtrawoWL6cnNlPTMdBY_AUTic3_slQ7X-Q/oehjnsqmSp4.jpg?size=736x552&quality=96&sign=c6842832f55406977d85372077598c0e&type=album'
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