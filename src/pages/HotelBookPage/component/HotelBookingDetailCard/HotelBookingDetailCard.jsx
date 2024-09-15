import React from "react";
import { Col, Row } from "react-bootstrap";
import "./HotelBookingDetailCard.style.css";
const HotelBookingDetailCard = ({ hotel, room, reviewScore }) => {
  console.log("detail", hotel)

   const checkInDate = hotel?.arrival_date;
  const checkOutDate = hotel?.departure_date;

  const calculateNights = (checkInDate, checkOutDate) => {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const differenceInTime = checkOut - checkIn;
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays;
  };
  const numberOfNights = calculateNights(checkInDate, checkOutDate);
  const roomPricePerNight = hotel?.product_price_breakdown.all_inclusive_amount.amount_rounded
  const numericValue = roomPricePerNight.replace(/\D/g, '');
  const taxPrice = Math.floor(numericValue * 0.07)
console.log("room", roomPricePerNight)

console.log("per",numericValue)

    return (
      
        // section 1 price detail 
    <div className="hotelBookingDetailCard-container mb-4">
      <div className=" pe-3 ps-3 pb-3 d-flex flex-column justify-content-between">
        <div>
          <div className="mb-2">
            <div className="fs-4 fw-bold w-100 mt-2 hotelBookingDetailCard-title">
              Price details
            </div>
          </div>
          <div>
            <div className=" d-flex justify-content-between">
                <div>1 room x {numberOfNights} nights</div>
                <div>{hotel?.currency_code} ${numericValue -taxPrice}</div>
            </div>
          </div>

          <div className=" d-flex justify-content-between mt-3 mb-4">
            <div>Taxes</div>
              <div>{hotel?.currency_code} ${taxPrice}</div>
                  </div>

                {/* section2 price total, and property fee */}
          <div className="hotelBookingDetailCard-line"></div>

          <div className=" d-flex justify-content-between fs-4 fw-bold mt-4 mb-3 }}">
            <div>Total</div>
              <div>{hotel?.currency_code} ${ numericValue}</div>
          </div>

          <div className="fw-bold mt-3 mb-3">
            Deposits collected by property
          </div>

        
          <div>
            <div className=" d-flex justify-content-between">
              <div>1 room x {numberOfNights} nights</div>
              <div>{hotel?.currency_code} {numericValue * numberOfNights}</div>
            </div>
            <div style={{ fontSize: "14px", color: "#636363" }}>{hotel?.currency_code} {numericValue * numberOfNights} average per night</div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default HotelBookingDetailCard;
