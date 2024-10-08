import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const ratingNum = rating || 0;
  const totalStars = 5;
  const fullStars = Math.floor(ratingNum);
  const hasHalfStar = ratingNum % 1 !== 0;
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className='align-items-center mb-1 fs-5'>
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} style={{ color: '#f2b203' }} />
      ))}
      {hasHalfStar && <FaStarHalfAlt style={{ color: '#f2b203' }} />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index} style={{ color: '#f2b203' }} />
      ))}
    </div>
  );
};

export default StarRating;
