import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    cache: {},
  },
  reducers: {
    cacheResults: (state, action) => {
      state.cache = { ...state.cache, ...action.payload };
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
/**
 * Data Structure to store all the suggestions
 * Cache:
 * Using array : search takes o(n)
 * Using Object or map: search takes o(1)
 * Using new Map() class: even more optimised in search
 */
