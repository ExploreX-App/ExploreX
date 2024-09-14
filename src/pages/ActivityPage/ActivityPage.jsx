import { useState, useEffect } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useActivitiesQuery } from "../../hooks/useFetchActivities";
import { useSearchParams } from "react-router-dom";
import ActivityCard from "../HomePage/components/ActivityListCard/ActivityListCard";
import "./ActivityPage.style.css";
import Pagination from "../HomePage/components/Pagination/Pagination";
import {
  activityMockData,
  activityPriceMockData,
} from "../../utils/ActivityMockData";
import ActivityFilter from "./ActivityFilter";
import SortBySelect from "../HomePage/components/SortBySelect/SortBySelect";

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
  const [priceRange, setPriceRange] = useState([0, 300]); // 가격 범위 상태 추가


  const itemsPerPage = 10;
  // const keyword = query.get("q");

  const { data, isLoading, isError, error } = useActivitiesQuery({
    keyword: "toronto",
  });
  console.log("ddd", data);

  const mergedActivities = data?.map((activity, index) => {
    const randomValue = Math.floor(Math.random() * activityPriceMockData?.length);
    const randomMockData = activityPriceMockData[randomValue];
    return {
      ...activity,
      ...randomMockData,
    };
  });
  // const [sortedData, setSortedData] = useState(mergedActivities);

  // useEffect(() => {
  // const filtered = mergedActivities.filter(
  //   (activity) =>
  //     activity.price.amount >= priceRange[0] &&
  //     activity.price.amount <= priceRange[1] // 가격 필터 추가된 부분
  // );
  //   const sorted = sortData(sortedData, sortCriteria);
  //   setSortedData(sorted);
  // }, [sortCriteria]); // 가격 범위와 정렬 기준에 따라 데이터 업데이트

  // const filterData = (data, criteria) => {
  //   switch (criteria) {
  //     case "rating_9plus":
  //       return data.filter((activity) => activity.rating >= 9);
  //     case "rating_8plus":
  //       return data.filter((activity) => activity.rating >= 8);
  //     case "rating_7plus":
  //       return data.filter((activity) => activity.rating >= 7);
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
    // const sortedData = sortingData;
    // switch (criteria) {
    //   case "price_high":
    //     sortedData.sort((a, b) => b.price.amount - a.price.amount);
    //     break;
    //   case "price_low":
    //     sortedData.sort((a, b) => a.price.amount - b.price.amount);
    //     break;
    //   case "reviews_high":
    //     sortedData.sort((a, b) => b.reviews - a.reviews);
    //     break;
    //   case "reviews_low":
    //     sortedData.sort((a, b) => a.reviews - b.reviews);
    //     break;
    //   case "rating_high":
    //     sortedData.sort((a, b) => b.rating - a.rating);
    //     break;
    //   case "rating_low":
    //     sortedData.sort((a, b) => a.rating - b.rating);
    //     break;
    //   case "duration_high":
    //     sortedData.sort((a, b) => b.minimumDuration - a.minimumDuration);
    //     break;
    //   case "duration_low":
    //     sortedData.sort((a, b) => a.minimumDuration - b.minimumDuration);
    //     break;
    //   default:
    //     break;
    // }
    // return sortedData;
  };

  /* api필요할때 살리기 */

  // 페이지네이션 로직1 (맨아래2있음) >> 파일에 추가후 Pagination.jsx부르고 css도 불러와서 적용시키기
  const offset = page * itemsPerPage;
  const pageCount = Math.ceil(mergedActivities?.length / itemsPerPage); //

  const paginatedActivities = mergedActivities?.slice(offset, offset + itemsPerPage); // 데이터 분할

  const handlePageClick = ({ selected }) => {
    setPage(selected);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Alert variant="danger">{error?.message || "An error occurred"}</Alert>;
  }

  return (
    <Container>
      {/* filter */}
      <Row className="w-100">
        <SortBySelect setSortCriteria={handleFilterChange} />
      </Row>

      {/* sort by */}
      <Row className="">
        <Col xs={12} md={3}>
          <ActivityFilter
            setSortCriteria={handleFilterChange}
            setPriceRange={setPriceRange}
          />
        </Col>
        {/* card */}
        <Col xs={12} md={9}>
          <Row>
            <Col>
              <Row>
                {paginatedActivities?.length > 0 ? (
                  paginatedActivities.map((activity, index) => (
                    <Col lg={12} xs={12} className="mb-4" key={index}>
                      <ActivityCard activity={activity} />
                    </Col>
                  ))
                ) : (
                  <div>No Activities found</div>
                )}
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
