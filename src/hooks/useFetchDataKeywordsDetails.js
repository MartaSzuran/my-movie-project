import { useQuery } from 'react-query';
import { fetchData } from '../queries/index';

export default function useFetchDataKeywordsDetails(dataType, id) {
  const query = `${dataType}/${id}/keywords`;
  const { data, isLoading: isLoadingKeywords } = useQuery('keywordsArray', () => fetchData(query));
  return {
    keywordsData: data || {},
    isLoadingKeywords,
  };
}
