import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchAddress = async ({ lat, lng }) => {
  const REACT_APP_GOOGLE_MAPS_API_KEY =
    process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  try {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${REACT_APP_GOOGLE_MAPS_API_KEY}
    `;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching address:", error);
    throw error;
  }
};

export const useAddressQuery = ({ lat, lng }) => {
  return useQuery({
    queryKey: ["address", lat, lng],
    queryFn: () => fetchAddress({ lat, lng }),
    retry: 2,
    select: (result) => result.results,
  });
};
