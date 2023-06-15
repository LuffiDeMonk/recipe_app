import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getSearchRecipe } from "../../services/recipeSlice";

const Navbar = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/search");
    dispatch(getSearchRecipe(term));
  };

  return (
    <div className="navbar navbar-expand-lg bg-light px-2 sticky-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Delish
        </Link>
        <button className="navbar-toggler">
          <span
            className="navbar-toggler-icon"
            data-bs-target="#hide"
            data-bs-toggle="collapse"
            aria-controls="hide"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></span>
        </button>
        <div className="collapse navbar-collapse" id="hide">
          <ul className="navbar-nav">
            <form className="d-flex" onSubmit={(event) => handleSubmit(event)}>
              <input
                type="text"
                className="form-control me-2"
                placeholder="Search..."
                onChange={(event) => handleChange(event)}
              />
            </form>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Dinner
              </a>
            </li>
            <li className="nav-item">
              <Link to="/my-list" className="nav-link text-decoration-none">
                Recipes
              </Link>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Tools & tips
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Grocery
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
