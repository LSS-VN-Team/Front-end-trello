import { TaskCard } from "interfaces";

import { call, put, takeLatest } from "redux-saga/effects";
import { createSlice, PayloadAction, Draft } from "@reduxjs/toolkit";
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
    addTaskCard: (state: Draft<CardState>, action: PayloadAction<TaskCard>) => {
      state.status = "loading";
    },
    addTaskCardSuccess: (state: Draft<CardState>, action: PayloadAction<TaskCard>) => {
      state.status = "succeeded";
      state.cards.push(action.payload);
    },
    addTaskCardFailure: (
      state: Draft<CardState>,
      action: PayloadAction<string>
    ) => {
      state.status = "failed";
      state.error = action.payload;
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
      console.log("deleSlide");
      console.log(
        (state.cards = state.cards.filter(
          (card) => card._id !== action.payload
        ))
      );
    },
  },
});

export const {
  getTaskCards,
  getTaskCardsSuccess,
  getTaskCardsFailFure,
  addTaskCard,
  addTaskCardSuccess,
  addTaskCardFailure,
  updateTaskCard,
  deleteTaskCard,
} = taskCardSlide.actions;

export const selectAllCard = (state: RootState) => state.taskCard.cards;

export default taskCardSlide.reducer;
