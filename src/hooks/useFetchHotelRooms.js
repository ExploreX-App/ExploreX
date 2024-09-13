import { useQuery } from "@tanstack/react-query";
import hotelApi from "../api/hotelAPI";

const fetchHotelRooms = async ({ hotelId, dateFrom, dateTo, adultNum }) => {
  try {
    const response = await hotelApi.get(`/getRoomList`, {
      params: {
        hotel_id: hotelId,
        arrival_date: dateFrom,
        departure_date: dateTo,
        adults: adultNum,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching hotel description:", error);
    throw error;
  }
};

export const useHotelRoomsQuery = ({ hotelId, dateFrom, dateTo, adultNum }) => {
  return useQuery({
    queryKey: ["hotel rooms", hotelId],
    queryFn: () => fetchHotelRooms({ hotelId, dateFrom, dateTo, adultNum }),
    retry: 2,
    select: (result) => result.data,
  });
};
