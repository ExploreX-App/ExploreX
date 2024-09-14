import React, { useState } from 'react';
import { FaCaretDown, FaCaretUp, FaThumbsUp } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Reviews.style.css';

const Reviews = ({ reviews }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = (event) => {
    event.preventDefault();
    setShowMore(!showMore);
  };

  const sampleReviews = reviews || [
    {
      profilePic:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e3/6a/default-avatar-2020-47.jpg?w=100&h=-1&s=1',
      author: 'John Doe',
      likes: 25,
      rating: 5,
      title: 'Great Tour Experience',
      date: 'July 21, 2024',
      shortReview: 'Florence is an amazing city with rich history...',
      fullReview:
        'Florence is an amazing city with rich history, and the tour was very informative and well-organized. Florence is an amazing city with rich history, and the tour was very informative and well-organized Florence is an amazing city with rich history, and the tour was very informative and well-organized Florence is an amazing city with rich history, and the tour was very informative and well-organized'
    }
  ];

  return (
    <div>
      {sampleReviews.map((review, index) => (
        <div key={index} className='review-container'>
          {/* First row: Profile picture, name, like icon, and count */}
          <div className='d-flex justify-content-between align-items-center mb-2'>
            <div className='d-flex align-items-center'>
              <img
                src={review.profilePic}
                alt='Profile'
                className='rounded-circle'
                width='40'
                height='40'
              />
              <span className='review-author'>{review.author}</span>
            </div>
            <div>
              <FaThumbsUp /> <span>{review.likes}</span>
            </div>
          </div>

          {/* Second row: Rating stars */}
          <div className='rating mb-2'>
            {Array.from({ length: review.rating }).map((_, i) => (
              <i key={i} className='fa fa-star text-warning'></i>
            ))}
          </div>

          {/* Third row: Title */}
          <div className='mb-2 review-title'>{review.title}</div>

          {/* Fourth row: Date */}
          <div className='text-muted mb-2'>{review.date}</div>

          {/* Fifth row: Review content */}
          <div className='review-text'>
            <span
              id='short-review'
              style={{ display: showMore ? 'none' : 'inline' }}
            >
              {review.shortReview.length > 200
                ? review.shortReview.substring(0, 200) + '...'
                : review.shortReview}
            </span>
            <span
              id='full-review'
              style={{ display: showMore ? 'inline' : 'none' }}
            >
              {review.fullReview}
            </span>
            {review.fullReview && (
              <Button
                id='toggle-review'
                onClick={toggleShowMore}
                variant='link'
                style={{
                  cursor: 'pointer',
                  color: '#007bff',
                  padding: 0
                }}
              >
                {showMore ? (
                  <>
                    <FaCaretUp style={{ transform: 'rotate(270deg)' }} /> Show
                    Less
                  </>
                ) : (
                  <>
                    <FaCaretDown /> Show More
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
