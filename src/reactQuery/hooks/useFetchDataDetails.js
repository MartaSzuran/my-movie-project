import { useQuery } from 'react-query';
import { fetchData } from '../queries/index';
import getMainMovieLanguage from '../../formaters/getMainMovieLanguage';

export default function useFetchDataDetails(dataType, id) {
  const query = `${dataType}/${id}`;
  const { data, isLoading } = useQuery('details', () => fetchData(query));
  const customizedData = {
    ...data, mainMovieLanguage: getMainMovieLanguage(data?.spoken_languages),
  };

  return {
    mediaData: customizedData || {},
    isLoading,
  };
}
