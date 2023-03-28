import { PayloadAction } from "@reduxjs/toolkit";
import { IRegister } from "interfaces";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import factories from "./factories";

import {
  registerHome,
  registerHomeSuccess,
  registerHomeFailure,
  resetRegisterState,
} from "../login/loginSlide";

function* handleRegister() {
  yield takeEvery(
    registerHome.type,
    function* (payload: PayloadAction<IRegister>) {
      try {
        const response: any = yield call(() =>
          factories.requestRegister(payload.payload)
        );
        console.log(response);
        if (response.data.success) {
          yield put({
            type: registerHomeSuccess.type,
            payload: response.data.data,
          });
        } else {
          yield put({
            type: registerHomeFailure.type,
            payload: response.data.message,
          });
        }
      } catch (error) {
        yield put({
          type: registerHomeFailure.type,
        });
      }
    }
  );
}

export default function* registerSaga() {
  yield all([fork(handleRegister)]);
}
