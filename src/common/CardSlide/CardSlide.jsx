import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "react-bootstrap";
import { responsive } from "../constants/responsive";
import TourCard from "../Card/Card";
import "./CardSlide.style.css";

const CardSlide = ({ title, items }) => {
  return (
    <div>
      <div className="fs-4 fw-bold">{title}</div>
      <Container className="p-0">
        <Carousel
          infinite={true}
          centerMode={true}
          itemClass={"tour-slider"}
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

export default CardSlide;
