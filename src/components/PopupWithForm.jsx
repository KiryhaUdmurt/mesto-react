
export default function PopupWithForm(props) {
  return (
      <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <h2 className="popup__title">{props.title}</h2>
          <form className="popup__form" name={props.name} novalidate>
            {props.children}
            <button className="popup__save-btn" type="submit">
              Сохранить
            </button>
          </form>
          <button
            className="popup__close-btn"
            type="button"
            aria-label="Закрыть"
            onClick={props.onClose}
          ></button>
        </div>
      </div>
  );
}
