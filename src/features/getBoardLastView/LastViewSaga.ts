import { PayloadAction } from "@reduxjs/toolkit";
import { call, fork, put, takeEvery } from "redux-saga/effects";
import {
  getLastView,
  getLastViewSuccess,
  getLastViewFailure,
} from "./LastViewSlice";
import { UserResponseData } from "interfaces";
import factories from "./factories";

function* handleGetUserId() {
  yield takeEvery(getLastView.type,
    function* (action: PayloadAction<UserResponseData>) {
      try {
        const response: any = yield call(factories.getLastViewBoard, action.payload);
        yield put(getLastViewSuccess(response.data));
        // debugger
      } catch (error: any) {
        yield put(getLastViewFailure(error.message));
      }
    }
  );
}

export default function* LastViewSaga() {
  yield fork(handleGetUserId);
}
