import s from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={`header__wrapper ${s.footer__main}`}>
        <div className={s.footer__links}>
          <a className={s.footer__link} href="#">
            Главная страница
          </a>
          <a className={s.footer__link} href="#">
            Ссылка
          </a>
        </div>
        <div className={s.footer__copyright}>
          <span className={s.footer__copyright_txt}>
            Copyright © 2020 Simbirsoft
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
