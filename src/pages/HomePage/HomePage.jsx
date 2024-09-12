import React from "react";
import Banner from "./components/Banner/Banner";
import { Container } from "react-bootstrap";
import "./Homepage.style.css";
import CitySlider from "./components/CitySlider";
import VideoBanner from "./components/VideoBanner/VideoBanner";
import SearchBar from "../../common/SearchBar/SearchBar";
import ActivityCard from "./components/ActivityCard/ActivityCard";
import ActivitySlide from "./components/ActivitySlide/ActivitySlide";
import ActivityTabs from "./ActivityTabs/ActivityTabs";

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
        {/* <ActivityTabs /> */}
      </div>
    </Container>
  );
};

export default HomePage;
