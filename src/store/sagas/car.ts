import { call, put, takeEvery } from "redux-saga/effects";
import { carApi } from "../../services/api/car";
import { CarActionType, IFetchCar, SetCarAction } from "../actions/car/car";
import { IResponseCar } from "../types/response";

export function* carSaga() {
  yield takeEvery(CarActionType.FETCH_CAR, carOrder);
}

export function* carOrder({ payload }: IFetchCar) {
  try {
    const car: IResponseCar = yield call(carApi.getCar, payload);
    yield put(SetCarAction(car));
  } catch (err) {}
}
