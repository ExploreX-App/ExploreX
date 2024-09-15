import { useQuery } from "@tanstack/react-query";
import api from "../api/amadeusApi";
import { fetchCityByKeyword } from "../services/cityService";
import { useNavigate } from "react-router-dom";
// mock data쓸때만 활성화
import { activityMockData, activityPriceMockData } from "../utils/ActivityMockData";

//api 쓸때 활성화
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

// api없이 mock data쓸때만 활성화
// const fetchMockActivities = async ({ keyword }) => {
//   try {
//     const response = activityMockData.map((activity, index) => {
//       const randomValue = Math.floor(Math.random() * activityPriceMockData.length);
//       const randomMockData = activityPriceMockData[randomValue];
//       return { ...activity, ...randomMockData };
//     });

//     return response;
//   } catch (error) {
//     console.error("Error fetching mock activities:", error);
//     throw error;
//   }
// };

export const useActivitiesQuery = ({ keyword }) => {
  const navigate = useNavigate();
  console.log("hook", keyword);

  const query = useQuery({
    queryKey: ["activities", keyword],
    queryFn: () => fetchActivities({ keyword }), //api쓸때 활성화
    // queryFn: () => fetchMockActivities({ keyword }), //mock data쓸때 활성화
    retry: 2,
    select: (result) => result.data || [],
    enabled: !!keyword, //api쓸때 활성화
    // select: (result) => result || [], //mock data쓸때 활성화
  });
  if (!keyword) {
    navigate("/");
  }
  return query;
};
