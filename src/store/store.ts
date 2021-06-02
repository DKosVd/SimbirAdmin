import { applyMiddleware, compose, createStore } from "redux";
import CreateSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducers";
import { LoginState } from "./reducers/auth/contracts/state";
import { UserState } from "./reducers/user/contracts/state";
import rootSaga from "./sagas";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const saga = CreateSagaMiddleware();

export interface RootState {
  auth: LoginState;
  user: UserState;
}

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(saga))
);

saga.run(rootSaga);
