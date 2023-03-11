let popupElement = document.querySelector('.popup');
let popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
let profileElement = document.querySelector('.profile');
let profileEditButtonELement = profileElement.querySelector('.profile__edit-button');
let profileAliasElement = profileElement.querySelector('.profile__alias');
let profileCaptionElement = profileElement.querySelector('.profile__caption');
let formElement = popupElement.querySelector('.form');
let nameInput = formElement.querySelector('#inputName');
let jobInput = formElement.querySelector('#inputJob');

function openPopup() {
  popupElement.classList.add('popup_opened');
  nameInput.value = profileAliasElement.textContent;
  jobInput.value = profileCaptionElement.textContent;
}

function closePopup() {
  popupElement.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();

    profileAliasElement.textContent = nameInput.value;
    profileCaptionElement.textContent = jobInput.value;

    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);
profileEditButtonELement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
