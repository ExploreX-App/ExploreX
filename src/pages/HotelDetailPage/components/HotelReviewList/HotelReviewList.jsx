import React, { useState, useEffect } from "react";
import { useHotelReviewQuery } from "../../../../hooks/useFetchHotelReviews";
import HotelReviewCard from "./components/HotelReviewCard";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { responsive } from "../../../../utils/settings/hotelReviewSliderSetting";
import "./HotelReviewList.style.css";
import HotelReviewScore from "./components/HotelReviewScore";

const HotelReviewList = ({ hotelId, reviewRef }) => {
  const [sortOption, setSortOption] = useState("sort_score_desc");
  const { data, isLoading, error, isError } = useHotelReviewQuery({
    hotelId,
    sortOption,
  });

  const filteredData = data?.result.filter((data) => data?.pros?.length > 0);

  useEffect(() => {
    if (filteredData) {
      localStorage.setItem("reviews", JSON.stringify(filteredData));
    }
  }, [filteredData]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div ref={reviewRef}  style={{paddingTop:"80px"}}>
      <div className="m-2">
        <div className="fs-4 fw-bold">Guest reviews</div>
      </div>
      <HotelReviewScore hotelId={hotelId} reviewCount={data.count} />
      <div className="fw-semibold m-2">Guest who stayed here loved</div>
      <Carousel
        style={{ width: "100%" }}
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
    </div>
  );
};

export default HotelReviewList;
