const popupElement = document.querySelector('.popup');
const popupEditProfile = document.querySelector('#popup_edit-profile');
const popupAddCard = document.querySelector('#popup_cards');
const popupImage = document.querySelector('#popup_image');
const figureImage = popupImage.querySelector('.figure__image');
const figureCaption = popupImage.querySelector('.figure__caption');
const editPopupCloseButtonElement = popupEditProfile.querySelector('.popup__close-button');
const addCardPopupCloseButtonElement = popupAddCard.querySelector('.popup__close-button');
const popupImageCloseButton = popupImage.querySelector('.popup__close-button');
const closeButtonElement = document.querySelector('.popup__close-button');

const profileElement = document.querySelector('.profile');
const profileEditButtonElement = profileElement.querySelector('.profile__edit-button');
const profileAddButtonElement = profileElement.querySelector('.profile__add-button');
const profileAliasElement = profileElement.querySelector('.profile__alias');
const profileCaptionElement = profileElement.querySelector('.profile__caption');

const profileAddFormElement = popupAddCard.querySelector('.form');
const inputTitle = popupAddCard.querySelector('#inputTitle');
const inputUrl = popupAddCard.querySelector('#inputUrl');
const profileEditFormElement = popupEditProfile.querySelector('.form');
const nameInput = profileEditFormElement.querySelector('#inputName');
const jobInput = profileEditFormElement.querySelector('#inputJob');

const templateElement = document.querySelector('#template').content;
const list = document.querySelector('.cards');
const initialCards = [
  {
    name: 'Dota 2',
    link: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg'
  },
  {
    name: 'Cybersport',
    link: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Блуждающий',
    link: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function openPopup(popup) {
  popup.classList.add('popup_opened');
  nameInput.value = profileAliasElement.textContent;
  jobInput.value = profileCaptionElement.textContent;
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileAliasElement.textContent = nameInput.value;
  profileCaptionElement.textContent = jobInput.value;

  closePopup(popupEditProfile);
}

function addCard(initialCards) {
  const card = templateElement.cloneNode(true);
  const cardImageElement = card.querySelector('.card__image');
  const likeButton = card.querySelector('.card__like-button');
  const trashButton = card.querySelector('.card__trash');

  cardImageElement.alt = initialCards.name;
  cardImageElement.src = initialCards.link;
  card.querySelector('.card__alies').textContent = initialCards.name;
  
  likeButton.addEventListener('click', () => likeButton.classList.toggle('card__like-button_active'));
  
  trashButton.addEventListener('click', () => trashButton.closest('.card').remove());
  
  cardImageElement.addEventListener('click', () => {
    figureImage.src = initialCards.link;
    figureImage.alt = initialCards.name;
    figureCaption.textContent = initialCards.name;
    openPopup(popupImage);
  })

  return card
}

initialCards.forEach((element) => {
  const newCard = addCard(element);
  list.append(newCard);
});

profileAddFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const userMassive = [
    {
      name: inputTitle.value,
      link: inputUrl.value
    }
  ];

  evt.target.reset();
  userMassive.forEach((element) => {const item = addCard(element); list.prepend(item);});
  closePopup(popupAddCard);
});


profileEditButtonElement.addEventListener('click', () => openPopup(popupEditProfile));
editPopupCloseButtonElement.addEventListener('click', function () { closePopup(popupEditProfile)});
profileEditFormElement.addEventListener('submit', handleFormSubmit);
profileAddButtonElement.addEventListener('click', () => openPopup(popupAddCard));
addCardPopupCloseButtonElement.addEventListener('click', () => closePopup(popupAddCard));
popupImageCloseButton.addEventListener('click', () => closePopup(popupImage));