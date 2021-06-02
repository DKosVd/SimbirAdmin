import { ILoadingStatus } from "../../../types/status";

export interface LoginState {
  loadingStatus: ILoadingStatus;
}

export interface ILoginData {
  username: string;
  password: string;
}
