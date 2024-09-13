import React, { useState } from "react";
import { Tabs, Tab, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchBar.style.css";
import HotelSearch from "./component/HotelSearch/HotelSearch";
import ActivitySearch from "./component/ActivitySearch/ActivitySearch";

const SearchBar = ({ keyword, dateFrom, dateTo, adultNum, tab="hotel" }) => {
  const [activeTab, setActiveTab] = useState(tab);
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
            <HotelSearch keyword={keyword} dateFrom={dateFrom} dateTo={dateTo} adultNum={adultNum} />
          </Row>
        </Tab>
        <Tab eventKey="activity" title="Activity">
          <Row>
            <ActivitySearch />
          </Row>
        </Tab>
      </Tabs>
    </div>
  );
};

export default SearchBar;
