import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Form, Button } from "react-bootstrap";
import "./CheckoutForm.style.css"

const CheckoutForm = ({bookingSubmit}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      setErrorMessage("Stripe has not been properly initialized.");
      return;
    }

    setErrorMessage(null);

    setTimeout(() => {
      setPaymentSuccess(true);
      bookingSubmit();
    }, 1000);
  };

  const handleChange = () => {
    if (errorMessage) {
      setErrorMessage(null);
    }    
  };


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
      

    </Form></div>
  );
};
export default CheckoutForm;