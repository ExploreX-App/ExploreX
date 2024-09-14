import React from "react";
import "./CityCard.style.css"
import { useNavigate } from "react-router-dom";
import { DateObject } from "react-multi-date-picker";

const TourCard = ({item}) => {
  const navigate = useNavigate()
  const goToDetails = () => {
    const dateFrom = new DateObject().add(1, "days").toString().replaceAll("/", "-")
    const dateTo = new DateObject().add(2, "days").toString().replaceAll("/", "-")
    const searchData = {
      keyword:item.name,
      dateFrom,
      dateTo,
      adultNum: 2,
    };
    console.log(searchData)
    navigate("/hotels", { state: searchData });
  }
  return (
    <div className="tourcard-wrap position-relative" style={{ margin: "0px" }} onClick={goToDetails}>
      <img
        src={item.img}
        className="card-img"
        style={{ borderRadius: "10px", height: "300px" }}
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
        className="position-absolute bottom-0 m-3 text-white fw-bold fs-5"
        style={{ zIndex: 5 }}
      >
        {item.name}
      </div>
    </div>
  );
};

export default TourCard;
