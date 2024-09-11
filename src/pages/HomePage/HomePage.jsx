import React from "react";
import Banner from "./components/Banner/Banner";
import { Container } from "react-bootstrap";
import "./Homepage.style.css";
import CitySlider from "./components/CitySlider";
import VideoBanner from "./components/VideoBanner/VideoBanner";
import SearchBar from "./components/SearchBar/SearchBar";



//banner
//

const HomePage = () => {
  return (
    <Container>
      <div>



        <div className="homepage-heading"><VideoBanner /></div>
        {/* <CategorySlide /> */}

               <SearchBar />
                <CitySlider />
      </div>
    </Container>
  );
};

export default HomePage;
