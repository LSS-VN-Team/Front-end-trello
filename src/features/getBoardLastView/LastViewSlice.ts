import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { BoardLastView} from "interfaces";

interface LastViewState {
    lastviews: BoardLastView[];
    status: "nothing" | "loading" | "succeeded" | "failed";
    error: string | null;
  }
  
  const initialState: LastViewState = {
    lastviews: [],
    status: "nothing",
    error: null,
  };
  export const LastViewSlice = createSlice({
    name: "lastview",
    initialState,
    reducers: {
      
      getLastView(state) {
        state.status = "loading";
      },
      getLastViewSuccess(state, action) {
        state.status = "succeeded";
        state.lastviews = action.payload;

      },
      getLastViewFailure(state, action) {
        state.status = "failed";
        state.error = action.payload;
      },
    },
  });
  
  export const {
    getLastView,
    getLastViewSuccess,
    getLastViewFailure,
  } = LastViewSlice.actions;
  
  export const selectAllLastView = (state: RootState) => state.lastview.lastviews;
  
  export default LastViewSlice.reducer;