import { useQuery } from 'react-query';
import fetchData from '../queries/index';

export default function useFetch(dataType, id) {
  const { data, status } = useQuery('details', () => fetchData(dataType, id));
  return [data, status];
}
