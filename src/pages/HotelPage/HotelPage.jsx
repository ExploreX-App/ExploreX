import React from "react";
import { useHotelsByKeywordQuery } from "../../hooks/useFetchHotelsByKeyword";
import HotelCard from "./components/HotelCard/HotelCard";
import { useLocation } from "react-router-dom";
import SearchBar from "../../common/SearchBar/SearchBar";

const HotelPage = () => {
  const location = useLocation();
  const {keyword, dateFrom, dateTo, adultNum} = location.state;
  const { data, isLoading, error, isError } = useHotelsByKeywordQuery({
    keyword: keyword.split(",")[0],
    dateFrom,
    dateTo,
    adultNum,
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
    return (
    <div>
      <div><SearchBar keyword={keyword} dateFrom={dateFrom} dateTo={dateTo} adultNum={adultNum}/></div>
      {!data && <div className="fs-5 m-3 fw-semibold">{keyword}: No properties found.</div>}
      <div className="d-flex flex-column gap-2">
      {data?.map((hotel, index) => (
        <HotelCard hotel={hotel?.property} adultNum="2" key={index} />
      ))}
      </div>
    </div>
  );
};

export default HotelPage;