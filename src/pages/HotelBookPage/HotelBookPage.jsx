import React,{useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HotelBookPage.style.css"
import HotelBookingCard from "./component/HotelBookingCard/HotelBookingCard";
import HotelBookingDetailCard from "./component/HotelBookingDetailCard/HotelBookingDetailCard";
import HotelBookingInput from "./component/HotelBookingInput/HotelBookingInput";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CheckoutForm from "./component/CheckoutForm/CheckoutForm"
import { Elements } from "@stripe/react-stripe-js";
import {loadStripe} from '@stripe/stripe-js';


const HotelBookPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { hotel, room, reviewScore } = location.state || {};
  console.log(location.state);

  const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

  const options = {
    mode: 'payment',
    amount: 1099,
    currency: 'usd',
    appearance: {
      /*...*/
    },
  };

  // Initialize bookingDetails as an array
  const [bookingDetails, setBookingDetails] = useState(() => {
    
    const savedDetails = localStorage.getItem("bookingDetails");
    return savedDetails ? JSON.parse(savedDetails): {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
    };
  });

  // Update bookingDetails in the array format
  const handleBookingInputChange = (field, value) => {
    setBookingDetails(prevState => ({
      ...prevState,
      [field]: value,
    }))
  };


  const handleBookingCardInfo = () => {
    const bookingInfoObject = [
      {
        booking: {...bookingDetails},
        hotel: {
          name: hotel?.hotel_name || "hotel name unavailable",
          arrival_date: hotel?.arrival_date || "N/A",
          departure_date: hotel?.departure_date || "N/A",
          room: room || "N/A",
          reviewScore: reviewScore || "N/A",
          address: hotel?.address|| "Not available"

        }
      }
    ]
    const existingBookings = JSON.parse(localStorage.getItem("bookingHistory")) || [];
    const updatedBookings = [...existingBookings, ...bookingInfoObject];
     localStorage.setItem("bookingDetails", JSON.stringify(updatedBookings));
    navigate(""
      , { state: updatedBookings })

}

  
  
  
  // Save to localStorage
  const handleBookingSubmit = () => {
    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    console.log("info", bookingDetails);
    handleBookingCardInfo()
  };
  return (
    <div>
      <Container>
        <Row>
                  <Col lg={4} sm={12}>
                      <HotelBookingCard hotel={hotel} room={room} reviewScore={ reviewScore} />
                       <HotelBookingDetailCard hotel={hotel} room={room} reviewScore={ reviewScore} />

                  </Col>
                  <Col lg={8} sm={12}>
            <HotelBookingInput bookingInput={handleBookingInputChange} />
            <div id="root"></div>
              <Elements stripe={stripePromise} options={options}>
              <CheckoutForm bookingSubmit={handleBookingSubmit} /></Elements>
                  </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HotelBookPage;
