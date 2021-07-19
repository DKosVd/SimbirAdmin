import { call, put, takeEvery } from "redux-saga/effects";
import { loginApi } from "../../services/api/auth";
import CookiesUtils from "../../services/cookies/cookies";
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
    yield call(
      [CookiesUtils, CookiesUtils.setAccessNRefresh],
      item.access_token,
      item.refresh_token,
      item.expires_in
    );
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
