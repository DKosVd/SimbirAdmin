import { useState } from "react";
import s from "./mainlayout.module.css";

const MainLayout = () => {
  const [value, setValue] = useState<string>();
  const colors = ["Синий", "Красный"];
  return (
    <main className={s.main}>
      <div className={s.main__wrapper}>
        <h2 className={s.main__title}>Карточка автомобиля</h2>
        {/* children */}
        <div className={s.car}>
          <div className={s.car__model}>
            <div className={s.car__model__head}>
              <div className={s.car__model__head__wrapper}>
                <div className={s.car__model__head__img}>
                  <img height="110px" width="242px" />
                </div>
                <div className={s.car__model__head__text}>
                  <span className={s.car__model__head__title}>
                    Hyndai, i30 N
                  </span>
                  <span className={s.car__model__head__type}>Компакт-кар</span>
                </div>
                <div className={s.car__model__head__chose}>
                  <div className="field__wrapper">
                    <input
                      className="field field__file"
                      type="file"
                      id="field"
                    />
                    <label htmlFor="field" className="field__file-wrapper">
                      <div className="field__file-fake">Выберите файл...</div>
                      <div className="field__file-button">Обзор</div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.car__model__body}>
              <div className={s.car__model__body__full}>
                <div className={s.car__model__body__wrapper}>
                  <div className={s.car__model__body__tex_b}>
                    <span className={s.car__model__body__text}>Заполнено</span>
                    <span className={s.car__model__body__text}>70%</span>
                  </div>
                  <input
                    className="input-range"
                    type="range"
                    min="0"
                    step="1"
                    value="70"
                    defaultValue="0"
                    max="100"
                  />
                </div>
              </div>
              <div className={s.car__model__body__description}>
                <div className={s.car__model__body__wrapper}>
                  <div className={s.car__model__description__title}>
                    <span className={s.car__model__body__text}>Описание</span>
                  </div>
                  <div className={s.car__model__description__text}>
                    <p className={s.car__model__description__txt}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odio eaque, quidem, commodi soluta qui quae quod dolorum
                      sint alias, possimus illum assumenda eligendi cumque?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={s.car__settings}>
            <div className={s.car__settings__wrapper}>
              <div className={s.car__settings__main}>
                <h3 className={s.car__settings__title}>Настройка автомобиля</h3>
                <div className={s.car__settings__body}>
                  <div className={s.car__settings__body__main}>
                    <div className={s.car__settings__body__model}>
                      <div className={s.car__settings__body__model__elem}>
                        <label className={s.car__settings__body__label}>
                          Модель автомобиля
                        </label>
                        <input className={s.car__settings__input} type="text" />
                      </div>
                      <div className={s.car__settings__body__model__elem}>
                        <label className={s.car__settings__body__label}>
                          Тип автомобиля
                        </label>
                        <input
                          className={`${s.car__settings__input} ${s.car__settings__input__error}`}
                          type="text"
                        />
                        <span className={s.car__settings__input__txt_error}>
                          Пример ошибки
                        </span>
                      </div>
                    </div>
                    <div className={s.car__settings__body__model}>
                      <div
                        className={s.car__settings__body__model__elem__color}
                      >
                        <div className={s.car__settings__body__model__color}>
                          <label className={s.car__settings__body__label}>
                            Доступные цвета
                          </label>
                          <input
                            className={s.car__settings__input}
                            type="text"
                          />
                        </div>
                        <div className={s.car__settings__body__model__plus}>
                          <div className={s.car__settings__plus__wrapper}>
                            <span className={s.car__settings__hor__rect}></span>
                            <span className={s.car__settings__ver__rect}></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={s.car__settings__body__colors}>
                      <div className={s.car__settings__body__color}>
                        <input id="green" type="checkbox" />
                        <label htmlFor="green">Зеленый</label>
                      </div>
                      <div className={s.car__settings__body__color}>
                        <input id="green" type="checkbox" />
                        <label htmlFor="green">Зеленый</label>
                      </div>
                      <div className={s.car__settings__body__color}>
                        <input id="green" type="checkbox" />
                        <label htmlFor="green">Зеленый</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.car__settings__manage}>
                <div className={s.car__settings__manage__manipulate}>
                  <button className="btn btn-blue">Сохранить</button>
                  <button className="btn btn-grey">Отменить</button>
                </div>
                <div className={s.car__settings__manage__delete}>
                  <button className="btn btn-red">Удалить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* children */}
      </div>
    </main>
  );
};

export default MainLayout;
