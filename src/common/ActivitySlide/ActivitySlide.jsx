import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Alert } from "react-bootstrap";
import "./ActivitySlide.style.css";
import ActivityCard from "../ActivityCard/ActivityCard";
import { useActivitiesQuery } from "../../hooks/useFetchActivities";
import { responsive } from "../../utils/settings/activitySliderSetting";

const ActivitySlide = ({ keyword }) => {
  const { data, isLoading, error, isError } = useActivitiesQuery({
    keyword,
  });
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  if (isError) {
    <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <div className="activitySlide-container">
        <div className="fs-4 fw-bold">Ways to tour {keyword}</div>
      </div>
      <Container className="p-0">
        <Carousel
          style={{ width: "100%" }}
          partialVisbile={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          itemClass={"carousel-item-padding-0-px"}
          containerClass={"carousel-container"}
          responsive={responsive}
        >
          {data?.map((item, index) => (
            <ActivityCard key={index} item={item} />
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default ActivitySlide;