import React, { useState, useEffect } from "react";
import { useHotelsByKeywordQuery } from "../../hooks/useFetchHotelsByKeyword";
import HotelCard from "./components/HotelCard/HotelCard";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import SearchBar from "../../common/SearchBar/SearchBar";
import MapPreview from "../HotelDetailPage/components/HotelMap/MapPreview";
import Pagination from "../HomePage/components/Pagination/Pagination";

const itemsPerPage = 20;

const HotelPage = () => {
  const location = useLocation();
  const [pageNum, setPageNum] = useState(1);
  const [totalHotels, setTotalHotels] = useState(0);
  const [sortBy, setSortBy] = useState("popularity"); // 기본 정렬 기준: Popularity

  const {
    keyword = "",
    dateFrom = "",
    dateTo = "",
    adultNum = 1,
  } = location.state || {};

  // useQuery 훅에 sortBy 값이 추가됨
  const { data, isLoading, error, isError } = useHotelsByKeywordQuery({
    keyword: keyword.split(",")[0],
    dateFrom,
    dateTo,
    adultNum,
    page: pageNum,
    sortBy, // 정렬 기준 전달
  });

  useEffect(() => {
    if (data?.meta && pageNum === 1) {
      try {
        const titleValue = data.meta[0]?.title;
        if (titleValue && titleValue.split(" ")[0] !== "0") {
          setTotalHotels(Number(titleValue.split(" ")[0]));
        }
      } catch (error) {
        console.error("Error parsing totalHotels from meta:", error);
        setTotalHotels(0);
      }
    }
  }, [data, pageNum]);

  // sortBy 의존성 추가하여 정렬 기준 변경 시 효과 적용
  useEffect(() => {
    setPageNum(1); // 정렬 기준 변경 시 첫 페이지로 리셋
  }, [sortBy]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const pageCount = Math.ceil(totalHotels / itemsPerPage);

  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    setPageNum(selectedPage);
  };

  const handleSortChange = (e) => {
    console.log(e.target.value)
    setSortBy(e.target.value); // 정렬 기준 변경
  };

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

      <Container>
        {/* 정렬 옵션 */}
        <Form.Group controlId="sortOptions" className="mb-3">
          <Form.Label className="fw-bold fs-5">Sort by: </Form.Label>
          <Form.Control as="select" value={sortBy} onChange={handleSortChange}>
            <option value="popularity">Top picks for long stays</option>
            <option value="price">Price (Lowest First)</option>
            <option value="distance">Distance from City Centre</option>
            <option value="bayesian_review_score">Best Reviewed First</option>
            <option value="class_descending">Property rating (5 to 0)</option>
            <option value="upsort_bh">Entire homes & apartments first</option>
          </Form.Control>
        </Form.Group>
        <Row className="">
          <Col xs={{ order: 1 }} md={{ span: 8, order: 2 }}>
            <div className="d-flex flex-column gap-2">
              {data?.hotels?.map((hotel, index) => (
                <HotelCard
                  hotel={hotel?.property}
                  adultNum={adultNum}
                  keyword={keyword}
                  key={index}
                />
              ))}
            </div>
          </Col>
          <Col xs={{ order: 0 }} md={{ span: 4, order: 1 }} className="py-2">
            <MapPreview
              hotel={data.hotels[0]?.property}
              hotelsGeoData={data.hotels.map((hotel) => hotel.property)}
              city={keyword}
              
            />
          </Col>
        </Row>
      </Container>

      {pageCount > 0 && (
        <Pagination
          pageCount={pageCount}
          handlePageClick={handlePageClick}
          initialPage={pageNum - 1}
        />
      )}
    </div>
  );
};

export default HotelPage;
