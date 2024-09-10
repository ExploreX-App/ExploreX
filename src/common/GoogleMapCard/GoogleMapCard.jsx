import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useAddressQuery } from "../../hooks/useFetchAddress";
import "./GoogleMapCard.style.css";
import { Card } from "react-bootstrap";

const GoogleMapCard = ({ lat, lng }) => {
  const REACT_APP_GOOGLE_MAPS_API_KEY =
    process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const position = { lat, lng };
  const { data, isLoading, isError, error } = useAddressQuery({ lat, lng });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <Card>
      <div className="w-100" style={{aspectRatio: "3 / 2"}}>
        <APIProvider apiKey={REACT_APP_GOOGLE_MAPS_API_KEY}>
          <Map
            // style={{ width: "100vw", height: "100vh" }}
            defaultCenter={position}
            defaultZoom={16}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
          >
            <Marker position={position} />
          </Map>
        </APIProvider>
      </div>
      <Card.Body>
        {/* <Card.Title>Location</Card.Title> */}
        <Card.Text>{data[0]?.formatted_address}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default GoogleMapCard;
