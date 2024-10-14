import { createSlice } from "@reduxjs/toolkit";

const mySlice = createSlice({
  name: "my",
  initialState: {
    count: 0,
  },
  reducers: {},
  extraReducers: () => {},
});

export default mySlice.reducer;
