import { TaskCard } from "interfaces";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface CardState {
  cards: TaskCard[];
  status: "nothing" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CardState = {
  cards: [],
  status: "nothing",
  error: null,
};

export const taskCardSlide = createSlice({
  name: "taskCardSlide",
  initialState,
  reducers: {
    getTaskCards: (state) => {
      state.status = "loading";
    },
    getTaskCardsSuccess: (state, action) => {
      state.status = "succeeded";
      state.cards = action.payload;
    },
    getTaskCardsFailFure: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.error = action.payload;
    },
    addTaskCard: (state, action: PayloadAction<TaskCard>) => {
      state.cards.push(action.payload);
    },
    updateTaskCard: (state, action: PayloadAction<TaskCard>) => {
      const { _id } = action.payload;
      const index = state.cards.findIndex((card) => card._id === _id);
      if (index !== -1) {
        state.cards[index] = action.payload;
      }
    },
    deleteTaskCard: (state, action: PayloadAction<string | undefined>) => {
      state.cards = state.cards.filter((card) => card._id !== action.payload);
    },    
  },
});

export const {
  getTaskCards,
  getTaskCardsSuccess,
  getTaskCardsFailFure,
  addTaskCard,
  updateTaskCard,
  deleteTaskCard,
} = taskCardSlide.actions;

// export const selectIsLoading = (state: RootState) =>
//   state.taskCardSlide.isLoading;
// export const selectTaskCards = (state: RootState) =>
//   state.taskCardSlide.taskCards;

// export function* handleGetTaskCards() {
//   try {
//     const taskCards: TaskCard[] = yield call(fetchTasks);
//     yield put(getTaskCardsSuccess(taskCards));
//   } catch (error) {
//     yield put(getTaskCardsFailure(error.message));
//   }
// }

// export function* watchGetTaskCards() {
//   yield takeLatest(getTaskCards.type, handleGetTaskCards);
// }

export default taskCardSlide.reducer;
