import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./HotelCard.style.css";

const HotelCard = ({ hotel, adultNum }) => {
  const navigate = useNavigate();
  const hotelImg = hotel.photoUrls[0].replace("square60", "square300"); // photo size adjusted
  const { currency, value } = hotel?.priceBreakdown?.grossPrice;
  const goToDetail = () => {
    navigate(`./${hotel.id}`, {
      state: {
        dateFrom: hotel.checkinDate,
        dateTo: hotel.checkoutDate,
        adultNum: adultNum,
        photos: hotel.photoUrls,
      },
    });
  };
  return (
    <div
      className="p-2 m-2 gap-3 hotelCard-container"
      style={{ border: "1px solid black" }}
      onClick={goToDetail}
    >
      <Row className="flex-grow-1"> 
        <Col lg={5}>

            <img className="hotelCard-img" src={hotelImg} alt=""
          />

          
        </Col>
        <Col lg={7} className="d-flex flex-column justify-content-between">
          <div>
          <div className="fs-3 fw-bold w-100 mt-2 mb-2 hotelCard-title">
            {hotel?.name}
          </div>

          <div className="d-flex align-items-center">
            <div className="hotelCard-reviewScore">{hotel.reviewScore}</div>
            <div className="fs-5 fw-bold ps-2">{hotel.reviewScoreWord}</div>
            <div className="hotelCard-reviewCount">
              {hotel.reviewCount} reviews
            </div>
          </div>
          </div>
          {/* <div className="mt-3 d-flex justify-content-between align-items-end price-btn-wrap">
          <div className="d-flex flex-column lh-sm">
            <div className="fs-4 fw-bold">
              {currency} {value.toFixed(2)}
            </div>
          <div style={{fontSize: '14px'}}>per night</div>
            <div style={{fontSize: '14px'}}>Include taxes & fees</div>
          </div>

          <button className="hotelCard-btn">See availability</button>
</div> */}
          <Row className="align-items-end">
            <Col lg={7} md={12}>  <div className="d-flex flex-column lh-sm">
            <div className="fs-4 fw-bold">
              {currency} {value.toFixed(2)}
            </div>
          <div style={{fontSize: '14px'}}>per night</div>
            <div style={{fontSize: '14px'}}>Include taxes & fees</div>
          </div></Col>
            <Col lg={5} md={12} className="d-flex justify-content-end"><button className="hotelCard-btn" >See availability</button></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default HotelCard;
