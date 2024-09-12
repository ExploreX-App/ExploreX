import React, { useState } from "react";
import { useHotelReviewQuery } from "../../../../hooks/useFetchHotelReviews";
import HotelReviewCard from "../HotelReviewCard";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { responsive } from "../../../../utils/hotelReviewSlider";
import "./HotelReviewList.style.css";

const HotelReviewList = ({ hotelId }) => {
  const [sortOption, setSortOption] = useState("sort_most_relevant");
  const { data, isLoading, error, isError } = useHotelReviewQuery({
    hotelId,
    sortOption,
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const filteredData = data?.result.filter((data) => data?.pros?.length > 0);
  return (
    <Container>
      <Carousel
        style={{ width: "100%"}}
        partialVisbile={false}
        infinite={true}
        autoPlay={true}
        itemClass={"carousel-item-padding-40-px"}
        containerClass={"carousel-container"}
        responsive={responsive}
      >
        {filteredData?.map((review, index) => (
          <HotelReviewCard review={review} key={index} />
        ))}
      </Carousel>
    </Container>
  );
};

export default HotelReviewList;
