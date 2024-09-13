import { useQuery } from "@tanstack/react-query";
import hotelApi from "../api/hotelAPI";

const fetchHotelDetails = async ({ hotelId, dateFrom, dateTo, adultNum }) => {
  try {
    const response = await hotelApi.get("/getHotelDetails", {
      params: {
        hotel_id: hotelId,
        arrival_date: dateFrom,
        departure_date: dateTo,
        adults: adultNum,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching hotel details:", error);
    throw error;
  }
};

export const useHotelDetailsQuery = ({
  hotelId,
  dateFrom,
  dateTo,
  adultNum,
}) => {
  return useQuery({
    queryKey: ["hotel", hotelId],
    queryFn: () => fetchHotelDetails({ hotelId, dateFrom, dateTo, adultNum }),
    select: (result) => result.data,
  });
};
