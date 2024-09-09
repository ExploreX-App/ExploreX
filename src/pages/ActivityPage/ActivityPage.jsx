import { Alert, Container } from "react-bootstrap";
import { useActivitiesQuery } from "../../hooks/useFetchActivities";
import { useSearchParams } from "react-router-dom";


const ActivityPage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");

  const { data, isLoading, isError, error } = useActivitiesQuery({ keyword });
  console.log("ddd", data);

  if(isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  if(isError){
    return <Alert variant="danger">{error.message}</Alert>
  }

  return <Container>
    <Row>
      <Col lg={4} xs={12}>filter</Col>
      <Col lg={8} xs={12}>
        <Row>
          {data?.results.map((activity, index) => (
            <Col key={index}>
              <ActivityCard activity={activity}/>
            </Col>
          ))}
        </Row>
      </Col>

    </Row>
  </Container>;
};

export default ActivityPage;
