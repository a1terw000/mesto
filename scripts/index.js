let popupElement = document.querySelector('.popup');
let popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
let profileElement = document.querySelector('.profile');
let profileEditButtonELement = profileElement.querySelector('.profile__edit-button');
let formElement = popupElement.querySelector('.popup__form');
let nameInput = popupElement.querySelector('.form__input-label_text');
let jobInput = popupElement.querySelector('.form__input-label_caption');
let profileAliasElement = profileElement.querySelector('.profile__alias');
let profileCaptionElement = profileElement.querySelector('.profile__caption');

function handleFormSubmit(evt) {
  evt.preventDefault();

    profileAliasElement.textContent = nameInput.value;
    profileCaptionElement.textContent = jobInput.value;

    closePopup();
  }

formElement.addEventListener('submit', handleFormSubmit);

function openPopup() {
  popupElement.classList.add('popup_is-opened');
  nameInput.value = profileAliasElement.textContent;
  jobInput.value = profileCaptionElement.textContent;
}

function closePopup() {
  popupElement.classList.remove('popup_is-opened');
}

profileEditButtonELement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);