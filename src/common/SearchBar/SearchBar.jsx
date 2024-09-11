import React, { useState, useCallback } from "react";
import { Tabs, Tab, Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchBar.style.css";
import CalendarPicker from "./component/CalendarPicker/CalendarPicker";
import CountrySearch from "./component/CountrySearch/CountrySearch";
import VisitorCounter from "./component/VisitorCounter/VisitorCounter";

const SearchBar = () => {
  const [country, setCountry] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [visitorInfo, setVisitorInfo] = useState({
    totalTravelers: 2,
    totalRooms: 1,
  });

  const [activeTab, setActiveTab] = useState("hotel")

  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
  };

  const handleDateChange = useCallback(({ dateFrom, dateTo }) => {
    setDateFrom(dateFrom);
    setDateTo(dateTo);
  },[]);

  const updateVisitorInfo = (travelers, rooms) => {
    setVisitorInfo({ totalTravelers: travelers, totalRooms: rooms });
  };

  const handleSearch = () => {
    const searchData = {
      country,
      dateFrom,
      dateTo,
   
    };
if (activeTab === "hotel") {
    searchData.visitors = visitorInfo.totalTravelers;
  searchData.rooms = visitorInfo.totalRooms;
   performHotelSearch(searchData);
  } else if (activeTab === "activity") {
    performActivitySearch(searchData)
    }
  };
  

  const performHotelSearch = (searchData) => {
    console.log("hotel Search:", searchData)
  }
  const performActivitySearch = (searchData) => {
    console.log("Activity Search:", searchData)
  }


  return (
    <div>
      <Tabs defaultActiveKey="hotel" id="uncontrolled-tab-example" className="mb-3" onSelect={(selectedTab)=> setActiveTab(selectedTab)}>
        <Tab eventKey="hotel" title="Hotel">
          <Container>
            <Row>
              <Col lg={3} sm={12}>
                <CountrySearch onCountryChange={handleCountryChange} />
              </Col>
              <Col lg={3} sm={12}>
                <CalendarPicker onDateChange={handleDateChange} />
              </Col>
              <Col lg={4} sm={12}>
                <VisitorCounter onVisitorInfoChange={updateVisitorInfo} />
              </Col>
              <Col lg={2} sm={12}>
                <Button className="search-btn" variant="primary" onClick={handleSearch}>
                  Search
                </Button>
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="activity" title="Activity">
          
          <Container>
            <Row>
              <div className="activity-search">
            <Col lg={4} sm={12}>
                  <CountrySearch onCountryChange={handleCountryChange} />
              </Col>
              <Col lg={5} sm={12}>
                <CalendarPicker onDateChange={handleDateChange} />
              </Col>
              <Col lg={2} sm={12}>
                <Button className="search-btn" variant="primary" onClick={handleSearch}>
                  Search
                </Button>
                </Col>
              </div>
            </Row>
          </Container>

              
              
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          Tab content for Contact
        </Tab>
      </Tabs>
    </div>
  );
};

export default SearchBar;