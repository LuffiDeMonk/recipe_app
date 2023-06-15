import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./RandomRecipe.css";
import {
  getRandomRecipes,
  getRecipeInformation,
} from "../../services/recipeSlice";
import { Link } from "react-router-dom";

const RandomRecipe = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipeInformation());
  }, [dispatch]);
  const data = useSelector(getRandomRecipes);

  return (
    <>
      <div className="container-fluid">
        <div className="text-title">Today's Exciting Recipes</div>
        <div className="wrapper">
          <div className="row g-4">
            {data ? (
              data.map((item) => {
                return (
                  <Link
                    to={`/recipe/${item.id}`}
                    className="col-6 col-sm-6 col-lg-4 text-decoration-none"
                    key={item.id}
                  >
                    <div className="img-container">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="dish-title">{item.title}</div>
                  </Link>
                );
              })
            ) : (
              <h2>Loading</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomRecipe;
