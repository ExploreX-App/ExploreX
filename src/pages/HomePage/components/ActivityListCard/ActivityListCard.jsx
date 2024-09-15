import React, { useState } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { activityPriceMockData } from "../../../../utils/ActivityMockData";
import { getRandomData } from "../../../ActivityPage/ActivityPage";
import "./ActivityListCard.style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";
import HeartIcon from "../../../../common/HeartIcon/HeartIcon";
import { useNavigate } from "react-router-dom";

const ActivityCard = ({ activity }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const navigate = useNavigate();
  const pictureUrl =
    activity.pictures && activity.pictures.length > 0 ? activity.pictures[0] : null;

  const handleHeartClick = (e) => {
    setIsHeartFilled(!isHeartFilled);
  };

  const goToDetails = () => {
    navigate(`./${activity.id}`);
  };

  return (
    <Container className="card-structure card-border" onClick={goToDetails}>
      <Row className="">
        <Col
          xs={12}
          md={5}
          lg={4}
          className="h-100 p-0 object-fit-cover position-relative"
          // style={{ height: "370px" }}
        >
          {pictureUrl ? (
            <div className="overflow-hidden img-container">
              <img src={pictureUrl} alt="Activity" className="activity__img" />
              <HeartIcon isHeartFilled={isHeartFilled} onClick={handleHeartClick} />
            </div>
          ) : (
            <div>No image available</div>
          )}
        </Col>

        <Col
          xs={12}
          md={7}
          lg={8}
          className="p-2 d-flex flex-column px-3 justify-content-between"
        >
          <div>
            <div className="custom-title text-truncate">
              <strong>{activity.name}</strong>
            </div>

            <div className="duration d-flex gap-1">
              <i className="bi bi-clock-history"></i>
              {activity.minimumDuration
                ? activity.minimumDuration
                : "Duration not available"}
            </div>
            <div className="pt-1 d-flex align-items-center gap-2">
              <div className="custom-rating">
                <div className="customBadge fs-6 px-2 py-0.9 rounded fw-semibold">
                  {activity.rating ? activity.rating.toFixed(1) : "N/A"}
                </div>
              </div>
              <div className="custom-reviews">
                {activity.reviews ? `${activity.reviews} reviews` : "No reviews"}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="custom-free-cancel">
              <div>Free cancellation available</div>
              <div></div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className="custom-price">
                {activity.price
                  ? `$ ${activity.price.amount}`
                  : "price not available"}
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
