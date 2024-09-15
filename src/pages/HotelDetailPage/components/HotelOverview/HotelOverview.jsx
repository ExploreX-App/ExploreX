import React from "react";
import MapPreview from '../HotelMap/MapPreview';
import HotelDescription from "../HotelDescription/HotelDescription";
import HotelDetailHeader from "./HotelDetailHeader/HotelDetailHeader";
import { Container, Row, Col } from "react-bootstrap";
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
  const roomPhotos = Object.values(data?.rooms || {}).flatMap((room) =>
    room?.photos?.slice(0, 5) || []
  );

  // 사진의 총 수가 5인지 확인
  const totalPhotosCount = initialPhotos.length + roomPhotos.length;
  // console.log("Initial Photos Count:", initialPhotos.length); // 디버그 로그
  // console.log("Room Photos Count:", roomPhotos.length); // 디버그 로그
  // console.log("Total Photos Count:", totalPhotosCount); // 디버그 로그

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
            <div
              className={`photo-gallery mb-4 ${
                totalPhotosCount === 5 ? "single-photo" : ""
              }`}
            >
              {/* 사진의 총 수가 5보다 작을 경우 */}
              {totalPhotosCount < 5 ? (
                initialPhotos[0] ? (
                  <img
                    src={initialPhotos[0].replace("square60", "square600")}
                    alt=""
                    className="photo-0"
                  />
                ) : (
                  <p>No photos available</p>
                )
              ) : (
                <>
                  {initialPhotos.map((photo, index) => {
                    const adjustedPhoto = photo.replace("square60", "square600");
                    return (
                      <img
                        src={adjustedPhoto}
                        key={index}
                        alt=""
                        className={`photo-${index}`}
                      />
                    );
                  })}
                  {roomPhotos.map((photo, index) => (
                    <img
                      src={photo.url_max300}
                      alt=""
                      key={index}
                      className={`photo-room-${index}`}
                    />
                  ))}
                </>
              )}
            </div>
          </Col>
          <Col
            xs={12}
            md={4}
            className="h-100 d-flex flex-column justify-space-between"
          >
            {(reviews && reviews.length > 0) && (
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
          <HotelHighlights data={data} faqRef={faqRef} />
        </Col>
      </Row>
    </div>
  );
};

export default HotelDetailOverview;
