import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { IRegister } from "interfaces";
import { UserResponse } from "./interface";

interface RegisterState {
  info: UserResponse;
  isLoading: boolean;
  error: string;
  isRegistered: boolean;
}

const initialState: RegisterState = {
  isLoading: false,
  error: "",
  isRegistered: false,
  info: {
    _id: "",
    firstName: "",
    lastName: "",
    avatar: "",
    role: "user",
    status: "inactive",
    createdAt: new Date(),
    updatedAt: new Date(),
    token: ""
  },
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerHome: (state, action: PayloadAction<IRegister>) => {
      state.isLoading = true;
    },
    registerHomeSuccess: (state, action: PayloadAction<UserResponse>) => {
      state.isLoading = false;
      state.error = "";
      state.isRegistered = true;
      state.info = action.payload;
    },
    registerHomeFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isRegistered = false;
    },
    resetRegisterState: (state) => {
      state.isLoading = false;
      state.error = "";
      state.isRegistered = false;
    },
  },
});

export const {
  registerHome,
  registerHomeSuccess,
  registerHomeFailure,
  resetRegisterState,
} = registerSlice.actions;

export const selectRegisterIsLoading = (state: RootState) => state.register.isLoading;
export const selectRegisterError = (state: RootState) => state.register.error;
export const selectRegisterInfo = (state: RootState) => state.register.info;
export const selectIsRegistered = (state: RootState) => state.register.isRegistered;

export default registerSlice.reducer;