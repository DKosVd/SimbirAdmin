import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchCarAction } from "../../../../store/actions/car/car";
import { RootState } from "../../../../store/store";
import { isBase64 } from "../../../../utils/isBase64";
import { Pagination } from "../../../components/Pagination/Pagination";
import Preloader from "../../../components/Preloader/Preloader";
import s from "./cars.module.css";

const Cars = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state: RootState) => state.car.car);
  const [activePage, setActivePage] = useState<number>(0);
  useEffect(() => {
    dispatch(
      FetchCarAction({
        page: activePage,
        offset: activePage * 10,
        limit: 10,
      })
    );
  }, [activePage]);
  const handleChangePage = ({ selected }: { selected: number }) => {
    setActivePage(selected);
  };

  if (!cars?.data) {
    return <Preloader />;
  }

  return (
    <>
      <table className={s.entity__table}>
        <thead>
          <tr className={s.entity__tr}>
            <th>Изображение</th>
            <th>Название</th>
            <th>Категория</th>
            <th>Ценовой диапазон</th>
            <th>Номер</th>
            <th>Топливо</th>
          </tr>
        </thead>
        <tbody>
          {cars.data.map((car, idx) => {
            return (
              <tr className={s.entity__tr} key={idx}>
                <td>
                  <img
                    width={"138px"}
                    height={"64px"}
                    src={`${
                      car?.thumbnail.path ? isBase64(car?.thumbnail.path) : ""
                    }`}
                  />
                </td>
                <td>{car?.name}</td>
                <td>{car?.categoryId?.name}</td>
                <td>
                  {car?.priceMin} ₽ - {car?.priceMax} ₽
                </td>
                <td>{car?.number}</td>
                <td>{car?.tank ? car.tank + " % " : ""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination cb={handleChangePage} count={100} />
    </>
  );
};

export default Cars;
