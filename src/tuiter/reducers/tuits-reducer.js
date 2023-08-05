import { createSlice } from "@reduxjs/toolkit";
import { createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk } from "../services/tuits-thunks";

const initialState = {
  tuits: [],
  loading: false,
};

const currentUser = {
  userName: "NASA",
  handle: "@nasa",
  image: "nasa.png",
};

const templateTuit = {
  ...currentUser,
  topic: "Space",
  time: "2h",
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
};

const tuitsSlice = createSlice({
  name: "tuits",
  initialState,

  extraReducers: {
    [findTuitsThunk.pending]: (state) => {
      state.loading = true;
      state.tuits = [];
    },
    [findTuitsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = payload;
    },
    [findTuitsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [createTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits.push(payload);
    },
    [deleteTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = state.tuits.filter((t) => t._id !== payload);
    },

    [updateTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id);
      state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload };
    },
  },

  reducers: {},
});

export const { createTuit, deleteTuit, like, retuit, reply } = tuitsSlice.actions;
export default tuitsSlice.reducer;
