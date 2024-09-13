import { useQuery } from "@tanstack/react-query";
import api from "../api/amadeusApi";
import { fetchCityByKeyword } from "../services/cityService";

const fetchActivities = async ({ keyword }) => {
  try {
    const cityInfo = await fetchCityByKeyword(keyword);
    console.log("City info", cityInfo);
    const { latitude, longitude } = cityInfo.geoCode || {};

    if (!latitude || !longitude) {
      throw new Error("Invalid latitude or longitude");
    }
    const response = await api.get(
      `/shopping/activities?latitude=${latitude}&longitude=${longitude}&radius=10&limit=10`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching activities:", error);
    throw error;
  }
};

export const useActivitiesQuery = ({ keyword }) => {
  return useQuery({
    queryKey: ["activities", keyword],
    queryFn: () => fetchActivities({ keyword }),
    retry: 2,
    select: (result) => result.data || [],
  });
};
