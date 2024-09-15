import React from "react";
import { useHotelsByKeywordQuery } from "../../hooks/useFetchHotelsByKeyword";
import HotelCard from "./components/HotelCard/HotelCard";
import { useLocation } from "react-router-dom";
import SearchBar from "../../common/SearchBar/SearchBar";
import { Container, Row, Col } from "react-bootstrap";
import MapPreview from "../HotelDetailPage/components/HotelMap/MapPreview";
import Spinner from "../../common/Spinner/Spinner";

const HotelPage = () => {
  const location = useLocation();
  const {
    keyword = "",
    dateFrom = "",
    dateTo = "",
    adultNum = 1,
  } = location.state || {};
  const { data, isLoading, error, isError } = useHotelsByKeywordQuery({
    keyword: keyword.split(",")[0],
    dateFrom,
    dateTo,
    adultNum,
  });
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  let foundedHotels = [];
  data.map((hotel) => foundedHotels.push(hotel.property));

  return (
    <div>
      <div className="search-bar">
        <SearchBar
          keyword={keyword}
          dateFrom={dateFrom}
          dateTo={dateTo}
          adultNum={adultNum}
        />
      </div>
      {!data && (
        <div className="fs-5 m-3 fw-semibold">
          {keyword}: No properties found.
        </div>
      )}
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <div className="d-flex flex-column gap-2">
              {data?.map((hotel, index) => (
                <HotelCard
                  hotel={hotel?.property}
                  adultNum="2"
                  keyword={keyword}
                  key={index}
                />
              ))}
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div style={{ marginTop: "10px" }}>
              <MapPreview
                hotel={data[0].property}
                hotelsGeoData={foundedHotels}
                city={keyword}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HotelPage;
