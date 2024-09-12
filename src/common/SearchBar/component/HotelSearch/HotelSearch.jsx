import React, { useState, useEffect, useMemo, useRef } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HotelSearch.style.css";
import HotelSearchModal from "./HotelSearchModal";
import AutoComplete from "react-google-autocomplete";
import {
  IoBedOutline,
  IoCalendarOutline,
  IoPersonOutline,
  IoClose,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const HotelSearch = ({ keyword, dateFrom, dateTo, adultNum }) => {
  const cityInputRef = useRef();
  const navigate = useNavigate();
  const [cityError, setCityError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const [totalPpl, setTotalPpl] = useState(adultNum || 2);
  const [totalRooms, setTotalRooms] = useState(1);

  const [dateValues, setDateValues] = useState(
    dateFrom
      ? [new DateObject(dateFrom), new DateObject(dateTo)]
      : [new DateObject().add(4, "days"), new DateObject().add(6, "days")]
  );

  const [city, setCity] = useState(keyword || "");
  console.log(city);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = () => {
    try {
      keyword = city?.address_components[0]?.short_name
    } catch {
      setCityError(true);
    }
    try {
      dateFrom = dateValues[0].toString();
      dateTo = dateValues[1].toString();
      if (dateFrom === dateTo) {
        setDateError(true);
      } else {
        setDateError(false);
      }
    } catch {
      setDateError(true);
    }
    if (city && dateValues.length === 2) {
      const searchData = {
        keyword,
        dateFrom,
        dateTo,
        adultNum: totalPpl,
      };
      console.log(searchData);
      navigate("/hotels", { state: searchData });
    }
  };
  const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <div>
      <Row>
        <Col lg={3} sm={12}>
          <div className="position-relative mb-3">
            <AutoComplete
              ref={cityInputRef}
              className={`city-input ${cityError && "error"}`}
              placeholder="Where to?"
              apiKey={GOOGLE_MAPS_API_KEY}
              onPlaceSelected={(place) => {
                setCity(place);
                setCityError(false);
                console.log(place);
              }}
              required
            />
            <IoBedOutline
              className="position-absolute fs-5"
              style={{ left: "0", margin: "14" }}
            />
            <IoClose
              className="position-absolute fs-5 bg-white"
              style={{ right: "0", margin: "13", cursor: "pointer" }}
              onClick={() => {
                cityInputRef.current.value = "";
                setCity("");
              }}
            />
            {cityError && (
              <div className="fw-thin" style={{ color: "red" }}>
                This is a required field
              </div>
            )}
          </div>
        </Col>
        <Col lg={3} sm={12}>
          <div className="position-relative mb-3">
            <DatePicker
              className={`${dateError && "error"}`}
              value={dateValues}
              onChange={setDateValues}
              onClick={() => setDateError(false)}
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
            {dateError && (
              <div className="fw-thin" style={{ color: "red" }}>
                Dates are invalid
              </div>
            )}
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
                marginBottom: "15px",
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
