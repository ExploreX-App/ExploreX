import React, { useState, useRef } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useHotelDetailsQuery } from "../../hooks/useFetchHotelDetails";
// 컴포넌트들
import TermsOfUse from "./components/HotelTermsOfUse/HotelTermsOfUse";
import FreqeuntAskedQuestions from "./components/HotelFrequentAskedQuestions/FreqeuntAskedQuestions";
import HotelReview from "./components/HotelReviewList/HotelReviewList";
import AdvertisingBanner from "../../common/AdvertisingBanner/AdvertisingBanner";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import "./HotelDetailPage.style.css";
import SearchBar from "../../common/SearchBar/SearchBar";
import HotelOverview from "./components/HotelOverview/HotelOverview";
import HotelInfo from "./components/HotelInfo/HotelInfo";
import { useHotelsByGeoData } from '../../hooks/useFetchHotelsByGeoData';

const HotelDetailPage = () => {
  const location = useLocation();
  const { dateFrom, dateTo, adultNum, photos, reviewScore } = location.state || {};
  const { id } = useParams();
  const { data, isLoading, error, isError } = useHotelDetailsQuery({
    hotelId: id,
    dateFrom,
    dateTo,
    adultNum,
  });
  const { data: hotelsGeoData } = useHotelsByGeoData({
    geoData: { latitude: data?.latitude, longitude: data?.longitude },
    radius: 20,
    dateFrom,
    dateTo,
  });

  // 사진 모달을 위함
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const homeRef = useRef();
  const infoRef = useRef();
  const reviewRef = useRef();
  const faqRef = useRef();

  const handleSelect = (key) => {
    switch (key) {
      case "info-n-rates":
        infoRef.current.scrollIntoView();
        break;
      case "reviews":
        reviewRef.current.scrollIntoView();
        break;
      case "faq":
        faqRef.current.scrollIntoView();
        break;
      default:
        homeRef.current.scrollIntoView();
        break;
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <SearchBar dateFrom={dateFrom} dateTo={dateTo} adultNum={adultNum} />
      <div className="tabs-container">
        <Tabs
          onSelect={handleSelect}
          id="hotel-detail-tabs"
          className="mb-3"
          fill
        >
          <Tab eventKey="home" title="Overview"></Tab>
          <Tab eventKey="info-n-rates" title="Rooms"></Tab>
          <Tab eventKey="reviews" title="Reviews"></Tab>
          <Tab eventKey="faq" title="Policies"></Tab>
        </Tabs>
      </div>

      <HotelOverview
        homeRef={homeRef}
        reviewScore={reviewScore}
        data={data}
        hotelsGeoData={hotelsGeoData}
        photos={photos}
        reviewRef={reviewRef}
        faqRef={faqRef}
      />


      <HotelInfo data={data} infoRef={infoRef} adultNum={adultNum} />
      <HotelReview hotelId={data?.hotel_id} reviewRef={reviewRef}/>

      <TermsOfUse data={data} faqRef={faqRef} />
      <FreqeuntAskedQuestions />
      <AdvertisingBanner />
    </div>
  );
};

export default HotelDetailPage;
