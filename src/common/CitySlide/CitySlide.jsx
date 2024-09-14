import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "react-bootstrap";
import TourCard from "../CityCard/CityCard";
import "./CitySlide.style.css";
import { responsive } from "../../utils/settings/citySliderSetting";

const CitySlide = ({ title, items }) => {
  return (
    <div className="cardSlide-container">
      <div className="fs-4 fw-bold mb-2">{title}</div>
      <Container className="p-0">
        <Carousel
          style={{ width: "100%" }}
          partialVisbile={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={6000}
          itemClass={"carousel-item-padding-0-px"}
          containerClass={"carousel-container"}
          responsive={responsive}
        >
          {items?.map((item, index) => (
            <TourCard key={index} item={item} />
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default CitySlide;
