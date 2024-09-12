import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'; // 별 아이콘 가져오기
import { faStar as faRegStar } from '@fortawesome/free-regular-svg-icons'; 
import './HotelReviewStars.style.css'

const getStarIcons = (score) => {
  const stars = [];
  const fullStars = Math.floor(score); // 꽉 찬 별 개수
  const halfStar = score % 1 >= 0.5; // 반쪽 별 여부
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // 빈 별 개수

  console.log(fullStars,'|', halfStar, '|', emptyStars)
  // 꽉 찬 별 추가
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} key={`full-${i}`} />);
  }

  // 반쪽 별 추가
  if (halfStar) {
    stars.push(<FontAwesomeIcon icon={faStarHalfAlt} key="half" />);
  }

  // 빈 별 추가
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FontAwesomeIcon icon={faRegStar} key={`empty-${i}`} />);
  }

  return stars;
};

const HotelReviewStars = ({ reviewScore }) => {
  const starRating = reviewScore / 2; // 10점 만점을 5점 만점으로 변환

  return (
    <div className="d-flex align-items-center">
      {/* 별 아이콘 렌더링 */}
      <span className="d-flex">
        {getStarIcons(starRating)}
      </span>
      {/* 리뷰 점수 */}
      {typeof reviewScore === "number" && (
        <span className="review-score ms-2">{reviewScore.toFixed(1)}</span>
      )}
    </div>
  );
};

export default HotelReviewStars;