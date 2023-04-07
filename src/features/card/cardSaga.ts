import { PayloadAction } from "@reduxjs/toolkit";
import {
  all,
  fork,
  call,
  put,
  takeLatest,
  takeEvery,
} from "redux-saga/effects";
import { Card } from "interfaces";
import factories from "./factories";
import {
  getCards,
  getCardsSuccess,
  getCardsFailFure,
  addCard,
  addCardSuccess,
  addCardFailure,
  updateCard,
  deleteCard,
} from "./cardSlide";

function* handleGetCards() {
  yield takeEvery(
    getCards.type,
    function* (payload: PayloadAction<Card>) {
      try {
        const response: any = yield call(() => factories.fetchCards());
        yield put(getCardsSuccess(response));
        // debugger  
      } catch (error: any) {
        yield put(getCardsFailFure(error.message));
      }
    }
  );
}

function* handleAddCard(){
  yield takeEvery(addCard.type, function*(action:PayloadAction<Card>){
    try{
        const response:any = yield call(factories.createCard, action.payload);
        yield put(addCardSuccess(response.data))
        console.log('add ok');
    }catch (error:any){
        yield put(addCardFailure(error.message));
        console.log('add not ok');
    }
})
}

function* handleUpdateTaskCard(action: PayloadAction<Card>) {
  yield takeEvery(
    updateCard.type,
    function* (payload: PayloadAction<Card>) {
      try {
        const response: any = yield call(() =>
          factories.updateCard(action.payload)
        );
        yield put(updateCard(response.data));
      } catch (error) {
      }
    }
  );
}

function* handleDeleteCard() {
  yield takeEvery(
    deleteCard.type,
    function* (payload: PayloadAction<string>) {
      try {
        yield call(() => factories.deleteCard(payload.payload));
        yield put(deleteCard(payload.payload));
      } catch (error) {
      }
    }
  );
}


export default function* CardSaga() {
  yield all([
    fork(handleGetCards),
    fork(handleAddCard),
    fork(handleDeleteCard)
  ]);
}
