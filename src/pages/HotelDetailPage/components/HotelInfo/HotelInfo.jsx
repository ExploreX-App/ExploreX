import React from "react";
import HotelRoomList from "../HotelRoomList";

const HotelDetailInfo = ({ data, infoRef, adultNum }) => {
    console.log(data)
  return (
    <div id="info-n-rates" ref={infoRef}>
      <HotelRoomList
        hotelId={data.hotel_id}
        dateFrom={data.arrival_date}
        dateTo={data.departure_date}
        adultNum={adultNum}
      />

      <div>
        Total: {data?.composite_price_breakdown?.gross_amount?.amount_rounded}
      </div>
      <div>
        Per night:{" "}
        {
          data?.composite_price_breakdown?.gross_amount_per_night
            ?.amount_rounded
        }
      </div>
      <div>Accommodation type: {data?.accommodation_type_name}</div>
      <div>
        Address: {data?.address}, {data?.city}, {data?.country_trans}
      </div>
      <div>Average room size m²: {data?.average_room_size_for_ufi_m2}</div>
      <div>
        {typeof data?.distance_to_cc === "number"
          ? `${data.distance_to_cc.toFixed(0)} km from the center of ${
              data.city
            }`
          : "Distance information not available"}
      </div>
      <div>Available rooms: {data?.available_rooms}</div>
      <div>Review: {data?.review_nr}</div>
      <div className="mt-3 mb-3">
        {data?.facilities_block?.name}:
        {data?.facilities_block?.facilities?.map((fac, index) => (
          <div key={index}>{fac.name}</div>
        ))}
      </div>
    </div>
  );
};

export default HotelDetailInfo;
