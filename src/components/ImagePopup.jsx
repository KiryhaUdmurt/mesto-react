export default function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_image ${props.card ? "popup_opened" : ""}`}
    >
      <figure className="popup__image-container">
        <img
          src={props.card.link}
          alt={props.card.link}
          className="popup__image"
        />
        <figcaption className="popup__figcaption">{props.card.name}</figcaption>
        <button
          className="popup__close-btn"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
      </figure>
    </div>
  );
}
