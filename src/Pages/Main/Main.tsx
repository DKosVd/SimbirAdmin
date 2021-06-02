import s from "./main.module.css";
import { Pencil } from "@styled-icons/boxicons-solid/Pencil";
import Header from "../components/Header/Header";
import Notifications from "../components/Notifications/Notification";
import MainLayout from "../components/Main/MainLayout";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div className={s.main}>
      <div className={s.sidebar}>
        <div className={s.sidebar__logo}>Need for car</div>
        <div className={s.sidebar__elem}>
          <Pencil className={s.sidebar__elem__icon} />
          <span className={s.sidebar__elem__title}>Карточка автомобиля</span>
        </div>
        <div className={s.sidebar__elem}>
          <span className={s.sidebar__elem__title}>Список авто</span>
        </div>
        <div className={s.sidebar__elem}>
          <span className={s.sidebar__elem__title}>Заказы</span>
        </div>
      </div>
      <div className={s.main__content}>
        <Header />
        {/* <Notifications /> */}
        <MainLayout />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
