import React from "react";
import Banner from "./components/Banner/Banner";
import { Container } from "react-bootstrap";
import "./Homepage.style.css";
import CitySlider from "./components/CitySlider";
import VideoBanner from "./components/VideoBanner/VideoBanner";
import SearchBar from "../../common/SearchBar/SearchBar";

import ActivitySlide from "./components/ActivitySlide/ActivitySlide";

import ActivitySlider from "./components/ActivitySlide/ActivitySlider";

const HomePage = () => {
  return (
    <Container>
      <div>
        <div className="homepage-heading">
          <VideoBanner />
        </div>
        <SearchBar />
        <CitySlider />
        {/* <ActivitySlide /> */}

        <ActivitySlider />
      </div>
    </Container>
  );
};

export default HomePage;
