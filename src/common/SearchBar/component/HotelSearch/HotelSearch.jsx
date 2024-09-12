import React, { useState, useEffect, useMemo } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HotelSearch.style.css';

const HotelSearch = () => {
  const [country, setCountry] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [visitorInfo, setVisitorInfo] = useState({
    totalTravelers: 2,
    totalRooms: 1,
  });

  const [dateValues, setDateValues] = useState([
    new DateObject().subtract(4, 'days'),
    new DateObject().add(4, 'days'),
  ]);

  const [rooms, setRooms] = useState([{ adults: 2, children: 0 }]);
  const [isExpanded, setIsExpanded] = useState(false);

  // Options for country selection
  const options = useMemo(() => countryList().getData(), []);

  // Handle country change
  const handleCountryChange = (selectedOption) => {
    setCountry(selectedOption.value);
  };

  // Handle date change
  useEffect(() => {
    if (dateValues.length === 2) {
      const dateFromFormatted = dateValues[0].format('YYYY-MM-DD');
      const dateToFormatted = dateValues[1].format('YYYY-MM-DD');
      setDateFrom(dateFromFormatted);
      setDateTo(dateToFormatted);
    }
  }, [dateValues]);

  // Calculate total travelers and total rooms
  const totalTravelers = rooms.reduce(
    (total, room) => total + room.adults + room.children,
    0
  );
  const totalRooms = rooms.length;

  // Update visitor info when rooms change
  useEffect(() => {
    setVisitorInfo({ totalTravelers, totalRooms });
  }, [totalTravelers, totalRooms]);

  // Functions for room management
  const handleAdultChange = (roomIndex, amount) => {
    const newRooms = [...rooms];
    const newAdultCount = newRooms[roomIndex].adults + amount;
    if (newAdultCount >= 1) {
      newRooms[roomIndex].adults = newAdultCount;
      setRooms(newRooms);
    }
  };

  const handleChildChange = (roomIndex, amount) => {
    const newRooms = [...rooms];
    const newChildCount = newRooms[roomIndex].children + amount;
    if (newChildCount >= 0) {
      newRooms[roomIndex].children = newChildCount;
      setRooms(newRooms);
    }
  };

  const addRoom = () => {
    setRooms([...rooms, { adults: 1, children: 0 }]);
  };

  const removeRoom = (roomIndex) => {
    const newRooms = rooms.filter((_, index) => index !== roomIndex);
    setRooms(newRooms);
  };

  // Handle search
  const handleSearch = () => {
    const searchData = {
      country,
      dateFrom,
      dateTo,
      visitorInfo,
    };
    console.log(searchData);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col lg={3} sm={12}>
            <Select
              options={options}
              onChange={handleCountryChange}
              placeholder="Select a country"
            />
          </Col>
          <Col lg={3} sm={12}>
            <div>
              <DatePicker
                className="picker-container"
                value={dateValues}
                onChange={setDateValues}
                range
                numberOfMonths={2}
              />
            </div>
          </Col>
          <Col lg={4} sm={12}>
            {/* Visitor Counter Section */}
            <div className="visitor-counter">
              <div className="input-box" onClick={() => setIsExpanded(true)}>
                <label>Travellers</label>
                <input
                  type="text"
                  readOnly
                  value={`${totalTravelers} travellers, ${totalRooms} room${totalRooms > 1 ? 's' : ''}`}
                />
              </div>

              {isExpanded && (
                <div className="counter-container">
                  {rooms.map((room, roomIndex) => (
                    <div key={roomIndex} className="room">
                      <h4>Room {roomIndex + 1}</h4>

                      <div className="counter">
                        <label>Adults</label>
                        <div className="counterBtn-wrap">
                          <button className="counter-btn" onClick={() => handleAdultChange(roomIndex, -1)}>-</button>
                          <span>{room.adults}</span>
                          <button className="counter-btn" onClick={() => handleAdultChange(roomIndex, 1)}>+</button>
                        </div>
                      </div>

                      <div className="counter">
                        <label>Children (Ages 0 to 17)</label>
                        <div className="counterBtn-wrap">
                          <button className="counter-btn" onClick={() => handleChildChange(roomIndex, -1)}>-</button>
                          <span>{room.children}</span>
                          <button className="counter-btn" onClick={() => handleChildChange(roomIndex, 1)}>+</button>
                        </div>
                      </div>

                      {totalRooms > 1 && (
                        <button onClick={() => removeRoom(roomIndex)} className="remove-room-button">
                          Remove room
                        </button>
                      )}
                    </div>
                  ))}

                  <div className="button-wrap">
                    <button onClick={addRoom} className="add-room-button">
                      Add another room
                    </button>

                    <button className="done-button" onClick={() => setIsExpanded(false)}>
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>
          </Col>
          <Col lg={2} sm={12}>
            <Button
              className="search-btn"
              variant="primary"
              onClick={handleSearch}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HotelSearch;