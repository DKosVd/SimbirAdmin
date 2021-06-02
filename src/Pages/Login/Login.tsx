import s from "./login.module.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { ILoginData } from "../../store/reducers/auth/contracts/state";
import { SetLoginFetch } from "../../store/actions/auth/auth";
import { RootState } from "../../store/store";
import { ILoadingStatus } from "../../store/types/status";
import Preloader from "../components/Preloader/Preloader";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const Login = () => {
  const dispatch = useDispatch();
  const status = useSelector((state: RootState) => state.auth.loadingStatus);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ILoginData) => {
    dispatch(SetLoginFetch(data));
  };

  if (status === ILoadingStatus.LOADING) {
    return <Preloader />;
  }

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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={s.login__enter__form}
            >
              <div className={s.login__enter__form__elem}>
                <label className="label-mb">Почта</label>
                <input
                  type="text"
                  className="input-elem"
                  {...register("username")}
                />
                {/* <p>{errors.name?.message}</p> */}
              </div>
              <div className={s.login__enter__form__elem}>
                <label className="label-mb">Пароль</label>
                <input
                  type="password"
                  className="input-elem"
                  {...register("password")}
                />
                {/* <p>{errors.password?.message}</p> */}
              </div>
              <div className={s.login__enter__form__manipulation}>
                <a href="#" className={s.login__enter__form__link}>
                  Запросить доступ
                </a>
                <button type="submit" className="btn btn-blue">
                  Войти
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
