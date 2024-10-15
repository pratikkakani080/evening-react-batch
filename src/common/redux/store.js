import { configureStore } from "@reduxjs/toolkit";
import mySlice from "./reducers/myReducer";
import userSlice from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    my: mySlice,
    user: userSlice,
  },
});

export default store;
