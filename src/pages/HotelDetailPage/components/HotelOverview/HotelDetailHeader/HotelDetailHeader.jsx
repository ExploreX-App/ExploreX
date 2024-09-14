import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // 아이콘 import
import './HotelDetailHeader.style.css'
import HotelReviewStars from '../../HotelReviewStars/HotelReviewStars';

const HotelDetailHeader = ({ hotel, reviewScore }) => {
  return (
    <div className="hotel-info-header d-flex flex-column">
      {/* 첫 번째 줄: 호텔 이름, 평점, 아이콘 */}
      <div className="d-flex align-items-center mb-2">
        {/* 평점 아이콘 */}
        <div className="rating-icons d-flex align-items-center me-2">
            <HotelReviewStars reviewScore={reviewScore}/>
        </div>

        {/* 호텔 이름 */}
        <h2 className="hotel-name ms-3">{hotel?.hotel_name}</h2>
      </div>

      {/* 두 번째 줄: 위치 정보, 링크 */}
      <div className="d-flex align-items-center">
        {/* FontAwesome 지도 마커 아이콘 */}
        <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon me-2" />
        
        {/* 주소 */}
        <span className="address">{hotel?.address}, {hotel?.city}, {hotel?.country_trans}</span>

        {/* <span className="ms-3">
          <a href="#lage" className="highlight-link">Ausgezeichnete Lage</a> - 
          <a href="#karte" className="highlight-link ms-1">Karte anzeigen</a>
        </span>

        <span className="ms-3">– Zugang zur Bahn</span> */}
      </div>
    </div>
  );
};

export default HotelDetailHeader;