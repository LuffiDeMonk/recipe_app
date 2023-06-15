import { configureStore, combineReducers } from "@reduxjs/toolkit";
import recipeReducer from "./recipeSlice";

export const store = configureStore({
  reducer: {
    recipe: recipeReducer,
  },
});
