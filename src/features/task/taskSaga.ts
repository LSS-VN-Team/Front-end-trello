import { PayloadAction } from "@reduxjs/toolkit";
import {
  all,
  fork,
  call,
  put,
  takeLatest,
  takeEvery,
} from "redux-saga/effects";
import { Task } from "interfaces";
import factories from "./factotories";
import {
  getTasks,
  getTasksSuccess,
  getTasksFailFure,
  addTasks,
  addTasksSuccess,
  addTaskFailure,
  updateTask,
  deleteTask,
} from "./taskSlide";

function* handleGetTasks() {
  yield takeEvery(getTasks.type, function* (payload: PayloadAction<Task>) {
    try {
      const response: any = yield call(() => factories.fetchTasks());
      yield put(getTasksSuccess(response.data.data));
    //   debugger
    } catch (error: any) {
        yield put(getTasksFailFure(error.message));
    }
  });
}

function* handleAddTask() {
  yield takeEvery(addTasks.type, function* (action: PayloadAction<Task>) {
    try {
      const response: any = yield call(factories.createTask, action.payload);
      yield put(addTasksSuccess(response.data));
      console.log("add ok");
    } catch (error: any) {
      yield put(addTaskFailure(error.message));
      console.log("add not ok");
    }
  });
}

function* handleUpdateTaskCard(action: PayloadAction<Task>) {
  yield takeEvery(updateTask.type, function* (payload: PayloadAction<Task>) {
    try {
      const response: any = yield call(() =>
        factories.updateTask(action.payload)
      );
      yield put(updateTask(response.data));
    } catch (error) {}
  });
}

function* handleDeleteTask() {
  yield takeEvery(deleteTask.type, function* (payload: PayloadAction<string>) {
    try {
      yield call(() => factories.deleteTask(payload.payload));
      yield put(deleteTask(payload.payload));
    } catch (error) {}
  });
}

export default function* TaskSaga() {
  yield all([
    fork(handleGetTasks),
    fork(handleAddTask),
    fork(handleDeleteTask),
  ]);
}
