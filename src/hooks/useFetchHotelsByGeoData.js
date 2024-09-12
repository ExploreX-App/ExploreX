import { useQuery } from "@tanstack/react-query";
import hotelApi from "../api/hotelAPI";
import { useEffect } from "react";

const fetchHotelsByGeoData = async ({
  geoData,
  radius,
  dateFrom,
  dateTo,
}) => {
  try {
    const response = await hotelApi.get("/searchHotelsByCoordinates", {
      params: {
        latitude: geoData.latitude,
        longitude: geoData.longitude,
        arrival_date: dateFrom,
        departure_date: dateTo,
        radius: radius,
      },
    });
     console.log('RES', response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching hotels with information:", error);
    throw error;
  }
};

export const useHotelsByGeoData = (inputData) => {
  console.log('inputData', inputData)
  const query = useQuery({
    queryKey: inputData ? ["hotels", inputData.geoData] : null,
    queryFn: () =>
      fetchHotelsByGeoData(inputData),
    select: (result) => result?.data?.result,
    enabled: !!inputData,  // inputData가 있을 때만 실행
    retry: 0,
    staleTime: 10000000000000
  });

  return query;

};