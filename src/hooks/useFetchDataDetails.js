import { useQuery } from 'react-query';
import fetchData from '../queries/index';

export default function useFetchDataDetails(dataType, id) {
  const { data, isLoading, error } = useQuery('details', () => fetchData(dataType, id));

  return {
    mediaData: data || {},
    isLoading,
    error,
  };
}
