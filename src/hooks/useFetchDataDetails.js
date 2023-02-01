import { useQuery } from 'react-query';
import fetchData from '../queries/index';

export default function useFetchDataDetails(dataType, id) {
  const result = useQuery('details', () => fetchData(dataType, id));
  return result;
}
