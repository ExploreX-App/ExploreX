import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HotelDetailHeader from "./components/HotelDetailHeader/HotelDetailHeader";
import HotelPageLayout from "../HotelPage/Layout/HotelPageLayout";

// 컴포넌트들
import HotelDescription from "./components/HotelDescription/HotelDescription"
import ImportantInformation from "./components/HotelImportantInformation/HotelImportantInformation"
import TermsOfUse from "./components/HotelTermsOfUse/HotelTermsOfUse";
import FreqeuntAskedQuestions from "./components/HotelFrequentAskedQuestions/FreqeuntAskedQuestions"
import HotelReview from "./components/HotelReviewList/HotelReviewList";
import AdvertisingBanner from "./components/HotelAdvertisingBanner/HotelAdvertisingBanner";



import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import "./HotelDetailPage.style.css";

// Mock data
const mockData = {
  hotel_id: 1,
  address: "123 Mock Street",
  city: "Mock City",
  country_trans: "Mock Country",
  accommodation_type_name: "Hotel",
  composite_price_breakdown: {
    gross_amount: { amount_rounded: 300 },
    gross_amount_per_night: { amount_rounded: 100 }
  },
  distance_to_cc: 2.5,
  available_rooms: 5,
  review_nr: 150,
  facilities_block: {
    name: "Facilities",
    facilities: [
      { name: "Free Wi-Fi" },
      { name: "Swimming Pool" },
      { name: "Gym" }
    ]
  },
  property_highlight_strip: [
    { name: "Great Location" },
    { name: "Family Friendly" }
  ],
  rooms: {
    room1: {
      photos: [{ url_max300: "https://via.placeholder.com/300" }]
    }
  },
  photos: [
    "https://via.placeholder.com/600",
    "https://via.placeholder.com/600",
    "https://via.placeholder.com/600"
  ]
};

const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const yOffset = offset;
    const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yPosition, behavior: 'smooth' });
  }
};

const HotelDetailPage = () => {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState("home");
  const [isManualScroll, setIsManualScroll] = useState(false); // 수동 스크롤 감지 상태

  const handleSelect = (key) => {
    if (key !== activeKey) {
      setActiveKey(key);  // 탭 상태 즉시 변경
      navigate({ search: `?section=${key}` }, { replace: true });
      setIsManualScroll(true);  // 탭 클릭으로 인한 수동 스크롤 시작
      scrollToElement(key, -80);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isManualScroll) return; // 수동 스크롤 중일 때는 스크롤 감지를 하지 않음

      const sections = [
        { id: "home", offset: 0 },
        { id: "info-n-rates", offset: 0 },
        { id: "facilities-n-service", offset: 0 },
        { id: "terms-of-use", offset: 0 },
        { id: "important-info", offset: 0 },
        { id: "reviews", offset: 0 }
      ];
      let currentSection = null;

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top; // 섹션의 상단 위치
          const elementBottom = rect.bottom; // 섹션의 하단 위치

          // 현재 보이는 섹션이 화면 중간에 들어왔는지 확인
          if (elementTop <= window.innerHeight / 2 && elementBottom >= window.innerHeight / 2) {
            currentSection = id; // 현재 섹션 업데이트
          }
        }
      });

      // 현재 보이는 섹션에 맞는 탭을 활성화
      if (currentSection && currentSection !== activeKey) {
        setActiveKey(currentSection);
        navigate({ search: `?section=${currentSection}` }, { replace: true });
      }
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeKey, navigate, isManualScroll]);

  // 수동 스크롤 완료 후 자동 스크롤로 돌아감
  useEffect(() => {
    if (isManualScroll) {
      const timeout = setTimeout(() => setIsManualScroll(false), 1000); // 수동 스크롤 후 일정 시간 후 자동 스크롤 활성화
      return () => clearTimeout(timeout);
    }
  }, [isManualScroll]);

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

      {/* 1. Hotel Overview */}
      <div id="home">
        <HotelDetailHeader hotel={mockData} reviewScore={4.5} />
        <div className="pics-n-map" style={{ display: "flex" }}>
          <div className="photo-gallery">
            {(mockData?.photos || []).map((photo, index) => (
              <img src={photo} key={index} alt={`Hotel photo ${index}`} className={`photo-${index}`} />
            ))}
            {Object.values(mockData?.rooms || {}).map((room) =>
              (room?.photos || []).map((photo, index) => (
                <img src={photo.url_max300} alt={`Room photo ${index}`} key={index} className={`photo-room-${index}`} />
              ))
            )}
          </div>
          <div
            className="map"
            style={{
              border: "2px solid black",
              width: "200px",
              height: "auto",
              margin: "20px",
            }}
          >
            Map Placeholder
          </div>
        </div>
        <HotelDescription hotelId={mockData?.hotel_id} />
      </div>

      {/* 2. Info & Rates */}
      <div id="info-n-rates">
        <div>Total: {mockData?.composite_price_breakdown?.gross_amount?.amount_rounded ?? "N/A"}</div>
        <div>Per night: {mockData?.composite_price_breakdown?.gross_amount_per_night?.amount_rounded ?? "N/A"}</div>
        <div>Accommodation type: {mockData?.accommodation_type_name ?? "N/A"}</div>
        <div>Address: {mockData?.address}, {mockData?.city}, {mockData?.country_trans}</div>
        <div>Average room size m^2: {mockData?.average_room_size_for_ufi_m2 ?? "N/A"}</div>
        <div>{mockData?.distance_to_cc?.toFixed(0)} km from the center of {mockData?.city}</div>
        <div>Available rooms: {mockData?.available_rooms ?? "N/A"}</div>
        <div>Review count: {mockData?.review_nr ?? "N/A"}</div>
        <div className="mt-3 mb-3">
          {mockData?.facilities_block?.name} :
          {(mockData?.facilities_block?.facilities || []).map((fac, index) => (
            <div key={index}>{fac.name}</div>
          ))}
        </div>
        <div className="mb-3">
          Property highlights:
          {(mockData?.property_highlight_strip || []).map((hl, index) => (
            <div key={index}>{hl.name}</div>
          ))}
        </div>
      </div>

      {/* 3. Facilities & Service */}
      <div id="facilities-n-service">
        facilities-n-service
      </div>

      {/* 4. Terms of Use */}
      <div id="terms-of-use">
        <TermsOfUse />
      </div>

      {/* 5. Important Information */}
      <div id="important-info">
        <ImportantInformation />
        <FreqeuntAskedQuestions />
      </div>

      {/* 6. Reviews */}
      <div id="reviews">
        <HotelReview />
      </div>

      <AdvertisingBanner />
    </div>
  );
};

export default HotelDetailPage;
