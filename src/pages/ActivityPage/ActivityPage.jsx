import { Alert, Col, Container, Row } from "react-bootstrap";
import { useActivitiesQuery } from "../../hooks/useFetchActivities";
import { useSearchParams } from "react-router-dom";
import ActivityCard from "../HomePage/components/ActivityCard/ActivityCard";

const ActivityPage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");
  console.log("keyword", keyword);

  const { data, isLoading, isError, error } = useActivitiesQuery({
    keyword: keyword || "toronto",
  });
  console.log("ddd", data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Alert variant="danger">{error?.message || "An error occurred"}</Alert>;
  }

  return (
    <Container>
      <Row>
        <Col lg={2} xs={12}>filter</Col>
        <Col lg={10} xs={12}>
          <Row>
            {data?.length > 0 ? (
              data.map((activity, index) => (
                <Col lg={6} xs={12} className="mb-4" key={index}>
                  <ActivityCard activity={activity} />
                </Col>
              ))
            ) : (
              <div>No Activities found</div>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ActivityPage;
