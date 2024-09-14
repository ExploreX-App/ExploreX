import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Form, Button } from "react-bootstrap";

const CheckoutForm = () => {
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
    }, 1000);
  };

  const handleChange = () => {
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <PaymentElement onChange={handleChange} />
      <Button type="submit" disabled={!stripe || !elements}>
        Pay
      </Button>
      {paymentSuccess && <div>Payment was successful (simulation).</div>}
      {errorMessage && <div>{errorMessage}</div>}
    </Form>
  );
};

export default CheckoutForm;
