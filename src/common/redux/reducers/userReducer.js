import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "my",
  initialState: {
    user: {},
  },
  reducers: {},
  extraReducers: () => {},
});

export default userSlice.reducer;
