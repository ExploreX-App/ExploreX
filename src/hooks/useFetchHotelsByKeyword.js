import { useQuery } from "@tanstack/react-query";
import hotelApi from "../api/hotelAPI";
import { fetchHotelDestination } from "../services/hotelService";
import { useEffect } from "react";

const fetchHotelsByKeyword = async ({
  keyword,
  dateFrom,
  dateTo,
  adultNum,
  page=1,
  sortBy="popularity"
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
        sort_by: sortBy
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching hotels with information:", error);
    throw error;
  }
};

export const useHotelsByKeywordQuery = (inputData) => {
  const query = useQuery({
    queryKey: inputData ? ["hotels", inputData.keyword] : null,
    queryFn: () =>
      fetchHotelsByKeyword(inputData),
    select: (result) => result?.data?.hotels,
    enabled: !!inputData,  // inputData가 있을 때만 실행
    retry: 0,
    staleTime: 10000000000000
  });

  // 데이터를 가져왔을 때 로컬 스토리지에 저장
  useEffect(() => {
    if (query.data) {
      localStorage.setItem(`${inputData.keyword}-${inputData.dateFrom}-${inputData.dateTo}-${inputData.adultNum}`, JSON.stringify(query.data)); // 데이터 로컬 스토리지에 저장
    }
  }, [query.data, inputData]); // query.data가 변경될 때마다 실행

  return query;

};