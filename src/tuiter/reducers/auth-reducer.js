import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, profileThunk, updateUserThunk } from "../services/auth-thunks";
import { register } from "../services/auth-service";

const authSlice = createSlice({
  name: "auth",
  initialState: { currentUser: null },
  reducers: {},
  extraReducers: {
    [loginThunk.fulfilled]: (state, { payload }) => {
      console.log('login done, setting user: ', payload)
      state.currentUser = payload;
    },
    [logoutThunk.fulfilled]: (state) => {
      console.log('logout, user null')
      state.currentUser = null;
    },
    [profileThunk.fulfilled]: (state, { payload }) => {
      console.log('profile done, setting user: ', payload)
      state.currentUser = payload;
    },
    [profileThunk.rejected]: (state, { payload }) => {
      console.log('profile rejected, user null')
      alert("There is no user")
      state.currentUser = null;
    },
    // [profileThunk.pending]: (state, action) => {
    //   console.log('profile pending, user null')
    //   state.currentUser = null;
    // },
    [updateUserThunk.fulfilled]: (state, { payload }) => {
      console.log('update, user ser')
      state.currentUser = payload;
    },
    [register.fulfilled]: (state, { payload }) => {
      console.log('registered, setting user')
      state.currentUser = payload;
    },
  },
});
export default authSlice.reducer;
