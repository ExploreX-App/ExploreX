import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import { useHotelsByGeoData } from "../../hooks/useFetchHotelsByGeoData";
import Spinner from "../../common/Spinner/Spinner";

const HotelDetailPage = () => {
  const navigate = useNavigate();
  const selectedHotel = JSON.parse(localStorage.getItem("hotel") || null);
  const adultNum = parseInt(localStorage.getItem("adultNum"));

  const { id } = useParams();
  useEffect(() => {
    if (!selectedHotel || selectedHotel.id.toString() !== id) {
      navigate("/");
    }
  }, [selectedHotel, id, navigate]);

  const { data, isLoading, error, isError } = useHotelDetailsQuery({
    hotelId: id,
    dateFrom: selectedHotel?.checkinDate,
    dateTo: selectedHotel?.checkoutDate,
    adultNum: adultNum,
  });

  const { data: hotelsGeoData } = useHotelsByGeoData({
    geoData: { latitude: data?.latitude, longitude: data?.longitude },
    radius: 20,
    dateFrom: selectedHotel?.checkinDate,
    dateTo: selectedHotel?.checkoutDate,
  });

  const homeRef = useRef();
  const infoRef = useRef();
  const reviewRef = useRef();
  const faqRef = useRef();
  console.log("home", faqRef);
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
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <SearchBar
        dateFrom={selectedHotel?.checkinDate}
        dateTo={selectedHotel?.checkoutDate}
        adultNum={adultNum}
        style={{ position: 'relative', zIndex: 10 }} 
      />
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
        reviewScore={selectedHotel?.reviewScore}
        data={data}
        hotelsGeoData={hotelsGeoData}
        photos={selectedHotel?.photoUrls}
        reviewRef={reviewRef}
        faqRef={faqRef}
      />

      <HotelInfo
        data={data}
        infoRef={infoRef}
        adultNum={adultNum}
        reviewScore={selectedHotel?.reviewScore}
      />
      <HotelReview hotelId={data?.hotel_id} reviewRef={reviewRef} />

      <TermsOfUse data={data} faqRef={faqRef} />
      <FreqeuntAskedQuestions />
      <AdvertisingBanner />
    </div>
  );
};

export default HotelDetailPage;
