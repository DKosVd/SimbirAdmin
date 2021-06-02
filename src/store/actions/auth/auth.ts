import { Action } from "redux";
import { ILoginData } from "../../reducers/auth/contracts/state";
import { ILoadingStatus } from "../../types/status";

export enum LoginActionType {
  LOGIN = "auth/LOGIN",
  LOGOUT = "auth/LOGOUT",
  SET_STATUS = "auth/SET_STATUS",
  LOGIN_FETCH = "auth/LOGIN_FETCH",
  AUTH_ME = "auth/AUTH_ME",
}

export interface ILogin extends Action<LoginActionType> {
  type: LoginActionType.LOGIN;
}

export interface IAuthMe extends Action<LoginActionType> {
  type: LoginActionType.AUTH_ME;
}

export interface ILoginFetch extends Action<LoginActionType> {
  type: LoginActionType.LOGIN_FETCH;
  payload: ILoginData;
}

export interface IStatus extends Action<LoginActionType> {
  type: LoginActionType.SET_STATUS;
  payload: ILoadingStatus;
}

export interface ILogout extends Action<LoginActionType> {
  type: LoginActionType.LOGOUT;
}

export const AuthMe = (): IAuthMe => ({
  type: LoginActionType.AUTH_ME,
});

export const SetStatusAction = (payload: ILoadingStatus): IStatus => ({
  type: LoginActionType.SET_STATUS,
  payload,
});

export const SetLoginFetch = (payload: ILoginData): ILoginFetch => ({
  type: LoginActionType.LOGIN_FETCH,
  payload,
});

export type LoginAction = ILogin | ILogout | IStatus | ILoginFetch | IAuthMe;
