import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/UserSlices";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;
