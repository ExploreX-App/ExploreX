import React from 'react';
import { FaMedal, FaImage } from 'react-icons/fa';
import './ActivityImageSlide.style.css';

const ActivityImageSlide = ({ data }) => {
  if (!data?.pictures || data.pictures.length === 0) {
    return <p>No images available</p>;
  }

  const description = data?.description || '';
  const shortDescription =
    description.length > 100 ? description.slice(0, 100) + '...' : description;

  return (
    <div className='image-container'>
      <img className='activity-img' src={data?.pictures[0]} alt='Activity' />

      {/* Badge 추가 */}
      <div className='badge'>
        <div className='badge-hot-place'>
          <FaMedal className='badge-hot-place-icon' />
        </div>
        <div className='badge-hot-place'>
          2024
          <br />
          Hot place
        </div>
      </div>

      {/* 버튼 추가 */}
      <button className='more-images-btn'>
        <FaImage className='ico-img' /> More images
      </button>

      <div className='overlay'>
        <h2 className='overlay-title'>{data?.name || 'Activity Title'}</h2>
        <p className='overlay-description'>{shortDescription}</p>
      </div>
    </div>
  );
};

export default ActivityImageSlide;
