import React from 'react';
import './ActivityPromotion.style.css';

const ActivityPromotion = () => {
  return (
    <div className='featurette'>
      <div className='row'>
        <div className='col-md-7'>
          <h2 className='featurette-heading fw-normal lh-1'>
            Budapest Danube Cruise with Buffet Dinner,
            <span className='text-body-secondary'>Performances and Music</span>
          </h2>
          <p className='lead'>
            Over 14 new customizable meals each week. Receive your chef-crafted
            meals right to your door. Ready to eat in 2 minutes or less, no
            cooking or dishes required.
          </p>
        </div>
        <div className='col-md-5'>
          <img
            src='https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/78/dc/c5.jpg'
            className='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto'
            alt='Promotion'
          />
        </div>
      </div>
    </div>
  );
};

export default ActivityPromotion;
