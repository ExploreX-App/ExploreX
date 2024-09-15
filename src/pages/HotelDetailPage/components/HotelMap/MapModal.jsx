import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./MapModal.style.css";
import MapPopup from "./MapPopup";

const CustomMarkerIcon = (price) => {
  return L.divIcon({
    className: "custom-marker",
    html: `<div class="marker-container">
               <div class="price-label">${price?.slice(2)}</div>
             </div>`,
    iconSize: [80, 30],
    iconAnchor: [40, 15],
  });
};

const MapModal = ({ show, onHide, hotel, hotels, city }) => {
  const totalHotels = hotels?.concat(hotel);
  const isDetailPage = hotel?.name === undefined;
console.log(hotel?.name)
  const mapTitle = hotel?.city
    ? `Hotels in ${hotel?.city}`
    : `Hotels in ${city}`;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{mapTitle}</Modal.Title>
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
                  key={hotel?.id || hotel?.name}  // key를 설정하여 오류 방지
                  position={[hotel?.latitude, hotel?.longitude]}
                  icon={CustomMarkerIcon(
                    hotel.composite_price_breakdown?.gross_amount?.amount_rounded ||
                    "US$" + hotel.priceBreakdown.grossPrice.value.toFixed(2)
                  )}
                >
                  <Popup>
                    {isDetailPage ? (
                      <MapPopup
                        hotel={{
                          name: hotel?.hotel_name,
                        }}
                        isDetailPage={isDetailPage}
                      />
                    ) : (
                      <MapPopup
                        hotel={{
                          name: hotel?.name,
                          reviewScore: hotel?.reviewScore,
                          reviewScoreWord: hotel?.reviewScoreWord,
                          photos: hotel?.photoUrls,
                        }}
                        isDetailPage={isDetailPage}
                      />
                    )}
                  </Popup>
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
