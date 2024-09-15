import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Form, Button } from "react-bootstrap";
import "./CheckoutForm.style.css"
import { useNavigate } from "react-router-dom";
import SuccessPopup from "../SuccessPopup/SuccessPopup";

const CheckoutForm = ({bookingInfo}) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showPopup, setShowPopup] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();

    let savedHotels =
      JSON.parse(localStorage.getItem("savedHotels")) || [];
    savedHotels.push(bookingInfo)
    localStorage.setItem("savedHotels", JSON.stringify(savedHotels))
    if (!stripe || !elements) {
      setErrorMessage("Stripe has not been properly initialized.");
      return;
    }

    setErrorMessage(null);

    setTimeout(() => {
      setPaymentSuccess(true)
      setShowPopup(true)// show popup
   

      setTimeout(() => {
        navigate('/profile')
 
      }, 2500);
    }, 1000);
  };

  const handleChange = () => {
    if (errorMessage) {
      setErrorMessage(null);
    }    
  };


  const handleClosePopup = () => {
    setShowPopup(false)
  }


  return (
    <div className="checkout-container" >
      <div className="fs-3 fw-bold">Payment</div>
    <Form onSubmit={handleSubmit}>
        <PaymentElement onChange={handleChange} />
          {paymentSuccess && <div>Payment was successful (simulation).</div>}
      {errorMessage && <div>{errorMessage}</div>}
        <div className="d-flex justify-content-end">
     <Button className="mt-3 checkout-btn" type="submit" disabled={!stripe || !elements}>
        Booking
      </Button>     
        </div>
      

      </Form>
    
      <SuccessPopup 
        type="success" 
        text="Payment was successful!" 
        show={showPopup} 
        onClose={handleClosePopup} 
      />
    </div>
  );
};
export default CheckoutForm;