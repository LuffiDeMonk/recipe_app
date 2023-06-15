import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanRecipeList, getRecipeList } from "../../services/recipeSlice";
import Navbar from "../Navbar/Navbar";
import "./RecipeList.css";

const RecipeList = () => {
  const data = useSelector(getRecipeList);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      console.log("Cleanup!!!");
      dispatch(cleanRecipeList);
    };
  });
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="wrapper">
          <div className="row g-4">
            {data ? (
              data.map((item) => {
                return (
                  <Link
                    to={`/recipe/${item.id}`}
                    className="text-decoration-none col-6 col-sm-6 col-lg-4"
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
    </div>
  );
};

export default RecipeList;
