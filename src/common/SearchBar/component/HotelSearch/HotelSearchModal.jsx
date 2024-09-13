import React, { useState } from "react";
import { Form, InputGroup, Button, Container } from "react-bootstrap";
import "./HotelSearch.style.css";

const HotelSearchModal = ({ setIsExpanded, setTotalPpl, setTotalRooms }) => {
  const [adultNum, setAdultNum] = useState(2);
  const [childrenNum, setChildrenNum] = useState(0);
  const [roomNum, setRoomNum] = useState(1);

  return (
    <Container className="border p-3 rounded position-absolute -bottom-5 z-2 bg-white">
      <div className="hotel-modal d-flex align-items-center justify-content-between mb-3">
        <div>Adults</div>
        <InputGroup className="counter-input-group">
          <Button
            className="modal-button"
            onClick={() => {
              if (adultNum > 1) {
                setTotalPpl(adultNum + childrenNum - 1);
                setAdultNum(adultNum - 1);
              }
            }}
          >
            -
          </Button>
          <Form.Control
            className="modal-input"
            value={adultNum}
            style={{ textAlign: "center" }}
            readOnly
          />
          <Button
            className="modal-button"
            onClick={() => {
              setTotalPpl(adultNum + childrenNum + 1);
              setAdultNum(adultNum + 1);
            }}
          >
            +
          </Button>
        </InputGroup>
      </div>

      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>Children</div>
        <InputGroup className="counter-input-group">
          <Button
            className="modal-button"
            onClick={() => {
              if (childrenNum > 0) {
                setTotalPpl(adultNum + childrenNum - 1);
                setChildrenNum(childrenNum - 1);
              }
            }}
          >
            -
          </Button>
          <Form.Control
            className="modal-input"
            value={childrenNum}
            style={{ textAlign: "center" }}
            readOnly
          />
          <Button
            className="modal-button"
            onClick={() => {
              setTotalPpl(adultNum + childrenNum + 1);
              setChildrenNum(childrenNum + 1);
            }}
          >
            +
          </Button>
        </InputGroup>
      </div>

      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>Rooms</div>
        <InputGroup className="counter-input-group">
          <Button
            className="modal-button"
            onClick={() => {
              if (roomNum > 1) {
                setTotalRooms(roomNum - 1);
                setRoomNum(roomNum - 1);
              }
            }}
          >
            -
          </Button>
          <Form.Control
            className="modal-input"
            value={roomNum}
            style={{ textAlign: "center" }}
            readOnly
          />
          <Button
            className="modal-button"
            onClick={() => {
              setTotalRooms(roomNum + 1);
              setRoomNum(roomNum + 1);
            }}
          >
            +
          </Button>
        </InputGroup>
      </div>

      <Button
        className="search-button w-100 done-button"
        onClick={() => setIsExpanded(false)}
      >
        Done
      </Button>
    </Container>
  );
};

export default HotelSearchModal;
