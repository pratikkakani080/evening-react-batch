import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { ApiInstance } from "../../utils/api";

export const getProducts = createAsyncThunk(
  'my/getProducts',
  async (payload, thunkAPI) => {
    try {
      let res = await ApiInstance('/prducts')
      return res
    } catch (error) {
      return thunkAPI.rejectWithValue('some custom error message')
    }
  }
)

const mySlice = createSlice({
  name: "my",
  initialState: {
    count: 0,
    data: [],
    products: {},
    loading: 'init',
    error: ''
  },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload.number;
    },
    decrement: (state, action) => {
      state.count -= action.payload.number;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.loading = 'loading'
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload.data
        state.loading = 'fulfilled'
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = 'rejected'
        state.error = action.payload
      })
  },
});

export default mySlice.reducer;

export const { increment, decrement } = mySlice.actions;
