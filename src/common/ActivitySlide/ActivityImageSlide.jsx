import React from 'react';
import './ActivityImageSlide.style.css';
import HeartIcon from '../HeartIcon/HeartIcon';

const ActivityImageSlide = ({ data }) => {
  if (!data?.pictures || data?.pictures?.length === 0) {
    return <p>No images available</p>;
  }

  const description = data?.description || '';
  const shortDescription =
    description.length > 100 ? description.slice(0, 100) + '...' : description;

  return (
    <div className='image-container'>
      <img
        className='activity-detail-bg-img'
        src={data?.pictures[0]}
        alt='Activity'
      />

      <div className='overlay'>
        <h2 className='overlay-title'>{data?.name || 'Activity Title'}</h2>
        <p className='overlay-description'>{shortDescription}</p>
      </div>
    </div>
  );
};

export default ActivityImageSlide;
