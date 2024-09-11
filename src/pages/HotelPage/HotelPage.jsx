import React, {useEffect, useState} from "react";
import { Button, Container } from "react-bootstrap";
import { useHotelsByKeywordQuery } from "../../hooks/useFetchHotelsByKeyword";
import HotelCard from "./components/HotelCard/HotelCard";
import './HotelPage.style.css'
import HotelPageLayout from "./Layout/HotelPageLayout";

const HotelPage = () => {
  const [keywordQuery, setKeywordQuery] = useState(null)
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error} = useHotelsByKeywordQuery(keywordQuery || null);

  const handleMore = () => {
    setPage((prev) => prev+1);
  }

  useEffect(() => {
    
  })

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center container">
      <div className="hotel-page-title">
          <h2> Find the perfect hotel in ExploreX</h2>
      </div>
      <HotelPageLayout setKeywordQuery={setKeywordQuery} />
      
      <div className="hotel-cards-container">
        {data?.map((hotel, index) => (
          <HotelCard hotel={hotel?.property}  adultNum={keywordQuery.adultNum} key={index}/>
        ))}
      </div>

      <Button onClick={handleMore}>Show More</Button>
      
    </Container>
  );
};
export default HotelPage;
