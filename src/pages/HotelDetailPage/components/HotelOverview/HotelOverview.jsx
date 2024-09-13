import React, { useState } from "react";
import MapPreview from "../HotelMap/MapPreview";
import HotelDescription from "../HotelDescription/HotelDescription";
import HotelDetailHeader from "./HotelDetailHeader/HotelDetailHeader";
import { Carousel } from "react-bootstrap";

const HotelDetailOverview = ({ homeRef, reviewScore, data, photos }) => {
  const initialPhotos = photos?.slice(0, 5) || []; // undefined일 경우 빈 배열로 처리
  const [showAllPhotos, setShowAllPhotos] = useState(false); // 사진 더보기 상태
  const handleShowMorePhotos = () => {
    setShowAllPhotos(true); // 사진 더보기 눌렀을 때 캐러셀로 변경
  };
  return (
    <div id="home" ref={homeRef}>
      <HotelDetailHeader hotel={data} reviewScore={reviewScore} />
      <div className="pics-n-map">
        <div className="photo-gallery">
          {!showAllPhotos ? (
            <>
              {initialPhotos?.map((photo, index) => {
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
                const adjustedPhoto = photo.replace("square60", "square600");
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
          <MapPreview hotel={data} />
        </div>
      </div>
      <HotelDescription hotelId={data.hotel_id} />
    </div>
  );
};

export default HotelDetailOverview;
