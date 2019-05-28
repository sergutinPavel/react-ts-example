import { put, call, takeLatest } from 'redux-saga/effects';
import { ActionTypes, LoginActionFail } from "./auth.actions";
import { API } from "../../utils/httpRequests";

function* loginSaga(payload: any) {
  try {
    const response = yield call(API, {
      method: 'post',
      url: '/login',
      data: payload
    });

    yield [
      put({type: ActionTypes.LOGIN_ACTION_SUCCESS, payload: response.response.data})
    ];
  } catch (error) {
    yield put(LoginActionFail(error.response.data));
  }

}

export function* authSaga() {
  yield takeLatest(ActionTypes.LOGIN_ACTION, loginSaga);
  // yield takeLatest(ActionTypes.REGISTER_ACTION, registerSaga);
}
