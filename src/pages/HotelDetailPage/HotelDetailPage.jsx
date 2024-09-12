import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import HotelDetailHeader from "./components/HotelDetailHeader/HotelDetailHeader";
import HotelPageLayout from "../HotelPage/Layout/HotelPageLayout";
import { useHotelDetailsQuery } from "../../hooks/useFetchHotelDetails";
import { useHotelsByGeoData } from "../../hooks/useFetchHotelsByGeoData";

import { Modal, Carousel } from "react-bootstrap";


// 컴포넌트들
import HotelDescription from "./components/HotelDescription/HotelDescription";
import ImportantInformation from "./components/HotelImportantInformation/HotelImportantInformation";
import TermsOfUse from "./components/HotelTermsOfUse/HotelTermsOfUse";
import FreqeuntAskedQuestions from "./components/HotelFrequentAskedQuestions/FreqeuntAskedQuestions";
import HotelReview from "./components/HotelReviewList/HotelReviewList";
import AdvertisingBanner from "./components/HotelAdvertisingBanner/HotelAdvertisingBanner";

import MapPreview from "./components/HotelMap/MapPreview";


import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import "./HotelDetailPage.style.css";

const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const yOffset = offset;
    const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  }
};

const HotelDetailPage = () => {
  const location = useLocation();
  const { dateFrom, dateTo, adultNum, photos, reviewScore } = location.state || {};
  const [keywordQuery, setKeywordQuery] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, error, isError } = useHotelDetailsQuery({
    hotelId: id,
    dateFrom,
    dateTo,
    adultNum,
  });

  const { data: hotelsData } = useHotelsByGeoData({
    geoData: { latitude: data?.latitude, longitude: data?.longitude },
    radius: 10,
    dateFrom,
    dateTo,
  });

  console.log("hotels", hotelsData);


  // 탭을 위함
  const [activeKey, setActiveKey] = useState("home");
  const [isManualScroll, setIsManualScroll] = useState(false);

  // 사진 모달을 위함
  const [showAllPhotos, setShowAllPhotos] = useState(false); // 사진 더보기 상태
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (key) => {
    if (key !== activeKey) {
      setActiveKey(key);
      navigate({ search: `?section=${key}` }, { replace: true });
      setIsManualScroll(true);
      scrollToElement(key, -80);
    }
  };

  const handleShowMorePhotos = () => {
    setShowAllPhotos(true); // 사진 더보기 눌렀을 때 캐러셀로 변경
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isManualScroll) return;

      const sections = [
        { id: "home", offset: 0 },
        { id: "info-n-rates", offset: 0 },
        { id: "facilities-n-service", offset: 0 },
        { id: "terms-of-use", offset: 0 },
        { id: "important-info", offset: 0 },
        { id: "reviews", offset: 0 },
      ];
      let currentSection = null;

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top;
          const elementBottom = rect.bottom;

          if (elementTop <= window.innerHeight / 2 && elementBottom >= window.innerHeight / 2) {
            currentSection = id;
          }
        }
      });

      if (currentSection && currentSection !== activeKey && data) {
        setActiveKey(currentSection);
        navigate({
          search: `?section=${currentSection}`,
          state: {
            dateFrom: data.dateFrom,
            dateTo: data.dateTo,
            adultNum: data.adultNum,
            photos: data.photos,
            reviewScore: data.reviewScore,
          },
        }, { replace: true });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeKey, navigate, isManualScroll, data]);

  useEffect(() => {
    if (isManualScroll) {
      const timeout = setTimeout(() => setIsManualScroll(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [isManualScroll]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const initialPhotos = photos?.slice(0, 5) || []; // undefined일 경우 빈 배열로 처리

  return (
    <div>
      <HotelPageLayout />
      <div className="tabs-container">
        <Tabs onSelect={handleSelect} activeKey={activeKey} id="hotel-detail-tabs" className="mb-3" fill>
          <Tab eventKey="home" title="Hotel Overview"></Tab>
          <Tab eventKey="info-n-rates" title="Info & rates"></Tab>
          <Tab eventKey="facilities-n-service" title="Facilities & Service"></Tab>
          <Tab eventKey="terms-of-use" title="Terms of Use"></Tab>
          <Tab eventKey="important-info" title="Important Information"></Tab>
          <Tab eventKey="reviews" title="Customer Reviews"></Tab>
        </Tabs>
      </div>

      {/* Hotel Overview Section */}
      <div id="home">
        <HotelDetailHeader hotel={data} reviewScore={reviewScore} />
        <div className="pics-n-map">
          <div className="photo-gallery">
            {!showAllPhotos ? (
              <>
                {initialPhotos?.map((photo, index) => {
                  const adjustedPhoto = photo.replace("square60", "square600");
                  return <img src={adjustedPhoto} key={index} alt="" className={`photo-${index}`} />;
                })}
                {Object.values(data?.rooms || {}).map((room) =>
                  room?.photos?.slice(0, 5).map((photo, index) => (
                    <img src={photo.url_max300} alt="" key={index} className={`photo-room-${index}`} />
                  ))
                )}
                {photos?.length > 6 && (
                  <button onClick={handleShowMorePhotos} className="btn btn-primary moreBtn">
                    사진 더보기
                  </button>
                )}
              </>
            ) : (
              <Carousel>
                {photos?.map((photo, index) => {
                  const adjustedPhoto = photo.replace("square60", "square600");
                  return (
                    <Carousel.Item key={index}>
                      <img src={adjustedPhoto} alt={`photo-${index}`} className="d-block w-100" />
                    </Carousel.Item>
                  );
                })}
                {Object.values(data?.rooms || {}).map((room) =>
                  room?.photos?.map((photo, index) => (
                    <Carousel.Item key={index}>
                      <img src={photo.url_max300} alt={`photo-room-${index}`} className="d-block w-100" />
                    </Carousel.Item>
                  ))
                )}
              </Carousel>
            )}
                  {/* <button onClick={handleShowMorePhotos} className="btn btn-primary moreBtn">
                    사진 더보기
                  </button> */}
          </div>

          {/* 맵 추가 */}
          <div
            className="map"
            style={{
              border: "2px solid black",
              width: "200px",
              height: "auto",
              margin: "20px",
            }}
          >
          <MapPreview hotel={data} hotels={hotelsData} />
          </div>
        </div>
      </div>

      {/* Info & Rates Section */}
      <div id="info-n-rates">
        <div>Total: {data?.composite_price_breakdown?.gross_amount?.amount_rounded}</div>
        <div>Per night: {data?.composite_price_breakdown?.gross_amount_per_night?.amount_rounded}</div>
        <div>Accommodation type: {data?.accommodation_type_name}</div>
        <div>
          Address: {data?.address}, {data?.city}, {data?.country_trans}
        </div>
        <div>Average room size m²: {data?.average_room_size_for_ufi_m2}</div>
        <div>
          {typeof data?.distance_to_cc === "number"
            ? `${data.distance_to_cc.toFixed(0)} km from the center of ${data.city}`
            : "Distance information not available"}
        </div>
        <div>Available rooms: {data?.available_rooms}</div>
        <div>Review: {data?.review_nr}</div>
        <div className="mt-3 mb-3">
          {data?.facilities_block?.name}:
          {data?.facilities_block?.facilities?.map((fac, index) => (
            <div key={index}>{fac.name}</div>
          ))}
        </div>
      </div>

      {/* Other sections */}
      <div id="facilities-n-service">facilities-n-service</div>
      <div id="terms-of-use"><TermsOfUse /></div>
      <div id="important-info"><ImportantInformation /><FreqeuntAskedQuestions /></div>
      <div id="reviews"><HotelReview hotelId={data.hotel_id} /></div>
      <AdvertisingBanner />
    </div>
  );
};

export default HotelDetailPage;
