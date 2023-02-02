import { useQuery } from 'react-query';
import fetchData from '../queries/index';

export function useFetchDataDetails(dataType, id) {
  const query = `${dataType}/${id}`;
  const { data, isLoading, error } = useQuery('details', () => fetchData(query));

  return {
    mediaData: data || {},
    isLoading,
    error,
  };
}

export function useFetchDataCreditsDetails(dataType, id) {
  const query = `${dataType}/${id}/credits`;
  const { data, isLoading: isLoadingCredits, error: isErrorCredits } = useQuery('credits', () => fetchData(query));
  return {
    creditsData: data || {},
    isLoadingCredits,
    isErrorCredits,
  };
}
