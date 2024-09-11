import { useQuery } from "@tanstack/react-query";
import api from "../api/amadeusApi";

const fetchToursAndActivity = () => {
  return api.get(
    `/shopping/activities?latitude=41.397158&longitude=2.160873&radius=1`
  );
};

export const useToursAndActivitiesQuery = () => {
  return useQuery({
    queryKey: [""],
    queryFn: fetchToursAndActivity,
    select: (result) => result.data,
  });
};
