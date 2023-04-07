import { Task } from "interfaces";

import { call, put, takeLatest } from "redux-saga/effects";
import { createSlice, PayloadAction, Draft } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface TaskState {
  cards: Task[];
  status: "nothing" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: TaskState = {
  cards: [],
  status: "nothing",
  error: null,
};

export const taskSlide = createSlice({
  name: "cardSlide",
  initialState,
  reducers: {
    getTasks: (state) => {
      state.status = "loading";
      console.log('ok tuyet voi');
      
    },
    getTasksSuccess: (state, action) => {
      state.status = "succeeded";
      state.cards = action.payload;
    },
    getTasksFailFure: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.error = action.payload;
    },
    addTasks: (state: Draft<TaskState>, action: PayloadAction<Task>) => {
      state.status = "loading";
    },
    addTasksSuccess: (state: Draft<TaskState>, action: PayloadAction<Task>) => {
      state.status = "succeeded";
      state.cards.push(action.payload);
    },
    addTaskFailure: (
      state: Draft<TaskState>,
      action: PayloadAction<string>
    ) => {
      state.status = "failed";
      state.error = action.payload;
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const { _id } = action.payload;
      const index = state.cards.findIndex((task) => task._id === _id);
      if (index !== -1) {
        state.cards[index] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<string | undefined>) => {
      state.cards = state.cards.filter((task) => task._id !== action.payload);
    },
  },
});

export const {
  getTasks,
  getTasksSuccess,
  getTasksFailFure,
  addTasks,
  addTasksSuccess,
  addTaskFailure,
  updateTask,
  deleteTask,
} = taskSlide.actions;

export const selectAllTask = (state: RootState) => state.task.cards;

export default taskSlide.reducer;
