import { useQuery } from "@tanstack/react-query";
import hotelApi from "../api/hotelAPI";

const fetchHotelReviews = async ({ hotelId, sortOption }) => {
    try {
      const response = await hotelApi.get(
        `/getHotelReviews?hotel_id=${hotelId}&sort_option_id=${sortOption}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching hotel reviews:", error);
      throw error;
    }
  };

export const useHotelReviewQuery = ({ hotelId, sortOption }) => {
  return useQuery({
    queryKey: ["hotel reviews", hotelId],
    queryFn: () => fetchHotelReviews({ hotelId, sortOption }),
    retry: 2,
    select: (result) => result.data,
  });
};
