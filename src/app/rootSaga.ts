import loginSaga from "features/login/loginSaga";
import { all } from "redux-saga/effects";
import registerSaga from "features/register/registerSaga";

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registerSaga(),
  ]);
}
