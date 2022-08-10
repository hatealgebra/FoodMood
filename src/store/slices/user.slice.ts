import { createSlice } from "@reduxjs/toolkit";
import { UserSliceProps } from "../../types/async.types";

import type { RootState } from "../store";
import {
  deleteUserAcc,
  loginUser,
  signOutUser,
  updateUser,
} from "../thunks/authentication.thunks";

const initialState = {
  status: "idle",
} as UserSliceProps;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(loginUser.fulfilled, (state) => {
      state.status = "idle";
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.error = payload;
      state.status = "idle";
    });
    builder.addCase(updateUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.status = "idle";
    });
    builder.addCase(updateUser.rejected, (state, { payload }) => {
      state.error = payload;
      state.status = "idle";
    });
    builder.addCase(signOutUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(signOutUser.fulfilled, (state) => {
      state.status = "idle";
    });
    builder.addCase(signOutUser.rejected, (state, { payload }) => {
      state.status = "idle";
      state.error = payload;
    });
    builder.addCase(deleteUserAcc.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(deleteUserAcc.fulfilled, (state) => {
      state.status = "idle";
    });
    builder.addCase(deleteUserAcc.rejected, (state, { payload }) => {
      state.status = "idle";
      state.error = payload;
    });
  },
});

export const selectUserStatus = (state: RootState) => state.user.status;
export const selectUserError = (state: RootState) => state.user.error;

export default userSlice.reducer;
