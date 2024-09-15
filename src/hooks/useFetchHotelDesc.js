import { useQuery } from "@tanstack/react-query";
import hotelApi from "../api/hotelAPI";

const fetchHotelDescription = async ({ hotelId }) => {
    try {
      const response = await hotelApi.get(
        `/getDescriptionAndInfo?hotel_id=${hotelId}&languagecode=en-us`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching hotel description:", error);
      throw error;
    }
  };

export const useHotelDescQuery = ({ hotelId }) => {
  return useQuery({
    queryKey: ["hotel desc", hotelId],
    queryFn: () => fetchHotelDescription({ hotelId }),
    retry: 2,
    select: (result) => result.data,
  });
};
