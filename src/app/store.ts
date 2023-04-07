import { configureStore } from '@reduxjs/toolkit';
import boardsReducer from 'features/AddBoard/addboardSlide'
import loginReducer from 'features/login/loginSlide';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import taskCardReducer from 'features/card/cardSlide';
import taskReducer from 'features/task/taskSlide';

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    login:loginReducer,
    board: boardsReducer,
    card: taskCardReducer,
    task: taskReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  }).concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch