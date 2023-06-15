import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRecipe } from "./apiCred";

export const getRecipeInformation = createAsyncThunk(
  "recipe/getRecipeInformation",
  async () => {
    let response = await getRecipe.get("/random?number=6&limitLicense=true");
    return response.data.recipes;
  }
);
export const getSearchRecipe = createAsyncThunk(
  "recipe/getSearchRecipe",
  async (term) => {
    let response = await getRecipe.get(`/complexSearch?query=${term}&number=9`);
    return response.data.results;
  }
);
export const getSelectedRecipe = createAsyncThunk(
  "recipe/getSelectedRecipe",
  async (id) => {
    let response = await getRecipe.get(`/${id}/information`);
    return response.data;
  }
);

const initialState = {
  randomRecipe: [],
  recipeList: [],
  selectedRecipe: [],
  myRecipes: [],
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    cleanRecipeList: (state) => {
      state.recipeList = [];
    },
    addRecipes: (state, { payload }) => {
      state.myRecipes.push(payload);
    },
    filterCommonRecipes: (state) => {
      const uniqueArray = state.myRecipes.filter((item, index, self) => {
        return index === self.findIndex((t) => t.id === item.id);
      });
      state.myRecipes = uniqueArray;
    },

    deleteRecipe: (state, { payload }) => {
      const array = state.myRecipes.filter((item) => {
        return item.id !== payload;
      });
      state.myRecipes = array;
    },
  },
  extraReducers: {
    [getRecipeInformation.fulfilled]: (state, { payload }) => {
      return { ...state, randomRecipe: payload };
    },

    [getSearchRecipe.fulfilled]: (state, { payload }) => {
      return { ...state, recipeList: payload };
    },
    [getSelectedRecipe.fulfilled]: (state, { payload }) => {
      return { ...state, selectedRecipe: payload };
    },
  },
});

export default recipeSlice.reducer;
export const {
  cleanRecipeList,
  addRecipes,
  deleteRecipe,
  filterCommonRecipes,
} = recipeSlice.actions;
export const getRandomRecipes = (state) => state.recipe.randomRecipe;
export const getRecipeList = (state) => state.recipe.recipeList;
export const selectedRecipe = (state) => state.recipe.selectedRecipe;
export const getMyRecipes = (state) => state.recipe.myRecipes;
