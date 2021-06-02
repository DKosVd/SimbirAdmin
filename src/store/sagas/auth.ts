import { call, put, takeEvery } from "redux-saga/effects";
import { loginApi } from "../../services/api/auth";
import { localStorage } from "../../services/localStorage/localStorage";
import {
  ILoginFetch,
  LoginActionType,
  SetStatusAction,
} from "../actions/auth/auth";
import { SetUserAction } from "../actions/user/user";
import { IResponseAuth, IResponseLogin } from "../types/response";
import { ILoadingStatus } from "../types/status";
export function* loginSaga() {
  yield takeEvery(LoginActionType.LOGIN_FETCH, login);
  yield takeEvery(LoginActionType.AUTH_ME, auth);
}

function* login({ payload }: ILoginFetch) {
  try {
    yield put(SetStatusAction(ILoadingStatus.LOADING));
    const item: IResponseLogin = yield call(loginApi.login, payload);
    yield put(SetUserAction(item.user_id));
    yield call(localStorage.setItem, "access_token", item["access_token"]);
    yield call(localStorage.setItem, "refresh_token", item["refresh_token"]);
    yield put(SetStatusAction(ILoadingStatus.LOADED));
  } catch (err) {
    yield put(SetStatusAction(ILoadingStatus.ERROR));
  }
}

function* auth() {
  try {
    yield put(SetStatusAction(ILoadingStatus.LOADING));
    const item: IResponseAuth = yield call(loginApi.check);
    yield put(SetUserAction(item.id));
    yield put(SetStatusAction(ILoadingStatus.LOADED));
  } catch (err) {
    yield put(SetStatusAction(ILoadingStatus.ERROR));
  }
}
