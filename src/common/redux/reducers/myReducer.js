import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

// createAsyncThunk

const mySlice = createSlice({
  name: "my",
  initialState: {
    count: 0,
    data: [],
  },
  reducers: {
    increment: (state, action) => {
      console.log("action**", action);
      state.count += action.payload.number;
    },
    decrement: (state, action) => {
      state.count -= action.payload.number;
    },
  },
  extraReducers: () => {},
});

export default mySlice.reducer;

export const { increment, decrement } = mySlice.actions;
