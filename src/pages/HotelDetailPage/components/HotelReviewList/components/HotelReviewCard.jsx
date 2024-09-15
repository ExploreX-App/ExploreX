import React, { useState } from "react";
import { Card, Button, Image } from "react-bootstrap";
import HotelReviewModal from "../../HotelReviewModal";
import Avatar from "../../../../../common/Avatar";
import "./HotelReviewCard.style.css"

const HotelReviewCard = ({ review }) => {
  const [modalShow, setModalShow] = useState(false);

  
  return (
    <>
      <Card className="review-card p-2">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Avatar imgUrl={review.author.avatar} name={review.author.name} />
            <div
              className="mb-1"
              style={{ fontSize: "0.85rem", color: "grey" }}
            >
              {review.date.slice(0, 10)}
            </div>
          </div>
          <Card.Text
            className="mt-3"
            style={{ height: "100px", overflow: "hidden", fontWeight: "normal"}}
          >
            {review.pros}
          </Card.Text>
          <Button
          className="text-decoration-none"
            variant="link"
            style={{ padding: "0" }}
            onClick={() => setModalShow(true)}
          >
            Read more
          </Button>
        </Card.Body>
      </Card>
      <HotelReviewModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        review={review}
      />
    </>
  );
};

export default HotelReviewCard;
