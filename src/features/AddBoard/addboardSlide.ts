import { createSlice, PayloadAction, Draft } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Board } from "interfaces";

interface BoardState {
  boards: Board[];
  status: "nothing" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: BoardState = {
  boards: [],
  status: "nothing",
  error: null,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    getBoards(state) {
      state.status = "loading";
    },
    getBoardsSuccess(state, action) {
      state.status = "succeeded";
      state.boards = action.payload;
    },
    getBoardsFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
    addBoard: (state: Draft<BoardState>, action: PayloadAction<Board>) => {
      state.status = "loading";      
    },
    addBoardSuccess: (state: Draft<BoardState>, action: PayloadAction<Board>) => {
      state.status = "succeeded";
      state.boards.push(action.payload);
    },
    addBoardFailure: (
      state: Draft<BoardState>,
      action: PayloadAction<string>
    ) => {
      state.status = "failed";
      state.error = action.payload;
    },
    
  },
});

export const {
  getBoards,
  getBoardsSuccess,
  getBoardsFailure,
  addBoard,
  addBoardFailure,
  addBoardSuccess,
} = boardSlice.actions;

export const selectAllBoards = (state: RootState) => state.board.boards;

export default boardSlice.reducer;
