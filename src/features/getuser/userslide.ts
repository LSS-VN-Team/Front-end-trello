import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { UserResponseData } from "interfaces";

interface UserState {
    users: UserResponseData|null;
    status: "nothing" | "loading" | "succeeded" | "failed";
    error: string | null;
  }
  
  const initialState: UserState = {
    users: null,
    status: "nothing",
    error: null,
  };
  export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      
      getUsersId(state) {
        state.status = "loading";
      },
      getUsersIdSuccess(state, action) {
        state.status = "succeeded";
        state.users = action.payload;

      },
      getUsersIdFailure(state, action) {
        state.status = "failed";
        state.error = action.payload;
      },
    },
  });
  
  export const {
    getUsersId,
    getUsersIdSuccess,
    getUsersIdFailure,
  } = userSlice.actions;
  
  export const selectAllUser = (state: RootState) => state.user.users;
  
  export default userSlice.reducer;