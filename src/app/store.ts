import { configureStore } from "@reduxjs/toolkit";
import boardsReducer from "features/Board/BoardSlice";
import loginReducer from "features/login/loginSlide";
import userReducer from "features/getuser/userslide";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import taskCardReducer from "features/taskCard/taskCardSlide";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    login: loginReducer,
    board: boardsReducer,
    taskCard: taskCardReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
