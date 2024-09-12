import React, { useState, useEffect, useMemo } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HotelSearch.style.css";
import HotelSearchModal from "./HotelSearchModal";
import Autocomplete from "react-google-autocomplete";
import {
  IoBedOutline,
  IoCalendarOutline,
  IoPersonOutline,
} from "react-icons/io5";

const HotelSearch = () => {
  const [totalPpl, setTotalPpl] = useState(2);
  const [totalRooms, setTotalRooms] = useState(1);

  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const [dateValues, setDateValues] = useState([
    new DateObject().add(4, "days"),
    new DateObject().add(6, "days"),
  ]);

  const [city, setCity] = useState(null);

  const [isExpanded, setIsExpanded] = useState(false);

  // Handle date change
  useEffect(() => {
    if (dateValues.length === 2) {
      const dateFromFormatted = dateValues[0].format("YYYY-MM-DD");
      const dateToFormatted = dateValues[1].format("YYYY-MM-DD");
      setDateFrom(dateFromFormatted);
      setDateTo(dateToFormatted);
    }
  }, [dateValues]);

  const handleSearch = () => {
    const searchData = {
      keyword: city.formatted_address,
      dateFrom,
      dateTo,
      AdultNum: totalPpl,
    };
    console.log(searchData)
  };
  const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <div>
      <Row>
        <Col lg={3} sm={12}>
          <div className="position-relative">
            <Autocomplete
              className="city-input"
              placeholder="Where to?"
              apiKey={GOOGLE_MAPS_API_KEY}
              onPlaceSelected={(place) => setCity(place)}
              required
            />
            <IoBedOutline
              className="position-absolute fs-5"
              style={{ left: "0", margin: "14" }}
            />
          </div>
        </Col>
        <Col lg={3} sm={12}>
          <div className="position-relative">
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
        <Col lg={4} sm={12}>
          {/* Visitor Counter Section */}
          <div className="position-relative">
            <Form.Control
              style={{
                fontSize: "16.5px",
                paddingLeft: "45px",
                cursor: "pointer",
                marginBottom: "15px"
              }}
              type="text"
              readOnly
              variant="outline"
              value={`${totalPpl} traveller${
                totalPpl > 1 ? "s" : ""
              }, ${totalRooms} room${totalRooms > 1 ? "s" : ""}`}
              onClick={() => setIsExpanded(true)}
              draggable="false"
            />
            <IoPersonOutline
              className="position-absolute fs-5 z-5"
              style={{ top: "0", margin: "14" }}
            />

            {isExpanded && (
              <HotelSearchModal
                setIsExpanded={setIsExpanded}
                setTotalPpl={setTotalPpl}
                setTotalRooms={setTotalRooms}
              />
            )}
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

export default HotelSearch;
