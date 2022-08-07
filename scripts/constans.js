const editBtn = document.querySelector('.profile__edit-button');
const closeBtn = document.querySelector('.modal__close-icon');
const profileEditBlock = document.querySelector('.modal__container');
const profileBanner = document.querySelector('.profile__banner');

const formElem = document.querySelector('.modal__form_place_regform');
const username = document.querySelector('.profile__name');
const userjob = document.querySelector('.profile__occupation');
const userphoto = document.querySelector('.profile__foto');
const nameInput = document.querySelector('.modal__field_type_name');
const jobInput = document.querySelector('.modal__field_type_occupation');
const fotoInput = document.querySelector('.modal__field_type_avatar');
const picContainer = document.querySelector('.element_litle-size');
const picTemplate = document.querySelector('#element').content;
const photoNameInput = document.querySelector('.modal__field_type_card-name');
const photoLinkInput = document.querySelector('.modal__field_type_card-link');
const photoDescriptInput = document.querySelector('.modal__field_type_card-description');

export {
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
    photoDescriptInput,
    photoLinkInput,
    photoNameInput
};
export const objConfig = {
    formSelector: '.modal__form',
    inputSelector: '.modal__field',
    submitButtonSelector: '.modal__button',
    inactiveButtonClass: 'modal__button_disabled',
    inputErrorClass: 'modal__field_type_error',
    errorClass: 'modal__error_visible'
}