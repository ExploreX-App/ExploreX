import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "react-bootstrap";
import { responsive } from "../Constants/responsive";
import TourCard from "../Card/Card";
import "./CardSlide.style.css";

const TourSlide = () => {
  return (
    <div>
      PopularSlide
      <Container>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          partialVisible
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          responsive={responsive}
        >
          {/* {data?.map((data, index)=> <TourCard data={data} key={index} />)}
              <div>item1</div> */}
          <TourCard />
          <TourCard />
          <TourCard />
        </Carousel>
      </Container>
    </div>
  );
};

export default TourSlide;
