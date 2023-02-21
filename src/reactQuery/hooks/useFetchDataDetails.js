import { useQuery } from 'react-query';
import { fetchData } from '../queries/index';

export default function useFetchDataDetails(dataType, id) {
  const query = `${dataType}/${id}`;
  const { data, isLoading } = useQuery('details', () => fetchData(query));
  return {
    mediaData: data || {},
    isLoading,
  };
}
