import React from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import "./SortBySelect.style.css";
import { FaExclamationCircle } from "react-icons/fa";

const SortBySelect = ({ setSortCriteria }) => {
  return (
    <Container>
      <Row className="top-area">
        <Col lg={6} className="properties-300">
          <div>100+ activities</div>
          <div>
            <strong>
              How our sort order works{" "}
              <FaExclamationCircle style={{ fontSize: 18 }} />
            </strong>
          </div>
        </Col>
        <Col lg={6} className="sort-select-container">
          <h3>Sort by</h3>
          <Form.Select
            aria-label="Sort activities"
            onChange={(e) => setSortCriteria(e.target.value)}
          >
            <option>
              <strong>Recommended</strong>
            </option>
            <option value="price_high">Price: high to low</option>
            <option value="price_low">Price: low to high</option>
            <option value="reviews_high">Most Reviews</option>
            <option value="reviews_low">Least Reviews</option>
            <option value="rating_high">Highest Rating</option>
            <option value="rating_low">Lowest Rating</option>
          </Form.Select>
        </Col>
      </Row>
    </Container>
  );
};

export default SortBySelect;
