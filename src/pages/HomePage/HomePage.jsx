import React from "react";
import { Container } from "react-bootstrap";
import "./Homepage.style.css";
import VideoBanner from "./components/VideoBanner/VideoBanner";
import SearchBar from "../../common/SearchBar/SearchBar";
import { cities } from "../../utils/mockData/cityData";
import CitySlide from "../../common/CitySlide/CitySlide"
import ActivitySlide from "../../common/ActivitySlide/ActivitySlide";

const HomePage = () => {
  return (
    <Container>
      <div>
        <div className="homepage-heading">
          <VideoBanner />
        </div>
        <SearchBar />
        <CitySlide title="Dream Your Next Trip" items={cities} />
        <ActivitySlide keyword="Vancouver" />
      </div>
    </Container>
  );
};

export default HomePage;
