import { Action } from "redux";

export enum UserActionType {
  SET_USER = "user/SET_USER",
}

export interface ISetUser extends Action<UserActionType> {
  type: UserActionType.SET_USER;
  payload: string;
}

export const SetUserAction = (payload: string) => ({
  type: UserActionType.SET_USER,
  payload,
});

export type UserAction = ISetUser;
