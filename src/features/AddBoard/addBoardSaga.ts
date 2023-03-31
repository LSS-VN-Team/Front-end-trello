import { PayloadAction } from "@reduxjs/toolkit";
import {call, fork, put, takeEvery} from "redux-saga/effects";
import { getBoards, getBoardsSuccess, getBoardsFailure, addBoard, addBoardSuccess, addBoardFailure, editBoard, editBoardSuccess, editBoardFailure, removeBoard, removeBoardSuccess, removeBoardFailure} from "./addboardSlide";
import { Board } from "interfaces";
import factories from "./factories";


function* handleGetBoard() {
    yield takeEvery(getBoards.type, function*(action:PayloadAction<Board>){
        try{
            const response:any = yield call(factories.getBoard, action.payload);
            yield put(getBoardsSuccess(response.data.data))
            // debugger
        }catch (error:any){
            yield put(getBoardsFailure(error.message));
        }
    })
}
function* handleAddBoard(){
    yield takeEvery(addBoard.type, function*(action:PayloadAction<Board>){
        try{
            const response:any = yield call(factories.addBoard, action.payload);
            yield put(addBoardSuccess(response.data.data))
        }catch (error:any){
            yield put(addBoardFailure(error.message));
        }
    })
}
function* handleEditBoard() {
    yield takeEvery(editBoard.type, function* (payload: PayloadAction<Board>) {
      try {
        const response: any = yield call(factories.editBoard, payload.payload);
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
        yield put(removeBoardSuccess(response));
      } catch (error: any) {
        yield put(removeBoardFailure(error.message));
      }
    });
  }
export default function* boardSaga(){
    yield fork(handleGetBoard);
    yield fork(handleAddBoard);
    yield fork(handleEditBoard);
    yield fork(handleRemoveBoard);
}