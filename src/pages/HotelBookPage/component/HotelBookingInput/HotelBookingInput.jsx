import React, { useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import "./HotelBookingInput.style.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import AdvertisingBanner from "../../../../common/AdvertisingBanner/AdvertisingBanner"

const HotelBookingInput = () => {
  // Use the useState hook for managing state
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [value, setValue] = useState();

  // Functions to handle changes in country and region
  const selectCountry = (val) => {
    setCountry(val);
  };

  const selectRegion = (val) => {
    setRegion(val);
  };

  return (
    <div>

      <div className="hotelBookingInput-container">
        <div className="fs-3 fw-bold mb-1">Enter your details</div>
        <Alert variant="info"> Almost done! Fill in the <span style={{ color: "#d4111e" }}>*</span> required info</Alert>
        <div>
          <Row>
            <Col lg={6} sm={12}>
              {" "}
              <div>
                <label
                  className="d-flex flex-row mt-3 fw-bold"
                  style={{ fontSize: "14px" }}
                >
                  First Name
                  <span style={{ color: "#d4111e" }}>* </span>
                </label>
                <input
                  className="hotelBookingInput-input"
                  type="text"
                  name="firstName"
                  required
                />
              </div>{" "}
            </Col>
            <Col lg={6} sm={12}>
              <div>
                <label
                  className="d-flex flex-row mt-3 fw-bold"
                  style={{ fontSize: "14px" }}
                >
                  Last Name
                  <span style={{ color: "#d4111e" }}>* </span>
                </label>
                <input
                  className="hotelBookingInput-input"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <div>
                <label
                  className="d-flex flex-row mt-3 fw-bold"
                  style={{ fontSize: "14px" }}
                >
                  Email
                  <span style={{ color: "#d4111e" }}>* </span>
                </label>
                <input
                  className="hotelBookingInput-input"
                  type="email"
                  name="email"
                  required
                />
                <div  style={{ fontSize: "14px" }}>Confirmation will be sent to this email</div>
              </div>
            </Col>
            <Col>
              <div>
                <label
                  className="d-flex flex-row mt-3 fw-bold"
                  style={{ fontSize: "14px" }}
                >
                  Phone Number
                  <span style={{ color: "#d4111e" }}>* </span>
                </label>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={value}
                  onChange={setValue}
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              {" "}
              <div>
                <label
                  className="d-flex flex-row mt-3 fw-bold"
                  style={{ fontSize: "14px" }}
                >
                  Country
                  <span style={{ color: "#d4111e" }}>* </span>
                </label>
                <CountryDropdown
                  className="hotelBookingInput-input"
                  value={country}
                  onChange={(val) => selectCountry(val)}
                  required
                />
              </div>
            </Col>
            <Col>
              {" "}
              <div>
                <label
                  className="d-flex flex-row mt-3 fw-bold"
                  style={{ fontSize: "14px" }}
                >
                  Region
                  <span style={{ color: "#d4111e" }}>* </span>
                </label>
                <RegionDropdown
                  className="hotelBookingInput-input"
                  country={country}
                  value={region}
                  onChange={(val) => selectRegion(val)}
                  required
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>{" "}
      <div className="d-flex justify-content-end mt-3">
<button className="hotelBookingInput-btn">Check Out</button>

      </div>
      
    </div>
  );
};

export default HotelBookingInput;
