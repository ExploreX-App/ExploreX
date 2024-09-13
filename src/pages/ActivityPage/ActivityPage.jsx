import { useState, useEffect } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useActivitiesQuery } from "../../hooks/useFetchActivities";
import { useSearchParams } from "react-router-dom";
import ActivityCard from "../HomePage/components/ActivityCard/ActivityCard";
import ReactPaginate from "react-paginate";
import "./ActivityPage.style.css";
import {
  activityMockData,
  activityPriceMockData,
} from "../../utils/ActivityMockData";
import ActivityFilter from "./ActivityFilter";

export const getRandomData = (array) => {
  if (!array || array.length === 0) {
    console.error("Invalid array passed to getRandomData:", array);
    return null;
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const ActivityPage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(0);
  const [sortCriteria, setSortCriteria] = useState(""); 

  const itemsPerPage = 10;
  const keyword = query.get("q");
  const mergedActivities = activityMockData.map((activity, index) => {
    const randomValue = Math.floor(Math.random() * activityPriceMockData.length);
    const randomMockData = activityPriceMockData[randomValue];
    return {
      ...activity,
      ...randomMockData,
    };
  });

  useEffect(() => {
    handleFilterChange(sortCriteria);
  }, [sortCriteria]);

  const [sortedData, setSortedData] = useState(mergedActivities);

  const handleFilterChange = (criteria) => {
    setSortCriteria(criteria); 
    const sorted = sortData([...sortedData], criteria); 

    setSortedData(sorted); 
  };

  const sortData = (data, criteria) => {
    const sortedData = [...data]; 
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

  /* api필요할때 살리기 */
  // const { data: apiData, isLoading, isError, error } = useActivitiesQuery({
  //   keyword: keyword || "toronto",
  // });
  // console.log("ddd", apiData);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <Alert variant="danger">{error?.message || "An error occurred"}</Alert>;
  // }

  // const sortedData = sortData(data);
  // const sortedData = sortData(apiData || data); >> api부를때 사용
  const offset = page * itemsPerPage;
  const pageCount = Math.ceil(sortedData.length / itemsPerPage); //

  const handlePageClick = ({ selected }) => {
    setPage(selected);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Row>
        <Col lg={3} xs={12}>
          <ActivityFilter setSortCriteria={setSortCriteria} />
          <button
            onClick={() => {
              handleFilterChange("price_high");
            }}
          >
            sort price high
          </button>
        </Col>
        <Col lg={9} xs={12}>
          <Row>
            {sortedData.length > 0 ? (
              sortedData.map((activity, index) => (
                <Col lg={12} xs={12} className="mb-4" key={index}>
                  <ActivityCard activity={activity} />
                </Col>
              ))
            ) : (
              <div>No Activities found</div>
            )}
          </Row>
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ActivityPage;
