import { PayloadAction } from "@reduxjs/toolkit";
import { ILogin } from "interfaces";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import factories from "./factories";

import { loginHome, loginHomeFailure, loginHomeSuccess } from "./loginSlide";
function* handleLogin() {
  yield takeEvery(loginHome.type, function* (payload: PayloadAction<ILogin>) {
    try {
      const response: any = yield call(() =>
        factories.requestLogin({
          email: payload.payload.email,
          password: payload.payload.password,
        })
      );
      if (response.data.data.success) {
        const token = response.data.data.data.token;
        const id = response.data.data.data.isExistsEmail._id
        localStorage.setItem("token", token);
        localStorage.setItem("_id", id);
        payload.payload.Navigate("/");
        yield put({
          type: loginHomeSuccess.type,
          payload: response.data.data.data,
        });
      } else {
        yield put({
          type: loginHomeFailure.type,
          payload: response.data.message,
        });
      }
    } catch (error) {
      alert("đăng nhập thất bại");
      yield put({
        type: loginHomeFailure.type,
        // error
      });
    }
  });
}

export default function* loginSaga() {
  yield all([fork(handleLogin)]);
}
