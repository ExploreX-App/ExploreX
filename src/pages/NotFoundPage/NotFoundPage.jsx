import React from "react";
import "./NotFoundPage.style.css";
import AppLayout from "../../layout/AppLayout";
// import "../../layout/AppLayout.style.css"

const NotFoundPage = () => {
  return (
    <div className="error-page">
      <img
        className="background-img"
        src="https://media.self.com/photos/5f0885ffef7a10ffa6640daa/4:3/w_2560%2Cc_limit/travel_plane_corona.jpeg"
        alt="404"
      />
      <div className="overlay"></div>
      <div className="error-content">
        <div className="error-number">404</div>
        <div className="error-oops">Oops!</div>
        <div className="error-description">
         The page you're looking for doesn't exist.
        </div>
        <button>Go Back Home</button>
      </div>
    </div>
  );
};

export default NotFoundPage;
