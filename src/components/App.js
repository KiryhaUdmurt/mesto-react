import React from "react";
import { useEffect, useState } from 'react';
import pageLogo from "../images/logo.svg";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    // document.querySelector('.popup_type_avatar').classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    // document.querySelector('.popup_type_profile').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    // document.querySelector('.popup_type_card').classList.add('popup_opened');
  }

  return (
    <div className="page">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />
      <Footer />
      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen}>
        <input
          className="popup__input popup__input_type_name"
          id="profile-name"
          type="text"
          placeholder="Имя"
          required
          name="name"
          minlength="2"
          maxlength="40"
        />
        <span className="popup__error-message profile-name-error"></span>
        <input
          className="popup__input popup__input_type_status"
          id="profile-job"
          type="text"
          placeholder="О себе"
          required
          name="job"
          minlength="2"
          maxlength="200"
        />
        <span className="popup__error-message profile-job-error"></span>
      </PopupWithForm>
      <PopupWithForm name="card" title="Новое место" isOpen={isAddPlacePopupOpen}>
        <input
          className="popup__input popup__input_type_name"
          id="card-name"
          type="text"
          placeholder="Название"
          required
          name="name"
          minlength="2"
          maxlength="30"
        />
        <span className="popup__error-message card-name-error"></span>
        <input
          className="popup__input popup__input_type_link"
          id="card-url"
          type="url"
          placeholder="Ссылка на картинку"
          required
          name="link"
        />
        <span className="popup__error-message card-url-error"></span>
      </PopupWithForm>
      <PopupWithForm name="delete" title="Вы уверены?" />
      <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen}>
        <input
          className="popup__input popup__input_type_avatar-url"
          id="avatar-url"
          type="url"
          placeholder="Ссылка на картинку"
          required
          name="avatar"
        />
        <span className="popup__error-message avatar-url-error"></span>
      </PopupWithForm>
      <ImagePopup />
      <template className="card-template">
        <li className="elements__item card">
          <img src="#" alt="#" className="card__img" />
          <button
            className="card__delete-btn"
            type="button"
            aria-label="Удаление карточки"
          ></button>
          <div className="card__img-bar">
            <h2 className="card__name"></h2>
            <button
              className="card__like-button"
              type="button"
              aria-label="Нравится"
            ></button>
            <span className="card__like-number">0</span>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
