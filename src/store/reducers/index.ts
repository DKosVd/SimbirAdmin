import { combineReducers } from "redux";
import { loginReducer } from "./auth/reduce";
import { userReducer } from "./user/reduce";

export const rootReducer = combineReducers({
  auth: loginReducer,
  user: userReducer,
});
