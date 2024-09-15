import React from "react";
import "./CityCard.style.css";
import { useNavigate } from "react-router-dom";
import { DateObject } from "react-multi-date-picker";

const TourCard = ({ item }) => {
  const navigate = useNavigate();
  const goToDetails = () => {
    const dateFrom = new DateObject()
      .add(1, "days")
      .toString()
      .replaceAll("/", "-");
    const dateTo = new DateObject()
      .add(2, "days")
      .toString()
      .replaceAll("/", "-");
    const searchData = {
      keyword: item.name,
      dateFrom,
      dateTo,
      adultNum: 2,
    };
    navigate("/hotels", { state: searchData });
  };
  return (
    <div
      className="tourcard-wrap"
      style={{ margin: "0px" }}
      onClick={goToDetails}
    >
      <div className="position-relative">
        <img
          src={item.img}
          className="card-img"
          style={{ borderRadius: "10px", height: "270px" }}
          alt="cadana"
        />
        <div
          className="position-absolute z-10 h-50 bottom-0 m-0 w-100"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
            borderRadius: "10px",
          }}
        ></div>
      </div>
      <div
        className="position-absolute bottom-0 m-3 mb-4 text-white fw-bold fs-5"
        style={{ zIndex: 5 }}
      >
        {item.name}
      </div>
    </div>
  );
};

export default TourCard;
