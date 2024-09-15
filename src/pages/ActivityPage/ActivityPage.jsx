import { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useActivitiesQuery } from "../../hooks/useFetchActivities";
import { useLocation } from "react-router-dom";
import ActivityCard from "../HomePage/components/ActivityListCard/ActivityListCard";
import Pagination from "../HomePage/components/Pagination/Pagination";
import SearchBar from "../../common/SearchBar/SearchBar";
import Spinner from "../../common/Spinner/Spinner";
import { activityPriceMockData } from "../../utils/ActivityMockData";
import ActivityFilter from "./ActivityFilter"; // 필터 컴포넌트
import SortBySelect from "../HomePage/components/SortBySelect/SortBySelect"; // 정렬 컴포넌트

const itemsPerPage = 10;

const ActivityPage = () => {
  const [page, setPage] = useState(0);
  const [sortCriteria, setSortCriteria] = useState(""); // 정렬 기준 상태
  const location = useLocation();
  const keyword = location.state ? location?.state?.keyword.split(",")[0] : "";

  // 데이터 가져오기
  const { data, isLoading, isError, error } = useActivitiesQuery({
    keyword,
  });

  // 데이터 병합
  const mergedActivities = data?.map((activity) => {
    const randomValue = Math.floor(Math.random() * activityPriceMockData?.length);
    const randomMockData = activityPriceMockData[randomValue];
    return {
      ...activity,
      ...randomMockData,
    };
  });

  // 페이지네이션을 위한 데이터 자르기
  const offset = page * itemsPerPage;
  const paginatedActivities = mergedActivities?.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(mergedActivities?.length / itemsPerPage);

  // 페이지 변경 핸들러
  const handlePageClick = ({ selected }) => {
    setPage(selected);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 로딩 상태 처리
  if (isLoading) {
    return <Spinner />;
  }

  // 에러 상태 처리
  if (isError) {
    return <Alert variant="danger">{error?.message || "An error occurred"}</Alert>;
  }

  return (
    <Container>
      {/* 검색 바 */}
      <Row>
        <Col>
          <SearchBar tab="activity" />
        </Col>
      </Row>

      {/* 필터 및 정렬 */}
      <Row className="mt-3">
        <Col xs={12} md={4}>
          {/* 필터 UI (미관상만) */}
          <ActivityFilter
            setSortCriteria={setSortCriteria}
            setPriceRange={() => {}} // 미관상 추가, 실제 기능은 없음
            handlePriceSort={() => {}} // 미관상 추가, 실제 기능은 없음
          />
        </Col>
        <Col xs={12} md={8}>
          <Row>
            <Col style={{ display: "flex", justifyContent: "flex-start" }}>
              {/* 정렬 드롭다운 (미관상만) */}
              <SortBySelect setSortCriteria={setSortCriteria} />
            </Col>
          </Row>

          {/* 활동 카드 목록 */}
          <Row className="mt-4">
            {paginatedActivities?.map((activity, index) => (
              <Col lg={12} xs={12} className="mb-4" key={index}>
                <ActivityCard activity={activity} />
              </Col>
            ))}
          </Row>

          {/* 페이지네이션 */}
          {pageCount > 1 && (
            <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ActivityPage;
