import { useDispatch, useSelector } from "react-redux";
import {
  getMyRecipes,
  deleteRecipe,
  filterCommonRecipes,
} from "../../services/recipeSlice";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import Navbar from "../Navbar/Navbar";
import "./MyList.css";
import { useEffect } from "react";

const MyList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterCommonRecipes());
  }, [dispatch]);
  const data = useSelector(getMyRecipes);
  const handleClick = (item) => {
    dispatch(deleteRecipe(item));
    console.log(item);
  };
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <div className="row g-4">
          <div className="d-flex justify-content-center align-items-center">
            <div className="h2">My Recipes</div>
          </div>
          {data ? (
            data.map((item) => {
              return (
                <div
                  className="col-6 col-sm-6 col-lg-4 text-decoration-none"
                  key={item.title}
                >
                  <div className="img-container">
                    <img src={item.image} alt={item.title} />
                    <button
                      className="btn btn-danger delete"
                      onClick={() => handleClick(item.id)}
                    >
                      <DeleteIcon size={10} />
                    </button>
                  </div>
                  <Link
                    to={`/recipe/${item.id}`}
                    className="dish-title text-decoration-none"
                  >
                    {item.title}
                  </Link>
                </div>
              );
            })
          ) : (
            <h2>Loading</h2>
          )}
        </div>
      </div>
      <div className="container-fluid d-flex justify-content-center my-5">
        <Link to="/" className="btn btn-primary">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default MyList;
