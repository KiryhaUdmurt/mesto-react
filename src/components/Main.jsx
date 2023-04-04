import React from "react";
import defaultAvatar from "../images/profile-img.jpg";
import { api } from "../utils/Api";
import Card from "./Card";

export default function Main(props) {
  const [userName, setUserName] = React.useState("Жак-Ив Кусто");
  const [userDescription, setUserDescription] = React.useState("Исследователь");
  const [userAvatar, setUserAvatar] = React.useState(defaultAvatar);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInformation()
      .then((info) => {
        setUserName(info.name);
        setUserDescription(info.about);
        setUserAvatar(info.avatar);
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__flex-container">
          <div className="profile__avatar-container">
            <button
              className="profile__avatar-edit-btn"
              onClick={props.onEditAvatar}
            ></button>
            <img
              className="profile__img"
              src={userAvatar}
              alt="Аватар профиля"
            />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактирование профиля"
              onClick={props.onEditProfile}
            ></button>
            <p className="profile__status">{userDescription}</p>
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
        <ul className="elements__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onDeleteCard={props.onDeleteCard}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
