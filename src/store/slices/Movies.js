import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axios";
export const productsAction = createAsyncThunk(
  "movies/getAll",
  async (pageNum) => {
    const res = await axiosInstance.get("popular", {
      params: {
        page: pageNum,
      },
    });
    return res.data.results;
  }
);

const productsSlice = createSlice({
  name: "movies",
  initialState: { movies: [] },
  extraReducers: (builder) => {
    builder.addCase(productsAction.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export default productsSlice.reducer;
