import React from "react";
import HotelRoomList from "../HotelRoomList/HotelRoomList";
import {
  FaMapMarkerAlt,
  FaBed,
  FaRulerCombined,
  FaMoneyBillAlt,
  FaStar,
} from "react-icons/fa";
import "./HotelInfo.style.css";

const HotelDetailInfo = ({ data, infoRef, adultNum, reviewScore }) => {
  return (
    <div id="info-n-rates" ref={infoRef} style={{ paddingTop: "80px", margin: "0px 10px" }}>
      <div className="fs-4 fw-bold mb-3">Choose your room</div>

      <HotelRoomList
        hotelId={data?.hotel_id}
        dateFrom={data?.arrival_date}
        dateTo={data?.departure_date}
        adultNum={adultNum}
        reviewScore={reviewScore}
      />
      </div>

  );
};

export default HotelDetailInfo;
