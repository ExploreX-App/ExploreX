import React from "react";

const HotelCard = ({ hotel }) => {
  const hotelImg = hotel.photoUrls[0].replace("square60", "square300"); // photo size adjusted
  const { currency, value } = hotel?.priceBreakdown?.grossPrice;
  return (
    <div className="p-3 m-3 w-50 d-flex gap-3" style={{ border: "1px solid black" }}>
      <img className="" src={hotelImg} alt="" />
      <div>
        <div className="fs-5 fw-bold">{hotel?.name}</div>
        <div>{currency} {value.toFixed(2)}</div>
        <div>Review: {hotel.reviewCount}</div>
        <div>Score: {hotel.reviewScore}</div>
        <div>{hotel.reviewScoreWord}</div>
        <button>See availability</button>
      </div>
    </div>
  );
};

export default HotelCard;
