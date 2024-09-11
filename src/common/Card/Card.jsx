import React from "react";
import { useNavigate } from "react-router-dom";

const TourCard = ({item}) => {
  return (
    <div className="tourcard-wrap position-relative" style={{ margin: "10px" }}>
      <img
        src={item.img}
        className="card-img"
        style={{ aspectRatio: "2/3", borderRadius: "10px" }}
        alt="cadana"
      />
      <div
        className="position-absolute"
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
        style={{ zIndex: 1 }}
      >
        {item.name}
      </div>
    </div>
  );
};

export default TourCard;
