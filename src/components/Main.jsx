import React from "react";
import defaultAvatar from '../images/profile-img.jpg'
import App from "./App";

export default function Main(props) {

  
    
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__flex-container">
          <div className="profile__avatar-container">
            <button className="profile__avatar-edit-btn" onClick={props.onEditAvatar}></button>
            <img
              className="profile__img"
              src={defaultAvatar}
              alt="Аватар профиля"
            />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактирование профиля"
              onClick={props.onEditProfile}
            ></button>
            <p className="profile__status">Исследователь океана</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавление карточки"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list"></ul>
      </section>
    </main>
  );
}
