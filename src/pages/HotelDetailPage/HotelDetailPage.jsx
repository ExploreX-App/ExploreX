import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HotelDescription from "./components/HotelDescription";
import HotelDetailHeader from "./components/HotelDetailHeader/HotelDetailHeader";
import HotelPageLayout from "../HotelPage/Layout/HotelPageLayout";
import AdvertisingBanner from "./components/AdvertisingBanner";
import ImportantInformation from "./components/ImportantInformation";
import FreqeuntAskedQuestions from "./components/FreqeuntAskedQuestions";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TermsOfUse from "./components/TermsOfUse";
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
  const [keywordQuery, setKeywordQuery] = useState(null);
  const [activeKey, setActiveKey] = useState("home");
  const section = null; // Mocking query

  // Mock data instead of API call
  const data = mockData;
  const isLoading = false;
  const isError = false;
  const reviewScore = 4.5; // Mock review score
  const photos = mockData.photos; // Mock photos

  useEffect(() => {
    if (section && section !== activeKey) {
      setActiveKey(section);
      scrollToElement(section, -80);
    }
  }, [section, activeKey]);

  const handleSelect = (key) => {
    if (key !== activeKey) {
      setActiveKey(key);
      navigate({ search: `?section=${key}` }, { replace: true });
      setTimeout(() => scrollToElement(key, -80), 0);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'info-n-rates', 'facilities-n-service', 'terms-of-use', 'important-info', 'reviews'];
      let currentSection;
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            currentSection = section;
          }
        }
      });
      if (currentSection && currentSection !== activeKey) {
        setActiveKey(currentSection);
        navigate({ search: `?section=${currentSection}` }, { replace: true });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeKey, navigate]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error occurred</h1>;
  }

  return (
    <div>
      <HotelPageLayout setKeywordQuery={setKeywordQuery} />
      <div className="tabs-container"> 
      <Tabs onSelect={handleSelect} activeKey={activeKey} id="hotel-detail-tabs" className="mb-3" fill>
        <Tab eventKey="home" title="Hotel Overview">
          {/* Hotel Overview */}
        </Tab>
        <Tab eventKey="info-n-rates" title="Info & rates">
          {/* info-n-rates */}
        </Tab>
        <Tab eventKey="facilities-n-service" title="Facilities & Service">
          {/* facilities-n-service */}
        </Tab>
        <Tab eventKey="terms-of-use" title="Terms of Use">
          {/* terms-of-use */}
        </Tab>
        <Tab eventKey="important-info" title="Important Information">
          {/* important-info */}
        </Tab>
        <Tab eventKey="reviews" title="Customer Reviews">
          {/* reviews */}
        </Tab>
      </Tabs>
      </div>

      {/* 1 */}
      <div id="hotel-overview">
        <HotelDetailHeader hotel={data} reviewScore={reviewScore} />
        <div className="pics-n-map" style={{ display: "flex" }}>
          <div className="photo-gallery">
            {photos?.map((photo, index) => (
              <img src={photo} key={index} alt={`Hotel photo ${index}`} className={`photo-${index}`} />
            ))}
            {Object.values(data?.rooms).map((room) =>
              room?.photos?.map((photo, index) => (
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
        <HotelDescription hotelId={data?.hotel_id} />
      </div>

      {/* 2 */}
      <div id="info-n-rates">
        <div>Total: {data?.composite_price_breakdown?.gross_amount?.amount_rounded ?? "N/A"}</div>
        <div>Per night: {data?.composite_price_breakdown?.gross_amount_per_night?.amount_rounded ?? "N/A"}</div>
        <div>Accommodation type: {data?.accommodation_type_name ?? "N/A"}</div>
        <div>Address: {data?.address}, {data?.city}, {data?.country_trans}</div>
        <div>Average room size m^2: {data?.average_room_size_for_ufi_m2 ?? "N/A"}</div>
        <div>{data?.distance_to_cc?.toFixed(0)} km from the center of {data?.city}</div>
        <div>Available rooms: {data?.available_rooms ?? "N/A"}</div>
        <div>Review count: {data?.review_nr ?? "N/A"}</div>
        <div className="mt-3 mb-3">
          {data?.facilities_block?.name} :
          {data?.facilities_block?.facilities?.map((fac, index) => (
            <div key={index}>{fac.name}</div>
          ))}
        </div>
        <div className="mb-3">
          Property highlights:
          {data?.property_highlight_strip?.map((hl, index) => (
            <div key={index}>{hl.name}</div>
          ))}
        </div>
      </div>

      {/* 3 */}
      <div id="facilities-n-service">
        facilities-n-service
      </div>

      {/* 4 */}
      <div id="terms-of-use">
        terms-of-use
      </div>

      {/* 5 */}
      <div id="important-info">
        <ImportantInformation />
        <FreqeuntAskedQuestions />
      </div>

      {/* 6 */}
      <div id="reviews"></div>

      <AdvertisingBanner />
    </div>
  );
};

export default HotelDetailPage;
