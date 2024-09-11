import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import './HotelCard.style.css'


const HotelCard = ({ hotel, adultNum }) => {
  const navigate = useNavigate();
  const hotelImg = hotel.photoUrls[0].replace("square60", "square300"); // photo size adjusted
  const { currency, value } = hotel?.priceBreakdown?.grossPrice;
  const goToDetail = () => {
    navigate(`./${hotel.id}`, {
      state: { dateFrom: hotel.checkinDate, dateTo: hotel.checkoutDate, adultNum: adultNum, photos: hotel.photoUrls, reviewScore: hotel.reviewScore },
    });
  };

  console.log(hotel)
  return (

    <Card className="d-flex flex-row hotel-card mb-3" 
    style={{ width: '100%', maxWidth: '700px', height: '240px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}
    onClick={goToDetail}>
      {/* 왼쪽 이미지 */}
      <Card.Img
        variant="left"
        src={hotelImg} // 호텔 이미지
        style={{ width: '240px', height: '100%', objectFit: 'cover', borderRadius: '10px 0 0 10px' }}
      />
      
      {/* 카드 본문 */}
      <Card.Body className="hotel-card-body d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="hotel-title">{hotel.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{hotel.location}</Card.Subtitle>
        </div>
        
        {/* 하단 버튼 */}
        <Button variant="primary" className="availability-button">Show Avalilability</Button>
      </Card.Body>

      {/* 우측 호텔 가격, 리뷰 */}
      <div className="hotel-price-review d-flex flex-column justify-content-between p-3">
        <div>
          <span className="review-score">{hotel.reviewScore}</span>
          <span className="review-count">{hotel.reviewCount} reviews</span>
        </div>
        <div className="hotel-price">
          <span>$</span>
          <strong>{value.toFixed(2)}</strong>
          <p>includes taxes & fees</p>
        </div>
      </div>
    </Card>

    // <Card className="d-flex flex-row mb-3" style={{ width: '700px', height: '240px' }}>
    //   <Card.Img
    //     variant="left"
    //     src={hotelImg}  // 호텔 이미지 URL
    //     style={{ width: '240px', height: '240px', objectFit: 'cover' }}
    //   />
    //   <Card.Body>
    //     <Card.Title>{hotel.name}</Card.Title>
    //     <Card.Text>
    //       <div>
    //         <strong>{hotel.roomType}</strong> <br /> 
    //         <span style={{ color: 'red' }}>{hotel.roomsLeft <= 1 ? `Nur noch ${hotel.roomsLeft} Zimmer verfügbar` : ''}</span> 
    //       </div>
    //       <div className="mt-3">
    //         <span>Bewertungen: {hotel.reviewCount}</span> <br />
    //         <span>Bewertungspunktzahl: {hotel.reviewScore}</span> <br />
    //         <strong>Gesamtpreis: {hotel.currency} {hotel.priceBreakdown.grossPrice.value.toFixed(2)}</strong>
    //       </div>
    //     </Card.Text>
    //     <Button variant="primary">Verfügbarkeit anzeigen</Button>
    //   </Card.Body>
    // </Card>


    // <div
    //   className="p-3 m-3 w-50 d-flex gap-3"
    //   style={{ border: "1px solid black" }}
    //   onClick={goToDetail}
    // >
    //   <img className="" src={hotelImg} alt="" />
    //   <div>
    //     <div className="fs-5 fw-bold">{hotel?.name}</div>
    //     
    //   </div>
    // </div>
  );
};

export default HotelCard;