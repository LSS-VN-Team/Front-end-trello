import { PayloadAction } from "@reduxjs/toolkit";
import { call, fork, put, takeEvery } from "redux-saga/effects";
import {
  getUsersId,
  getUsersIdSuccess,
  getUsersIdFailure,
} from "./userslide";
import { UserResponseData } from "interfaces";
import factories from "./factories";

function* handleGetUserId() {
  yield takeEvery(getUsersId.type, function* (action: PayloadAction<UserResponseData>) {
    try {
      const response: any = yield call(factories.getUserID, action.payload);
      yield put(getUsersIdSuccess(response));
    } catch (error: any) {
      yield put(getUsersIdFailure(error.message));
    }
  });
}

export default function* UserIdSaga() {
  yield fork(handleGetUserId);
 
}
