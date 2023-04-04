export default function Card({ card, onCardClick, onDeleteCard }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <li className="elements__item card">
      <img
        src={card.link}
        alt={card.name}
        className="card__img"
        onClick={handleClick}
      />
      <button
        className="card__delete-btn"
        type="button"
        aria-label="Удаление карточки"
        onClick={onDeleteCard}
      ></button>
      <div className="card__img-bar">
        <h2 className="card__name">{card.name}</h2>
        <button
          className="card__like-button"
          type="button"
          aria-label="Нравится"
        ></button>
        <span className="card__like-number">{card.likes.length}</span>
      </div>
    </li>
  );
}
