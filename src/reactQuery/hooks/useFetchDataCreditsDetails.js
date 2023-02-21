import { useQuery } from 'react-query';
import { fetchData } from '../queries/index';

export default function useFetchDataCreditsDetails(dataType, id) {
  const query = `${dataType}/${id}/credits`;
  const { data, isLoading: isLoadingCredits } = useQuery('credits', () => fetchData(query));
  return {
    creditsData: data || {},
    isLoadingCredits,
  };
}
