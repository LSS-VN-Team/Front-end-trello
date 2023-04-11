import loginSaga from "features/login/loginSaga";
import { all } from "redux-saga/effects";
import registerSaga from "features/register/registerSaga";
// import boardSaga from "features/AddBoard/addBoardSaga";
import boardSaga from "features/Board/BoardSaga";
import UserIdSaga from "features/getuser/usersaga";
import CardSaga from "features/card/cardSaga";
import TaskSaga from "features/task/taskSaga";
import LastViewSaga from "features/getBoardLastView/LastViewSaga";

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registerSaga(),
    boardSaga(),
    UserIdSaga(),
    CardSaga(),
    TaskSaga(),
    LastViewSaga(),
  ]);
}
