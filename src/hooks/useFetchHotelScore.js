import { useQuery } from "@tanstack/react-query";
import hotelApi from "../api/hotelAPI";

const fetchHotelReviewScore = async ({ hotelId }) => {
  try {
    const response = await hotelApi.get(
      `/getHotelReviewScores?hotel_id=${hotelId}&languagecode=en-us`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching hotel review score:", error);
    throw error;
  }
};

export const useHotelScoreQuery = ({ hotelId }) => {
  return useQuery({
    queryKey: ["hotel score", hotelId],
    queryFn: () => fetchHotelReviewScore({ hotelId }),
    retry: 2,
    select: (result) => result.data,
  });
};
