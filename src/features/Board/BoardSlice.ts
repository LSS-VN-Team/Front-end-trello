import { createSlice, PayloadAction, Draft } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Board, LastView } from "interfaces";

interface BoardState {
  boards: Board[];
  status: "nothing" | "loading" | "succeeded" | "failed";
  error: string | null;
  boardSelected: Board | null;
  boarddetal: string | null;
  lastview: LastView[];
}

const initialState: BoardState = {
  boards: [],
  status: "nothing",
  error: null,
  boardSelected: null,
  boarddetal: null,
  lastview: [],
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
    addBoardSuccess: (
      state: Draft<BoardState>,
      action: PayloadAction<Board>
    ) => {
      state.status = "succeeded";
      state.boards.push(action.payload);
      // debugger
    },
    addBoardFailure: (
      state: Draft<BoardState>,
      action: PayloadAction<string>
    ) => {
      state.status = "failed";
      state.error = action.payload;
    },
    editBoard: (state: Draft<BoardState>, action: PayloadAction<Board>) => {
      state.status = "loading";
    },
    editBoardSuccess: (
      state: Draft<BoardState>,
      action: PayloadAction<Board>
    ) => {
      state.status = "succeeded";
      const editedBoard = action.payload;
      const existingBoard = state.boards.find(
        (board) => board._id === editedBoard._id
      );
      if (existingBoard) {
        Object.assign(existingBoard, editedBoard);
      }
      // debugger
    },
    editBoardFailure: (
      state: Draft<BoardState>,
      action: PayloadAction<string>
    ) => {
      state.status = "failed";
      state.error = action.payload;
    },
    removeBoard: (state: Draft<BoardState>, action: PayloadAction<string>) => {
      state.status = "loading";
    },
    removeBoardSuccess: (
      state: Draft<BoardState>,
      action: PayloadAction<any>
    ) => {
      state.status = "succeeded";
      const removeBoardId = action.payload;
      state.boards = [
        ...state.boards.filter((board) => board._id !== removeBoardId._id),
      ];
    },
    removeBoardFailure: (
      state: Draft<BoardState>,
      action: PayloadAction<string>
    ) => {
      state.status = "failed";
      state.error = action.payload;
    },
    boardSeleted: (state: Draft<BoardState>, action: PayloadAction<Board>) => {
      state.boardSelected = action.payload;
    },
    getBoardsId(state, action: PayloadAction<string>) {
      state.status = "loading";
    },
    getBoardsIdSuccess(state, action) {
      state.status = "succeeded";
      state.boarddetal = action.payload;
      // debugger
    },
    getBoardsIdFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
    lastView(state, action: PayloadAction<any>) {
      state.status = "loading";
    },
    lastViewSuccess(state, action) {
      state.status = "succeeded";
      state.lastview = action.payload;
      // debugger
    },
    lastViewFailure(state, action) {
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
  boardSeleted,
  editBoard,
  editBoardSuccess,
  editBoardFailure,
  removeBoard,
  removeBoardSuccess,
  removeBoardFailure,
  getBoardsId,
  getBoardsIdSuccess,
  getBoardsIdFailure,
  lastView,
  lastViewFailure,
  lastViewSuccess,
} = boardSlice.actions;

export const selectAllBoards = (state: RootState) => state.board.boards;
export const selectBoards = (state: RootState) => state.board.boardSelected;

export default boardSlice.reducer;
