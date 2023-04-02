export default function ImagePopup(props) {
  return (
    <div className="popup popup_type_image">
      <figure className="popup__image-container">
        <img src="#" alt="#" className="popup__image" />
        <figcaption className="popup__figcaption"></figcaption>
        <button
          className="popup__close-btn"
          type="button"
          aria-label="Закрыть"
        ></button>
      </figure>
    </div>
  );
}
