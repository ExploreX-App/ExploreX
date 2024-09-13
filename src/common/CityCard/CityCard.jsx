import React from "react";
import "./CityCard.style.css"

const TourCard = ({item}) => {
  return (
    <div className="tourcard-wrap position-relative" style={{ margin: "10px" }}>
      <img
        src={item.img}
        className="card-img"
        style={{ aspectRatio: "4/5", borderRadius: "10px" }}
        alt="cadana"
      />
      <div
        className="overlay position-absolute"
        style={{
          bottom: 0,
          left: 0,
          right: 0,
          height: "50%",
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
          borderRadius: "0 0 10px 10px",
        }}
      ></div>
      <div
        className="position-absolute bottom-0 m-3 text-white fw-bold"
        style={{ zIndex: 5 }}
      >
        {item.name}
      </div>
    </div>
  );
};

export default TourCard;
