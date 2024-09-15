import React from 'react';
import './HeaderSlider.style.css';
import aboutImg1 from '../../../../assets/about-img1.jpg';
import aboutImg2 from '../../../../assets/about-img2.jpg';
import aboutImg3 from '../../../../assets/about-img3.jpg';
import aboutImg4 from '../../../../assets/about-img4.jpg';
import aboutImg5 from '../../../../assets/about-img5.jpg';

const ImageSlider = () => {
  const images = [aboutImg1, aboutImg2, aboutImg3, aboutImg4, aboutImg5];

  return (
    <div className='image-slider-container'>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`img-${index}`}
          className='slider-image'
        />
      ))}
    </div>
  );
};

export default ImageSlider;
