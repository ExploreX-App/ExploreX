import React from "react";
import { useHotelsByKeywordQuery } from "../../hooks/useFetchHotelsByKeyword";
import HotelCard from "./components/HotelCard/HotelCard";

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
  return (
    <div>
      {data.map((hotel, index) => (
        <HotelCard hotel={hotel?.property} adultNum="2" key={index} />
      ))}
    </div>
  );
};

export default HotelPage;
