import React from "react";
import { useHotelRoomsQuery } from "../../../hooks/useFetchHotelRooms";
import HotelRoomCard from "./HotelRoomCard";

const HotelRoomList = ({ hotelId, dateFrom, dateTo, adultNum }) => {
  const { data, isLoading, error, isError } = useHotelRoomsQuery({
    hotelId,
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
      {data.block.map((room, index) => (
        <HotelRoomCard room={room} key={index} />
      ))}
    </div>
  );
};

export default HotelRoomList;
