import hotelApi from "../api/hotelAPI";

const fetchHotelDestination = async ({ keyword }) => {
  try {
    const response = await hotelApi.get(`/searchDestination?query=${keyword}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching destination with keyword:", error);
    throw error;
  }
};


export { fetchHotelDestination };
