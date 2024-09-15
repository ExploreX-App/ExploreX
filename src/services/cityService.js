import api from "../api/amadeusApi";

export const fetchCityByKeyword = async (keyword) => {
  try {
    const response = await api.get(
      `/reference-data/locations/cities?max=10&keyword=${keyword}`
    );
    return response.data.data[0];
  } catch (error) {
    console.error("Error fetching cities by keyword:", error);
    throw error;
  }
};
