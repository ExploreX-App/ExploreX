import { useQuery } from "@tanstack/react-query";
import api from "../api/amadeusApi";
import { fetchCityByKeyword } from "../services/cityService";
import { useNavigate } from "react-router-dom";

const fetchActivities = async ({ keyword }) => {
  try {
    const cityInfo = await fetchCityByKeyword(keyword);
    const { latitude, longitude } = cityInfo.geoCode || {};
    if (!latitude || !longitude) {
      throw new Error("Invalid latitude or longitude");
    }
    const response = await api.get(
      `/shopping/activities?latitude=${latitude}&longitude=${longitude}&radius=10`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching activities:", error);
    throw error;
  }
};

export const useActivitiesQuery = ({ keyword }) => {
  const navigate = useNavigate();
  if (keyword === "") {
    navigate("/");
  }
  return useQuery({
    queryKey: ["activities", keyword],
    queryFn: () => fetchActivities({ keyword }),
    retry: 2,
    select: (result) => result.data || [],
  });
};
