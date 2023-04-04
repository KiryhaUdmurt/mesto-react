import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(false);

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsDeletePopupOpen(false);
    setSelectedCard(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleDeleteCardClick() {
    setIsDeletePopupOpen(true);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onDeleteCard={handleDeleteCardClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <input
          className="popup__input popup__input_type_name"
          id="profile-name"
          type="text"
          placeholder="Имя"
          required
          name="name"
          minLength="2"
          maxLength="40"
        />
        <span className="popup__error-message profile-name-error"></span>
        <input
          className="popup__input popup__input_type_status"
          id="profile-job"
          type="text"
          placeholder="О себе"
          required
          name="job"
          minLength="2"
          maxLength="200"
        />
        <span className="popup__error-message profile-job-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Создать"
      >
        <input
          className="popup__input popup__input_type_name"
          id="card-name"
          type="text"
          placeholder="Название"
          required
          name="name"
          minLength="2"
          maxLength="30"
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
      <PopupWithForm
        name="delete"
        title="Вы уверены?"
        isOpen={isDeletePopupOpen}
        onClose={closeAllPopups}
        buttonText="Да"
      />
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
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
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
