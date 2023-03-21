import loginSaga from "features/login/loginSaga";
import { all } from "redux-saga/effects";
export default function* rootSaga() {
  yield all([
    loginSaga(),
  ]);
}
