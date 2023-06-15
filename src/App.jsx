import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import "./components/Navbar/Navbar.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Hero from "./components/Hero/Hero";
import RecipeList from "./components/RecipeList/RecipeList";
import Recipe from "./components/Recipe/Recipe";
import MyList from "./components/myList/MyList";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/search" element={<RecipeList />} />
        <Route path="/recipe/:recipeID" element={<Recipe />} />
        <Route path="/my-list" element={<MyList />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
