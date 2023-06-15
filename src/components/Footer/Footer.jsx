import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from "../../../node_modules/react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark footer">
        <div className="wrapper my-3 mx-4">
          <div className="row">
            <div className="col-12 col-lg-6 text-center">
              <Link
                to="/"
                className="h1 fs-2 text-decoration-none"
                style={{ color: "white" }}
              >
                Delish
              </Link>
            </div>
            <div className="col-12 col-lg-6 text-left d-flex justify-content-around icon">
              <FaFacebookF />
              <FaTwitter />
              <FaPinterestP />
              <FaYoutube />
              <FaInstagram />
            </div>
          </div>
          <div className="link-wrapper">
            <div className="row gx-2 gy-2">
              <div className="col-12 col-lg-3">
                <div className="d-lg-flex justify-content-center">
                  <Link to="/" className="text-decoration-none text-light">
                    Home
                  </Link>
                </div>
              </div>
              <div className="col-12 col-lg-3 text-lg-center">
                <div className="d-lg-flex justify-content-center">
                  <Link
                    to="/my-list"
                    className="text-decoration-none text-light"
                  >
                    My Recipes
                  </Link>
                </div>
              </div>
              <div className="col-12 col-lg-3 text-lg-center">
                <div className="d-lg-flex justify-content-center">
                  <Link to="/" className="text-decoration-none text-light">
                    More Info
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-light footerText">
            The content of this website is for educational purposes only and is
            not intended to be a substitute for professional medical advice,
            diagnosis, or treatment. Always seek the advice of a qualified
            healthcare provider with any questions you may have regarding a
            medical condition. Never disregard professional medical advice or
            delay in seeking it because of something you have read on this
            website. If you think you may have a medical emergency, call your
            doctor or 911 immediately. The use of this website does not create a
            doctor-patient relationship between you and any healthcare provider.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
