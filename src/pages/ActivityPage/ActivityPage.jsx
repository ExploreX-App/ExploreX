import { useState, useEffect } from "react";
import { Button, Alert, Col, Container, Row } from "react-bootstrap";
import { useActivitiesQuery } from "../../hooks/useFetchActivities";
import { useLocation, useSearchParams } from "react-router-dom";
import ActivityCard from "../HomePage/components/ActivityListCard/ActivityListCard";
import "./ActivityPage.style.css";
import Pagination from "../HomePage/components/Pagination/Pagination";
import {
  activityMockData,
  activityPriceMockData,
} from "../../utils/ActivityMockData";
import ActivityFilter from "./ActivityFilter";
import SortBySelect from "../HomePage/components/SortBySelect/SortBySelect";
import SearchBar from "../../common/SearchBar/SearchBar";
import AdvertisingBanner from "../../common/AdvertisingBanner/AdvertisingBanner";

export const getRandomData = (array) => {
  if (!array || array?.length === 0) {
    console.error("Invalid array passed to getRandomData:", array);
    return null;
  }
  const randomIndex = Math.floor(Math.random() * array?.length);
  return array[randomIndex];
};

const ActivityPage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(0);
  const [sortCriteria, setSortCriteria] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const location = useLocation();
  console.log("location state", location.state);
  const keyword = location.state ? location?.state?.keyword.split(",")[0] : "";
  const itemsPerPage = 10;
  // const keyword = query.get("q");

  const { data, isLoading, isError, error } = useActivitiesQuery({
    keyword,
  });
  const mergedActivities = data?.map((activity, index) => {
    const randomValue = Math.floor(Math.random() * activityPriceMockData?.length);
    const randomMockData = activityPriceMockData[randomValue];
    return {
      ...activity,
      ...randomMockData,
    };
  });

  const handlePriceSort = (criteria) => {
    let sortedData = [...activityPriceMockData]; // Mock data 복사

    if (criteria === "price_high") {
      sortedData.sort((a, b) => b.price.amount - a.price.amount); // 높은 가격 순으로 정렬
    } else if (criteria === "price_low") {
      sortedData.sort((a, b) => a.price.amount - b.price.amount); // 낮은 가격 순으로 정렬
    }

    // 정렬된 데이터를 상태에 업데이트 (실제 사용하고 있는 상태 변수로 변경)
    // setFilteredActivities(sortedData);
  };

  // here
  console.log("merged", mergedActivities);
  const [sortedData, setSortedData] = useState(mergedActivities);

  const [paginatedActivities, setPaginatedActivities] = useState(mergedActivities);
  // useEffect(() => {
  //   const filtered = mergedActivities?.filter(
  //     (activity) =>
  //       activity.price.amount >= priceRange[0] &&
  //       activity.price.amount <= priceRange[1] // 가격 필터 추가된 부분
  //   );
  //   const sorted = sortData(sortedData, sortCriteria);
  //   setSortedData(sorted);
  // }, [sortCriteria]); // 가격 범위와 정렬 기준에 따라 데이터 업데이트

  // const filterData = (data, criteria) => {
  //   switch (criteria) {
  //     case "rating_9plus":
  //       return data?.filter((activity) => activity.rating >= 9);
  //     case "rating_8plus":
  //       return data?.filter((activity) => activity.rating >= 8);
  //     case "rating_7plus":
  //       return data?.filter((activity) => activity.rating >= 7);
  //     default:
  //       return data;
  //   }
  // };
  const handleFilterChange = (criteria) => {
    // setSortCriteria(criteria);
    // const filtered = filterData(mergedActivities, criteria);
    // const sorted = sortData(filtered, criteria);
    // setSortedData(sorted);
  };

  const sortData = (sortingData, criteria) => {
    const sortedData = sortingData;
    switch (criteria) {
      case "price_high":
        sortedData.sort((a, b) => b.price.amount - a.price.amount);
        break;
      case "price_low":
        sortedData.sort((a, b) => a.price.amount - b.price.amount);
        break;
      case "reviews_high":
        sortedData.sort((a, b) => b.reviews - a.reviews);
        break;
      case "reviews_low":
        sortedData.sort((a, b) => a.reviews - b.reviews);
        break;
      case "rating_high":
        sortedData.sort((a, b) => b.rating - a.rating);
        break;
      case "rating_low":
        sortedData.sort((a, b) => a.rating - b.rating);
        break;
      case "duration_high":
        sortedData.sort((a, b) => b.minimumDuration - a.minimumDuration);
        break;
      case "duration_low":
        sortedData.sort((a, b) => a.minimumDuration - b.minimumDuration);
        break;
      default:
        break;
    }
    return sortedData;
  };

  const offset = page * itemsPerPage;
  const pageCount = Math.ceil(mergedActivities?.length / itemsPerPage); //

  // 데이터 분할
  //     paginatedActivities?.slice(offset, offset + itemsPerPage)

  const handlePageClick = ({ selected }) => {
    setPage(selected);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // const handlePriceSort = (criteria) => {
  //   setSortCriteria(criteria);
  //   const sortedComplete = sortData(sortedData, sortCriteria);
  //   console.log("handlePricesprt", sortedComplete);
  //   setSortedData(sortedComplete);
  // };
  // useEffect(() => {
  //   console.log(sortCriteria);
  //   handlePriceSort(sortCriteria);
  // }, [sortCriteria]);
  // useEffect(() => {
  //   setPaginatedActivities(sortedData);
  // }, [sortedData]);
  // useEffect(() => {
  //   console.log("sorted", sortedData);
  //   setPaginatedActivities(
  //   );
  // }, [paginatedActivities]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Alert variant="danger">{error?.message || "An error occurred"}</Alert>;
  }
  return (
    <Container>
      {/* search bar */}
      <Row>
        <Col>
          <SearchBar tab="activity" />
        </Col>
      </Row>

      {/* filter */}
      <Row className="">
        <Col xs={12} md={4}>
          <ActivityFilter
            setSortCriteria={handleFilterChange}
            setPriceRange={setPriceRange}
            handlePriceSort={handlePriceSort}
          />
        </Col>

        <Col xs={12} md={8}>
          {/* sort by */}
          <Row className="w-100">
            <Col style={{ display: "flex" }}>
              <SortBySelect setSortCriteria={handleFilterChange} />
            </Col>
          </Row>
          {/* advertising banner */}
          <Row>
            <Col>
              <AdvertisingBanner />
            </Col>
          </Row>
          {/* card */}
          <Row>
            <Col>
              <Row>
                {paginatedActivities?.map((activity, index) => (
                  <Col lg={12} xs={12} className="mb-4" key={index}>
                    <ActivityCard activity={activity} />
                  </Col>
                ))}
              </Row>
              <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ActivityPage;
