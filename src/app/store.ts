import { configureStore } from '@reduxjs/toolkit';
import boardsReducer from 'features/AddBoard/addboardSlide'
import loginReducer from 'features/login/loginSlide';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    login:loginReducer,
    board: boardsReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  }).concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch