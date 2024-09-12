import React, { useState } from "react";
import { Tabs, Tab, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchBar.style.css";
import HotelSearch from "./component/HotelSearch/HotelSearch";
import ActivitySearch from "./component/ActivitySearch/ActivitySearch";

const SearchBar = () => {
  const [country, setCountry] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [visitorInfo, setVisitorInfo] = useState({
    totalTravelers: 2,
    totalRooms: 1,
  });
  const [activeTab, setActiveTab] = useState("hotel");

  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
  };

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
      performActivitySearch(searchData);
    }
  };

  const performHotelSearch = (searchData) => {
    console.log("Hotel Search:", searchData);
  };

  const performActivitySearch = (searchData) => {
    console.log("Activity Search:", searchData);
  };

  return (
    <div className="search-container">
      <Tabs
        defaultActiveKey="hotel"
        id="fill-tab-example"
        className="mb-3"
        fill
        onSelect={(selectedTab) => setActiveTab(selectedTab)}
      >
        <Tab eventKey="hotel" title="Hotel">
            <Row>
              <HotelSearch 
                onCountryChange={handleCountryChange} 
                onVisitorInfoChange={updateVisitorInfo}
                onSearch={handleSearch} 
              />
            </Row>
        </Tab>
        <Tab eventKey="activity" title="Activity">
            <Row>
              <ActivitySearch 
                onCountryChange={handleCountryChange} 
                onSearch={handleSearch} 
              />
            </Row>
        </Tab>
      </Tabs>
    </div>
  );
};

export default SearchBar;