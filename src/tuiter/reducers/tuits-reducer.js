import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";

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
  initialState: { tuits: tuits },
  reducers: {
    createTuit(state, action) {
      state.tuits.unshift({
        ...action.payload,
        ...templateTuit,
        _id: new Date().getTime(),
      });
    },
    deleteTuit(state, action) {
      const index = state.tuits.findIndex((tuit) => tuit._id === action.payload);
      state.tuits.splice(index, 1);
    },
    like(state, action) {
      const index = state.tuits.findIndex((tuit) => tuit._id === action.payload);

      if (state.tuits[index].liked) {
        state.tuits[index].likes -= 1;
      } else {
        state.tuits[index].likes += 1;
      }
      state.tuits[index].liked = !state.tuits[index].liked;
    },

    retuit(state, action) {
      const index = state.tuits.findIndex((tuit) => tuit._id === action.payload);
      state.tuits[index].retuits += 1;
    },
    reply(state, action) {
      const index = state.tuits.findIndex((tuit) => tuit._id === action.payload);
      state.tuits[index].replies += 1;
    },
  },
});

export const { createTuit, deleteTuit, like, retuit, reply } = tuitsSlice.actions;
export default tuitsSlice.reducer;
