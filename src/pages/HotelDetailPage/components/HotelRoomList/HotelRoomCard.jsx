import React from "react";
import './HotelRoomCard.style.css'
import { Button } from "react-bootstrap";

const HotelRoomCard = ({ room }) => {
  const price = room?.product_price_breakdown;
  return (
    <div className="p-3 d-flex hotel-room-card-container">
      <div className="hotel-room-card-box">
        <div className="fs-5 hotel-room-name">{room?.room_name}</div>
        <div className="hotel-room-bh_room_highlights-name-container">
          {room?.bh_room_highlights.map((hl, index) => (
            <div className="hotel-room-bh_room_highlights-name">{hl.name}</div>
          ))}
        </div>
        <div className="room-surface">{room.room_surface_in_m2}m&sup2;</div>
        <div className="room-guest">Number of guests: {room?.nr_adults}</div>
        <div className="room-mealplan">{room?.mealplan}</div>
      </div>
      <ul>
        <li>
          {room?.pay_in_advance === 1 ? "Pay in advance" : "Pay at property"}
        </li>
        <li className="refundable">{room?.refundable === 1 ? "Refundable" : "Non-refundable"}</li>
        <div className="price-section">
          <span className="room-price-label">Total &#40;hotel currency&#41;:</span>
          {price.gross_amount_hotel_currency.amount_rounded}
        </div>
        <div>
        <span className="room-price-label">Price for {price.nr_stays} nights &#40;US&#41;:</span>
          {price.gross_amount.amount_rounded}
        </div>
        <div>
        <span className="room-price-label">per night:</span>
          {price.gross_amount_per_night.amount_rounded}
        </div>
        <Button>Reserve</Button>
      </ul>
    </div>
  );
};

export default HotelRoomCard;
