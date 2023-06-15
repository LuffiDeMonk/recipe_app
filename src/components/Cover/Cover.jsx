import React from "react";
import "./Cover.css";

const Cover = () => {
  return (
    <div className="imageContainer">
      <img
        src="https://media.istockphoto.com/id/915379562/photo/scones-with-oats-cranberry-and-pecan-nuts-top-view.jpg?s=612x612&w=is&k=20&c=G1yogTjGD-RYn_6ibEtANZPYrp_UXaX_2Lwp7D6JE2c="
        alt="Cranberry-Orange Scones"
      />
      <div className="logoText h1">delish</div>
      <div className="titleText">
        <div className="heading">BUTTERY, CRUMBLY PERFECTION.</div>
        <div className="titleLink">Cranberry-Orange Scones</div>
      </div>
    </div>
  );
};

export default Cover;
