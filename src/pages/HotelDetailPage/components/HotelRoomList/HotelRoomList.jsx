import React, { useState } from "react";
import HotelRoomCard from "./HotelRoomCard"
import { useHotelRoomsQuery } from '../../../../hooks/useFetchHotelRooms';
import { Button } from "react-bootstrap";
import Spinner from "../../../../common/Spinner/Spinner";

const HotelRoomList = ({ hotel, adultNum, reviewScore }) => {
  const [moreRooms, setMoreRooms] = useState(5);
  const [show, setShow] = useState(false)
  const { data, isLoading, error, isError } = useHotelRoomsQuery({
    hotelId: hotel?.hotel_id,
    dateFrom: hotel?.arrival_date,
    dateTo: hotel?.departure_date,
    adultNum,
  });
console.log("hotelroom data:",data)
if (isLoading) {
  return <Spinner />;
}
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const handleShowMore = () => {
    setMoreRooms((prevMoreRooms) => prevMoreRooms + 5);
    setShow(true);
  };

  const roomsToShow = data.block.slice(0, moreRooms);

  return (
    <div>
      {roomsToShow.map((room, index) => (
        <HotelRoomCard room={room} hotelRoomData={data} hotel={ hotel} key={index} reviewScore={reviewScore} />
      ))}
      {data.block.length > moreRooms && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button onClick={handleShowMore}>Show More</Button>
        </div>
      )}
    </div>
  );
};

export default HotelRoomList;
