import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HotelBookPage.style.css"
import HotelBookingCard from "./component/HotelBookingCard/HotelBookingCard";
import HotelBookingDetailCard from "./component/HotelBookingDetailCard/HotelBookingDetailCard";
import HotelBookingInput from "./component/HotelBookingInput/HotelBookingInput";

const HotelBookPage = () => {
  return (
    <div>
      <Container>
        <Row>
                  <Col lg={4} sm={12}>
                      <HotelBookingCard />
                       <HotelBookingDetailCard />

                  </Col>
                  <Col lg={8} sm={12}>
                  <HotelBookingInput />
                  </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HotelBookPage;
