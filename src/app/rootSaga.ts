import loginSaga from "features/login/loginSaga";
import { all } from "redux-saga/effects";
import registerSaga from "features/register/registerSaga";
// import boardSaga from "features/AddBoard/addBoardSaga";
import taskCardSaga from "features/taskCard/taskCardSaga";
import boardSaga from "features/Board/BoardSaga";
import UserIdSaga from "features/getuser/usersaga";

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registerSaga(),
    boardSaga(),
    taskCardSaga(),
    UserIdSaga(),
  ]);
}
