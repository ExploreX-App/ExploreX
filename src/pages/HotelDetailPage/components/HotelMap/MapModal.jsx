import React from "react";
import { Modal, Button } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./MapModal.style.css";

// 마커 기본 아이콘 설정
const CustomMarkerIcon = (price) => {
  return L.divIcon({
    className: "custom-marker", // 커스텀 클래스 설정
    html: `<div class="marker-container">
               <div class="price-label">${price.slice(2)}</div>
             </div>`,
    iconSize: [80, 30], // 마커 크기 조정
    iconAnchor: [40, 15], // 마커 포지션 조정
  });
};

// 이 코드 없으면 기본 아이콘이 표시되지 않을 수 있음
// L.Marker.prototype.options.icon = DefaultIcon;

const MapModal = ({ show, onHide, hotel, hotels }) => {
  const totalHotels = hotels?.concat(hotel);

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Hotels in {hotel?.city}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ height: "400px", width: "100%" }}>
          {hotel?.latitude && hotel?.longitude && (
            <MapContainer
              center={[hotel?.latitude, hotel?.longitude]}
              zoom={13}
              scrollWheelZoom={true}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              {totalHotels?.map((hotel) => (
                <Marker
                  position={[hotel?.latitude, hotel?.longitude]}
                  icon={CustomMarkerIcon(
                    hotel.composite_price_breakdown?.gross_amount
                      ?.amount_rounded
                  )}
                >
                  <Popup>{hotel?.hotel_name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MapModal;
