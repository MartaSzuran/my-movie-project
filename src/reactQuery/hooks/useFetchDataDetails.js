import { useQuery } from 'react-query';
import { fetchData } from '../queries/index';
import formatMovieData from '../../formaters/formatMovieData';

export default function useFetchDataDetails(dataType, id) {
  const query = `${dataType}/${id}`;
  const { data, isLoading } = useQuery('details', () => fetchData(query));
  const formatedData = formatMovieData(data);

  return {
    mediaData: formatedData || {},
    isLoading,
  };
}
