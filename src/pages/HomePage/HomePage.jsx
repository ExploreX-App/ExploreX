import React from "react";
import Banner from "./components/Banner/Banner";
import { Container } from "react-bootstrap";
import "./Homepage.style.css";
import CitySlider from "./components/CitySlider";

//banner
//

const HomePage = () => {
  return (
    <Container>
      <div>
        HomePage
        <Banner />
        {/* <CategorySlide /> */}
        <CitySlider />
      </div>
    </Container>
  );
};

export default HomePage;
