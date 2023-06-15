import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectedRecipe,
  getSelectedRecipe,
  addRecipes,
} from "../../services/recipeSlice";
import Navbar from "../Navbar/Navbar";

import "./Recipe.css";

const Recipe = () => {
  const [buttonText, setButtonText] = useState("Add to my recipe");
  const { recipeID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(selectedRecipe);
  useEffect(() => {
    dispatch(getSelectedRecipe(recipeID));
  }, [dispatch]);
  const handleClick = (data) => {
    setButtonText("Added to my recipe");
    dispatch(addRecipes(data));
    console.log(data);
  };
  return (
    <>
      <Navbar />
      {data ? (
        <div className="container-fluid">
          <div className="text-center h1 mt-2">{data.title}</div>
          <div className="image-container">
            <img src={data.image} alt={data.title} />
          </div>
          <div className="row mt-4 px-1 px-lg-4">
            <div
              className="col-12 lh-lg"
              dangerouslySetInnerHTML={{ __html: `${data.summary}` }}
            />
          </div>
          <div className="container-fluid my-4 d-flex justify-content-center">
            <div className="nutrition row">
              <div className="col d-block d-lg-flex flex-column">
                <div className="title text-center">Servings:</div>
                <div className="amount text-center">{data.servings}</div>
              </div>
              <div className="col d-block d-lg-flex flex-column">
                <div className="title text-center">Price per serving:</div>
                <div className="amount text-center">
                  ${data.pricePerServing}
                </div>
              </div>
              <div className="col d-block d-lg-flex flex-column">
                <div className="title text-center">Ready in:</div>
                <div className="amount text-center">
                  {data.readyInMinutes}mins
                </div>
              </div>
            </div>
          </div>
          <div className="row px-1 px-lg-4 gy-2 gx-lg-2">
            <div className="col-12 col-lg-6">
              <div className="h1">Ingredients</div>
              {data.extendedIngredients ? (
                data.extendedIngredients.map((item) => {
                  return (
                    <div className="item-list" key={item.original}>
                      {item.original}
                    </div>
                  );
                })
              ) : (
                <h2>Loading...</h2>
              )}
            </div>
            <div className="col-12 col-lg-6">
              <div className="d-flex justify-content-between">
                <div className="h1">Instructions</div>
                <div
                  className="btn btn-success d-flex align-items-center"
                  onClick={() => handleClick(data)}
                >
                  {buttonText}
                </div>
              </div>
              <div className="item-list my-2">
                <div
                  className="p"
                  dangerouslySetInnerHTML={{ __html: `${data.instructions}` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading</h2>
      )}
    </>
  );
};

export default Recipe;
