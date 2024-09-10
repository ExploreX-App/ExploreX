import { Alert, Col, Container, Row } from "react-bootstrap";
import { useActivitiesQuery } from "../../hooks/useFetchActivities";
import { useSearchParams } from "react-router-dom";
import ActivityCard from "../../common/ActivityCard";

const ActivityPage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");
  console.log("keyword", keyword);

  const { data, isLoading, isError, error } = useActivitiesQuery({
    keyword: "london",
  });
  console.log("ddd", data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}></Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results?.length > 0 ? (
              data.results.map((activity, index) => (
                <Col key={index}>
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
