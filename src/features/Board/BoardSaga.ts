import { PayloadAction } from "@reduxjs/toolkit";
import { call, fork, put, takeEvery } from "redux-saga/effects";
import {
  getBoards,
  getBoardsSuccess,
  getBoardsFailure,
  addBoard,
  addBoardSuccess,
  addBoardFailure,
  editBoard,
  editBoardSuccess,
  editBoardFailure,
  removeBoard,
  removeBoardSuccess,
  removeBoardFailure,
  getBoardsId,
  getBoardsIdSuccess,
  getBoardsIdFailure,
} from "./BoardSlice";
import { Board } from "interfaces";
import factories from "./factories";

function* handleGetBoard() {
  yield takeEvery(getBoards.type, function* (action: PayloadAction<Board>) {
    try {
      const response: any = yield call(factories.getBoard, action.payload);
      yield put(getBoardsSuccess(response.data.data));
    } catch (error: any) {
      yield put(getBoardsFailure(error.message));
    }
  });
}
function* handleGetBoardId() {
  yield takeEvery(getBoardsId.type, function* (action: PayloadAction<any>) {
    try {
      const response: any = yield call(factories.getboardID, action.payload);
      yield put(getBoardsIdSuccess(response));
      // debugger;
    } catch (error: any) {
      yield put(getBoardsIdFailure(error.message));
    }
  });
}
function* handleAddBoard() {
  yield takeEvery(addBoard.type, function* (action: PayloadAction<Board>) {
    try {
      const response: any = yield call(factories.addBoard, action.payload);
      yield put(addBoardSuccess(response.data));
      // debugger
    } catch (error: any) {
      yield put(addBoardFailure(error.message));
    }
  });
}
function* handleEditBoard() {
  yield takeEvery(editBoard.type, function* (payload: PayloadAction<Board>) {
    try {
      const response: any = yield call(factories.editBoard, payload.payload);
      // debugger
      yield put(editBoardSuccess(response));
    } catch (error: any) {
      yield put(editBoardFailure(error.message));
    }
  });
}
function* handleRemoveBoard() {
  yield takeEvery(removeBoard.type, function* (action: PayloadAction<string>) {
    try {
      const response: any = yield call(factories.removeBoard, action.payload);
      alert("xóa thành công")
      yield put(removeBoardSuccess(response.data));
    } catch (error: any) {
      yield put(removeBoardFailure(error.message));
    }
  });
}
export default function* boardSaga() {
  yield fork(handleGetBoard);
  yield fork(handleAddBoard);
  yield fork(handleEditBoard);
  yield fork(handleRemoveBoard);
  yield fork(handleGetBoardId);
}