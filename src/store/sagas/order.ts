import { call, put, takeEvery } from "redux-saga/effects";
import { orderApi } from "../../services/api/order";
import {
  IFetchOrder,
  OrderActionType,
  SetOrderAction,
} from "../actions/order/order";
import { IResponseOrder } from "../types/response";

export function* orderSaga() {
  yield takeEvery(OrderActionType.FETCH_ORDER, getOrder);
}

export function* getOrder({ payload }: IFetchOrder) {
  try {
    const order: IResponseOrder = yield call(orderApi.getOrder, payload);
    yield put(SetOrderAction(order));
    console.log(order);
  } catch (err) {}
}
