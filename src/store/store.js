import { configureStore } from "@reduxjs/toolkit";
import FavoritesReducer from "./slices/Favorites";
import productsReducer from "./slices/Movies";

const store = configureStore({
  reducer: {
    favorites: FavoritesReducer,
    movies: productsReducer,
  },
});

export default store;
