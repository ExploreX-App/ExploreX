import React from "react";
import { Col, Row } from "react-bootstrap";
import "./HotelBookingDetailCard.style.css";
const HotelBookingDetailCard = () => {
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
              <div>1 room x 2 nights</div>
              <div>CA $697.50</div>
            </div>
            <div style={{ fontSize: "14px", color: "#636363" }}>CA $348.75 average per night</div>
          </div>

          <div className=" d-flex justify-content-between mt-3 mb-4">
            <div>Taxes</div>
            <div>CA $90.68</div>
                  </div>
                  


                {/* section2 price total, and property fee */}
          <div className="hotelBookingDetailCard-line"></div>

          <div className=" d-flex justify-content-between fs-4 fw-bold mt-4 mb-3 }}">
            <div>Total</div>
            <div>CA $788.18</div>
          </div>

          <div className="fw-bold mt-3 mb-3">
            Deposits collected by property
          </div>

          <div className="mb-3">
            <div className=" d-flex justify-content-between">
              <div>1 room x 2 nights</div>
              <div>CA $697.50</div>
            </div>
                        <div style={{ fontSize: "14px", color: "#636363" }}>CA $348.75 average per night</div>
          </div>
          <div>
            <div className=" d-flex justify-content-between">
              <div>1 room x 2 nights</div>
              <div>CA $697.50</div>
            </div>
            <div style={{ fontSize: "14px", color: "#636363" }}>CA $348.75 average per night</div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default HotelBookingDetailCard;
