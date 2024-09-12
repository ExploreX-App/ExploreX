import React from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import Avatar from "../../../common/Avatar";
import { FaRegSmile } from "react-icons/fa";
import { FaRegFaceFrown } from "react-icons/fa6";

const HotelReviewModal = ({ show, onHide, review }) => {
  return (
    <div style={{}}  >
      <Modal show={show} onHide={onHide} centered style={{}} size="lg" fade="true" >
        <Modal.Header className="border-0" closeButton></Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="m-auto">
              <Col xs={3} md={3}>
                <Avatar
                  imgUrl={review.author.avatar}
                  name={review.author.name}
                />
              </Col>
              <Col xs={16} md={9}>
                <div style={{ fontSize: "0.85rem", color: "grey" }}>
                  Reviewed: {review.date.slice(0, 10)}
                </div>
                <div className="d-flex justify-content-between">
                  <div className="mb-3 fs-4 fw-bold">{review.title}</div>
                  <div
                    className="fs-6 p-2 py-1 h-1 rounded fw-bold"
                    style={{
                      backgroundColor: "teal",
                      color: "white",
                      height: "fit-content",
                    }}
                  >
                    {review.average_score.toFixed(0)}
                  </div>
                </div>
                <Row className="mb-3">
                  <Col xs="auto">
                    <FaRegSmile
                      className="pr-0 fs-5"
                      style={{ color: "green" }}
                    />
                  </Col>
                  <Col>{review.pros}</Col>
                </Row>
                <Row>
                  <Col xs="auto">
                    <FaRegFaceFrown
                      className="pr-0 fs-5"
                      style={{ color: "gray" }}
                    />
                  </Col>
                  <Col>{review.cons}</Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className="border-0"></Modal.Footer>
      </Modal>
    </div>
  );
};

export default HotelReviewModal;
