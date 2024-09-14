import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { LuTimerReset } from 'react-icons/lu';
import { PiMoney } from 'react-icons/pi';
import GoogleMapCard from '../../../../common/GoogleMapCard/GoogleMapCard';
import {
  FaMapMarkerAlt,
  FaUsers,
  FaClock,
  FaMobileAlt,
  FaHeadset
} from 'react-icons/fa';
import Spinner from '../../../../common/Spinner/Spinner';
import { useActivityQuery } from '../../../../hooks/useFetchActivityById';
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
        <Col md={8} className='Activity-detail-info-text'>
          <br />
          C/ de Pau Claris, 189, L'Eixample, 08037 Barcelona, Spain <br />
          <br />
          <FaMapMarkerAlt className='icon-color' />
          <b> Duration:</b> 1 h 30 minutes
          <br />
          <FaUsers className='icon-color' />
          <b> Ages:</b> 0-90
          <br />
          <FaClock className='icon-color' />
          <b> Start time:</b> Check availability
          <br />
          <FaMobileAlt className='icon-color' />
          <b> Mobile ticket:</b>
          <br />
          <FaHeadset className='icon-color' />
          <b> Live guide:</b> English, Spanish
          <hr />
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
