import React from 'react';
import { useActivityQuery } from '../../hooks/useFetchActivityById';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Spinner from '../../common/Spinner/Spinner';
import SearchBar from '../../common/SearchBar/SearchBar';
import ActivityImageSlide from '../../common/ActivitySlide/ActivityImageSlide';
import ActivityTabsSection from './components/TabsSection/ActivityTabsSection';
import ActivityDetailContent from './ActivityDetailContent';
import FAQSection from './components/FAQSection/FAQSection';
import PoliciesAndFeesSection from './components/PoliciesAndFeesSection/PoliciesAndFeesSection';
import ActivityPromotion from './components/Promotion/ActivityPromotion.jsx';
import AdvertisingBanner from '../../common/AdvertisingBanner/AdvertisingBanner.jsx';

const ActivityDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useActivityQuery({ ids: [id] });
  const activity = data ? data[0]?.data : {};

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <Container>
      {/* Image Slider */}
      <Row>
        <Col>
          <ActivityImageSlide data={activity} />
        </Col>
      </Row>

      {/* Search Bar */}
      <Row className='mb-0'>
        <Col>
          <SearchBar tab='activity' />
        </Col>
      </Row>

      {/* Tabs for Overview, Amenities, Prices, Policies */}
      <Row>
        <Col>
          {activity ? (
            <ActivityTabsSection
              data={activity}
              description={activity?.description}
              price={activity?.price?.amount}
            />
          ) : (
            <p>No activity information provided</p>
          )}
        </Col>
      </Row>

      {/* Main Content and Reservation */}
      <Row className='mt-4'>
        <Col lg={12} md={12} sm={12} xs={12}>
          <ActivityDetailContent data={activity} />
        </Col>
      </Row>

      {/* Activity Promotion */}
      <Row className='mt-4'>
        <Col>
          <ActivityPromotion />
        </Col>
      </Row>

      {/* FAQ Section */}
      <Row className='mt-4'>
        <Col>
          <FAQSection />
        </Col>
      </Row>

      {/* Policies and Fees */}
      <Row className='mt-4'>
        <Col>
          <PoliciesAndFeesSection />
        </Col>
      </Row>

      <Row className='mt-4'>
        <Col>
          <AdvertisingBanner />
        </Col>
      </Row>
    </Container>
  );
};

export default ActivityDetailPage;
