import { Notifications } from "@styled-icons/ionicons-sharp/Notifications";
import s from "./header.module.css";
import { Search } from "@styled-icons/boxicons-solid/Search";

const Header = () => {
  return (
    <header className={s.content__header}>
      <div className="header__wrapper">
        <div className={s.header__search}>
          <div className={s.content__header__search}>
            <div className={s.content__header__search__icon}>
              <Search width={"14px"} height={"14px"} />
            </div>
            <input
              type="text"
              placeholder="Поиск..."
              defaultValue=""
              className={s.content__header__search__input}
            />
          </div>
        </div>
        <div className={s.header__manage}>
          <div className={s.content__header__notifications}>
            <span>
              <Notifications height={"18px"} width={"18px"} />
            </span>
            <div className={s.header__notification__quantity}>3</div>
          </div>
          <div className={s.content__header__user}>
            <div className={s.content__header__avatar}></div>
            <span className={s.content__header__name}>Admin</span>
          </div>
          <div className={s.content__header__menu}>
            <span className={s.content__header__menu__dropdown}></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
