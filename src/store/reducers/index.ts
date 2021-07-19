import { combineReducers } from "redux";
import { loginReducer } from "./auth/reduce";
import { carReducer } from "./car/reduce";
import { orderReducer } from "./order/reduce";
import { userReducer } from "./user/reduce";

export const rootReducer = combineReducers({
  auth: loginReducer,
  user: userReducer,
  order: orderReducer,
  car: carReducer,
});
