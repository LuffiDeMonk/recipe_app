import Axios from "axios";
const APP_KEY = "9b845f8b090c44b1af255fe9bedb31d1";

export const getRecipe = Axios.create({
  baseURL: "https://api.spoonacular.com/recipes",
  params: {
    apiKey: APP_KEY,
  },
});
