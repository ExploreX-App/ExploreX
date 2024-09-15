import React from "react";
import { Alert, Col, Row, Form, InputGroup } from "react-bootstrap";

import "./HotelBookingInput.style.css";

const HotelBookingInput = ({ bookingInput }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    bookingInput(name, value);
  };

  return (
    <div>
      <div className="hotelBookingInput-container">
        <div className="fs-3 fw-bold mb-3">Enter your details</div>
        <Alert className="mb-3" variant="info">
          {" "}
          Almost done! Fill in the <span style={{ color: "#d4111e" }}>
            *
          </span>{" "}
          required info
        </Alert>
        <div>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name *</Form.Label>
                <Form.Control type="firstName" placeholder="Enter First Name" name="firstName" onChange={handleChange}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name *</Form.Label>
                <Form.Control type="lastName" placeholder="Enter Last Name" name="lastName" onChange={handleChange}/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email *</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone *</Form.Label>
                <Form.Control type="number" placeholder="EnterPhone" name="phone" onChange={handleChange}/>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address *</Form.Label>
              <Form.Control placeholder="1234 Main St" name="address" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" name="address2" onChange={handleChange} />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City *</Form.Label>
                <Form.Control name="city" onChange={handleChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State *</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip *</Form.Label>
                <Form.Control name="zip" onChange={handleChange}/>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Save information" />
            </Form.Group>
          </Form>
        </div>
      </div>{" "}
    </div>
  );
};

export default HotelBookingInput;
