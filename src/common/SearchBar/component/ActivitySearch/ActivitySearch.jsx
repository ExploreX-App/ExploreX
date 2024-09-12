import React, { useState, useEffect, useMemo } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ActivitySearch.style.css'; // Assuming you have your CSS for this component

const ActivitySearch = () => {
  const [country, setCountry] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [dateValues, setDateValues] = useState([
    new DateObject().subtract(4, 'days'),
    new DateObject().add(4, 'days'),
  ]);

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

  // Handle search
  const handleSearch = () => {
    const searchData = {
      country,
      dateFrom,
      dateTo,
    };
    console.log(searchData);
    // Here you can trigger your API or other actions with the search data
  };

  return (
    <div>
        <Row>
          <Col lg={5} sm={12}>
            {/* Country Selector */}
            <Select
              options={options}
              onChange={handleCountryChange}
              placeholder="Select a country"
            />
          </Col>
          <Col lg={5} sm={12}>
            {/* Date Picker */}
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
          <Col lg={2} sm={12}>
            {/* Search Button */}
            <Button
              className="search-btn"
              variant="primary"
              onClick={handleSearch}
            >
              Search
            </Button>
          </Col>
        </Row>
    </div>
  );
};

export default ActivitySearch;