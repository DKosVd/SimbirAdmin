import s from "./login.module.css";

const Login = () => {
  return (
    <div className={s.login}>
      <div className={s.login__enter__wrapper__logo}>
        <div className={s.login__enter__logo_img}></div>
        <h2 className={s.login__enter__logo_title}>Need for drive</h2>
      </div>
      <div className={s.login__enter__wrapper}>
        <div className={s.login__enter__wrapper__details}>
          <div className={s.login__enter__wrapper__main}>
            <div className={s.login__enter__main__title}>
              <h2>Вход</h2>
            </div>
            <form className={s.login__enter__form}>
              <div className={s.login__enter__form__elem}>
                <label className="label-mb">Почта</label>
                <input type="text" className="input-elem" />
              </div>
              <div className={s.login__enter__form__elem}>
                <label className="label-mb">Пароль</label>
                <input type="password" className="input-elem" />
              </div>
              <div className={s.login__enter__form__manipulation}>
                <a href="#" className={s.login__enter__form__link}>
                  Запросить доступ
                </a>
                <button className="btn btn-blue">Войти</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
