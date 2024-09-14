import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MapModal from "./MapModal";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// 마커 기본 아이콘 설정
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconAnchor: [12, 41], // 마커가 지도에 올바르게 정렬되도록 하는 설정
  popupAnchor: [1, -34], // 팝업이 마커의 위쪽에 표시되도록 설정
  iconSize: [25, 41], // 아이콘 크기
  shadowSize: [41, 41], // 그림자 크기
});

// 이 코드 없으면 기본 아이콘이 표시되지 않을 수 있음
L.Marker.prototype.options.icon = DefaultIcon;

const MapPreview = ({ hotel, hotelsGeoData }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const position = [hotel.latitude, hotel.longitude];
  return (
    <div>
      {/* 작은 미리보기 지도 */}
      <div style={{ width: "100%", height: "260px", position: "relative" }}>
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%", borderRadius: "5px", overflow: "hidden", }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} zIndexOffset={1000}>
            <Popup>{hotel.hotel_name}</Popup>
          </Marker>
        </MapContainer>
        {/* 가운데 버튼 */}
        <Button
          onClick={handleShowModal}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            border: "none",
            padding: "10px 20px",
            fontSize: "16px",
            zIndex: 1000,
          }}
        >
          View in Map
        </Button>
      </div>

      {/* 큰 지도 모달 */}
      <MapModal
        show={showModal}
        onHide={handleCloseModal}
        hotel={hotel}
        hotels={hotelsGeoData}
      />
    </div>
  );
};

export default MapPreview;