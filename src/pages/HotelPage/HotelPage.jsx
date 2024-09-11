import React from "react";
import { useHotelsByKeywordQuery } from "../../hooks/useFetchHotelsByKeyword";

const HotelPage = () => {
  const { data, isLoading, error, isError } = useHotelsByKeywordQuery({
    keyword: "toronto",
    dateFrom: "2024-10-01",
    dateTo: "2024-10-09",
    adultNum: 2,
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  // console.log(data);
  return <div>Hotels</div>;
};

export default HotelPage;
