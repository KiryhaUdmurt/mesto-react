export default function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_type_image ${card ? "popup_opened" : ""}`}
    >
      <figure className="popup__image-container">
        <img
          src={card ? card.link : null}
          alt={card ? card.name : null}
          className="popup__image"
        />
        <figcaption className="popup__figcaption">{card ? card.name : null}</figcaption>
        <button
          className="popup__close-btn"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
      </figure>
    </div>
  );
}
