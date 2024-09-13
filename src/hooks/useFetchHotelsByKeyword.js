import { useQuery } from "@tanstack/react-query";
import hotelApi from "../api/hotelAPI";
import { fetchHotelDestination } from "../services/hotelService";

const fetchHotelsByKeyword = async ({
  keyword,
  dateFrom,
  dateTo,
  adultNum,
  page,
}) => {
  try {
    const destinationData = await fetchHotelDestination({ keyword });
    const firstData = destinationData.data[0];
    const response = await hotelApi.get("/searchHotels", {
      params: {
        dest_id: firstData?.dest_id,
        search_type: firstData?.search_type,
        arrival_date: dateFrom,
        departure_date: dateTo,
        adults: adultNum,
        page_number: page,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching hotels with information:", error);
    throw error;
  }
};

export const useHotelsByKeywordQuery = ({
  keyword,
  dateFrom,
  dateTo,
  adultNum,
  page = 1,
}) => {
  return useQuery({
    queryKey: ["hotels", keyword],
    queryFn: () =>
      fetchHotelsByKeyword({ keyword, dateFrom, dateTo, adultNum, page }),
    select: (result) => result?.data?.hotels,
    cacheTime: 1000 * 60 * 10 * 3
  });
};
