import { Card } from "interfaces";

import { call, put, takeLatest } from "redux-saga/effects";
import { createSlice, PayloadAction, Draft } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface CardState {
  cards: Card[];
  status: "nothing" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CardState = {
  cards: [],
  status: "nothing",
  error: null,
};

export const cardSlide = createSlice({
  name: "cardSlide",
  initialState,
  reducers: {
    getCards: (state) => {
      state.status = "loading";
    },
    getCardsSuccess: (state, action) => {
      state.status = "succeeded";
      state.cards = action.payload;      
    },
    getCardsFailFure: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.error = action.payload;
    },
    addCard: (state: Draft<CardState>, action: PayloadAction<Card>) => {
      state.status = "loading";
    },
    addCardSuccess: (state: Draft<CardState>, action: PayloadAction<Card>) => {
      state.status = "succeeded";
      state.cards.push(action.payload);
    },
    addCardFailure: (
      state: Draft<CardState>,
      action: PayloadAction<string>
    ) => {
      state.status = "failed";
      state.error = action.payload;
    },
    updateCard: (state, action: PayloadAction<Card>) => {
      const { _id } = action.payload;
      const index = state.cards.findIndex((card) => card._id === _id);
      if (index !== -1) {
        state.cards[index] = action.payload;
      }
    },
    deleteCard: (state, action: PayloadAction<string | undefined>) => {
      state.cards = state.cards.filter((card) => card._id !== action.payload);
    },
  },
});

export const {
  getCards,
  getCardsSuccess,
  getCardsFailFure,
  addCard,
  addCardSuccess,
  addCardFailure,
  updateCard,
  deleteCard,
} = cardSlide.actions;

export const selectAllCard = (state: RootState) => state.card.cards;

export default cardSlide.reducer;
