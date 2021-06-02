import { UserAction, UserActionType } from "../../actions/user/user";
import { UserState } from "./contracts/state";

const initialState: UserState = {
  user_id: null,
};

export const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case UserActionType.SET_USER:
      return {
        user_id: action.payload,
      };
    default:
      return state;
  }
};
