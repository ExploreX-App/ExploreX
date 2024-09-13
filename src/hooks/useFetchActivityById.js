// import { useQuery } from "@tanstack/react-query";
// import api from "../api/amadeusApi";

// const fetchActivityById = async ({ id }) => {
//   try {
//     const response = await api.get(`/shopping/activities/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching activity by id:", error);
//     throw error;
//   }
// };

// export const useActivityQuery = ({ id }) => {
//   return useQuery({
//     queryKey: ["activity", id],
//     queryFn: () => fetchActivityById({ id }),
//     enabled: !!id,
//     retry: 2,
//     select: (result) => result.data,
//   });
// };
