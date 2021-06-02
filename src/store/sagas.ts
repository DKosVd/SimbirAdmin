import { all } from "redux-saga/effects";
import { loginSaga } from "./sagas/auth";

export default function* rootSaga() {
  yield all([loginSaga()]);
}
