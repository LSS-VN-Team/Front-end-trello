import { boardSlice } from "./../features/Board/BoardSlice";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "features/getuser/userslide";
import boardsReducer from "features/Board/BoardSlice";
import loginReducer from "features/login/loginSlide";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import taskReducer from "features/task/taskSlide";
import cardReducer from "features/card/cardSlide";
import lastviewReducer from "features/getBoardLastView/LastViewSlice";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    login: loginReducer,
    board: boardsReducer,
    user: userReducer,
    card: cardReducer,
    task: taskReducer,
    lastview: lastviewReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
