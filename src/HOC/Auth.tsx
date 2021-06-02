import React from "react";
import { Redirect } from "react-router-dom";
import Preloader from "../Pages/components/Preloader/Preloader";

interface IPropsWrapper {
  path: string;
  LoadingStatus: string;
  status: string;
  preloader: string;
}

const Auth = (Component: React.ComponentType<any>) => {
  const WrapperComponent = ({
    path,
    LoadingStatus,
    status,
    preloader,
  }: IPropsWrapper) => {
    if (status === LoadingStatus) {
      return <Redirect to={path} />;
    }

    if (!(status === LoadingStatus) && !(status === preloader)) {
      return <Preloader />;
    }
    return <Component />;
  };
  return WrapperComponent;
};

export default Auth;
