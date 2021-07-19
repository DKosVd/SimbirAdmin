import s from "./main.module.css";
import { Pencil } from "@styled-icons/boxicons-solid/Pencil";
import Header from "../components/Header/Header";
import Notifications from "../components/Notifications/Notification";
import MainLayout from "../components/Main/MainLayout";
import Footer from "../components/Footer/Footer";
import Car from "./components/Car/Car";
import { Link, Route, Switch } from "react-router-dom";
import Entity from "./components/Entity/Entity";
import Cars from "./components/Cars/Cars";
import Orders from "./components/Orders/Orders";

const Main = () => {
  return (
    <div className={s.main}>
      <div className={s.sidebar}>
        <Link to={"/admin"}>
          <div className={s.sidebar__logo}>
            <div className={s.sidebar__logo__img}></div>
            <span className={s.sidebar__logo__text}>Need for car</span>
          </div>
        </Link>
        <div className={s.sidebar__elem}>
          <Pencil className={s.sidebar__elem__icon} />
          <span className={s.sidebar__elem__title}>Карточка автомобиля</span>
        </div>
        <Link to={"/admin/cars"}>
          <div className={s.sidebar__elem}>
            <span className={s.sidebar__elem__title}>Список авто</span>
          </div>
        </Link>
        <Link to={"/admin/orders"}>
          <div className={s.sidebar__elem}>
            <span className={s.sidebar__elem__title}>Заказы</span>
          </div>
        </Link>
      </div>
      <div className={s.main__content}>
        <Header />
        {/* <Notifications /> */}
        <Switch>
          <Route exact path="/admin">
            <MainLayout text={"Карточка автомобиля"}>
              <Car />
            </MainLayout>
          </Route>
          <Route path="/admin/cars">
            <MainLayout text={"Автомобили"}>
              <Entity>
                <Cars />
              </Entity>
            </MainLayout>
          </Route>
          <Route path="/admin/orders">
            <MainLayout text={"Заказы"}>
              <Entity withLine={true}>
                <Orders />
              </Entity>
            </MainLayout>
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
