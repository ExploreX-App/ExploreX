import React from "react";
import "./HotelRoomCard.style.css";
import { Button, Col, Row } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaBed,
  FaRulerCombined,
  FaMoneyBillAlt,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HotelRoomCard = ({ room, hotel }) => {
  const navigate = useNavigate();
  const price = room?.product_price_breakdown;
  const goToReserve = () => {
    navigate("./reserve", {
      state: { hotel: hotel, room: room },
    });
  };
  return (
    <Row className="p-3 d-flex hotel-room-card-container">
      <Col className="hotel-room-card-box" md={8} xs={12}>
        {/* Room Name */}
        <div className="fs-5 hotel-room-name">
          {room?.room_name || "Standard Room"}
        </div>

        {/* Room Highlights */}
        <div className="hotel-room-bh_room_highlights-name-container">
          {room?.bh_room_highlights?.length > 0 ? (
            room.bh_room_highlights.map((hl, index) => (
              <div key={index} className="hotel-room-bh_room_highlights-name">
                {hl.name}
              </div>
            ))
          ) : (
            <></>
            // <div>No highlights available</div>
          )}
        </div>

        {/* Number of Guests */}
        <div className="hotel-info-item">
          <FaBed className="hotel-info-icon" />
          Number of guests: {room?.nr_adults || "1 adult"}
        </div>

        {/* Meal Plan */}
        <div className="hotel-info-item">
          <FaStar className="hotel-info-icon" />
          Meal plan: {room?.mealplan || "No meal included"}
        </div>

        {/* Accommodation Type */}
        <div className="hotel-info-item">
          <FaBed className="hotel-info-icon" />
          Accommodation type:{" "}
          {room?.name_without_policy ||
            room?.accommodation_type_name ||
            "Standard Room Type"}
        </div>

        {/* Room Surface */}
        <div className="hotel-info-item">
          <FaRulerCombined className="hotel-info-icon" />
          Average room size: {room?.room_surface_in_m2 || "30"} m²
        </div>

        {/* Maximum Occupancy */}
        <div className="hotel-info-item">
          <FaUsers className="hotel-info-icon" />
          Max Occupancy: {room?.max_occupancy || "2 guests"}
        </div>

        {/* Room Type */}
        <div className="hotel-info-item">
          <FaBed className="hotel-info-icon" />
          Room Type: {room?.room_type || "Standard Room"}
        </div>
      </Col>

      <Col md={4} xs={12}>
        <ul>
          {/* Payment Options */}
          <li>
            {room?.pay_in_advance === 1 ? "Pay in advance" : "Pay at property"}
          </li>

          {/* Refundable */}
          <li className="refundable">
            {room?.refundable === 1 ? "Refundable" : "Non-refundable"}
          </li>

          {/* Price Information */}
          <div className="price-section">
            <span className="room-price-label">Total (hotel currency):</span>
            {price?.gross_amount_hotel_currency?.amount_rounded ||
              "Contact for pricing"}
          </div>

          <div>
            <span className="room-price-label">
              Price for {price?.nr_stays || 1} nights (US):
            </span>
            {price?.gross_amount?.amount_rounded || "Contact for pricing"}
          </div>

          <div>
            <span className="room-price-label">Per night:</span>
            {price?.gross_amount_per_night?.amount_rounded ||
              "Contact for pricing"}
          </div>

          {/* Reserve Button */}
          <Button className="w-100" onClick={goToReserve}>
            Reserve
          </Button>
        </ul>
      </Col>
    </Row>
  );
};

export default HotelRoomCard;
