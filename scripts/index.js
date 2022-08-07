import {
  initialCards
} from './utils.js';
import {
  editBtn,
  closeBtn,
  profileEditBlock,
  profileBanner,
  formElem,
  username,
  userjob,
  userphoto,
  nameInput,
  jobInput,
  fotoInput,
  picContainer,
  picTemplate,
  objConfig,
  photoDescriptInput,
  photoLinkInput,
  photoNameInput
} from './constans.js';
import { FormValidator } from './FormValidator.js';

const profileFormValidation = new FormValidator(objConfig, '.modal__form_place_regform');
const addImageFormValidation = new FormValidator(objConfig, '.modal__form_place_modalpic');
addImageFormValidation.enableValidation();
profileFormValidation.enableValidation();


function visibleBlock(div) {
  div.classList.add('container_visibility');
}
function hideBlock(div) {
  div.classList.remove('container_visibility');
}

function visibleProfileBlock() {
  nameInput.value = username.textContent;
  jobInput.value = userjob.textContent;
  fotoInput.value = '';
  visibleBlock(profileEditBlock);
  profileFormValidation.resetValidation();
}

function submitFormHandler(evt) {
  evt.preventDefault();

  username.textContent = nameInput.value;
  userphoto.src = fotoInput.value;
  userjob.textContent = jobInput.value;
  hideBlock(profileEditBlock);
  hideBlock(profileBanner);
}

document.querySelectorAll('a[href^="#"]').forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


function addCard(item) {
  picContainer.prepend(item);
}
function createCard(item) {
  const picElement = picTemplate.cloneNode(true);
  const image = picElement.querySelector('.element__image');
  picElement.querySelector('.element__name').textContent = item.name;
  picElement.querySelector('.element__description').textContent = item.note;
  image.src = item.link;
  image.alt = item.name;

  document.querySelector('.element__name__type_big-size').textContent = item.name;
  document.querySelector('.element__description_type_big-size').textContent = item.note;
  document.querySelector('.element__image_type_big-size').src = item.link;
  document.querySelector('.element__image_type_big-size').alt = item.name;

  image.addEventListener('click', () => { //открытие модального окна у картинки
    document.querySelector('.element__name__type_big-size').textContent = item.name;
    document.querySelector('.element__description_type_big-size').textContent = item.note;
    document.querySelector('.element__image_type_big-size').src = item.link;
    document.querySelector('.element__image_type_big-size').alt = item.name;

  })

  return picElement;
}
function renderCards(array) { //отбираем элементы из массива
  array.forEach((item) =>
    addCard(createCard(item)));
}
renderCards(initialCards);

const addPhotoBtn = document.querySelector('.gallery__add-button');
const addPhotoPopup = document.querySelector('.modalpic');
function openPopup(popup) {
  popup.classList.add('modal_active');
  document.body.classList.add('page-js');
}
function closePopup(popup) {
  popup.classList.remove('modal_active');
  document.body.classList.remove('page-js');

}

function submitFormNewCard(evt) {
  evt.preventDefault();
  const picElement = {
    name: document.querySelector('.modal__field_type_card-name').value,
    link: document.querySelector('.modal__field_type_card-link').value,
    note: document.querySelector('.modal__field_type_card-description').value
  }
  addCard(createCard(picElement));
  closePopup(addPhotoPopup);
}

function openAddImagePopup() {
  openPopup(addPhotoPopup);
  addImageFormValidation.resetValidation();
  photoDescriptInput.value = '';
  photoLinkInput.value = '';
  photoNameInput.value = '';
}

document.querySelector('.modal__form_place_modalpic').addEventListener('submit', submitFormNewCard);
addPhotoBtn.addEventListener('click', openAddImagePopup);
document.querySelector('.modal__close-icon_place_modalpic').addEventListener('click', () => closePopup(addPhotoPopup));
editBtn.addEventListener('click', () => visibleProfileBlock());
editBtn.addEventListener('click', () => visibleBlock(profileBanner));

closeBtn.addEventListener('click', () => hideBlock(profileEditBlock));
closeBtn.addEventListener('click', () => hideBlock(profileBanner));
formElem.addEventListener('submit', submitFormHandler);