import React from "react";
import HotelBookingCard from "../../HotelBookPage/component/HotelBookingCard/HotelBookingCard";
import { Container, Row, Col } from "react-bootstrap";

const SavedHotels = () => {
  const bookings = JSON.parse(localStorage.getItem("bookings"));
  if (!bookings) {
    return;
  }
  return (
    <Container>
      <div className="fs-4 fw-bold mb-2">Your Bookings</div>
      <Row>
        {bookings.map((booking, index) => (
          <Col key={index} md={4} className="mb-4">
            <HotelBookingCard
              hotel={booking.hotel}
              room={booking.room}
              reviewScore={booking.reviewScore}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SavedHotels;
