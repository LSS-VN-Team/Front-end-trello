import { PayloadAction } from "@reduxjs/toolkit";
import {
  all,
  fork,
  call,
  put,
  takeLatest,
  takeEvery,
} from "redux-saga/effects";
import { TaskCard } from "interfaces";
import factories from "./factories";
import {
  addTaskCard,
  addTaskCardSuccess,
  addTaskCardFailure,
  deleteTaskCard,
  getTaskCards,
  getTaskCardsFailFure,
  getTaskCardsSuccess,
  updateTaskCard,
} from "./taskCardSlide";

function* handleGetTaskCards() {
  yield takeEvery(
    addTaskCard.type,
    function* (payload: PayloadAction<TaskCard>) {
      try {
        const response: any = yield call(() => factories.fetchTasks());
        yield put(getTaskCardsSuccess(response.data));
      } catch (error: any) {
        yield put(getTaskCardsFailFure(error.message));
      }
    }
  );
}

function* handleAddTaskCard(){
  yield takeEvery(addTaskCard.type, function*(action:PayloadAction<TaskCard>){
    try{
        const response:any = yield call(factories.createTask, action.payload);
        yield put(addTaskCardSuccess(response.data.data))
    }catch (error:any){
        yield put(addTaskCardFailure(error.message));
    }
})
}

function* handleUpdateTaskCard(action: PayloadAction<TaskCard>) {
  yield takeEvery(
    addTaskCard.type,
    function* (payload: PayloadAction<TaskCard>) {
      try {
        const response: any = yield call(() =>
          factories.updateTask(action.payload)
        );
        yield put(updateTaskCard(response.data));
      } catch (error) {
        console.log("Update TaskCard error: ");
      }
    }
  );
}

function* handleDeleteTaskCard() {
  yield takeEvery(
    deleteTaskCard.type,
    function* (payload: PayloadAction<string>) {
      try {
        yield call(() => factories.deleteTask(payload.payload));
        yield put(deleteTaskCard(payload.payload));
        console.log("deleteSaga");
      } catch (error) {
        console.log("Delete TaskCard error");
      }
    }
  );
}


export default function* taskCardSaga() {
  yield fork(handleDeleteTaskCard);
  yield fork(handleAddTaskCard);
}
