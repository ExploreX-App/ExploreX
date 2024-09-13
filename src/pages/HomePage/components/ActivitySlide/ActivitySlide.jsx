import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Alert } from "react-bootstrap";
import { responsive } from "../../../../common/Constants/responsive";
import ActivityCard from "../ActivityCard/ActivityCard";
import "./ActivitySlide.style.css";
import { useActivitiesQuery } from "../../../../hooks/useFetchActivities";

const ActivitySlide = ({ items}) => {
  const { data, isLoading, error, isError } = useActivitiesQuery({
    keyword: "Vancouver",
  });
  console.log(data)
  if (isLoading) {
    <h1>Loading...</h1>
  }
  if (isError) {
    <Alert variant='danger'>{error.message}</Alert>
  }

  
  return (
    <div>
      <div className="activitySlide-container">
        <div className="fs-4 fw-bold">title</div>
      </div>
      <Container className="p-0">
        <Carousel
          infinite={true}
          centerMode={true}
          itemClass={"tour-slider"}
          containerClass={"carousel-container"}
          responsive={{
            largeDesktop: {
              breakpoint: { max: 1920, min: 1441 },
              items: 4
            },
            desktop: {
              breakpoint: { max: 1440, min: 1280 },
              items: 3,
            },
            smallDesktop: {
              breakpoint: { max: 1279, min: 1025 },
              items: 3,
            },
            tablet: {
              breakpoint: { max: 1024, min: 768 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 767, min: 0 },
              items: 1,
            },
          }}
        >
          {/* {(data)?.map((item, index) => (
            <ActivityCard key={index} item={item} /> */}
                    {items?.map((item, index) => (
            <ActivityCard key={index} item={item} />
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

export default ActivitySlide;
