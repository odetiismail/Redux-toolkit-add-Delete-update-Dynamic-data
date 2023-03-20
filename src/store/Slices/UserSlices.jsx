import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      console.log(state)
     
    },
    deleteUsers(state, action) {
      state.pop(action.payload);
    },
  },
});

export default userSlice.reducer;
export const { addUser, removeUser, deleteUsers } = userSlice.actions;
