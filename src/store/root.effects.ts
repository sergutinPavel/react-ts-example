import { fork } from "redux-saga/effects";
import { authSaga } from "./auth/auth.effects";

export default function* rootSaga() {
  yield fork(authSaga);
}
