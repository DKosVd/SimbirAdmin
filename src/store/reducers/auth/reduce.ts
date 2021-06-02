import { LoginAction, LoginActionType } from "../../actions/auth/auth";
import { ILoadingStatus } from "../../types/status";
import { LoginState } from "./contracts/state";

const initialState: LoginState = {
  loadingStatus: ILoadingStatus.NEVER,
};

export const loginReducer = (state = initialState, action: LoginAction) => {
  switch (action.type) {
    case LoginActionType.LOGIN:
      return {
        isAuth: true,
        loadingStatus: ILoadingStatus.LOADED,
      };
    case LoginActionType.LOGOUT:
      return {
        ...state,
        isAuth: false,
      };
    case LoginActionType.SET_STATUS:
      return {
        ...state,
        loadingStatus: action.payload,
      };
    default:
      return state;
  }
};
