import { put, call, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from "./auth.actions";
import { API } from "../../utils/httpRequests";

function* loginSaga(action: any) {
  try {
    const {data} = yield call(API, {
      method: 'post',
      url: '/login',
      data: action.payload
    });

    if (data && data.access_token) {
      localStorage.setItem('access_token', JSON.stringify(data.access_token));
    }
    // console.warn('success', data, data.access_token);
    yield put({type: ActionTypes.LOGIN_ACTION_SUCCESS, payload: data.access_token});
  } catch (error) {
    // console.warn('error', error);
    yield put({type: ActionTypes.LOGIN_ACTION_ERROR, payload: error.response.data});
  }

}

export function* authSaga() {
  yield takeLatest(ActionTypes.LOGIN_ACTION, loginSaga);
  // yield takeLatest(ActionTypes.REGISTER_ACTION, registerSaga);
}
