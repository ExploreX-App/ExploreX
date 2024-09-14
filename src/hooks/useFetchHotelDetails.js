import { useQuery } from "@tanstack/react-query";
import hotelApi from "../api/hotelAPI";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const shouldFetch = hotelId && dateFrom && dateTo && adultNum !== undefined;
  const query = useQuery({
    queryKey: ["hotel", hotelId],
    queryFn: () => fetchHotelDetails({ hotelId, dateFrom, dateTo, adultNum }),
    select: (result) => result.data,
    enabled: shouldFetch,
  });
  if (!shouldFetch) {
    navigate("/"); // 조건이 충족되지 않으면 홈으로 리다이렉트
  }

  return query;
};
