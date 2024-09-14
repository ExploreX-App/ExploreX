import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "react-bootstrap";
import ActivityCard from "../ActivityCard/ActivityCard";

const ActivitySlide = ({ data, title, settings, speed=3000, autoPlay=true }) => {
  return (
    <div>
      <div className="activitySlide-container">
        <div className="fs-4 fw-bold mb-2">{title}</div>
      </div>
      <Container className="p-0">
        {data && (
          <Carousel
            style={{ width: "100%" }}
            partialVisbile={false}
            infinite={true}
            autoPlay={autoPlay}
            autoPlaySpeed={speed}
            itemClass={"carousel-item-padding-0-px"}
            containerClass={"carousel-container"}
            responsive={settings}
          >
            {data?.map((item, index) => (
              <ActivityCard key={index} item={item} />
            ))}
          </Carousel>
        )}
      </Container>
    </div>
  );
};

export default ActivitySlide;
