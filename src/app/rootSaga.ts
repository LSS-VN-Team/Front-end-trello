import loginSaga from "features/login/loginSaga";
import { all } from "redux-saga/effects";
import registerSaga from "features/register/registerSaga";
import CardSaga from "features/card/cardSaga";
import TaskSaga from "features/task/taskSaga";

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registerSaga(),
    CardSaga(),
    TaskSaga(),
  ]);
}
