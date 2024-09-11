import React from "react";
import { useHotelDescQuery } from "../../../hooks/useFetchHotelDesc";

const HotelDescription = ({ hotelId }) => {
  const { data, isLoading, error, isError } = useHotelDescQuery({
    hotelId,
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return <div>{data.map((desc, index) => <p>{desc.description}</p>)}</div>;
};

export default HotelDescription;
