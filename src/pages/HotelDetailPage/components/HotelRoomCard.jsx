import React from "react";

const HotelRoomCard = ({ room }) => {
  const price = room?.product_price_breakdown;
  return (
    <div className="p-3 d-flex" style={{ border: "black solid 1px" }}>
      <div>
        <div className="fs-5">{room?.room_name}</div>
        <div>
          {room?.bh_room_highlights.map((hl, index) => (
            <div>{hl.name}</div>
          ))}
        </div>
        <div>{room.room_surface_in_m2}m2</div>
        <div className="">Number of guests:{room?.nr_adults}</div>
        <div>{room?.mealplan}</div>
      </div>
      <ul>
        <li>
          {room?.pay_in_advance == 1 ? "Pay in advance" : "Pay at property"}
        </li>
        <li>{room?.refundable == 1 ? "Refundable" : "Non-refundable"}</li>
        <div>
          Total &#40;hotel currency&#41;:
          {price.gross_amount_hotel_currency.amount_rounded}
        </div>
        <div>
          Price for {price.nr_stays} nights &#40;US&#41;:
          {price.gross_amount.amount_rounded}
        </div>
        <div>
          per night:
          {price.gross_amount_per_night.amount_rounded}
        </div>
        <button>Reserve</button>
      </ul>
    </div>
  );
};

export default HotelRoomCard;
