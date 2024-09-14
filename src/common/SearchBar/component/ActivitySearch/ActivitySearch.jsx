import React, { useState, useEffect, useMemo } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import "../HotelSearch/HotelSearch.style.css";
import AutoComplete from "react-google-autocomplete";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ActivitySearch = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [dateValues, setDateValues] = useState([
    new DateObject().subtract(4, "days"),
    new DateObject().add(4, "days"),
  ]);
  const [error, setError] = useState(false);

  // Handle search
  const handleSearch = () => {
    try {
      const searchData = {
        keyword: city?.formatted_address,
      };
      navigate("/activities", { state: searchData });
    } catch {
      setError(true);
    }
  };
  const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <div>
      <Row>
        <Col lg={5} sm={12}>
          {/* Country Selector */}
          <div className="position-relative mb-3">
            <AutoComplete
              className={`city-input ${error && "error"}`}
              placeholder="Where to?"
              apiKey={GOOGLE_MAPS_API_KEY}
              onPlaceSelected={(place) => {
                setError(false);
                setCity(place);
              }}
              required={true}
            />
            <LiaMapMarkerAltSolid
              className="position-absolute fs-5"
              style={{ left: "0", margin: "14" }}
            />
            {error && (
              <div className="fw-thin" style={{ color: "red" }}>
                This is a required field
              </div>
            )}
          </div>
        </Col>
        <Col lg={5} sm={12}>
          <div className="position-relative mb-3">
            <DatePicker
              className="picker-container"
              value={dateValues}
              onChange={setDateValues}
              format="YYYY-MM-DD"
              range
              numberOfMonths={2}
              required
              minDate={new Date()}
            />
            <IoCalendarOutline
              className="position-absolute fs-5"
              style={{ left: "0", margin: "14" }}
            />
          </div>
        </Col>
        <Col lg={2} sm={12}>
          <Button
            className="search-button w-100"
            size="md"
            onClick={handleSearch}
            type="submit"
          >
            Search
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ActivitySearch;
