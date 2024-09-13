import React, { useState, useMemo } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { activityPriceMockData } from "../../../../utils/ActivityMockData";
import { getRandomData } from "../../../ActivityPage/ActivityPage";

import "./ActivityCard.style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";

const ActivityCard = ({ activity }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const [animationClass, setAnimationClass] = useState("");


  const pictureUrl =
    activity.pictures && activity.pictures.length > 0 ? activity.pictures[0] : null;

  const handleHeartClick = () => {
    if (isHeartFilled) {
      setAnimationClass("animate__wobble");
    } else {
      setAnimationClass("animate__zoomOut");
    }

    setTimeout(() => {
      setIsHeartFilled(!isHeartFilled);
      setAnimationClass("");
    }, 700);
  };

  return (
    <Container className="card-structure card-border">
      <Row className="align-items-stretch">
        <Col xs={4} className="image-area p-0">
          {pictureUrl ? (
            <div style={{ position: "relative" }}>
              <img src={pictureUrl} alt="Activity" className="activity-image" />
              <i
                className={`bi ${
                  isHeartFilled ? "bi-heart-fill" : "bi-heart"
                } heart-icon ${animationClass}`}
                onClick={handleHeartClick}
              ></i>
            </div>
          ) : (
            <div>No image available</div>
          )}
        </Col>

        <Col xs={8} className="card-title">
          <div className="custom-title">
            <strong>{activity.name}</strong>
          </div>

    
          <div>
            <i className="bi bi-clock-history"></i>
            {activity.minimumDuration ? activity.minimumDuration : "Duration not available"}
          </div>
          <div className="pt-1" style={{ display: "flex" }}>
            <div className="custom-rating">
              <Badge className="custom-badge">
                {activity.rating ? activity.rating.toFixed(1) : "N/A"}
              </Badge>
            </div>
            <div className="custom-reviews">
              {activity.reviews ? `${activity.reviews} reviews` : "No reviews"}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="custom-free-cancel">
              <div>Free cancellation available</div>
              <div></div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className="custom-price">
                {activity.price ? `$ ${activity.price.amount}` : "price not available"}
              </div>
              <div className="custom-price2">per adult</div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ActivityCard;
