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

const templateElement = document.querySelector('#template').content;
const list = document.querySelector('.cards');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupWhenClickOnEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupWhenClickOnEscape);
}

function closePopupWhenClickOnEscape(evt) {
  if (evt.key === 'Escape') {
    const popupOpen = document.querySelector('.popup_opened');
    closePopup(popupOpen);
  }
}

function closePopupWhenClickOnOverlay(evt) {
  if (evt.currentTarget === evt.target) {
    closePopup(evt.currentTarget);
  }
}

popupItems.forEach((item) => item.addEventListener('click', closePopupWhenClickOnOverlay))

document.querySelectorAll('.popup__close-button').forEach(button => {
  const buttonsPopup = button.closest('.popup'); // нашли родителя с нужным классом
  button.addEventListener('click', () => closePopup(buttonsPopup)); // закрыли попап
}); 

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


function deleteTextSpanWhenOpenForm(form) {
  form.querySelectorAll(validationCfg.inputSelector).forEach((input) => {
    const spanTextNoValid = document.querySelector(`${validationCfg.spanErrorClass}${input.id}`)
    if (!input.validity.valid) {
      hideInputError(input, spanTextNoValid, validationCfg.spanErrorClass, validationCfg.errorClass, validationCfg.inputErrorClass);
    }
  });
}

profileAddFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const userObject = { name: inputTitle.value, link: inputUrl.value };
  evt.target.reset();

  list.prepend(addCard(userObject));
  closePopup(popupAddCard);
});

profileEditButtonElement.addEventListener('click', () => {
  deleteTextSpanWhenOpenForm(profileEditFormElement);
  inputName.value = profileAliasElement.textContent;
  inputJob.value = profileCaptionElement.textContent;
  openPopup(popupEditProfile);
});

profileAddButtonElement.addEventListener('click', () => {
  profileAddFormElement.reset();
  deleteTextSpanWhenOpenForm(profileAddFormElement);
  openPopup(popupAddCard);
  toggleButtonState(inputListInAddForm, buttonSubmitAddForm, validationCfg.disabledButtonClass);
});

profileEditFormElement.addEventListener('submit', handleFormSubmit);

