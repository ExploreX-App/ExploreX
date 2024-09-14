import React, { useState } from "react";
import MapPreview from "../HotelMap/MapPreview";
import HotelDescription from "../HotelDescription/HotelDescription";
import HotelDetailHeader from "./HotelDetailHeader/HotelDetailHeader";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import HotelReviewCard from "../HotelReviewList/components/HotelReviewCard";
import HotelHighlights from "../HotelHighlights/HotelHighlights";

const HotelDetailOverview = ({
  homeRef,
  reviewScore,
  data,
  hotelsGeoData,
  photos,
  reviewRef,
  faqRef
}) => {
  const initialPhotos = photos?.slice(0, 5) || [];
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const handleShowMorePhotos = () => {
    setShowAllPhotos(true);
  };
  const reviews = JSON.parse(localStorage.getItem("reviews"));

  return (
    <div id="home" ref={homeRef}>
      <HotelDetailHeader
        hotel={data}
        reviewScore={reviewScore}
        reviewRef={reviewRef}
      />
      <Container style={{ margin: "20px 0px", padding: "0px" }}>
        <Row>
          <Col xs={12} md={8}>
            <div className="photo-gallery mb-4">
              {!showAllPhotos ? (
                <>
                  {initialPhotos?.map((photo, index) => {
                    const adjustedPhoto = photo.replace(
                      "square60",
                      "square600"
                    );
                    return (
                      <img
                        src={adjustedPhoto}
                        key={index}
                        alt=""
                        className={`photo-${index}`}
                      />
                    );
                  })}
                  {Object.values(data?.rooms || {}).map((room) =>
                    room?.photos
                      ?.slice(0, 5)
                      .map((photo, index) => (
                        <img
                          src={photo.url_max300}
                          alt=""
                          key={index}
                          className={`photo-room-${index}`}
                        />
                      ))
                  )}
                  {photos?.length > 6 && (
                    <button
                      onClick={handleShowMorePhotos}
                      className="btn btn-primary moreBtn"
                    >
                      사진 더보기
                    </button>
                  )}
                </>
              ) : (
                <Carousel>
                  {photos?.map((photo, index) => {
                    const adjustedPhoto = photo.replace(
                      "square60",
                      "square600"
                    );
                    return (
                      <Carousel.Item key={index}>
                        <img
                          src={adjustedPhoto}
                          alt={`photo-${index}`}
                          className="d-block w-100"
                        />
                      </Carousel.Item>
                    );
                  })}
                  {Object.values(data?.rooms || {}).map((room) =>
                    room?.photos?.map((photo, index) => (
                      <Carousel.Item key={index}>
                        <img
                          src={photo.url_max300}
                          alt={`photo-room-${index}`}
                          className="d-block w-100"
                        />
                      </Carousel.Item>
                    ))
                  )}
                </Carousel>
              )}
            </div>
          </Col>
          <Col
            xs={12}
            md={4}
            className="h-100 d-flex flex-column justify-space-between"
          >
            {reviews && (
              <div style={{ marginBottom: "20px" }}>
                <HotelReviewCard review={reviews[0]} />
              </div>
            )}

            <div style={{ marginTop: "10px" }}>
              <MapPreview hotel={data} hotelsGeoData={hotelsGeoData} />
            </div>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col xs={12} md={8}>
          <HotelDescription hotelId={data?.hotel_id} />
        </Col>
        <Col xs={12} md={4}>
          <HotelHighlights data={data} faqRef={faqRef}/>
        </Col>
      </Row>
    </div>
  );
};

export default HotelDetailOverview;
