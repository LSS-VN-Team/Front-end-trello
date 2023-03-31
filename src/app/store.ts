import { configureStore } from '@reduxjs/toolkit';
import boardReducer from 'features/AddBoard/addboardSlide'
import loginReducer from 'features/login/loginSlide';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import taskCardReducer from 'features/taskCar/taskCardSlide'

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    login:loginReducer,
    board: boardReducer,
    taskCard: taskCardReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  }).concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch