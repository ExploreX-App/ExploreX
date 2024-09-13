import React, { useState } from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';
import StarRating from '../../../../common/StarRating';
import './ActivityTabsSection.style.css';
import { FaCaretDown, FaCaretUp, FaLink } from 'react-icons/fa';
import ActivityDetailInfo from '../ActivityDetailInfo/ActivityDetailInfo.jsx';

const ActivityTabsSection = ({ data, description, price }) => {
  const [showMore, setShowMore] = useState(true);
  const maxLength = 300;

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Container className='tabs-container'>
      <Tabs defaultActiveKey='overview' id='activity-tabs'>
        <Tab eventKey='overview' title='Overview'>
          <h3 className='activity-tap-type'>Entire cabin</h3>
          <h1 className='activity-tap-title'>
            {data?.name} <FaLink size={24} color='black' />
          </h1>
          <div className='activity-tap-rating'>
            <StarRating rating={data?.rating} />
          </div>

          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: showMore ? description : description.slice(0, maxLength)
              }}
            />
            {description.length > maxLength && (
              <div
                onClick={toggleShowMore}
                style={{ cursor: 'pointer', color: '#007bff' }}
              >
                {showMore ? (
                  <>
                    <FaCaretUp style={{ marginRight: '5px' }} />
                    Show Less
                  </>
                ) : (
                  <>
                    <FaCaretDown style={{ marginRight: '5px' }} />
                    Show More
                  </>
                )}
              </div>
            )}
          </div>
        </Tab>

        <Tab eventKey='amenities' title='Information'>
          <ActivityDetailInfo />
        </Tab>

        <Tab eventKey='prices' title='Reviews'>
          <p>Prices for the stay: ${price}</p>
        </Tab>

        <Tab eventKey='policies' title='Policies'>
          <p>Policies content here...</p>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default ActivityTabsSection;
