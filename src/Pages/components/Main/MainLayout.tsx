import React, { useState } from "react";
import s from "./mainlayout.module.css";

interface IMainLayout {
  children: React.ReactNode;
  text: string;
}

const MainLayout = ({ children, text }: IMainLayout) => {
  return (
    <main className={s.main}>
      <div className={s.main__wrapper}>
        <h2 className={s.main__title}>{text}</h2>
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
