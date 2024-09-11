import React from "react";
import { useHotelDetailsQuery } from "../../hooks/useFetchHotelDetails";
import { useLocation, useParams } from "react-router-dom";
import HotelDescription from "./components/HotelDescription";

const HotelDetailPage = () => {
  const location = useLocation();
  const { dateFrom, dateTo, adultNum, photos } = location.state;
  const { id } = useParams();
  const { data, isLoading, error, isError } = useHotelDetailsQuery({
    hotelId: id,
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
      <div>
        {photos?.map((photo, index) => {
          const adjustedPhoto = photo.replace("square60", "square600");
          return <img src={adjustedPhoto} key={index} alt="" />;
        })}
        {Object.values(data?.rooms).map((room) =>
          room?.photos?.map((photo, index) => (
            <img src={photo.url_max300} alt="" key={index} />
          ))
        )}
        <div className="fs-2">{data.hotel_name}</div>
        <div>Total: {data?.composite_price_breakdown.gross_amount.amount_rounded}</div>
            <div>Per night: {data?.composite_price_breakdown.gross_amount_per_night.amount_rounded}</div>
        <div>Accommodation type: {data?.accommodation_type_name}</div>
        <div>
          Address: {data?.address}, {data?.city}, {data?.country_trans}
        </div>
        <div>Average room size m^2: {data?.average_room_size_for_ufi_m2}</div>
        <div>
          {data?.distance_to_cc.toFixed(0)}km from the center of {data?.city}
        </div>
        <div>available rooms: {data?.available_rooms}</div>
        <div>review:{data?.review_nr}</div>
        <div className="mt-3 mb-3">
          {data?.facilities_block.name} :
          {data?.facilities_block.facilities.map((fac, index) => (
            <div key={index}>{fac.name}</div>
          ))}
        </div>
        <div className="mb-3">
          Property highlights:
          {data?.property_highlight_strip.map((hl, index) => (
            <div key={index}>{hl.name}</div>
          ))}
        </div>
      </div>
      <div><HotelDescription hotelId={data.hotel_id}/></div>
    </div>
  );
};

export default HotelDetailPage;
