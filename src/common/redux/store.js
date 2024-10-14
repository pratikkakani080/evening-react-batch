import { configureStore } from "@reduxjs/toolkit";
import mySlice from "./reducers/myReducer";

const store = configureStore({
  reducer: {
    my: mySlice,
  },
});

export default store;
