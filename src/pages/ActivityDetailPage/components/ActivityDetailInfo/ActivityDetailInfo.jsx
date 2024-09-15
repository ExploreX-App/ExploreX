import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { PiMoney } from 'react-icons/pi';
import GoogleMapCard from '../../../../common/GoogleMapCard/GoogleMapCard';
import {
  FaMapMarkerAlt,
  FaUsers,
  FaClock,
  FaMobileAlt,
  FaHeadset,
  FaLink
} from 'react-icons/fa';
import Spinner from '../../../../common/Spinner/Spinner';
import { useActivityQuery } from '../../../../hooks/useFetchActivityById';
// import StarRating from '../../../../common/StarRating/StarRating'; // Comment out if not available
import './ActivityDetailInfo.style.css';

const ActivityAmenities = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useActivityQuery({ id });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const { latitude, longitude } = data?.geoCode || {};

  return (
    <Container className='Activity-detail-info'>
      <Row>
        <Col md={8} className='Activity-detail-info-txt'>
          <h3 className='activity-tap-type'>Entire cabin</h3>
          <h1 className='activity-tap-title'>{data?.name}</h1>
          Address: C/ de Pau Claris, 189, L'Eixample, 08037 Barcelona, Spain{' '}
          <br />
          <br />
          <div className='d-flex align-items-center mt-1 mb-1 fs-5'>
            <FaMapMarkerAlt
              style={{ marginRight: '.25rem' }}
              className='icon-color'
            />
            <div>{data?.minimumDuration || '1 hour 30 minutes'}</div>
          </div>
          <div className='d-flex align-items-center mt-1 mb-1 fs-5'>
            <PiMoney style={{ marginRight: '.25rem' }} className='icon-color' />
            ${data?.price?.currencyCode
              ? `${data.price.currencyCode} ${data.price.amount}`
              : '0'}
          </div>
          <FaUsers className='icon-color' />
          <b> Ages:</b> 0-90
          <br />
          <FaClock className='icon-color' />
          <b> Start time:</b> Check availability
          <br />
          <FaMobileAlt className='icon-color' />
          <b> Mobile ticket:</b> Not available
          <br />
          <FaHeadset className='icon-color' />
          <b> Live guide:</b> English, Spanish
          <br />
          <hr />
          <Link
            to={data?.bookingLink || `https://maps.google.com?q=${data?.name}`}
          >
            <Button variant='outline-primary' className='btn-book'>
              Book
            </Button>
          </Link>
        </Col>

        <Col md={4}>
          <br />
          {latitude && longitude && (
            <GoogleMapCard lat={latitude} lng={longitude} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ActivityAmenities;
