import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ActivityCard.style.css";

const ActivityCard = ({ activity }) => {
  const pictureUrl =
    activity.pictures && activity.pictures.length > 0 ? activity.pictures[0] : null;
  const price =
    activity.price && activity.price.amount ? activity.price.amount : "N/A";
  const currency =
    activity.price && activity.price.currencyCode ? activity.price.currencyCode : "";

  return (
    <Container className="card-structure card-border">
      <Row className="align-items-center">
        <Col xs={4}>
          {pictureUrl ? (
            <img
              src={pictureUrl}
              alt="Activity"
              style={{ width: "100%", height: "auto" }}
            />
          ) : (
            <div>No image available</div>
          )}
        </Col>

        <Col xs={8}>
          <div>{activity.name}</div>
          <div>
            {activity.minimumDuration
              ? activity.minimumDuration
              : "Duration not available"}
          </div>
          <div>
            {price !== "N/A" ? `${price} ${currency}` : "price not available"}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ActivityCard;
