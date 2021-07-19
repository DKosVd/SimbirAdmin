import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { FetchOrderAction } from "../../../../store/actions/order/order";
import { RootState } from "../../../../store/store";
import { IResponseOrder } from "../../../../store/types/response";
import { isBase64 } from "../../../../utils/isBase64";
import { prepareDate } from "../../../../utils/prepareDate";
import { preparePrice } from "../../../../utils/preparePrice";
import { Pagination } from "../../../components/Pagination/Pagination";
import Preloader from "../../../components/Preloader/Preloader";
import s from "./order.module.css";

const Orders = () => {
  const dispatch = useDispatch();
  const order = useSelector((state: RootState) => state.order.order);
  const [activePage, setActivePage] = useState<number>(0);
  useEffect(() => {
    dispatch(
      FetchOrderAction({
        page: activePage,
        offset: activePage * 10,
        limit: 10,
      })
    );
  }, [activePage]);

  const handleChangePage = ({ selected }: { selected: number }) => {
    setActivePage(selected);
  };

  if (!order?.data) {
    return <Preloader />;
  }
  return (
    <>
      <div className={s.orders}>
        <ul>
          {order.data.map((el, idx) => {
            return (
              <li className={s.orders__elem} key={idx}>
                <div className={s.orders__elem__main}>
                  <img
                    className={s.orders__elem__main__img}
                    width={"138px"}
                    height={"64px"}
                    src={`${
                      el.carId?.thumbnail.path
                        ? isBase64(el?.carId?.thumbnail?.path)
                        : ""
                    }`}
                  />

                  <div className={s.orders__elem__info}>
                    <span className={s.orders__elem__info__name}>
                      <b>{el?.carId?.name}</b> в <b>{el.cityId?.name}</b>,{" "}
                      {el.pointId?.address}
                    </span>
                    <span className={s.orders__elem__info__name}>
                      {prepareDate(el.dateFrom)} - {prepareDate(el.dateTo)}
                    </span>
                    <span className={s.orders__elem__info__name}>
                      Цвет: <b>{el.color}</b>
                    </span>
                  </div>
                </div>
                <div className={s.orders__elem__dlc}>
                  <div className={s.orders__elem__dlc__container}>
                    <input
                      disabled
                      checked={el.isFullTank}
                      id="full"
                      type="checkbox"
                      className="custom-checkbox__green"
                    />
                    <label
                      className={` ${s.orders__elem__dlc__container__label} ${
                        el.isFullTank
                          ? s.orders__elem__dlc__container__active
                          : ""
                      } `}
                      htmlFor="full"
                    >
                      Полный бак
                    </label>
                  </div>
                  <div className={s.orders__elem__dlc__container}>
                    <input
                      disabled
                      checked={el.isNeedChildChair}
                      id="baby"
                      type="checkbox"
                      className="custom-checkbox__green"
                    />
                    <label
                      className={`${s.orders__elem__dlc__container__label} ${
                        el.isNeedChildChair
                          ? s.orders__elem__dlc__container__active
                          : ""
                      } `}
                      htmlFor="baby"
                    >
                      Детское кресло
                    </label>
                  </div>
                  <div className={s.orders__elem__dlc__container}>
                    <input
                      disabled
                      checked={el.isRightWheel}
                      id="right"
                      type="checkbox"
                      className="custom-checkbox__green"
                    />
                    <label
                      className={` ${s.orders__elem__dlc__container__label} ${
                        el.isRightWheel
                          ? s.orders__elem__dlc__container__active
                          : ""
                      } `}
                      htmlFor="right"
                    >
                      Правый руль
                    </label>
                  </div>
                </div>
                <div className={s.orders__elem__price}>
                  {preparePrice(el?.price)} ₽
                </div>
                <div className={s.orders__elem__manage}>
                  <div className={s.orders__elem__panel}>
                    <span className={s.orders__elem__panel__ok}>
                      <span className={s.orders__elem__panel__ok_img}></span>{" "}
                      Готово
                    </span>
                    <span className={s.orders__elem__panel__cancel}>
                      <span
                        className={s.orders__elem__panel__cancel_img}
                      ></span>
                      Отмена
                    </span>
                    <span className={s.orders__elem__panel__edit}>
                      <span className={s.orders__elem__panel__edit_img}></span>
                      Изменить
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <Pagination cb={handleChangePage} count={order.count} />
    </>
  );
};

export default Orders;
