import { useQuery } from 'react-query';
import { fetchData } from '../queries/index';
import customizeMovieData from '../../formaters/customizeMovieData';

export default function useFetchDataDetails(dataType, id) {
  const query = `${dataType}/${id}`;
  const { data, isLoading } = useQuery('details', () => fetchData(query));
  const customizedData = customizeMovieData(data || {});

  return {
    mediaData: customizedData || {},
    isLoading,
  };
}
