import React from "react";
import { Modal, Button } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./MapModal.style.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useHotelsByKeywordQuery } from "../../../../hooks/useFetchHotelsByKeyword";

// 마커 기본 아이콘 설정
const CustomMarkerIcon = (price) => {
  return L.divIcon({
    className: "custom-marker", // 커스텀 클래스 설정
    html: `<div class="marker-container">
               <div class="price-label">${price}</div>
             </div>`,
    iconSize: [80, 30], // 마커 크기 조정
    iconAnchor: [40, 15], // 마커 포지션 조정
  });
};

// 이 코드 없으면 기본 아이콘이 표시되지 않을 수 있음
// L.Marker.prototype.options.icon = DefaultIcon;

const MapModal = ({ show, onHide, hotel }) => {
  const { data, error, isLoading, isError } = useHotelsByKeywordQuery({
    keyword: hotel?.city,
    dateFrom: hotel?.arrival_date,
    dateTo: hotel?.departure_date,
    adultNum: 2,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  const hotels = data;
  console.log(hotels)
  // const totalHotels = hotels?.concat(hotel);
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Hahahaha</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ height: "400px", width: "100%" }}>
          <MapContainer
            center={[hotel.latitude, hotel.longitude]}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {hotels?.map((hotel) => (
              <Marker
                position={[hotel.property.latitude, hotel.property.longitude]}
                icon={CustomMarkerIcon(
                  hotel.property.priceBreakdown?.grossPrice?.value.toFixed(0)
                )}
              >
                <Popup>{hotel.property.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
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
