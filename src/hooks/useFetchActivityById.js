import { useQuery } from '@tanstack/react-query';
import api from '../api/amadeusApi';

const fetchActivityById = async (id) => {
  const response = await api.get(`/shopping/activities/${id}`);
  return response.data;

};

const fetchActivitiesByIds = async (ids) => {
  const promises = ids.map((id) => fetchActivityById(id));
  return Promise.all(promises);
};

export const useActivityQuery = ({ ids }) => {
  return useQuery({
    queryKey: ["activities", ids],
    queryFn: () => fetchActivitiesByIds(ids),
    enabled: ids.length > 0,
    retry: 2,
    select: (results) => results,

  });
};
