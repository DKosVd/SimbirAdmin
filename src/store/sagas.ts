import { all } from "redux-saga/effects";
import { loginSaga } from "./sagas/auth";
import { carSaga } from "./sagas/car";
import { orderSaga } from "./sagas/order";

export default function* rootSaga() {
  yield all([loginSaga(), orderSaga(), carSaga()]);
}
