import s from "./notifications.module.css";

const Notifications = () => {
  return (
    <div className={s.notifications}>
      <div className={`header__wrapper ${s.notifications__body}`}>
        <div className={s.notifications__text}>
          <span className={s.notifications__txt}>
            &#10004; &nbsp; Успех! Машина сохранена.
          </span>
        </div>
        <div className={s.notifications__cancel}>&#10006;</div>
      </div>
    </div>
  );
};

export default Notifications;
