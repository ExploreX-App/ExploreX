import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./HotelBookingCard.style.css";
import { IoIosArrowDown } from "react-icons/io";
import { useHotelsByKeywordQuery } from "../../../../hooks/useFetchHotelsByKeyword";

const HotelBookingCard = ({ hotel, room, reviewScore }) => {


  console.log("hotelcard", hotel);

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
  const policies = hotel?.cancellation_policies?  Object.values(hotel?.cancellation_policies) : []

  return (
    <div
      className="gap-3 hotelBookingCard-container mb-4"
      style={{ border: "1px solid black" }}
      //   onClick={goToDetail}
    >
      <div>
        <div>
          <img
            className="hotelBookingCard-img"
            src={hotel?.rooms &&
              (() => {
                const firstRoomKey = Object.keys(hotel.rooms)[0];
                return hotel.rooms[firstRoomKey]?.photos[0]?.url_max1280;
              })()}
            alt="room-image"
          />
        </div>
        <div className=" pe-3 ps-3 pb-2 d-flex flex-column justify-content-between">
          <div>
            <div className="mb-2">
              <div className="fs-4 fw-bold w-100 mt-2 hotelBookingCard-title">
                {hotel?.hotel_name || "hotel name unavailable"}
              </div>
              <div className="hotelBookingCard-address">
                {hotel?.address || "Not available"}
              </div>
            </div>
            <div className="d-flex align-items-start">
              <div className="hotelBookingCard-reviewScore">{reviewScore}</div>

              <div className="lh-1 d-flex mb-4">
                <div className="fs-6 fw-bold ps-2">Good</div>
                <div className="hotelBookingCard-reviewCount">23 reviews</div>
              </div>
            </div>

            <div className="lh-md">
              <Row className="pt-2 pb-2 me-1 ms-1 hotelBookingCard-checkinBox">
                <Col
                  lg={6}
                  sm={6}
                  className="d-flex flex-column align-items-center"
                >
                  {" "}
                  <div style={{ fontSize: "14px", color: "#636363" }}>
                    Check-in{" "}
                  </div>
                  <div
                    className="fw-bold hotelBookingCard-date"
                    style={{ fontSize: "17px" }}
                  >
                    {" "}
                    {hotel?.arrival_date}
                  </div>
                </Col>
                <Col
                  lg={6}
                  sm={6}
                  className="d-flex flex-column align-items-center"
                >
                  {" "}
                  <div style={{ fontSize: "14px", color: "#636363" }}>
                    Check-out
                  </div>
                  <div
                    className="fw-bold hotelBookingCard-date"
                    style={{ fontSize: "17px" }}
                  >
                    {hotel?.departure_date}{" "}
                  </div>
                </Col>
                <div
                  className="d-flex justify-content-end me-3"
                  style={{ fontSize: "12px" }}
                >
                  {numberOfNights}-nights stay
                </div>
              </Row>

              <div className="mt-3">
                <div style={{ fontSize: "14px", color: "#636363" }}>
                  {" "}
                  You Selected
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <b>1 room for 2 adults</b>
                  </div>{" "}
                  <IoIosArrowDown />{" "}
                </div>
              </div>
              <div className=" d-flex  justify-content-between align-items-end">
                <div style={{ color: "#d4111e" }}>
                  {policies.length>0 &&
                    policies[0]
                      .charAt(0)
                      .toUpperCase() +
                      policies.slice(1)}
                </div>
                <div className="mt-4 fw-bold text-primary">
                  Change your Selection
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBookingCard;
