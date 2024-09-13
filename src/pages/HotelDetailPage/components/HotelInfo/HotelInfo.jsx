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

const HotelDetailInfo = ({ data, infoRef, adultNum }) => {
  return (
    <div id="info-n-rates" ref={infoRef} style={{ paddingTop: "80px" }}>
      <h3 style={{ color: "black" }}>Hotel Information</h3>

      <HotelRoomList
        hotelId={data.hotel_id}
        dateFrom={data.arrival_date}
        dateTo={data.departure_date}
        adultNum={adultNum}
      />
      </div>

  );
};

export default HotelDetailInfo;
