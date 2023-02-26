import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div class="container">
        <div class="Image">
          <img src={require("../../Images/lens.jpg")} alt="lens" />
        </div>
        <div class="Name">
          <h1>10x Team</h1>
          <div className="btn">
            <button>
              <Link
                to="/PostView"
                style={{
                  textDecoration: "none",
                  color: "#006238",
                }}
              >Enter</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
