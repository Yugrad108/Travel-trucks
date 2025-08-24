import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorite",
  initialState: {
    items: [],
  },
  reducers: {
    toggleFavoriteTruck(state, action) {
      state.items.find((item) => item.id === action.payload.id)
        ? (state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          ))
        : state.items.push(action.payload);
    },
  },
});

export const {toggleFavoriteTruck} = favoritesSlice.actions;

const favoriteReducer = favoritesSlice.reducer;
export default favoriteReducer;