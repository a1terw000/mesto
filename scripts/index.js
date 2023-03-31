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
const inputTitle = popupAddCard.querySelector('#inputTitle');
const inputUrl = popupAddCard.querySelector('#inputUrl');
const profileEditFormElement = popupEditProfile.querySelector('.form');
const inputName = profileEditFormElement.querySelector('#inputName');
const inputJob = profileEditFormElement.querySelector('#inputJob');

const templateElement = document.querySelector('#template').content;
const list = document.querySelector('.cards');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileAliasElement.textContent = inputName.value;
  profileCaptionElement.textContent = inputJob.value;

  closePopup(popupEditProfile);
}

function addCard(object) {
  const card = templateElement.cloneNode(true);
  const cardImageElement = card.querySelector('.card__image');
  const likeButton = card.querySelector('.card__like-button');
  const trashButton = card.querySelector('.card__trash');

  cardImageElement.alt = object.name;
  cardImageElement.src = object.link;
  card.querySelector('.card__alies').textContent = object.name;
  
  likeButton.addEventListener('click', () => likeButton.classList.toggle('card__like-button_active'));
  
  trashButton.addEventListener('click', () => trashButton.closest('.card').remove());
  
  cardImageElement.addEventListener('click', () => {
    figureImage.src = object.link;
    figureImage.alt = object.name;
    figureCaption.textContent = object.name;
    openPopup(popupImage);
  })

  return card
};

initialCards.forEach((element) => {
  const newCard = addCard(element);
  list.append(newCard);
});

profileAddFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const userObject = { name: inputTitle.value, link: inputUrl.value };
  evt.target.reset();

  list.prepend(addCard(userObject));
  closePopup(popupAddCard);
});


profileEditButtonElement.addEventListener('click', () => {
  openPopup(popupEditProfile);
  inputName.value = profileAliasElement.textContent;
  inputJob.value = profileCaptionElement.textContent;
});
popupEditCloseButtonElement.addEventListener('click', function () { closePopup(popupEditProfile)});
profileEditFormElement.addEventListener('submit', handleFormSubmit);
profileAddButtonElement.addEventListener('click', () => openPopup(popupAddCard));
popupAddCardButtonElement.addEventListener('click', () => closePopup(popupAddCard));
popupImageCloseButton.addEventListener('click', () => closePopup(popupImage));