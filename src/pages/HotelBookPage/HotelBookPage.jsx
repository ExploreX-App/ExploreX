import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HotelBookPage.style.css"
import HotelBookingCard from "./component/HotelBookingCard/HotelBookingCard";
import HotelBookingDetailCard from "./component/HotelBookingDetailCard/HotelBookingDetailCard";
import HotelBookingInput from "./component/HotelBookingInput/HotelBookingInput";
import { useLocation, useParams } from "react-router-dom";

const HotelBookPage = () => {

  const location = useLocation()

  const { hotel, room, reviewScore } = location.state || {}
  console.log(location.state)
  
  return (
    <div>
      <Container>
        <Row>
                  <Col lg={4} sm={12}>
                      <HotelBookingCard hotel={hotel} room={room} reviewScore={ reviewScore} />
                       <HotelBookingDetailCard hotel={hotel} room={room} reviewScore={ reviewScore} />

                  </Col>
                  <Col lg={8} sm={12}>
            <HotelBookingInput  />
                  </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HotelBookPage;
